import { c as createComponent, l as createAstro, n as addAttribute, o as renderScript, a as renderTemplate, m as maybeRenderHead, r as renderComponent, p as renderSlot, q as renderHead, s as defineScriptVars } from './astro/server_6FtSZ7gk.mjs';
import 'kleur/colors';
import { t as toRoutingStrategy, g as getLocaleRelativeUrl } from './utils_C1lWKHuS.mjs';
import 'clsx';
/* empty css                         */

var define_ASTRO_INTERNAL_I18N_CONFIG_default = { format: "directory", trailingSlash: "ignore", i18n: { defaultLocale: "es", locales: ["es", "en"], routing: { } }};
const { trailingSlash, format, i18n} = (
  // @ts-expect-error
  define_ASTRO_INTERNAL_I18N_CONFIG_default
);
const { defaultLocale, locales, domains, routing } = i18n;
const base = "/";
let strategy = toRoutingStrategy(routing, domains);
const getRelativeLocaleUrl = (locale, path, options) => getLocaleRelativeUrl({
  locale,
  path,
  base,
  trailingSlash,
  format,
  defaultLocale,
  locales,
  strategy,
  ...options
});

const $$Astro$3 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/home/runner/work/Nelson-5553/Nelson-5553/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/runner/work/Nelson-5553/Nelson-5553/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro$2 = createAstro();
const $$NavMenu$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$NavMenu$1;
  const { Name, Ruta } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="group p-1 rounded-lg"> <a${addAttribute(Ruta, "href")} class="text-sm font-semibold leading-6 relative inline-block transition-colors duration-300 ease-in-out
            group-hover:text-sky-400 no-underline" data-astro-prefetch="tap"> ${Name} <span class="absolute bottom-0 left-0 right-0 mx-auto h-0.5 w-full bg-sky-400 origin-center scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span> </a> </div>`;
}, "/home/runner/work/Nelson-5553/Nelson-5553/src/components/es/NavMenu.astro", void 0);

const $$Nav$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="absolute inset-x-0 top-8 z-50"> <div class="flex justify-center"> <nav class="fixed flex items-center justify-center backdrop-blur-md shadow-xl h-auto w-auto rounded-full mt-6 py-1 px-4 lg:px-8 space-x-0.5 lg:space-x-4 z-50" aria-label="Global"> <div class="flex"> ${renderComponent($$result, "NavMenu", $$NavMenu$1, { "Ruta": "#Inicio", "Name": "Inicio" })} ${renderComponent($$result, "NavMenu", $$NavMenu$1, { "Ruta": "#proyecto", "Name": "Proyectos" })} ${renderComponent($$result, "NavMenu", $$NavMenu$1, { "Ruta": "#habilidades", "Name": "Habilidades" })} ${renderComponent($$result, "NavMenu", $$NavMenu$1, { "Ruta": "#estudios", "Name": "Estudios" })} ${renderComponent($$result, "NavMenu", $$NavMenu$1, { "Ruta": "#Experiencia", "Name": "Experiencia" })} </div> </nav> <!-- Mobile menu --> </div></header> ${renderScript($$result, "/home/runner/work/Nelson-5553/Nelson-5553/src/components/es/nav.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/runner/work/Nelson-5553/Nelson-5553/src/components/es/nav.astro", void 0);

const $$Astro$1 = createAstro();
const $$NavMenu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$NavMenu;
  const { Name, Ruta } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="group p-1 rounded-lg"> <a${addAttribute(Ruta, "href")} class="text-sm font-semibold leading-6 relative inline-block transition-colors duration-300 ease-in-out
            group-hover:text-sky-400 no-underline" data-astro-prefetch="tap"> ${Name} <span class="absolute bottom-0 left-0 right-0 mx-auto h-0.5 w-full bg-sky-400 origin-center scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span> </a> </div>`;
}, "/home/runner/work/Nelson-5553/Nelson-5553/src/components/en/NavMenu.astro", void 0);

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="absolute inset-x-0 top-8 z-50"> <div class="flex justify-center"> <nav class="fixed flex items-center justify-center backdrop-blur-md shadow-xl h-auto w-auto rounded-full mt-6 py-1 px-4 lg:px-8 space-x-0.5 lg:space-x-4 z-50" aria-label="Global"> <div class="flex"> ${renderComponent($$result, "NavMenu", $$NavMenu, { "Ruta": "#Inicio", "Name": "Home" })} ${renderComponent($$result, "NavMenu", $$NavMenu, { "Ruta": "#proyecto", "Name": "Projects" })} ${renderComponent($$result, "NavMenu", $$NavMenu, { "Ruta": "#habilidades", "Name": "Skills" })} ${renderComponent($$result, "NavMenu", $$NavMenu, { "Ruta": "#estudios", "Name": "Studies" })} ${renderComponent($$result, "NavMenu", $$NavMenu, { "Ruta": "#Experiencia", "Name": "Experience" })} </div> </nav> <!-- Mobile menu --> </div></header> ${renderScript($$result, "/home/runner/work/Nelson-5553/Nelson-5553/src/components/en/nav.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/runner/work/Nelson-5553/Nelson-5553/src/components/en/nav.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, lang = "es" } = Astro2.props;
  const Nav = lang === "en" ? $$Nav : $$Nav$1;
  let currentPath = Astro2.url.pathname;
  console.log("Original path:", currentPath);
  if (currentPath.startsWith("/en/")) {
    currentPath = currentPath.replace("/en", "");
  } else if (currentPath.startsWith("/es/")) {
    currentPath = currentPath.replace("/es", "");
  }
  if (!currentPath || currentPath === "") {
    currentPath = "/";
  }
  console.log("Cleaned path:", currentPath);
  const esUrl = getRelativeLocaleUrl("es", currentPath === "/" ? "" : currentPath);
  const enUrl = getRelativeLocaleUrl("en", currentPath === "/" ? "" : currentPath);
  console.log("ES URL:", esUrl);
  console.log("EN URL:", enUrl);
  return renderTemplate(_a || (_a = __template(["<html", ' class="overflow-x-hidden"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link class="rounded-full" rel="icon" href="/img/N5553.png"><meta name="generator"', "><title>", "</title><!-- Scripts externos -->", "", '<link href="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.css" rel="stylesheet">', "<!-- Script del tema --><script>\n      function applyTheme() {\n        const rootElement = document.documentElement;\n        const currentTheme = localStorage.getItem('theme');\n\n        if (!currentTheme) {\n          rootElement.classList.add('dark');\n          localStorage.setItem('theme', 'dark');\n        } else if (currentTheme === 'dark') {\n          rootElement.classList.add('dark');\n        } else {\n          rootElement.classList.remove('dark');\n        }\n\n        updateThemeIcon();\n      }\n\n      function updateThemeIcon() {\n        const toggleButton = document.getElementById('theme-toggle');\n        const isDarkMode = document.documentElement.classList.contains('dark');\n\n        if (toggleButton) {\n          const sunIcon = toggleButton.querySelector('svg:nth-child(1)');\n          const moonIcon = toggleButton.querySelector('svg:nth-child(2)');\n\n          if (isDarkMode) {\n            if (sunIcon) sunIcon.style.display = 'block';\n            if (moonIcon) moonIcon.style.display = 'none';\n          } else {\n            if (sunIcon) sunIcon.style.display = 'none';\n            if (moonIcon) moonIcon.style.display = 'block';\n          }\n        }\n      }\n\n      function setupThemeToggle() {\n        const toggleButton = document.getElementById('theme-toggle');\n        const rootElement = document.documentElement;\n\n        if (toggleButton) {\n          toggleButton.addEventListener('click', () => {\n            if (rootElement.classList.contains('dark')) {\n              rootElement.classList.remove('dark');\n              localStorage.setItem('theme', 'light');\n            } else {\n              rootElement.classList.add('dark');\n              localStorage.setItem('theme', 'dark');\n            }\n            updateThemeIcon();\n          });\n        }\n      }\n\n      // Configuraci\xF3n inicial del tema\n      applyTheme();\n      setupThemeToggle();\n\n      // Manejar persistencia del tema durante transiciones\n      document.addEventListener('astro:page-load', () => {\n        applyTheme();\n        setupThemeToggle();\n      });\n    <\/script><!-- Script mejorado para el cambio de idioma --><script>(function(){", "\n      function setupLanguageSelector() {\n        const languageSelect = document.getElementById('language-select');\n        \n        if (languageSelect) {\n          // Establecer el valor correcto del select\n          languageSelect.value = lang;\n          \n          languageSelect.addEventListener('change', (e) => {\n            const selectedLang = e.target.value;\n            \n            console.log('=== Language Change Debug ===');\n            console.log('Current lang:', lang);\n            console.log('Selected lang:', selectedLang);\n            console.log('ES URL:', esUrl);\n            console.log('EN URL:', enUrl);\n            \n            // Verificar que no estamos cambiando al mismo idioma\n            if (selectedLang === lang) {\n              console.log('Same language selected, no change needed');\n              return;\n            }\n            \n            let targetUrl;\n            if (selectedLang === 'es') {\n              targetUrl = esUrl;\n            } else if (selectedLang === 'en') {\n              targetUrl = enUrl;\n            }\n            \n            console.log('Target URL:', targetUrl);\n            \n            if (targetUrl) {\n              window.location.href = targetUrl;\n            } else {\n              console.error('No target URL generated');\n            }\n          });\n        } else {\n          console.error('Language select element not found');\n        }\n      }\n\n      // Configurar selector al cargar la p\xE1gina\n      document.addEventListener('DOMContentLoaded', setupLanguageSelector);\n      \n      // Reconfigurar en transiciones de Astro\n      document.addEventListener('astro:page-load', setupLanguageSelector);\n    })();<\/script>", '</head> <body class="bg-white dark:bg-neutral-950 h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] bg-fixed min-h-screen transition-colors"> <div class="absolute inset-0 -z-10 h-full w-full"></div> <main class="relative flex justify-center min-h-screen px-16"> <div class="absolute top-4 md:right-8 flex justify-center items-center space-x-4"> <!-- Bot\xF3n para cambio de tema --> <button id="theme-toggle" class="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors" aria-label="Toggle theme"> <!-- Icono del sol (mostrado en modo oscuro) --> <svg class="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path> </svg> <!-- Icono de la luna (mostrado en modo claro) --> <svg class="w-5 h-5 text-slate-400" fill="currentColor" viewBox="0 0 20 20"> <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path> </svg> </button> <!-- Selector de idioma mejorado --> <div class="flex items-center space-x-2"> <label for="language-select" class="sr-only"> ', ' </label> <select id="language-select" class="border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"', '> <option value="es">\u{1F1EA}\u{1F1F8} Espa\xF1ol</option> <option value="en">\u{1F1FA}\u{1F1F8} English</option> </select> </div> </div> <div class="flex flex-col justify-start items-start mt-32 min-h-screen max-w-7xl prose dark:prose-invert"> <div class="w-full"> <!-- Header con navegaci\xF3n --> <header class="flex items-center justify-between mb-8 not-prose"> ', " </header> <!-- Contenido de la p\xE1gina --> ", " </div> </div> </main> </body></html>"])), addAttribute(lang, "lang"), addAttribute(Astro2.generator, "content"), title, renderScript($$result, "/home/runner/work/Nelson-5553/Nelson-5553/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts"), renderScript($$result, "/home/runner/work/Nelson-5553/Nelson-5553/src/layouts/Layout.astro?astro&type=script&index=1&lang.ts"), renderComponent($$result, "ClientRouter", $$ClientRouter, {}), defineScriptVars({ esUrl, enUrl, lang }), renderHead(), lang === "es" ? "Seleccionar idioma" : "Select language", addAttribute(lang, "value"), renderComponent($$result, "Nav", Nav, { "lang": lang }), renderSlot($$result, $$slots["default"]));
}, "/home/runner/work/Nelson-5553/Nelson-5553/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
