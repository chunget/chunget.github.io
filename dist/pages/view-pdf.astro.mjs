/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_tUoYdV_S.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_D0EbfkZl.mjs';
export { renderers } from '../renderers.mjs';

const $$ViewPdf = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-8"> <div class="max-w-4xl mx-auto"> <h1 class="text-3xl font-bold mb-6 text-center">PDF Viewer</h1> <!-- PDF Viewer Container --> <div class="bg-white rounded-lg shadow-lg p-6"> <div class="flex justify-between items-center mb-4"> <div class="flex space-x-4"> <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors" onclick="window.print()"> <svg class="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2z"></path> </svg>
Print
</button> <button class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors" onclick="window.open('/a.pdf', '_blank')"> <svg class="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path> </svg>
Download
</button> </div> <div class="flex space-x-4"> <button class="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors" onclick="document.getElementById('pdf-viewer').requestFullscreen()"> <svg class="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4h4M4 16v4m0 0h4m0-4h4m4-8v4m0 4h.01"></path> </svg>
Full Screen
</button> </div> </div> <!-- PDF Viewer --> <div id="pdf-viewer" class="w-full h-[800px] border-2 border-gray-200 rounded-lg overflow-hidden"> <iframe src="/a.pdf" class="w-full h-full" title="PDF Viewer" allowfullscreen></iframe> </div> </div> </div> </div> ` })}`;
}, "/Users/jillchung/CascadeProjects/chunget.github.io/src/pages/view-pdf.astro", void 0);

const $$file = "/Users/jillchung/CascadeProjects/chunget.github.io/src/pages/view-pdf.astro";
const $$url = "/view-pdf";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ViewPdf,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
