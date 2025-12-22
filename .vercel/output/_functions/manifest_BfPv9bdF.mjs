import 'kleur/colors';
import { d as decodeKey } from './chunks/astro/server_6FtSZ7gk.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DTJy1CxN.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/runner/work/Nelson-5553/Nelson-5553/","cacheDir":"file:///home/runner/work/Nelson-5553/Nelson-5553/node_modules/.astro/","outDir":"file:///home/runner/work/Nelson-5553/Nelson-5553/dist/","srcDir":"file:///home/runner/work/Nelson-5553/Nelson-5553/src/","publicDir":"file:///home/runner/work/Nelson-5553/Nelson-5553/public/","buildClientDir":"file:///home/runner/work/Nelson-5553/Nelson-5553/dist/client/","buildServerDir":"file:///home/runner/work/Nelson-5553/Nelson-5553/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.CPvyyiTs.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.CPvyyiTs.js"}],"styles":[{"type":"external","src":"/_astro/Layout.DvB2Xm2x.css"},{"type":"external","src":"/_astro/index.D5mykuCh.css"},{"type":"inline","content":".scrollbar-hide[data-astro-cid-hbhbrytr]::-webkit-scrollbar{display:none}.scrollbar-hide[data-astro-cid-hbhbrytr]{-ms-overflow-style:none;scrollbar-width:none}.tab-active[data-astro-cid-zle4l3gn]{--tw-bg-opacity: 1;background-color:rgb(219 234 254 / var(--tw-bg-opacity));font-weight:600;--tw-text-opacity: 1;color:rgb(29 78 216 / var(--tw-text-opacity))}.tab-active[data-astro-cid-zle4l3gn]:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.tab-active[data-astro-cid-aiz7u4bm]{--tw-bg-opacity: 1;background-color:rgb(219 234 254 / var(--tw-bg-opacity));font-weight:600;--tw-text-opacity: 1;color:rgb(29 78 216 / var(--tw-text-opacity))}.tab-active[data-astro-cid-aiz7u4bm]:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}\n"}],"routeData":{"route":"/en","isIndex":true,"type":"page","pattern":"^\\/en\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/index.astro","pathname":"/en","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.CPvyyiTs.js"}],"styles":[{"type":"external","src":"/_astro/Layout.DvB2Xm2x.css"},{"type":"external","src":"/_astro/index.D5mykuCh.css"},{"type":"inline","content":".scrollbar-hide[data-astro-cid-emxeuyx7]::-webkit-scrollbar{display:none}.scrollbar-hide[data-astro-cid-emxeuyx7]{-ms-overflow-style:none;scrollbar-width:none}.tab-active[data-astro-cid-mqxlrogq]{--tw-bg-opacity: 1;background-color:rgb(219 234 254 / var(--tw-bg-opacity));font-weight:600;--tw-text-opacity: 1;color:rgb(29 78 216 / var(--tw-text-opacity))}.tab-active[data-astro-cid-mqxlrogq]:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.tab-active[data-astro-cid-l66g6bd3]{--tw-bg-opacity: 1;background-color:rgb(219 234 254 / var(--tw-bg-opacity));font-weight:600;--tw-text-opacity: 1;color:rgb(29 78 216 / var(--tw-text-opacity))}.tab-active[data-astro-cid-l66g6bd3]:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}\n"}],"routeData":{"route":"/es","isIndex":true,"type":"page","pattern":"^\\/es\\/?$","segments":[[{"content":"es","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/es/index.astro","pathname":"/es","prerender":false,"fallbackRoutes":[{"route":"/en/es","isIndex":true,"type":"fallback","pattern":"^\\/en\\/es\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}],[{"content":"es","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/es/index.astro","pathname":"/en/es","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.CPvyyiTs.js"}],"styles":[{"type":"external","src":"/_astro/Layout.DvB2Xm2x.css"},{"type":"external","src":"/_astro/index.D5mykuCh.css"},{"type":"inline","content":".maintenance-container[data-astro-cid-j7pv25f6]{min-height:100vh;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#667eea,#764ba2);padding:2rem}.content-wrapper[data-astro-cid-j7pv25f6]{max-width:600px;text-align:center;background:#fffffff2;border-radius:20px;padding:3rem 2rem;box-shadow:0 20px 60px #0000004d;animation:fadeInUp .8s ease-out}.icon-container[data-astro-cid-j7pv25f6]{margin-bottom:2rem}.code-icon[data-astro-cid-j7pv25f6]{width:80px;height:80px;color:#667eea;animation:float 3s ease-in-out infinite}.title[data-astro-cid-j7pv25f6]{font-size:2.5rem;font-weight:700;color:#2d3748;margin-bottom:1.5rem;letter-spacing:-.5px}.message-box[data-astro-cid-j7pv25f6]{margin:2rem 0}.main-message[data-astro-cid-j7pv25f6]{font-size:1.2rem;color:#4a5568;line-height:1.6;margin-bottom:1rem}.sub-message[data-astro-cid-j7pv25f6]{font-size:1rem;color:#718096;line-height:1.6}.status-indicator[data-astro-cid-j7pv25f6]{display:flex;align-items:center;justify-content:center;gap:.75rem;margin-top:2.5rem;padding-top:2rem;border-top:1px solid #e2e8f0}.pulse[data-astro-cid-j7pv25f6]{width:12px;height:12px;background:#48bb78;border-radius:50%;animation:pulse 2s ease-in-out infinite}.status-text[data-astro-cid-j7pv25f6]{font-size:.95rem;color:#48bb78;font-weight:600;text-transform:uppercase;letter-spacing:1px}@keyframes fadeInUp{0%{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}@keyframes float{0%,to{transform:translateY(0)}50%{transform:translateY(-10px)}}@keyframes pulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(1.3)}}@media (max-width: 640px){.title[data-astro-cid-j7pv25f6]{font-size:2rem}.main-message[data-astro-cid-j7pv25f6]{font-size:1.1rem}.content-wrapper[data-astro-cid-j7pv25f6]{padding:2rem 1.5rem}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[{"route":"/en/","isIndex":true,"type":"fallback","pattern":"^\\/en\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/index.astro","pathname":"/en/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/home/runner/work/Nelson-5553/Nelson-5553/src/components/en/Books.astro",{"propagation":"in-tree","containsHead":false}],["/home/runner/work/Nelson-5553/Nelson-5553/src/components/en/EducationBoard.astro",{"propagation":"in-tree","containsHead":false}],["/home/runner/work/Nelson-5553/Nelson-5553/src/pages/en/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/en/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/home/runner/work/Nelson-5553/Nelson-5553/src/components/en/Certified.astro",{"propagation":"in-tree","containsHead":false}],["/home/runner/work/Nelson-5553/Nelson-5553/src/components/en/experience.astro",{"propagation":"in-tree","containsHead":false}],["/home/runner/work/Nelson-5553/Nelson-5553/src/components/en/projects.astro",{"propagation":"in-tree","containsHead":false}],["/home/runner/work/Nelson-5553/Nelson-5553/src/components/es/Books.astro",{"propagation":"in-tree","containsHead":false}],["/home/runner/work/Nelson-5553/Nelson-5553/src/components/es/EducationBoard.astro",{"propagation":"in-tree","containsHead":false}],["/home/runner/work/Nelson-5553/Nelson-5553/src/pages/es/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/es/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/runner/work/Nelson-5553/Nelson-5553/src/components/es/Certified.astro",{"propagation":"in-tree","containsHead":false}],["/home/runner/work/Nelson-5553/Nelson-5553/src/components/es/experience.astro",{"propagation":"in-tree","containsHead":false}],["/home/runner/work/Nelson-5553/Nelson-5553/src/components/es/projects.astro",{"propagation":"in-tree","containsHead":false}],["/home/runner/work/Nelson-5553/Nelson-5553/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/en/index@_@astro":"pages/en.astro.mjs","\u0000@astro-page:src/pages/es/index@_@astro":"pages/es.astro.mjs","\u0000noop-actions":"_noop-actions.mjs","/home/runner/work/Nelson-5553/Nelson-5553/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BUfIkfOI.mjs","/home/runner/work/Nelson-5553/Nelson-5553/.astro/content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","/home/runner/work/Nelson-5553/Nelson-5553/.astro/content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_0l5U3Ubh.mjs","\u0000@astrojs-manifest":"manifest_BfPv9bdF.mjs","/home/runner/work/Nelson-5553/Nelson-5553/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.NAn5vM4p.js","/home/runner/work/Nelson-5553/Nelson-5553/src/components/es/nav.astro?astro&type=script&index=0&lang.ts":"_astro/nav.astro_astro_type_script_index_0_lang.Di2Npjsl.js","/home/runner/work/Nelson-5553/Nelson-5553/src/components/en/nav.astro?astro&type=script&index=0&lang.ts":"_astro/nav.astro_astro_type_script_index_0_lang.CL6khZcu.js","astro:scripts/page.js":"_astro/page.CPvyyiTs.js","/home/runner/work/Nelson-5553/Nelson-5553/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.B05e7ak5.js","/home/runner/work/Nelson-5553/Nelson-5553/src/layouts/Layout.astro?astro&type=script&index=1&lang.ts":"_astro/Layout.astro_astro_type_script_index_1_lang.B6ybkTUv.js","@astrojs/react/client.js":"_astro/client.CeYSYu5a.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/home/runner/work/Nelson-5553/Nelson-5553/src/components/es/nav.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"astro:page-load\",()=>{document.querySelectorAll(\"nav a\").forEach(t=>{t.addEventListener(\"click\",n=>{n.preventDefault();const o=t.getAttribute(\"href\").substring(1),e=document.getElementById(o);e&&e.scrollIntoView({behavior:\"smooth\",block:\"start\"})})})});"],["/home/runner/work/Nelson-5553/Nelson-5553/src/components/en/nav.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"astro:page-load\",()=>{document.querySelectorAll(\"nav a\").forEach(t=>{t.addEventListener(\"click\",n=>{n.preventDefault();const o=t.getAttribute(\"href\").substring(1),e=document.getElementById(o);e&&e.scrollIntoView({behavior:\"smooth\",block:\"start\"})})})});"]],"assets":["/_astro/index.D5mykuCh.css","/favicon.svg","/PDF/HV.pdf","/PDF/rentalmotors.md","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.B05e7ak5.js","/_astro/Layout.DvB2Xm2x.css","/_astro/Layout.astro_astro_type_script_index_0_lang.NAn5vM4p.js","/_astro/Layout.astro_astro_type_script_index_1_lang.B6ybkTUv.js","/_astro/client.CeYSYu5a.js","/_astro/index.U3IA9L3b.js","/_astro/page.CPvyyiTs.js","/img/N5553.gif","/img/N5553.png","/img/NELSON.jpg","/img/calendar-white.webp","/img/calendar.webp","/img/tech1.png","/PDF/certified/copilot.pdf","/PDF/certified/docker.pdf","/PDF/certified/git.pdf","/PDF/certified/laravel-api.pdf","/PDF/certified/laravel.pdf","/PDF/certified/php.pdf","/img/Projectos/G3-GAMES.png","/img/Projectos/Portafolio.jpg","/img/Projectos/gestionepp.png","/img/Projectos/portada-ikarus.png","/img/Projectos/pydocs.png","/img/Projectos/rentalmotors.png","/img/Projectos/technical-test.png","/img/Projectos/tipswall.png","/img/Projectos/todolist.png","/img/books/GitGithub.png","/img/books/javascript.png","/img/books/react.png","/img/experience/GestionSalud.jpg","/img/experience/PlazaInnova.png","/img/certified/copilot.png","/img/certified/docker.png","/img/certified/git.png","/img/certified/immune.png","/img/certified/laravel.png","/img/certified/php.png","/img/technologies/alpine.svg","/img/technologies/astro.svg","/img/technologies/aws_light.svg","/img/technologies/css.svg","/img/technologies/docker.svg","/img/technologies/git.svg","/img/technologies/github-light.svg","/img/technologies/html5.svg","/img/technologies/javascript.svg","/img/technologies/laravel.svg","/img/technologies/linux.svg","/img/technologies/livewire.svg","/img/technologies/mongodb.svg","/img/technologies/mysql.svg","/img/technologies/nextjs.svg","/img/technologies/nodejs.svg","/img/technologies/php.svg","/img/technologies/postgresql.svg","/img/technologies/postman.svg","/img/technologies/powerbi.svg","/img/technologies/python.svg","/img/technologies/swagger.svg","/img/technologies/tailwindcss.svg","/img/Projectos/svg/g3.svg","/img/Projectos/svg/gestionepp.png","/img/Projectos/svg/ikarus.svg","/img/Projectos/svg/python.png","/img/Projectos/svg/rentalmotors.png","/img/Projectos/svg/technical-test.svg","/img/Projectos/svg/tipswall.svg","/img/Projectos/svg/todolist.png","/img/experience/svg/Gestion.svg","/img/experience/svg/tecno.png","/_astro/page.CPvyyiTs.js"],"i18n":{"fallback":{"en":"es"},"fallbackType":"redirect","strategy":"pathname-prefix-other-locales","locales":["es","en"],"defaultLocale":"es","domainLookupTable":{}},"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"cXgX2qDNyxEgMWnWNLV6npWrjqHtTg2WG9B8fF//EGA="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
