/* empty css                                 */
import { c as createComponent, r as renderComponent, d as renderScript, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_tUoYdV_S.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_D0EbfkZl.mjs';
export { renderers } from '../renderers.mjs';

const $$PdfContent = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-8"> <div class="max-w-4xl mx-auto"> <h1 class="text-3xl font-bold mb-6 text-center">PDF 文件內容</h1> <div class="bg-white rounded-lg shadow-lg p-6 mb-8"> <!-- PDF Content Section --> <div class="prose max-w-none"> <h2 class="text-2xl font-semibold mb-4">簡介</h2> <p class="mb-4 leading-relaxed">
此頁面顯示 PDF 文件的內容。您可以在下方查看嵌入的 PDF 文件，或使用增強型查看器查看更多功能。
</p> <!-- PDF Viewer --> <div class="my-8"> <h3 class="text-xl font-semibold mb-4">嵌入式 PDF 查看器</h3> <div class="w-full h-[500px] border-2 border-gray-200 rounded-lg overflow-hidden"> <iframe src="/a.pdf" class="w-full h-full" title="PDF 查看器" allowfullscreen></iframe> </div> </div> <h2 class="text-2xl font-semibold mb-4">查看選項</h2> <p class="mb-4 leading-relaxed">
您可以選擇以下方式查看 PDF 文件：
</p> <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6"> <div class="bg-gray-100 rounded-lg p-4"> <h3 class="text-xl font-semibold mb-2">直接查看</h3> <p class="mb-4 leading-relaxed">
在新標籤頁中直接打開 PDF 文件，使用瀏覽器的內置 PDF 查看器。
</p> <a href="/a.pdf" target="_blank" class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors inline-flex items-center"> <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path> </svg>
查看 PDF
</a> </div> <div class="bg-gray-100 rounded-lg p-4"> <h3 class="text-xl font-semibold mb-2">增強型查看器</h3> <p class="mb-4 leading-relaxed">
使用我們的增強型查看器，提供打印、下載和全屏等功能。
</p> <a href="/view-pdf" class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors inline-flex items-center"> <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"></path> </svg>
增強型查看器
</a> </div> </div> <h2 class="text-2xl font-semibold mb-4">附加說明</h2> <p class="mb-4 leading-relaxed">
如果您需要提取 PDF 文件中的文字內容，您可以：
</p> <ul class="list-disc pl-6 mb-6 space-y-2"> <li>確保 Python 已正確安裝並添加到系統 PATH 中</li> <li>安裝 PyPDF2 庫：<code>pip install PyPDF2</code></li> <li>執行 <code>read_pdf.py</code> 腳本來提取文字</li> <li>或使用線上 PDF 轉換工具</li> </ul> </div> </div> </div> </div> ` })} ${renderScript($$result, "/Users/jillchung/CascadeProjects/chunget.github.io/src/pages/pdf-content.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/jillchung/CascadeProjects/chunget.github.io/src/pages/pdf-content.astro", void 0);

const $$file = "/Users/jillchung/CascadeProjects/chunget.github.io/src/pages/pdf-content.astro";
const $$url = "/pdf-content";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PdfContent,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
