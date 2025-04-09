/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_tUoYdV_S.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_D0EbfkZl.mjs';
import { readFileSync } from 'fs';
import { join } from 'path';
export { renderers } from '../renderers.mjs';

const $$Content = createComponent(($$result, $$props, $$slots) => {
  try {
    const contentPath = join(process.cwd(), "content.json");
    const content2 = JSON.parse(readFileSync(contentPath, "utf-8")).content;
    if (!content2) {
      throw new Error("Content data not found");
    }
  } catch (error) {
    console.error("Error reading content.json:", error);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-8"> <h1 class="text-3xl font-bold mb-6">${content.title}</h1> <div class="prose max-w-none"> <div class="bg-white rounded-lg shadow-lg p-6"> <div class="space-y-4"> ${content.text && content.text.split("\n").map((paragraph, index) => renderTemplate`<p${addAttribute(index, "key")} class="text-gray-800 leading-relaxed"> ${paragraph} </p>`)} </div> </div> </div> </div> ` })}`;
}, "/Users/jillchung/CascadeProjects/chunget.github.io/src/pages/content.astro", void 0);

const $$file = "/Users/jillchung/CascadeProjects/chunget.github.io/src/pages/content.astro";
const $$url = "/content";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Content,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
