/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_tUoYdV_S.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_D0EbfkZl.mjs';
export { renderers } from '../renderers.mjs';

const $$Document = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-8"> <h1 class="text-3xl font-bold mb-6">文件內容</h1> <!-- PDF Viewer --> <div class="bg-white rounded-lg shadow-lg p-6"> <iframe src="/a.pdf" class="w-full h-[800px] border-none" title="PDF文件"></iframe> </div> </div> ` })}`;
}, "/Users/jillchung/CascadeProjects/chunget.github.io/src/pages/document.astro", void 0);

const $$file = "/Users/jillchung/CascadeProjects/chunget.github.io/src/pages/document.astro";
const $$url = "/document";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Document,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
