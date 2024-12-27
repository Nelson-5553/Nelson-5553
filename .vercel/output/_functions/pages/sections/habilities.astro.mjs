/* empty css                                    */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute, d as renderTransition } from '../../chunks/astro/server_DrnHGrxP.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_gtkH5Z7X.mjs';
export { renderers } from '../../renderers.mjs';

const $$Habilities = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "habilidades", "class": "some class" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full lg:h-screen overflow-x-hidden sm:px-12"> <div class="w-full h-full max-w-3xl mx-auto py-12 px-12 prose dark:prose-invert"> <h1 class="text-4xl  mt-44"${addAttribute(renderTransition($$result2, "xnay2wpm", "", `img-habilities`), "data-astro-transition-scope")}>
HABILIDADES
</h1> <p class="text-lg">
A lo largo de mi trayectoria, he tenido la oportunidad de trabajar con
          una variedad de herramientas y tecnologías que me han ayudado a
          construir proyectos sólidos y funcionales.
<br><br>
Desde Frameworks
</p> <div class="flex flex-row space-x-4"> <img src="/img/technologies/astro.svg" alt="Tecnologias" class="w-12 h-12"> <img src="/img/technologies/laravel.svg" alt="Tecnologias" class="w-12 h-12"> <img src="/img/technologies/nextjs.svg" alt="Tecnologias" class="w-12 h-12"> </div> <p>Habilidades Fundamentales</p> <div class="flex flex-row space-x-4"> <img src="/img/technologies/html5.svg" alt="Tecnologias" class="w-12 h-12"> <img src="/img/technologies/css.svg" alt="Tecnologias" class="w-12 h-12"> <img src="/img/technologies/javascript.svg" alt="Tecnologias" class="w-12 h-12"> </div> <p>Bases de datos</p> <div class="flex flex-row space-x-4"> <img src="/img/technologies/mysql.svg" alt="Tecnologias" class="w-12 h-12"> <img src="/img/technologies/postgresql.svg" alt="Tecnologias" class="w-12 h-12"> <img src="/img/technologies/mongodb.svg" alt="Tecnologias" class="w-12 h-12"> </div> </div> </div> ` })}`;
}, "C:/PROJECTOS/Nelson-5553/src/pages/sections/habilities.astro", "self");

const $$file = "C:/PROJECTOS/Nelson-5553/src/pages/sections/habilities.astro";
const $$url = "/sections/habilities";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Habilities,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
