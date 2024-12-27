/* empty css                                    */
import { c as createComponent, r as renderTemplate, a as renderComponent, f as createAstro, m as maybeRenderHead, d as renderTransition } from '../../chunks/astro/server_DrnHGrxP.mjs';
import 'kleur/colors';
import { $ as $$Image } from '../../chunks/_astro_assets_CksZfQMw.mjs';
import { $ as $$Layout } from '../../chunks/Layout_gtkH5Z7X.mjs';
export { renderers } from '../../renderers.mjs';

const Calendar = new Proxy({"src":"/_astro/calendar.BaEsYZ8A.webp","width":4800,"height":2308,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/PROJECTOS/Nelson-5553/public/img/calendar.webp";
							}
							
							return target[name];
						}
					});

const CalendarWhite = new Proxy({"src":"/_astro/calendar-white.Nig3RC0g.webp","width":4800,"height":2313,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/PROJECTOS/Nelson-5553/public/img/calendar-white.webp";
							}
							
							return target[name];
						}
					});

const myImage = new Proxy({"src":"/_astro/NELSON.CNGRESm2.jpg","width":398,"height":430,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/PROJECTOS/Nelson-5553/public/img/NELSON.jpg";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$Personal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Personal;
  const { alt = "Nelson", width = "64", height = "64" } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Nelson", "class": "some-class" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="sobre-mi" class="w-screen lg:h-screen overflow-x-hidden"> <div class="w-full h-full max-w-5xl mx-auto p-6 sm:p-12"> <div class="flex flex-col justify-center items-center gap-6 md:gap-24"> <div class="mt-24 md:mt-4"> <span></span> </div> <!-- Imagen --> <div class="rounded-full object-cover z-20 p-3 shadow bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mb-6 md:mb-0"> ${renderComponent($$result2, "Image", $$Image, { "src": myImage, "alt": alt, "class": `w-${width} h-${height} shadow-sm rounded-full object-cover`, "loading": "eager", "data-astro-transition-scope": renderTransition($$result2, "vdr2d7vu", "", "perfil") })} </div> <!-- Texto --> <div class="w-full md:w-2/3 text-center md:text-left"> <h3 class="text-3xl md:text-4xl font-bold text-black dark:text-gray-200">
Hola,<strong> Soy Nelson </strong> </h3> <br> <p class="text-lg leading-8 text-black dark:text-gray-200">
Soy estudiante de Ingeniería de Sistemas con una sólida base en
            tecnología y desarrollo. Poseo conocimientos fundamentales para
            abordar con éxito las tareas asignadas en el área tecnológica,
            destacándome por mis habilidades en herramientas ofimáticas y mi
            rápida capacidad de aprendizaje en nuevos entornos y softwares.
</p> <!-- Botones --> <div class="mt-2 md:mt-10 flex flex-col md:flex-row items-center justify-start gap-x-6"> <a href="/PDF/HV.pdf" target="_blank" class="rounded-md p-2 transition ease-in-out delay-150 bg-blue-500 text-white hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
Curriculum
</a> <a href="#contactame" class="text-sm font-semibold leading-6 prose dark:prose-invert mt-4 md:mt-0">
Contactame <span aria-hidden="true">→</span> </a> </div> <div class="prose dark:prose-invert text-left text-lg mt-8"> <p>
Si deseas conocer más sobre mí, te invito a explorar mi
              portafolio, donde encontrarás información detallada sobre mi
              experiencia, habilidades, proyectos y estudios. ¡Continúa
              navegando!
</p> <h1 class="prose dark:prose-invert text-left text-lg">Proyectos</h1> <p class="prose dark:prose-invert text-left text-lg">
Aunque estoy dando los primeros pasos en mi carrera como
              desarrollador, cada contribución en mi calendario de GitHub
              refleja mi pasión por aprender, experimentar y crear soluciones.
              Este espacio es testimonio de mi crecimiento continuo y mi
              compromiso con la tecnología.
</p> ${renderComponent($$result2, "Image", $$Image, { "src": Calendar, "alt": "Nuevo", "class": "rounded-lg hidden dark:block object-cover w-full h-full", "data-astro-transition-scope": renderTransition($$result2, "wh2eqyb4", "", `img-calendarr`) })} ${renderComponent($$result2, "Image", $$Image, { "src": CalendarWhite, "alt": "Nuevo", "class": "rounded-lg dark:hidden object-cover w-full h-full", "data-astro-transition-scope": renderTransition($$result2, "f75sgi3y", "", `img-calendarWhite`) })} <p class="prose dark:prose-invert text-left text-lg">
Explora algunos de los proyectos más destacados en los que he
              trabajado, ya sean personales, académicos o colaborativos. Cada
              uno refleja mi pasión por la tecnología y mi compromiso con la
              calidad.
<a href="/sections/proyectos"> [Ver más →]</a> </p> <br> </div> </div> </div> </div> </div>  ` })}`;
}, "C:/PROJECTOS/Nelson-5553/src/pages/sections/personal.astro", "self");

const $$file = "C:/PROJECTOS/Nelson-5553/src/pages/sections/personal.astro";
const $$url = "/sections/personal";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Personal,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
