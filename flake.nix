{
  description = "deadlog.io flake";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-26.05";
    flake-utils.url = "github:numtide/flake-utils";
    treefmt-nix.url = "github:numtide/treefmt-nix";
    pre-commit-hooks.url = "github:cachix/pre-commit-hooks.nix";
    playwright.url = "github:pietdevries94/playwright-web-flake";
  };

  outputs =
    { nixpkgs
    , flake-utils
    , treefmt-nix
    , pre-commit-hooks
    , playwright
    , ...
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        overlay = final: prev: {
          inherit (playwright.packages.${system}) playwright-driver;
        };
        pkgs = import nixpkgs {
          inherit system;
          overlays = [ overlay ];
        };

        # chromium only — playwright.config.ts has no firefox/webkit projects
        playwright-browsers = pkgs.playwright-driver.browsers.override {
          withFirefox = false;
          withWebkit = false;
        };

        node-tools-src = pkgs.lib.fileset.toSource {
          root = ./.;
          fileset = pkgs.lib.fileset.unions [
            ./package.json
            ./pnpm-lock.yaml
            ./pnpm-workspace.yaml
            ./app/package.json
            ./lib/changelog/package.json
            ./lib/db/package.json
            ./lib/meta/package.json
            ./lib/scraper/package.json
            ./lib/utils/package.json
          ];
        };

        node-tools = pkgs.stdenvNoCC.mkDerivation (finalAttrs: {
          pname = "deadlog-node-tools";
          version = "1";
          src = node-tools-src;

          pnpmDeps = pkgs.fetchPnpmDeps {
            inherit (finalAttrs) pname version src;
            pnpm = pkgs.pnpm;
            fetcherVersion = 3;
            hash = "sha256-n+fkydKorJr4HvmXPuwf6HT6YBNVSsnmorjtTkqmR6o=";
          };

          nativeBuildInputs = with pkgs; [
            nodejs_24
            pnpm
            pnpmConfigHook
          ];

          dontBuild = true;

          installPhase = ''
            runHook preInstall
            mkdir -p "$out/lib"
            cp -r . "$out/lib/deadlog"
            runHook postInstall
          '';
        });

        prettier = pkgs.writeShellApplication {
          name = "deadlog-prettier";
          text = ''
            project_root=$PWD
            files=()
            for file in "$@"; do
              files+=("$project_root/$file")
            done

            cd ${node-tools}/lib/deadlog
            ${pkgs.nodejs_24}/bin/node \
              ${node-tools}/lib/deadlog/node_modules/prettier/bin/prettier.cjs \
              --config "$project_root/.prettierrc" \
              --ignore-path "$project_root/.prettierignore" \
              --write \
              "''${files[@]}"
          '';
        };

        treefmtEval = treefmt-nix.lib.evalModule pkgs {
          projectRootFile = "flake.nix";

          programs = {
            nixpkgs-fmt.enable = true;
          };

          settings.formatter = {
            prettier = {
              command = "${prettier}/bin/deadlog-prettier";
              includes = [
                "*.js"
                "*.ts"
                "*.jsx"
                "*.tsx"
                "*.svelte"
                "*.css"
                "*.html"
                "*.json"
                "*.md"
                "*.yml"
                "*.yaml"
              ];
            };
          };
        };

        pre-commit-check = pre-commit-hooks.lib.${system}.run {
          src = ./.;
          hooks = {
            treefmt = {
              enable = true;
              package = treefmtEval.config.build.wrapper;
            };
          };
        };
      in
      {
        formatter = treefmtEval.config.build.wrapper;

        checks = {
          formatting = treefmtEval.config.build.check ./.;
          pre-commit-check = pre-commit-check;
        };

        devShells = {
          default = pkgs.mkShell {
            name = "deadlog dev shell";

            packages = with pkgs; [
              nodejs_24
              pnpm
              treefmtEval.config.build.wrapper
              sqlite
            ];

            shellHook = ''
              export PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1
              export PLAYWRIGHT_BROWSERS_PATH="${playwright-browsers}"

              # Make CLIs from NPM available
              export PATH="$PWD/node_modules/.bin:$PATH"

              ${pre-commit-check.shellHook}
            '';
          };
        };
      }
    );
}
