/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_6FtSZ7gk.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CnenXYXg.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Nelson", "lang": "en", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="maintenance-container" data-astro-cid-j7pv25f6> <div class="content-wrapper" data-astro-cid-j7pv25f6> <div class="icon-container" data-astro-cid-j7pv25f6> <svg class="code-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" data-astro-cid-j7pv25f6></path> </svg> </div> <h1 class="title" data-astro-cid-j7pv25f6>Hello! 👋</h1> <div class="message-box" data-astro-cid-j7pv25f6> <p class="main-message" data-astro-cid-j7pv25f6>
I'm currently redesigning my portfolio to showcase my projects and experience in a more comprehensive way.
</p> <p class="sub-message" data-astro-cid-j7pv25f6>
In the meantime, I'm working on new projects and improving my skills as a developer.
</p> </div> <div class="status-indicator" data-astro-cid-j7pv25f6> <span class="pulse" data-astro-cid-j7pv25f6></span> <span class="status-text" data-astro-cid-j7pv25f6>Developing...</span> </div> </div> </main> ` })} `;
}, "/home/runner/work/Nelson-5553/Nelson-5553/src/pages/index.astro", void 0);

const $$file = "/home/runner/work/Nelson-5553/Nelson-5553/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
