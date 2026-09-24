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

        treefmtEval = treefmt-nix.lib.evalModule pkgs {
          projectRootFile = "flake.nix";

          programs = {
            nixpkgs-fmt.enable = true;
            rustfmt.enable = true;
            prettier = {
              enable = true;
              includes = [ "*.js" "*.ts" "*.css" "*.json" "*.md" "*.yml" "*.yaml" ];
              # Askama templates are whitespace-sensitive; Prettier's HTML printer
              # breaks their tags.
              excludes = [ "crates/*" "target/*" "dist/*" "app/static/*" ];
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
              cargo
              rustc
              rustfmt
              clippy
              rust-analyzer
              # Only for the Playwright suite in e2e/.
              nodejs_24
              treefmtEval.config.build.wrapper
              sqlite
            ];

            shellHook = ''
              export PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1
              export PLAYWRIGHT_BROWSERS_PATH="${playwright-browsers}"

              export PATH="$PWD/e2e/node_modules/.bin:$PATH"

              ${pre-commit-check.shellHook}
            '';
          };
        };
      }
    );
}
