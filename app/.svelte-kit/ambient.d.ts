// this file is generated — do not edit it

/// <reference types="@sveltejs/kit" />

/**
 * This module provides access to environment variables that are injected _statically_ into your bundle at build time and are limited to _private_ access.
 *
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 *
 * Static environment variables are [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env` at build time and then statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 *
 * **_Private_ access:**
 *
 * - This module cannot be imported into client-side code
 * - This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured)
 *
 * For example, given the following build time environment:
 *
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://site.com
 * ```
 *
 * With the default `publicPrefix` and `privatePrefix`:
 *
 * ```ts
 * import { ENVIRONMENT, PUBLIC_BASE_URL } from '$env/static/private';
 *
 * console.log(ENVIRONMENT); // => "production"
 * console.log(PUBLIC_BASE_URL); // => throws error during build
 * ```
 *
 * The above values will be the same _even if_ different values for `ENVIRONMENT` or `PUBLIC_BASE_URL` are set at runtime, as they are statically replaced in your code with their build time values.
 */
declare module '$env/static/private' {
	export const SVELTEKIT_FORK: string;
	export const DATABASE_URL: string;
	export const NODE_ENV: string;
	export const TERM_PROGRAM: string;
	export const nativeBuildInputs: string;
	export const OLDPWD: string;
	export const RANLIB: string;
	export const npm_node_execpath: string;
	export const __structuredAttrs: string;
	export const QT_PLUGIN_PATH: string;
	export const DIRENV_WATCHES: string;
	export const depsBuildTargetPropagated: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const ZELLIJ: string;
	export const npm_config_node_gyp: string;
	export const propagatedBuildInputs: string;
	export const PATH: string;
	export const BROWSER: string;
	export const OBJDUMP: string;
	export const XDG_DATA_DIRS: string;
	export const XCURSOR_THEME: string;
	export const GREETD_SOCK: string;
	export const npm_package_json: string;
	export const depsBuildTarget: string;
	export const NODE_PATH: string;
	export const XDG_RUNTIME_DIR: string;
	export const PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD: string;
	export const DISABLE_AUTOUPDATER: string;
	export const LD_LIBRARY_PATH: string;
	export const dontAddDisableDepTrack: string;
	export const ATUIN_HISTORY_ID: string;
	export const npm_execpath: string;
	export const TERMINFO_DIRS: string;
	export const QML2_IMPORT_PATH: string;
	export const LESSKEYIN_SYSTEM: string;
	export const MANAGERPIDFDID: string;
	export const LOCALE_ARCHIVE: string;
	export const preferLocalBuild: string;
	export const XDG_SESSION_ID: string;
	export const buildInputs: string;
	export const XDG_VTNR: string;
	export const QTWEBKIT_PLUGIN_PATH: string;
	export const PAGER: string;
	export const NM: string;
	export const SHLVL: string;
	export const STRIP: string;
	export const npm_lifecycle_event: string;
	export const DISPLAY: string;
	export const AR: string;
	export const XDG_SESSION_TYPE: string;
	export const GTK2_RC_FILES: string;
	export const ZELLIJ_PANE_ID: string;
	export const CLAUDE_CODE_EXECPATH: string;
	export const SSH_AUTH_SOCK: string;
	export const __HM_ZSH_SESS_VARS_SOURCED: string;
	export const NIX_LD_LIBRARY_PATH: string;
	export const SSH_ASKPASS: string;
	export const npm_package_version: string;
	export const NIX_CFLAGS_COMPILE: string;
	export const phases: string;
	export const EDITOR: string;
	export const NIX_CC_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu: string;
	export const npm_package_name: string;
	export const SUDO_EDITOR: string;
	export const XCURSOR_PATH: string;
	export const DIRENV_FILE: string;
	export const CONFIG_SHELL: string;
	export const depsTargetTarget: string;
	export const XDG_CONFIG_HOME: string;
	export const builder: string;
	export const NIX_BUILD_CORES: string;
	export const PWD: string;
	export const name: string;
	export const LOCALE_ARCHIVE_2_27: string;
	export const ZELLIJ_SESSION_NAME: string;
	export const configureFlags: string;
	export const SYSTEMD_EXEC_PID: string;
	export const NIX_ENFORCE_NO_NATIVE: string;
	export const VISUAL: string;
	export const TERMINFO: string;
	export const CC: string;
	export const CLAUDE_EFFORT: string;
	export const NIX_PROFILES: string;
	export const NO_AT_BRIDGE: string;
	export const NIX_LDFLAGS: string;
	export const LOGNAME: string;
	export const MEMORY_PRESSURE_WATCH: string;
	export const SHELL: string;
	export const COREPACK_ENABLE_AUTO_PIN: string;
	export const GDK_PIXBUF_MODULE_FILE: string;
	export const __NIXOS_SET_ENVIRONMENT_DONE: string;
	export const CLAUDE_CODE_MESSAGING_SOCKET: string;
	export const QT_QPA_PLATFORMTHEME: string;
	export const depsHostHost: string;
	export const GHOSTTY_RESOURCES_DIR: string;
	export const __ETC_PROFILE_DONE: string;
	export const mesonFlags: string;
	export const depsBuildBuildPropagated: string;
	export const npm_command: string;
	export const SYSTEMD_XKB_DIRECTORY: string;
	export const shell: string;
	export const COLORTERM: string;
	export const NIXPKGS_CONFIG: string;
	export const AI_AGENT: string;
	export const shellHook: string;
	export const XDG_CONFIG_DIRS: string;
	export const patches: string;
	export const NODE: string;
	export const TERM: string;
	export const CLAUDE_CODE_CHILD_SESSION: string;
	export const CLAUDE_CODE_SESSION_ID: string;
	export const ATUIN_SHLVL: string;
	export const DIRENV_DIFF: string;
	export const INIT_CWD: string;
	export const XDG_BIN_HOME: string;
	export const outputs: string;
	export const __HM_SESS_VARS_SOURCED: string;
	export const NIX_PATH: string;
	export const GI_TYPELIB_PATH: string;
	export const depsHostHostPropagated: string;
	export const DISABLE_INSTALLATION_CHECKS: string;
	export const DIRENV_DIR: string;
	export const GIT_EDITOR: string;
	export const STRINGS: string;
	export const XDG_DATA_HOME: string;
	export const GHOSTTY_BIN_DIR: string;
	export const stdenv: string;
	export const ATUIN_TMUX_POPUP: string;
	export const STARSHIP_SHELL: string;
	export const CLAUDE_CODE_MESSAGING_TOKEN: string;
	export const NIX_CC: string;
	export const system: string;
	export const NoDefaultCurrentDirectoryInExePath: string;
	export const HOST_PATH: string;
	export const USE_BUILTIN_RIPGREP: string;
	export const OBJCOPY: string;
	export const QT_STYLE_OVERRIDE: string;
	export const IN_NIX_SHELL: string;
	export const GHOSTTY_SHELL_FEATURES: string;
	export const CLAUDECODE: string;
	export const STARSHIP_CONFIG: string;
	export const NIX_XDG_DESKTOP_PORTAL_DIR: string;
	export const LD: string;
	export const NIX_HARDENING_ENABLE: string;
	export const NIX_BINTOOLS: string;
	export const NIX_HOST: string;
	export const CLAUDE_CODE_SESSION_ATTENDED: string;
	export const NIX_USER_PROFILE_DIR: string;
	export const LANG: string;
	export const CXX: string;
	export const doCheck: string;
	export const GST_PLUGIN_SYSTEM_PATH_1_0: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const NIRI_SOCKET: string;
	export const depsTargetTargetPropagated: string;
	export const CLAUDE_CODE_ENTRYPOINT: string;
	export const ATUIN_SESSION: string;
	export const cmakeFlags: string;
	export const MEMORY_PRESSURE_WRITE: string;
	export const ENABLE_LSP_TOOL: string;
	export const pnpm_config_verify_deps_before_run: string;
	export const XDG_SEAT: string;
	export const GIO_EXTRA_MODULES: string;
	export const USER: string;
	export const doInstallCheck: string;
	export const LS_COLORS: string;
	export const STARSHIP_SESSION_KEY: string;
	export const PW_EXPERIMENTAL_SERVICE_WORKER_NETWORK_EVENTS: string;
	export const PLAYWRIGHT_BROWSERS_PATH: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const SOURCE_DATE_EPOCH: string;
	export const JAVA_HOME: string;
	export const buildPhase: string;
	export const MANAGERPID: string;
	export const strictDeps: string;
	export const CLAUDE_PID: string;
	export const LUA_INCDIR: string;
	export const AS: string;
	export const READELF: string;
	export const NIX_BINTOOLS_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu: string;
	export const depsBuildBuild: string;
	export const NIX_APPEARANCE: string;
	export const npm_config_user_agent: string;
	export const XDG_CACHE_HOME: string;
	export const GTK_A11Y: string;
	export const INFOPATH: string;
	export const XCURSOR_SIZE: string;
	export const npm_lifecycle_script: string;
	export const TMPDIR: string;
	export const NPM_CONFIG_PREFIX: string;
	export const LIBEXEC_PATH: string;
	export const GTK_PATH: string;
	export const NIX_STORE: string;
	export const SIZE: string;
	export const TERM_PROGRAM_VERSION: string;
	export const HOME: string;
	export const propagatedNativeBuildInputs: string;
	export const ZDOTDIR: string;
	export const XDG_STATE_HOME: string;
	export const CLAUDE_TMPDIR: string;
	export const WAYLAND_DISPLAY: string;
	export const TZDIR: string;
	export const out: string;
	export const CUPS_DATADIR: string;
	export const NIX_LD: string;
}

/**
 * This module provides access to environment variables that are injected _statically_ into your bundle at build time and are _publicly_ accessible.
 *
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 *
 * Static environment variables are [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env` at build time and then statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 *
 * **_Public_ access:**
 *
 * - This module _can_ be imported into client-side code
 * - **Only** variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`) are included
 *
 * For example, given the following build time environment:
 *
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://site.com
 * ```
 *
 * With the default `publicPrefix` and `privatePrefix`:
 *
 * ```ts
 * import { ENVIRONMENT, PUBLIC_BASE_URL } from '$env/static/public';
 *
 * console.log(ENVIRONMENT); // => throws error during build
 * console.log(PUBLIC_BASE_URL); // => "http://site.com"
 * ```
 *
 * The above values will be the same _even if_ different values for `ENVIRONMENT` or `PUBLIC_BASE_URL` are set at runtime, as they are statically replaced in your code with their build time values.
 */
declare module '$env/static/public' {
	export const PUBLIC_COUNTERSCALE_REPORTER_URL: string;
	export const PUBLIC_COUNTERSCALE_SITE_ID: string;
}

/**
 * This module provides access to environment variables set _dynamically_ at runtime and that are limited to _private_ access.
 *
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 *
 * Dynamic environment variables are defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`.
 *
 * **_Private_ access:**
 *
 * - This module cannot be imported into client-side code
 * - This module includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured)
 *
 * > [!NOTE] In `dev`, `$env/dynamic` includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 *
 * > [!NOTE] To get correct types, environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * >
 * > ```env
 * > MY_FEATURE_FLAG=
 * > ```
 * >
 * > You can override `.env` values from the command line like so:
 * >
 * > ```sh
 * > MY_FEATURE_FLAG="enabled" npm run dev
 * > ```
 *
 * For example, given the following runtime environment:
 *
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://site.com
 * ```
 *
 * With the default `publicPrefix` and `privatePrefix`:
 *
 * ```ts
 * import { env } from '$env/dynamic/private';
 *
 * console.log(env.ENVIRONMENT); // => "production"
 * console.log(env.PUBLIC_BASE_URL); // => undefined
 * ```
 */
declare module '$env/dynamic/private' {
	export const env: {
		SVELTEKIT_FORK: string;
		DATABASE_URL: string;
		NODE_ENV: string;
		TERM_PROGRAM: string;
		nativeBuildInputs: string;
		OLDPWD: string;
		RANLIB: string;
		npm_node_execpath: string;
		__structuredAttrs: string;
		QT_PLUGIN_PATH: string;
		DIRENV_WATCHES: string;
		depsBuildTargetPropagated: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		ZELLIJ: string;
		npm_config_node_gyp: string;
		propagatedBuildInputs: string;
		PATH: string;
		BROWSER: string;
		OBJDUMP: string;
		XDG_DATA_DIRS: string;
		XCURSOR_THEME: string;
		GREETD_SOCK: string;
		npm_package_json: string;
		depsBuildTarget: string;
		NODE_PATH: string;
		XDG_RUNTIME_DIR: string;
		PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD: string;
		DISABLE_AUTOUPDATER: string;
		LD_LIBRARY_PATH: string;
		dontAddDisableDepTrack: string;
		ATUIN_HISTORY_ID: string;
		npm_execpath: string;
		TERMINFO_DIRS: string;
		QML2_IMPORT_PATH: string;
		LESSKEYIN_SYSTEM: string;
		MANAGERPIDFDID: string;
		LOCALE_ARCHIVE: string;
		preferLocalBuild: string;
		XDG_SESSION_ID: string;
		buildInputs: string;
		XDG_VTNR: string;
		QTWEBKIT_PLUGIN_PATH: string;
		PAGER: string;
		NM: string;
		SHLVL: string;
		STRIP: string;
		npm_lifecycle_event: string;
		DISPLAY: string;
		AR: string;
		XDG_SESSION_TYPE: string;
		GTK2_RC_FILES: string;
		ZELLIJ_PANE_ID: string;
		CLAUDE_CODE_EXECPATH: string;
		SSH_AUTH_SOCK: string;
		__HM_ZSH_SESS_VARS_SOURCED: string;
		NIX_LD_LIBRARY_PATH: string;
		SSH_ASKPASS: string;
		npm_package_version: string;
		NIX_CFLAGS_COMPILE: string;
		phases: string;
		EDITOR: string;
		NIX_CC_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu: string;
		npm_package_name: string;
		SUDO_EDITOR: string;
		XCURSOR_PATH: string;
		DIRENV_FILE: string;
		CONFIG_SHELL: string;
		depsTargetTarget: string;
		XDG_CONFIG_HOME: string;
		builder: string;
		NIX_BUILD_CORES: string;
		PWD: string;
		name: string;
		LOCALE_ARCHIVE_2_27: string;
		ZELLIJ_SESSION_NAME: string;
		configureFlags: string;
		SYSTEMD_EXEC_PID: string;
		NIX_ENFORCE_NO_NATIVE: string;
		VISUAL: string;
		TERMINFO: string;
		CC: string;
		CLAUDE_EFFORT: string;
		NIX_PROFILES: string;
		NO_AT_BRIDGE: string;
		NIX_LDFLAGS: string;
		LOGNAME: string;
		MEMORY_PRESSURE_WATCH: string;
		SHELL: string;
		COREPACK_ENABLE_AUTO_PIN: string;
		GDK_PIXBUF_MODULE_FILE: string;
		__NIXOS_SET_ENVIRONMENT_DONE: string;
		CLAUDE_CODE_MESSAGING_SOCKET: string;
		QT_QPA_PLATFORMTHEME: string;
		depsHostHost: string;
		GHOSTTY_RESOURCES_DIR: string;
		__ETC_PROFILE_DONE: string;
		mesonFlags: string;
		depsBuildBuildPropagated: string;
		npm_command: string;
		SYSTEMD_XKB_DIRECTORY: string;
		shell: string;
		COLORTERM: string;
		NIXPKGS_CONFIG: string;
		AI_AGENT: string;
		shellHook: string;
		XDG_CONFIG_DIRS: string;
		patches: string;
		NODE: string;
		TERM: string;
		CLAUDE_CODE_CHILD_SESSION: string;
		CLAUDE_CODE_SESSION_ID: string;
		ATUIN_SHLVL: string;
		DIRENV_DIFF: string;
		INIT_CWD: string;
		XDG_BIN_HOME: string;
		outputs: string;
		__HM_SESS_VARS_SOURCED: string;
		NIX_PATH: string;
		GI_TYPELIB_PATH: string;
		depsHostHostPropagated: string;
		DISABLE_INSTALLATION_CHECKS: string;
		DIRENV_DIR: string;
		GIT_EDITOR: string;
		STRINGS: string;
		XDG_DATA_HOME: string;
		GHOSTTY_BIN_DIR: string;
		stdenv: string;
		ATUIN_TMUX_POPUP: string;
		STARSHIP_SHELL: string;
		CLAUDE_CODE_MESSAGING_TOKEN: string;
		NIX_CC: string;
		system: string;
		NoDefaultCurrentDirectoryInExePath: string;
		HOST_PATH: string;
		USE_BUILTIN_RIPGREP: string;
		OBJCOPY: string;
		QT_STYLE_OVERRIDE: string;
		IN_NIX_SHELL: string;
		GHOSTTY_SHELL_FEATURES: string;
		CLAUDECODE: string;
		STARSHIP_CONFIG: string;
		NIX_XDG_DESKTOP_PORTAL_DIR: string;
		LD: string;
		NIX_HARDENING_ENABLE: string;
		NIX_BINTOOLS: string;
		NIX_HOST: string;
		CLAUDE_CODE_SESSION_ATTENDED: string;
		NIX_USER_PROFILE_DIR: string;
		LANG: string;
		CXX: string;
		doCheck: string;
		GST_PLUGIN_SYSTEM_PATH_1_0: string;
		XDG_CURRENT_DESKTOP: string;
		NIRI_SOCKET: string;
		depsTargetTargetPropagated: string;
		CLAUDE_CODE_ENTRYPOINT: string;
		ATUIN_SESSION: string;
		cmakeFlags: string;
		MEMORY_PRESSURE_WRITE: string;
		ENABLE_LSP_TOOL: string;
		pnpm_config_verify_deps_before_run: string;
		XDG_SEAT: string;
		GIO_EXTRA_MODULES: string;
		USER: string;
		doInstallCheck: string;
		LS_COLORS: string;
		STARSHIP_SESSION_KEY: string;
		PW_EXPERIMENTAL_SERVICE_WORKER_NETWORK_EVENTS: string;
		PLAYWRIGHT_BROWSERS_PATH: string;
		PNPM_SCRIPT_SRC_DIR: string;
		SOURCE_DATE_EPOCH: string;
		JAVA_HOME: string;
		buildPhase: string;
		MANAGERPID: string;
		strictDeps: string;
		CLAUDE_PID: string;
		LUA_INCDIR: string;
		AS: string;
		READELF: string;
		NIX_BINTOOLS_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu: string;
		depsBuildBuild: string;
		NIX_APPEARANCE: string;
		npm_config_user_agent: string;
		XDG_CACHE_HOME: string;
		GTK_A11Y: string;
		INFOPATH: string;
		XCURSOR_SIZE: string;
		npm_lifecycle_script: string;
		TMPDIR: string;
		NPM_CONFIG_PREFIX: string;
		LIBEXEC_PATH: string;
		GTK_PATH: string;
		NIX_STORE: string;
		SIZE: string;
		TERM_PROGRAM_VERSION: string;
		HOME: string;
		propagatedNativeBuildInputs: string;
		ZDOTDIR: string;
		XDG_STATE_HOME: string;
		CLAUDE_TMPDIR: string;
		WAYLAND_DISPLAY: string;
		TZDIR: string;
		out: string;
		CUPS_DATADIR: string;
		NIX_LD: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	};
}

/**
 * This module provides access to environment variables set _dynamically_ at runtime and that are _publicly_ accessible.
 *
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 *
 * Dynamic environment variables are defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`.
 *
 * **_Public_ access:**
 *
 * - This module _can_ be imported into client-side code
 * - **Only** variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`) are included
 *
 * > [!NOTE] In `dev`, `$env/dynamic` includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 *
 * > [!NOTE] To get correct types, environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * >
 * > ```env
 * > MY_FEATURE_FLAG=
 * > ```
 * >
 * > You can override `.env` values from the command line like so:
 * >
 * > ```sh
 * > MY_FEATURE_FLAG="enabled" npm run dev
 * > ```
 *
 * For example, given the following runtime environment:
 *
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://example.com
 * ```
 *
 * With the default `publicPrefix` and `privatePrefix`:
 *
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.ENVIRONMENT); // => undefined, not public
 * console.log(env.PUBLIC_BASE_URL); // => "http://example.com"
 * ```
 *
 * ```
 *
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		PUBLIC_COUNTERSCALE_REPORTER_URL: string;
		PUBLIC_COUNTERSCALE_SITE_ID: string;
		[key: `PUBLIC_${string}`]: string | undefined;
	};
}
