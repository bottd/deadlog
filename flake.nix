{
  description = "deadlog.io flake";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-25.05";
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
          inherit (playwright.packages.${system}) playwright-test playwright-driver;
        };
        pkgs = import nixpkgs {
          inherit system;
          overlays = [ overlay ];
        };


        treefmtEval = treefmt-nix.lib.evalModule pkgs {
          projectRootFile = "flake.nix";

          programs = {
            nixpkgs-fmt.enable = true;
          };

          settings.formatter = {
            prettier = {
              command = "npx";
              options = [
                "prettier"
                "--write"
              ];
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
            eslint = {
              command = "${pkgs.nodePackages.eslint}/bin/eslint";
              options = [
                "--fix"
              ];
              includes = [
                "*.js"
                "*.ts"
                "*.jsx"
                "*.tsx"
                "*.svelte"
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
              treefmtEval.config.build.wrapper
              playwright-test
              sqlite
            ];

            shellHook = ''
              export PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1
              export PLAYWRIGHT_BROWSERS_PATH="${pkgs.playwright-driver.browsers}"

              # Make CLIs from NPM available
              export PATH="$PWD/node_modules/.bin:$PATH"

              ${pre-commit-check.shellHook}
            '';
          };
        };
      }
    );
}
