import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_Bi67WWaz.mjs';
import 'es-module-lexer';
import { i as decodeKey } from './chunks/astro/server_DrnHGrxP.mjs';
import 'clsx';

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

const manifest = deserializeManifest({"hrefRoot":"file:///C:/PROJECTOS/Nelson-5553/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.CPvyyiTs.js"}],"styles":[{"type":"inline","content":"[data-astro-image]{width:100%;height:auto;-o-object-fit:var(--fit);object-fit:var(--fit);-o-object-position:var(--pos);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"}],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.CPvyyiTs.js"}],"styles":[{"type":"external","src":"/_astro/Layout.DvB2Xm2x.css"},{"type":"external","src":"/_astro/index.C9j8VcHx.css"}],"routeData":{"route":"/sections/estudios","isIndex":false,"type":"page","pattern":"^\\/sections\\/estudios\\/?$","segments":[[{"content":"sections","dynamic":false,"spread":false}],[{"content":"estudios","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sections/estudios.astro","pathname":"/sections/estudios","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.CPvyyiTs.js"}],"styles":[{"type":"external","src":"/_astro/Layout.DvB2Xm2x.css"},{"type":"external","src":"/_astro/index.C9j8VcHx.css"}],"routeData":{"route":"/sections/habilities","isIndex":false,"type":"page","pattern":"^\\/sections\\/habilities\\/?$","segments":[[{"content":"sections","dynamic":false,"spread":false}],[{"content":"habilities","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sections/habilities.astro","pathname":"/sections/habilities","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.CPvyyiTs.js"}],"styles":[{"type":"external","src":"/_astro/Layout.DvB2Xm2x.css"},{"type":"external","src":"/_astro/index.C9j8VcHx.css"},{"type":"inline","content":"[data-astro-image]{width:100%;height:auto;-o-object-fit:var(--fit);object-fit:var(--fit);-o-object-position:var(--pos);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"}],"routeData":{"route":"/sections/personal","isIndex":false,"type":"page","pattern":"^\\/sections\\/personal\\/?$","segments":[[{"content":"sections","dynamic":false,"spread":false}],[{"content":"personal","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sections/personal.astro","pathname":"/sections/personal","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.CPvyyiTs.js"}],"styles":[{"type":"external","src":"/_astro/Layout.DvB2Xm2x.css"},{"type":"external","src":"/_astro/index.C9j8VcHx.css"},{"type":"inline","content":"[data-astro-image]{width:100%;height:auto;-o-object-fit:var(--fit);object-fit:var(--fit);-o-object-position:var(--pos);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"}],"routeData":{"route":"/sections/proyectos","isIndex":false,"type":"page","pattern":"^\\/sections\\/proyectos\\/?$","segments":[[{"content":"sections","dynamic":false,"spread":false}],[{"content":"proyectos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sections/proyectos.astro","pathname":"/sections/proyectos","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.CPvyyiTs.js"}],"styles":[{"type":"external","src":"/_astro/Layout.DvB2Xm2x.css"},{"type":"external","src":"/_astro/index.C9j8VcHx.css"},{"type":"inline","content":"[data-astro-image]{width:100%;height:auto;-o-object-fit:var(--fit);object-fit:var(--fit);-o-object-position:var(--pos);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/PROJECTOS/Nelson-5553/src/pages/sections/estudios.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/sections/estudios@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/PROJECTOS/Nelson-5553/src/pages/sections/habilities.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/sections/habilities@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/PROJECTOS/Nelson-5553/src/pages/sections/personal.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/sections/personal@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/PROJECTOS/Nelson-5553/src/pages/sections/proyectos.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/sections/proyectos@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/PROJECTOS/Nelson-5553/src/components/studios.astro",{"propagation":"in-tree","containsHead":false}],["C:/PROJECTOS/Nelson-5553/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/PROJECTOS/Nelson-5553/src/components/projects.astro",{"propagation":"in-tree","containsHead":false}],["C:/PROJECTOS/Nelson-5553/src/components/habylity.astro",{"propagation":"in-tree","containsHead":false}],["C:/PROJECTOS/Nelson-5553/src/components/profile.astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/sections/estudios@_@astro":"pages/sections/estudios.astro.mjs","\u0000@astro-page:src/pages/sections/habilities@_@astro":"pages/sections/habilities.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/sections/personal@_@astro":"pages/sections/personal.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/sections/proyectos@_@astro":"pages/sections/proyectos.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","C:/PROJECTOS/Nelson-5553/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","C:/PROJECTOS/Nelson-5553/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BX9w0Isj.mjs","C:\\PROJECTOS\\Nelson-5553\\.astro\\content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","C:\\PROJECTOS\\Nelson-5553\\.astro\\content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_Bw6CmXD7.mjs","\u0000@astrojs-manifest":"manifest_BE4bXk8u.mjs","@astrojs/react/client.js":"_astro/client.CZXlMYiT.js","C:/PROJECTOS/Nelson-5553/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.DoLCTPZu.js","C:/PROJECTOS/Nelson-5553/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.CayCgq5s.js","C:/PROJECTOS/Nelson-5553/src/layouts/Layout.astro?astro&type=script&index=1&lang.ts":"_astro/Layout.astro_astro_type_script_index_1_lang.DPq5XUUF.js","C:/PROJECTOS/Nelson-5553/src/layouts/Layout.astro?astro&type=script&index=2&lang.ts":"_astro/Layout.astro_astro_type_script_index_2_lang.Cp88QuTi.js","C:/PROJECTOS/Nelson-5553/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.BOel_0Ki.js","astro:scripts/page.js":"_astro/page.CPvyyiTs.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/PROJECTOS/Nelson-5553/src/layouts/Layout.astro?astro&type=script&index=1&lang.ts","function n(){const e=document.documentElement,t=localStorage.getItem(\"theme\");t?t===\"dark\"?e.classList.add(\"dark\"):e.classList.remove(\"dark\"):(e.classList.add(\"dark\"),localStorage.setItem(\"theme\",\"dark\")),l()}function l(){const e=document.getElementById(\"theme-toggle\"),t=document.documentElement.classList.contains(\"dark\");if(e){const o=e.querySelector(\"svg:nth-child(1)\"),s=e.querySelector(\"svg:nth-child(2)\");t?(o.style.display=\"block\",s.style.display=\"none\"):(o.style.display=\"none\",s.style.display=\"block\")}}function c(){const e=document.getElementById(\"theme-toggle\"),t=document.documentElement;e&&e.addEventListener(\"click\",()=>{t.classList.contains(\"dark\")?(t.classList.remove(\"dark\"),localStorage.setItem(\"theme\",\"light\")):(t.classList.add(\"dark\"),localStorage.setItem(\"theme\",\"dark\")),l()})}n();c();document.addEventListener(\"astro:page-load\",()=>{n(),c()});"]],"assets":["/_astro/NELSON.CNGRESm2.jpg","/_astro/calendar-white.Nig3RC0g.webp","/_astro/calendar.BaEsYZ8A.webp","/_astro/g3.CZf5Ye0Y.svg","/_astro/ikarus.B5Q_md4g.svg","/_astro/index.C9j8VcHx.css","/favicon.svg","/img/calendar-white.webp","/img/calendar.webp","/img/N5553.gif","/img/N5553.png","/img/NELSON.jpg","/PDF/HV.pdf","/_astro/client.CZXlMYiT.js","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.BOel_0Ki.js","/_astro/index.astro_astro_type_script_index_0_lang.DoLCTPZu.js","/_astro/index.U3IA9L3b.js","/_astro/Layout.astro_astro_type_script_index_0_lang.CayCgq5s.js","/_astro/Layout.astro_astro_type_script_index_2_lang.Cp88QuTi.js","/_astro/Layout.DvB2Xm2x.css","/_astro/page.CPvyyiTs.js","/img/technologies/astro.svg","/img/technologies/css.svg","/img/technologies/git.svg","/img/technologies/github-light.svg","/img/technologies/html5.svg","/img/technologies/javascript.svg","/img/technologies/laravel.svg","/img/technologies/mongodb.svg","/img/technologies/mysql.svg","/img/technologies/nextjs.svg","/img/technologies/php.svg","/img/technologies/postgresql.svg","/img/technologies/tailwindcss.svg","/img/Projectos/G3-GAMES.jpg","/img/Projectos/portada-ikarus.jpeg","/img/Projectos/Portafolio.jpg","/img/Projectos/svg/g3.svg","/img/Projectos/svg/ikarus.svg","/_astro/page.CPvyyiTs.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"2OvXtZIG/Z/s6jYuUlLR7wDYFznkxtEvS7jtHQNKYhM="});

export { manifest };
