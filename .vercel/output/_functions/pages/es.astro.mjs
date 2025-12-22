/* empty css                                 */
import { c as createComponent, m as maybeRenderHead, p as renderSlot, a as renderTemplate, l as createAstro, n as addAttribute, u as unescapeHTML, r as renderComponent } from '../chunks/astro/server_6FtSZ7gk.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CnenXYXg.mjs';
import 'clsx';
import { g as getCollection } from '../chunks/_astro_content_DamIX9Yx.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Badge = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center"> <span class="relative inline-flex overflow-hidden rounded-full p-[1px]"> <span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3B82F6_0%,#1E3A8A_50%,#3B82F6_100%)]"></span> <div class="inline-flex items-center justify-center w-full px-3 py-1 text-sm text-blue-800 bg-blue-100 rounded-full cursor-pointer dark:bg-gray-800 dark:text-white/80 backdrop-blur-3xl whitespace-nowrap"> ${renderSlot($$result, $$slots["default"])} </div> </span> </div>`;
}, "/home/runner/work/Nelson-5553/Nelson-5553/src/components/es/Badge.astro", void 0);

const $$Astro$1 = createAstro();
const $$ButtomLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ButtomLink;
  const { link, text, icon } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")} target="_blank" class="no-underline"> <div class="bg-gradient-to-tr
              via-blue-500 via-30%
              dark:via-blue-500 dark:via-30%
              rounded-full p-0.5
              hover:-translate-y-1 hover:scale-110
              duration-150"> <div class="flex justify-center items-center gap-2 rounded-full w-auto px-4 py-1 transition ease-in-out delay-150 bg-white dark:bg-slate-800"> ${icon && renderTemplate`<span>${unescapeHTML(icon)}</span>`} ${text} </div> </div> </a>`;
}, "/home/runner/work/Nelson-5553/Nelson-5553/src/components/es/ButtomLink.astro", void 0);

const $$Welcome = createComponent(($$result, $$props, $$slots) => {
  const HvImage = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>
`;
  const LinkedinImage = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20.47 2H3.53a1.45 1.45 0 0 0-1.47 1.43v17.14A1.45 1.45 0 0 0 3.53 22h16.94a1.45 1.45 0 0 0 1.47-1.43V3.43A1.45 1.45 0 0 0 20.47 2M8.09 18.74h-3v-9h3ZM6.59 8.48a1.56 1.56 0 1 1 0-3.12a1.57 1.57 0 1 1 0 3.12m12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0 0 12.85 13a2 2 0 0 0-.1.73v5h-3v-9h3V11a3 3 0 0 1 2.71-1.5c2 0 3.45 1.29 3.45 4.06Z"/></svg>
`;
  const GithubImage = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="currentColor" d="M8 1C4.13 1 1 4.21 1 8.18c0 3.14 1.96 5.81 4.69 6.79c.37.09.31-.17.31-.36v-1.25c-2.12.26-2.21-1.19-2.35-1.43c-.29-.5-.97-.63-.76-.87c.48-.26.98.06 1.55.93c.41.63 1.22.52 1.63.42c.09-.38.28-.71.54-.98c-2.2-.4-3.12-1.78-3.12-3.42c0-.8.25-1.53.76-2.12c-.32-.97.03-1.8.08-1.93c.91-.08 1.85.67 1.93.73c.52-.14 1.11-.22 1.77-.22s1.25.08 1.78.22c.18-.14 1.05-.78 1.9-.71c.05.12.39.94.09 1.9c.51.59.76 1.33.76 2.13c0 1.64-.92 3.02-3.13 3.42a2 2 0 0 1 .44.67c.1.25.15.52.15.79v1.81c.01.14 0 .29.23.29c2.77-.96 4.76-3.65 4.76-6.81c0-3.97-3.13-7.19-7-7.19Z"/></svg>
`;
  const MailImage = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>
`;
  const LinkImage = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
</svg>
`;
  return renderTemplate`${maybeRenderHead()}<div data-aos="fade-up"> <div id="Inicio" class="flex justify-start items-center space-x-4"> <img src="/img/NELSON.jpg" alt="Perfil" class="rounded-full h-16 w-16 shadow-lg"> ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result2) => renderTemplate`Disponible para trabajar` })} </div> <h2 class="text-4xl font-bold -mt-4">Hola, soy Nelson</h2> <p class="text-xl text-left mt-2 w-full md:w-3/4 lg:w-2/3">
Ingeniero de Sistemas con <span class="text-blue-500 font-bold">+2 años</span> de experiencia en el campo. Con sólida formación técnica, me especializo en el <span class="text-blue-500 font-bold">Desarrollo Web</span> y tengo una rápida capacidad de adaptación a nuevas tecnologías. Mi enfoque proactivo me permite resolver desafíos digitales de forma eficiente.
</p> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:w-1/2 w-auto"> ${renderComponent($$result, "ButtomLink", $$ButtomLink, { "link": "https://www.linkedin.com/in/nelson-jimenez-10429a337/", "text": "Linkedin", "icon": LinkedinImage })} ${renderComponent($$result, "ButtomLink", $$ButtomLink, { "link": "https://github.com/Nelson-5553", "text": "GitHub", "icon": GithubImage })} ${renderComponent($$result, "ButtomLink", $$ButtomLink, { "link": "mailto:andresnelson2004@hotmail.com", "text": "Contactame", "icon": MailImage })} ${renderComponent($$result, "ButtomLink", $$ButtomLink, { "link": "https://frontend-1-4-mgww.onrender.com", "text": "LinkTree", "icon": LinkImage })} ${renderComponent($$result, "ButtomLink", $$ButtomLink, { "link": "/PDF/HV.pdf", "text": "Curriculum", "icon": HvImage })} </div> </div> `;
}, "/home/runner/work/Nelson-5553/Nelson-5553/src/components/es/welcome.astro", void 0);

const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const experienceEntries = (await getCollection("projects", ({ id }) => id.startsWith("es/"))).filter((entry) => entry.data.isActive === true);
  const renderedExperiences = await Promise.all(
    experienceEntries.map(async (entry) => {
      const rendered = await entry.render();
      return {
        ...entry,
        Content: rendered.Content,
        frontmatter: rendered.remarkPluginFrontmatter
      };
    })
  );
  return renderTemplate`${maybeRenderHead()}<div class="mt-36" data-aos="fade-up"> <div id="proyecto" class="flex flex-row justify-center items-center space-x-4"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8"> <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"></path> </svg> <h2 class="font-bold mt-6">Proyectos</h2> </div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> ${renderedExperiences.map((project) => {
    const HideButton = project.data.page.url === "/";
    return (
      // Aquí se renderiza el proyecto
      renderTemplate`<div class="flex flex-col items-center"> <div class="relative aspect-[16/9] w-full"> <img${addAttribute(project.data.img, "src")} alt="project" class="w-full object-cover rounded-t-lg m-0"> ${project.data.isNew && renderTemplate`<span class="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
Nuevo
</span>`} </div> <div class="flex flex-col items-center bg-slate-50 dark:bg-neutral-800 rounded-b-lg shadow-md p-4 w-full h-full"> <div class="flex flex-row justify-start items-center gap-2 w-full mb-2"> <img${addAttribute(project.data.icon, "src")} alt="icon" class="w-8 h-8 my-0"> <p class="text-2xl font-semibold my-0">${project.data.title}</p> </div> <article class="w-full whitespace-normal break-words text-left flex-1 my-0"> ${renderComponent($$result, "project.Content", project.Content, {})} </article> <div class="flex flex-col w-full mt-4 my-0"> <div class="flex flex-wrap justify-center gap-4 mb-4 my-0 mx-0"> ${project.data.technologies.map((tech) => renderTemplate`<img${addAttribute(`/img/technologies/${tech}.svg`, "src")} alt="Technology" class="h-8 w-8 my-0" loading="eager">`)} </div> <div class="w-full"> ${HideButton && renderTemplate`<span class="block w-full text-center text-gray-500 text-sm font-medium py-2">
Url no disponible
</span>`} <div class="flex flex-col md:flex-row gap-2"> ${!HideButton && renderTemplate`<a${addAttribute(project.data.page.url, "href")} class="flex justify-center items-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 no-underline"> ${project.data.title} <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path> </svg> </a>`} ${project.data.page.url_1 && renderTemplate`<a${addAttribute(project.data.page.url_1, "href")} class="flex justify-center items-center w-full gap-2 px-4 py-2 text-sm font-medium text-white bg-black border border-black rounded-lg hover:bg-neutral-800 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-800 mt-0 no-underline" target="_blank" rel="noopener noreferrer" style="text-decoration: none;"> <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor" class="mr-1"> <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.65 7.65 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path> </svg>
Visitar el repo
</a>`} </div> </div> </div> </div> </div>`
    );
  })} </div> </div> <div class="flex flex-row items-center justify-center text-neutral-800 dark:text-white p-4 w-full mt-5 space-x-2" data-aos="fade-up"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"></path> </svg> <p class="text-sm font-semibold">
Carga inicial lenta por serverless. Si no responde, recarga la página.
</p> </div>`;
}, "/home/runner/work/Nelson-5553/Nelson-5553/src/components/es/projects.astro", void 0);

const $$Experience = createComponent(async ($$result, $$props, $$slots) => {
  const experienceEntries = await getCollection("experience", ({ id }) => id.startsWith("es/"));
  const renderedExperiences = await Promise.all(
    experienceEntries.map(async (entry) => {
      const rendered = await entry.render();
      return {
        ...entry,
        Content: rendered.Content,
        frontmatter: rendered.remarkPluginFrontmatter
      };
    })
  );
  return renderTemplate`${maybeRenderHead()}<div class="mt-36" data-aos="fade-up"> <div id="Experiencia" class="flex flex-row justify-center items-center space-x-4"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8"> <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"></path> </svg> <h2 class="font-bold mt-6">Experiencia Laboral</h2> </div> <ol class="relative border-s border-black dark:border-slate-200"> ${renderedExperiences.map((exp) => renderTemplate`<div class="grid grid-cols-1 lg:grid-cols-2 gap-4"> <li class="mb-10 ms-4 list-none"> <div class="absolute w-5 h-5 bg-blue-500 rounded-full mt-1.5 -start-2.5 border border-white dark:border-gray-900 dark:bg-blue-500"></div> <p class="mb-4 text-xl font-bold text-blue-500  ">${exp.data.title}</p> <h3 class="text-lg font-semibold   -mt-2">${exp.data.cargo}</h3> <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">${exp.data.date}</time> </li> <div class="flex flex-col min-h-5 lg:mt-9 mb-5 truncate"> <article class="w-full whitespace-normal break-words"> ${exp.data.description} <br> <br> <a${addAttribute(exp.data.page.url, "href")} target="_blank" class="inline-flex items-center px-4 py-2 w-auto text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700  no-underline">
Saber mas
<svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path> </svg> </a> </article> </div> </div>`)} </ol> </div>`;
}, "/home/runner/work/Nelson-5553/Nelson-5553/src/components/es/experience.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bottom-0 left-0 z-20 w-full p-4 border-gray-200 shadow-sm md:flex md:items-center md:justify-between md:p-6 dark:border-gray-600"> <span class="text-sm  sm:text-center">© 2025 <a href="https://www.linkedin.com/in/nelson-jimenez-10429a337/" class="hover:underline">Nelson</a>. Todos los derechos reservados
</span> <ul class="flex flex-wrap items-center mt-3 text-sm font-medium  sm:mt-0"> <li class="list-none"> <a href="#" class="hover:underline me-4 md:me-6">Sobre mi</a> </li> <li class="list-none"> <a href="mailto:andresnelson2004@hotmail.com" class="hover:underline">Contact</a> </li> </ul> </footer>`;
}, "/home/runner/work/Nelson-5553/Nelson-5553/src/components/es/Footer.astro", void 0);

const $$Books = createComponent(async ($$result, $$props, $$slots) => {
  const books = await getCollection("books", ({ id }) => id.startsWith("es/"));
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col"> <h1 class="text-2xl font-bold text-blue-500 dark:text-blue-400 mt-10">
Biblioteca personal
</h1> ${books.map((libro) => renderTemplate`<div class="flex flex-col md:flex-row bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-8"> <div class="md:w-64 w-full aspect-[3/4] md:aspect-auto md:h-72"> <img${addAttribute(libro.data.image, "src")}${addAttribute(libro.data.title, "alt")} class="w-full h-full object-cover mx-0 my-0"> </div> <div class="w-full p-4 flex flex-col justify-between md:h-72"> <div> <div class="flex flex-col justify-between h-auto"> <div class="flex justify-between items-center"> <div> <span class="text-xs font-medium mb-2"> ${libro.data.author} </span> <p class="text-xl font-semibold text-gray-900 dark:text-white mx-0 my-0"> ${libro.data.title} </p> </div> <span${addAttribute(`text-xs font-medium px-3 py-0.5 rounded-sm
          ${libro.data.state === "Leido" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" : "bg-red-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"}`, "class")}> ${libro.data.state} </span> </div> </div> <p class="text-gray-600 dark:text-gray-300 text-md mt-2 line-clamp-4"> ${libro.data.description} </p> </div> <a${addAttribute(libro.data.link, "href")} class="no-underline flex justify-end" target="_blank" rel="noopener noreferrer"> <button class="flex flex-row justify-center items-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-sm px-4 py-2 rounded-md shadow-sm transition duration-200 no-underline"> <svg fill="#000000" version="1.1" class="size-6" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 35.418 35.418" xml:space="preserve"> <g id="SVGRepo_bgCarrier" stroke-width="0"></g> <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g> <g id="SVGRepo_iconCarrier"> <g> <path d="M20.948,9.891c-0.857,0.068-1.847,0.136-2.837,0.269c-1.516,0.195-3.032,0.461-4.284,1.053 c-2.439,0.994-4.088,3.105-4.088,6.209c0,3.898,2.506,5.875,5.669,5.875c1.057,0,1.913-0.129,2.703-0.328 c1.255-0.396,2.31-1.123,3.562-2.441c0.727,0.99,0.923,1.453,2.177,2.509c0.329,0.133,0.658,0.133,0.922-0.066 c0.791-0.659,2.174-1.848,2.901-2.508c0.328-0.267,0.263-0.66,0.066-0.992c-0.727-0.924-1.45-1.718-1.45-3.498v-5.943 c0-2.513,0.195-4.822-1.647-6.537c-1.518-1.391-3.891-1.916-5.735-1.916c-0.264,0-0.527,0-0.792,0 c-3.362,0.197-6.921,1.647-7.714,5.811c-0.13,0.525,0.267,0.726,0.53,0.793l3.691,0.464c0.396-0.07,0.593-0.398,0.658-0.73 c0.333-1.449,1.518-2.176,2.836-2.309c0.067,0,0.133,0,0.265,0c0.79,0,1.646,0.332,2.109,0.987 c0.523,0.795,0.461,1.853,0.461,2.775L20.948,9.891L20.948,9.891z M20.223,17.749c-0.461,0.925-1.253,1.519-2.11,1.718 c-0.131,0-0.327,0.068-0.526,0.068c-1.45,0-2.31-1.123-2.31-2.775c0-2.11,1.254-3.104,2.836-3.565 c0.857-0.197,1.847-0.265,2.836-0.265v0.793C20.948,15.243,21.01,16.43,20.223,17.749z M35.418,26.918v0.215 c-0.035,1.291-0.716,3.768-2.328,5.131c-0.322,0.25-0.645,0.107-0.503-0.254c0.469-1.145,1.541-3.803,1.04-4.412 c-0.355-0.465-1.826-0.43-3.079-0.322c-0.572,0.072-1.075,0.105-1.469,0.183c-0.357,0.033-0.431-0.287-0.071-0.537 c0.466-0.323,0.969-0.573,1.541-0.756c2.039-0.608,4.406-0.25,4.729,0.146C35.348,26.414,35.418,26.629,35.418,26.918z M32.016,29.428c-0.466,0.357-0.965,0.682-1.468,0.973c-3.761,2.261-8.631,3.441-12.856,3.441c-6.807,0-12.895-2.512-17.514-6.709 c-0.396-0.324-0.073-0.789,0.393-0.539C5.549,29.5,11.709,31.26,18.084,31.26c4.013,0,8.342-0.754,12.463-2.371 c0.285-0.104,0.608-0.252,0.895-0.356C32.087,28.242,32.661,28.965,32.016,29.428z"></path> </g> </g> </svg>
Ver libro
</button> </a> </div> </div>`)} </div>`;
}, "/home/runner/work/Nelson-5553/Nelson-5553/src/components/es/Books.astro", void 0);

const $$Certified = createComponent(async ($$result, $$props, $$slots) => {
  const certified = await getCollection("certified", ({ id }) => id.startsWith("es/"));
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10"> <h1 class="text-2xl font-bold text-blue-500 dark:text-blue-400 col-span-full">
Certificados
</h1> ${certified.map((certificado) => renderTemplate`<div class="flex flex-col bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"> <div class="w-full md:aspect-auto md:h-72"> <img${addAttribute(certificado.data.image, "src")}${addAttribute(certificado.data.title, "alt")} class="w-full h-full mx-0 my-0"> </div> <div class="w-full p-6 flex flex-col justify-between"> <div> <div class="flex flex-col justify-between"> <span class="text-xs font-medium mb-4"> ${certificado.data.shipper} </span> <p class="text-xl font-semibold text-gray-900 dark:text-white mx-0 my-0"> ${certificado.data.title} </p> </div> <p class="text-gray-600 dark:text-gray-300 text-md mt-2 line-clamp-4"> ${certificado.data.description} </p> </div> <a${addAttribute(certificado.data.link, "href")} class="no-underline" target="_blank" rel="noopener noreferrer"> <button${addAttribute(certificado.data.color, "class")}> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path fill="currentColor" d="M13.586 2a2 2 0 0 1 1.284.467l.13.119L19.414 7a2 2 0 0 1 .578 1.238l.008.176V20a2 2 0 0 1-1.85 1.995L18 22H6a2 2 0 0 1-1.995-1.85L4 20V4a2 2 0 0 1 1.85-1.995L6 2zM12 4H6v16h12V10h-4.5a1.5 1.5 0 0 1-1.493-1.356L12 8.5zm.988 7.848a6.22 6.22 0 0 0 2.235 3.872c.887.717.076 2.121-.988 1.712a6.22 6.22 0 0 0-4.47 0c-1.065.41-1.876-.995-.989-1.712a6.22 6.22 0 0 0 2.235-3.872c.178-1.127 1.8-1.126 1.977 0m-.99 2.304l-.688 1.196h1.38zM14 4.414V8h3.586z"></path></g></svg>
Ver Certificado
</button> </a> </div> </div>`)} </div>`;
}, "/home/runner/work/Nelson-5553/Nelson-5553/src/components/es/Certified.astro", void 0);

const $$Studios = createComponent(($$result, $$props, $$slots) => {
  const estudios = [
    {
      "periodo": "2023-02 - 2024-11",
      "nombre": "Sistemas, Ingenier\xEDa De Sistemas",
      "lugar": "Tecnol\xF3gico Comfenalco, Cartagena De Indias",
      "color": "bg-sky-500"
    },
    {
      "periodo": "2021-02 - 2022-11",
      "nombre": "Sistemas, Tecnolog\xEDa en Desarrollo de Software",
      "lugar": "Tecnol\xF3gico Comfenalco, Cartagena De Indias",
      "color": "bg-emerald-500"
    },
    {
      "periodo": "2019-02 - 2020-11",
      "nombre": "Sistemas, Tecnico en sistemas",
      "lugar": "Instituci\xF3n Cedesarrollo, Cartagena De Indias",
      "color": "bg-orange-500"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div data-astro-cid-emxeuyx7> <h2 class="mb-4 text-2xl font-bold text-blue-500 dark:text-blue-500" data-astro-cid-emxeuyx7>
Estudios
</h2> <p class="mb-6 text-base font-normal prose dark:prose-invert" data-astro-cid-emxeuyx7>
Aquí puedes ver mis estudios y formación académica.
</p> </div> ${estudios.map((studios) => renderTemplate`<div class="w-full" data-astro-cid-emxeuyx7> <!-- Línea superior --> <div${addAttribute(`h-1 ${studios.color} w-full rounded-t-md`, "class")} data-astro-cid-emxeuyx7></div> <!-- Contenedor principal --> <div class="grid grid-cols-1 sm:grid-cols-[auto,1fr,auto] gap-4 items-center border bg-slate-100/70 dark:bg-neutral-900 w-full p-4 sm:p-6 border-gray-200 dark:border-neutral-700 rounded-b-lg mb-6 shadow-sm" data-astro-cid-emxeuyx7> <!-- Icono --> <div class="flex justify-center sm:justify-start items-center" data-astro-cid-emxeuyx7> <div${addAttribute(`w-12 h-12 ${studios.color} text-white rounded-md flex items-center justify-center`, "class")} data-astro-cid-emxeuyx7> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" data-astro-cid-emxeuyx7> <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" data-astro-cid-emxeuyx7></path> </svg> </div> </div> <!-- Nombre y lugar --> <div class="text-center sm:text-left" data-astro-cid-emxeuyx7> <h3 class="text-base sm:text-lg font-semibold text-gray-900 dark:text-white" data-astro-cid-emxeuyx7>${studios.nombre}</h3> <p class="text-sm text-gray-600 dark:text-gray-400" data-astro-cid-emxeuyx7>${studios.lugar}</p> </div> <!-- Periodo --> <div class="flex justify-center sm:justify-end" data-astro-cid-emxeuyx7> <span class="bg-sky-100 text-sky-800 text-xs font-medium px-2.5 py-0.5 rounded-sm dark:bg-sky-900 dark:text-sky-300" data-astro-cid-emxeuyx7> ${studios.periodo} </span> </div> </div> </div>`)} `;
}, "/home/runner/work/Nelson-5553/Nelson-5553/src/components/es/studios.astro", void 0);

const $$EducationBoard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-full mt-36" data-aos="fade-up" data-astro-cid-mqxlrogq> <div id="estudios" class="flex flex-row justify-center items-center space-x-4" data-astro-cid-mqxlrogq> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8" data-astro-cid-mqxlrogq> <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" data-astro-cid-mqxlrogq></path> </svg> <h2 class="font-bold mt-6" data-astro-cid-mqxlrogq>Educación</h2> </div> <div class="w-full bg-gray-200 dark:bg-neutral-950 p-2 rounded-lg mt-4 dark:shadow-md" data-astro-cid-mqxlrogq> <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm font-medium text-center text-blue-500 dark:text-blue-400" id="fullWidthTab" data-tabs-toggle="#fullWidthTabContent" role="tablist" data-astro-cid-mqxlrogq> <button id="stats-tab" data-tabs-target="#stats" type="button" role="tab" aria-controls="stats" aria-selected="false" class="w-full text-lg p-1.5 transition-colors duration-200 border-2 border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-neutral-950 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none" data-astro-cid-mqxlrogq>
Estudios
</button> <button id="about-tab" data-tabs-target="#about" type="button" role="tab" aria-controls="about" aria-selected="false" class="w-full text-lg p-1.5 transition-colors duration-200 border-2 border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-neutral-950 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none" data-astro-cid-mqxlrogq>
Certificados
</button> <button id="faq-tab" data-tabs-target="#faq" type="button" role="tab" aria-controls="faq" aria-selected="false" class="w-full text-lg p-1.5 transition-colors duration-200 border-2 border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-neutral-950 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none" data-astro-cid-mqxlrogq>
Libros
</button> </div> </div> <div id="fullWidthTabContent" data-astro-cid-mqxlrogq> <div class="hidden rounded-b-lg" id="stats" role="tabpanel" aria-labelledby="stats-tab" data-astro-cid-mqxlrogq> ${renderComponent($$result, "Studios", $$Studios, { "data-astro-cid-mqxlrogq": true })} </div> <div class="hidden rounded-b-lg " id="about" role="tabpanel" aria-labelledby="about-tab" data-astro-cid-mqxlrogq> ${renderComponent($$result, "Certified", $$Certified, { "data-astro-cid-mqxlrogq": true })} </div> <div class="hidden rounded-b-lg " id="faq" role="tabpanel" aria-labelledby="faq-tab" data-astro-cid-mqxlrogq> ${renderComponent($$result, "Books", $$Books, { "data-astro-cid-mqxlrogq": true })} </div> </div> </div> `;
}, "/home/runner/work/Nelson-5553/Nelson-5553/src/components/es/EducationBoard.astro", void 0);

const $$Astro = createAstro();
const $$PercentageHability = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PercentageHability;
  const { percentage, name, image } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="mb-4"> <div class="flex items-center gap-4"> <!-- Imagen --> <img${addAttribute(`/img/technologies/${image}.svg`, "src")} alt="image" class="size-12 shrink-0"> <!-- Contenedor de la barra y los textos --> <div class="w-full"> <div class="flex justify-between mb-1"> <span class="font-medium text-blue-800 dark:text-gray-100">${name}</span> <span class="text-sm font-medium text-gray-800 dark:text-gray-100">${percentage}%</span> </div> <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3"> <div class="bg-blue-600 h-3 rounded-full"${addAttribute(`width: ${percentage}%`, "style")}></div> </div> </div> </div> </div>`;
}, "/home/runner/work/Nelson-5553/Nelson-5553/src/components/es/PercentageHability.astro", void 0);

const $$HabilityBoard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-full mt-36" data-aos="fade-up" data-astro-cid-l66g6bd3> <div id="habilidades" class="flex flex-row justify-center items-center space-x-4" data-astro-cid-l66g6bd3> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8" data-astro-cid-l66g6bd3> <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" data-astro-cid-l66g6bd3></path> </svg> <h2 class="font-bold mt-6" data-astro-cid-l66g6bd3>Habilidades</h2> </div> <div class="w-full bg-gray-200 dark:bg-neutral-950 p-2 rounded-lg mt-4 dark:shadow-md" data-astro-cid-l66g6bd3> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 text-sm font-medium text-center text-blue-500 dark:text-blue-400" id="fullWidthTab" data-tabs-toggle="#fullWidthTabContent" role="tablist" data-astro-cid-l66g6bd3> <button id="Backend" data-tabs-target="#backend" type="button" role="tab" aria-controls="stats" aria-selected="false" class="w-full text-lg p-1.5 transition-colors duration-200 border-2 border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-neutral-950 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none" data-astro-cid-l66g6bd3>
Backend
</button> <button id="Frontend" data-tabs-target="#frontend" type="button" role="tab" aria-controls="about" aria-selected="false" class="w-full text-lg p-1.5  transition-colors duration-200 border-2 border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-neutral-950 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none" data-astro-cid-l66g6bd3>
Frontend
</button> <button id="Database" data-tabs-target="#database" type="button" role="tab" aria-controls="faq" aria-selected="false" class="w-full text-lg p-1.5  transition-colors duration-200 border-2 border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-neutral-950 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none" data-astro-cid-l66g6bd3>
Bases de datos
</button> <button id="Tools" data-tabs-target="#tools" type="button" role="tab" aria-controls="faq" aria-selected="false" class="w-full text-lg p-1.5  transition-colors duration-200 border-2 border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-neutral-950 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none" data-astro-cid-l66g6bd3>
Herramientas
</button> </div> </div> <div id="fullWidthTabContent" data-astro-cid-l66g6bd3> <div class="hidden rounded-b-lg" id="backend" role="tabpanel" aria-labelledby="stats-tab" data-astro-cid-l66g6bd3> <div class="grid md:grid-cols-2 gap-8 bg-white dark:bg-neutral-950/60 rounded-lg p-6 mt-8" data-astro-cid-l66g6bd3> ${renderComponent($$result, "PercentageHability", $$PercentageHability, { "name": "PHP", "percentage": "90", "image": "php", "data-astro-cid-l66g6bd3": true })} ${renderComponent($$result, "PercentageHability", $$PercentageHability, { "name": "LARAVEL", "percentage": "90", "image": "laravel", "data-astro-cid-l66g6bd3": true })} ${renderComponent($$result, "PercentageHability", $$PercentageHability, { "name": "PYTHON", "percentage": "80", "image": "python", "data-astro-cid-l66g6bd3": true })} ${renderComponent($$result, "PercentageHability", $$PercentageHability, { "name": "NODE", "percentage": "60", "image": "nodejs", "data-astro-cid-l66g6bd3": true })} </div> </div> <div class="hidden rounded-b-lg " id="frontend" role="tabpanel" aria-labelledby="about-tab" data-astro-cid-l66g6bd3> <div class="grid md:grid-cols-2 gap-8 bg-white dark:bg-neutral-950/60 rounded-lg p-6 mt-8" data-astro-cid-l66g6bd3> ${renderComponent($$result, "PercentageHability", $$PercentageHability, { "name": "CSS3", "percentage": "80", "image": "css", "data-astro-cid-l66g6bd3": true })} ${renderComponent($$result, "PercentageHability", $$PercentageHability, { "name": "HTML", "percentage": "90", "image": "html5", "data-astro-cid-l66g6bd3": true })} ${renderComponent($$result, "PercentageHability", $$PercentageHability, { "name": "JAVASCRIPT", "percentage": "70", "image": "javascript", "data-astro-cid-l66g6bd3": true })} ${renderComponent($$result, "PercentageHability", $$PercentageHability, { "name": "ASTRO", "percentage": "95", "image": "astro", "data-astro-cid-l66g6bd3": true })} ${renderComponent($$result, "PercentageHability", $$PercentageHability, { "name": "NEXTJS", "percentage": "70", "image": "nextjs", "data-astro-cid-l66g6bd3": true })} ${renderComponent($$result, "PercentageHability", $$PercentageHability, { "name": "LIVEWIRE", "percentage": "75", "image": "livewire", "data-astro-cid-l66g6bd3": true })} ${renderComponent($$result, "PercentageHability", $$PercentageHability, { "name": "TAILWINDCSS", "percentage": "99", "image": "tailwindcss", "data-astro-cid-l66g6bd3": true })} ${renderComponent($$result, "PercentageHability", $$PercentageHability, { "name": "ALPINE JS", "percentage": "80", "image": "alpine", "data-astro-cid-l66g6bd3": true })} </div> </div> <div class="hidden rounded-b-lg " id="database" role="tabpanel" aria-labelledby="faq-tab" data-astro-cid-l66g6bd3> <div class="grid md:grid-cols-2 gap-8 bg-white dark:bg-neutral-950/60 rounded-lg p-6 mt-8" data-astro-cid-l66g6bd3> ${renderComponent($$result, "PercentageHability", $$PercentageHability, { "name": "MONGODB", "percentage": "60", "image": "mongodb", "data-astro-cid-l66g6bd3": true })} ${renderComponent($$result, "PercentageHability", $$PercentageHability, { "name": "MYSQL", "percentage": "90", "image": "mysql", "data-astro-cid-l66g6bd3": true })} ${renderComponent($$result, "PercentageHability", $$PercentageHability, { "name": "POSTGRESQL", "percentage": "80", "image": "postgresql", "data-astro-cid-l66g6bd3": true })} </div> </div> <div class="hidden rounded-b-lg " id="tools" role="tabpanel" aria-labelledby="faq-tab" data-astro-cid-l66g6bd3> <div class="grid md:grid-cols-2 gap-8 bg-white dark:bg-neutral-950/60 rounded-lg p-6 mt-8" data-astro-cid-l66g6bd3> ${renderComponent($$result, "PercentageHability", $$PercentageHability, { "name": "AWS", "percentage": "60", "image": "aws_light", "data-astro-cid-l66g6bd3": true })} ${renderComponent($$result, "PercentageHability", $$PercentageHability, { "name": "SWAGGER", "percentage": "70", "image": "swagger", "data-astro-cid-l66g6bd3": true })} ${renderComponent($$result, "PercentageHability", $$PercentageHability, { "name": "POSTMAN", "percentage": "80", "image": "postman", "data-astro-cid-l66g6bd3": true })} ${renderComponent($$result, "PercentageHability", $$PercentageHability, { "name": "LINUX", "percentage": "80", "image": "linux", "data-astro-cid-l66g6bd3": true })} ${renderComponent($$result, "PercentageHability", $$PercentageHability, { "name": "DOCKER", "percentage": "85", "image": "docker", "data-astro-cid-l66g6bd3": true })} ${renderComponent($$result, "PercentageHability", $$PercentageHability, { "name": "GIT", "percentage": "95", "image": "git", "data-astro-cid-l66g6bd3": true })} ${renderComponent($$result, "PercentageHability", $$PercentageHability, { "name": "POWER BI", "percentage": "70", "image": "powerbi", "data-astro-cid-l66g6bd3": true })} </div> </div> </div> </div> `;
}, "/home/runner/work/Nelson-5553/Nelson-5553/src/components/es/HabilityBoard.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Nelson", "lang": "es", "class": "some-class" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Welcome", $$Welcome, {})} ${renderComponent($$result2, "Projects", $$Projects, {})} ${renderComponent($$result2, "HabilityBoard", $$HabilityBoard, {})} ${renderComponent($$result2, "EducationBoard", $$EducationBoard, {})} ${renderComponent($$result2, "Experience", $$Experience, {})} ${maybeRenderHead()}<br> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/runner/work/Nelson-5553/Nelson-5553/src/pages/es/index.astro", void 0);

const $$file = "/home/runner/work/Nelson-5553/Nelson-5553/src/pages/es/index.astro";
const $$url = "/es";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
