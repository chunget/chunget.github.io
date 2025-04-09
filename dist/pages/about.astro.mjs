/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_tUoYdV_S.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_D0EbfkZl.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  const teamMembers = [
    {
      name: "\u738B\u7F8E\u7F8E",
      title: "\u5275\u8FA6\u4EBA\u517C\u9996\u5E2D\u5F62\u8C61\u9867\u554F",
      bio: "\u64C1\u6709\u8D85\u904E15\u5E74\u7684\u5F62\u8C61\u9867\u554F\u7D93\u9A57\uFF0C\u66FE\u70BA\u591A\u5BB6\u77E5\u540D\u4F01\u696D\u63D0\u4F9B\u5F62\u8C61\u7BA1\u7406\u670D\u52D9\u3002\u5C08\u7CBE\u65BC\u8272\u5F69\u5206\u6790\u3001\u7A7F\u642D\u6307\u5C0E\u548C\u500B\u4EBA\u54C1\u724C\u5EFA\u7ACB\u3002"
    },
    {
      name: "\u6797\u96C5\u96C5",
      title: "\u8CC7\u6DF1\u9020\u578B\u5E2B",
      bio: "\u524D\u77E5\u540D\u6642\u5C1A\u96DC\u8A8C\u9020\u578B\u7E3D\u76E3\uFF0C\u64C5\u9577\u6253\u9020\u5C08\u696D\u4EBA\u58EB\u7684\u5546\u52D9\u5F62\u8C61\uFF0C\u5354\u52A9\u5BA2\u6236\u5728\u4E0D\u540C\u5834\u5408\u5C55\u73FE\u6700\u4F73\u72C0\u614B\u3002"
    },
    {
      name: "\u5F35\u5C0F\u5C0F",
      title: "\u5C08\u696D\u5F69\u599D\u5E2B",
      bio: "\u570B\u969B\u8A8D\u8B49\u5F69\u599D\u5E2B\uFF0C\u5C08\u9577\u65BC\u5546\u52D9\u599D\u5BB9\u8207\u500B\u4EBA\u98A8\u683C\u599D\u5BB9\u8A2D\u8A08\uFF0C\u8B93\u6BCF\u4F4D\u5BA2\u6236\u90FD\u80FD\u5C55\u73FE\u81EA\u7136\u800C\u5C08\u696D\u7684\u5F62\u8C61\u3002"
    },
    {
      name: "\u674E\u5927\u5927",
      title: "\u4F01\u696D\u5F62\u8C61\u57F9\u8A13\u5E2B",
      bio: "\u64C1\u6709\u8C50\u5BCC\u7684\u4F01\u696D\u57F9\u8A13\u7D93\u9A57\uFF0C\u5354\u52A9\u591A\u5BB6\u77E5\u540D\u4F01\u696D\u63D0\u5347\u5718\u968A\u5F62\u8C61\uFF0C\u5C08\u6CE8\u65BC\u4F01\u696D\u5F62\u8C61\u7D71\u4E00\u8207\u54E1\u5DE5\u500B\u4EBA\u54C1\u724C\u5EFA\u7ACB\u3002"
    }
  ];
  const milestones = [
    { year: "2010", title: "\u5275\u7ACB\u521D\u671F", description: "\u597D\u5708\u5708\u5F62\u8C61\u5B78\u82D1\u6210\u7ACB\uFF0C\u958B\u59CB\u63D0\u4F9B\u500B\u4EBA\u5F62\u8C61\u8AEE\u8A62\u670D\u52D9\u3002" },
    { year: "2012", title: "\u670D\u52D9\u64F4\u5C55", description: "\u64F4\u5C55\u670D\u52D9\u7BC4\u570D\uFF0C\u958B\u59CB\u63D0\u4F9B\u4F01\u696D\u5F62\u8C61\u57F9\u8A13\u8AB2\u7A0B\u3002" },
    { year: "2015", title: "\u54C1\u724C\u5347\u7D1A", description: "\u54C1\u724C\u5168\u9762\u5347\u7D1A\uFF0C\u6210\u70BA\u300C\u597D\u5708\u5708\u597D\u611F\u5F62\u8C61\u5B78\u82D1\u300D\uFF0C\u64F4\u5927\u670D\u52D9\u7BC4\u570D\u3002" },
    { year: "2018", title: "\u570B\u969B\u8A8D\u8B49", description: "\u7372\u5F97\u570B\u969B\u5F62\u8C61\u9867\u554F\u5354\u6703\u8A8D\u8B49\uFF0C\u63D0\u5347\u5C08\u696D\u670D\u52D9\u6C34\u6E96\u3002" },
    { year: "2020", title: "\u7DDA\u4E0A\u670D\u52D9", description: "\u63A8\u51FA\u7DDA\u4E0A\u5F62\u8C61\u8AEE\u8A62\u670D\u52D9\uFF0C\u7A81\u7834\u5730\u57DF\u9650\u5236\u3002" },
    { year: "2023", title: "\u6301\u7E8C\u6210\u9577", description: "\u670D\u52D9\u5BA2\u6236\u7A81\u78341000\u5BB6\uFF0C\u6210\u70BA\u53F0\u7063\u9818\u5148\u7684\u5F62\u8C61\u7BA1\u7406\u9867\u554F\u516C\u53F8\u3002" }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u95DC\u65BC\u6211\u5011 - \u597D\u5708\u5708\u597D\u611F\u5F62\u8C61\u5B78\u82D1" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-16"> <div class="container mx-auto px-4 text-center"> <h1 class="text-4xl font-bold mb-4">關於我們</h1> <p class="text-lg max-w-3xl mx-auto">
好圈圈好感形象學苑致力於幫助職場人士建立專業形象，提升個人魅力
</p> </div> </section>  <section class="py-16 bg-white"> <div class="container mx-auto px-4"> <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"> <div> <h2 class="text-3xl font-bold mb-6 text-gray-800">我們的故事</h2> <p class="text-gray-600 mb-4">
好圈圈好感形象學苑成立於2010年，源於創辦人王美美對形象管理的熱情與專業。在多年的時尚產業工作經驗中，她發現許多專業人士雖然在自己的領域非常出色，但往往忽略了個人形象對職業發展的重要性。
</p> <p class="text-gray-600 mb-4">
帶著「讓每個人都能展現最佳形象」的使命，好圈圈形象學苑開始提供個人形象諮詢服務，幫助職場人士建立符合自身特質的專業形象。隨著服務範圍的擴大，我們逐漸發展出一套完整的形象管理系統，涵蓋個人色彩分析、穿搭指導、儀態培訓等多元服務。
</p> <p class="text-gray-600">
如今，好圈圈好感形象學苑已成為台灣領先的形象管理顧問公司，服務對象包括各行各業的專業人士、企業主與企業團隊。我們相信，良好的形象不僅能提升個人自信，更能為職業發展創造更多機會。
</p> </div> <div class="relative"> <div class="rounded-lg overflow-hidden shadow-lg"></div> <div class="absolute -bottom-6 -right-6 w-48 h-48 bg-pink-100 rounded-lg -z-10"></div> <div class="absolute -top-6 -left-6 w-48 h-48 bg-purple-100 rounded-lg -z-10"></div> </div> </div> </div> </section>  <section class="py-16 bg-gray-50"> <div class="container mx-auto px-4"> <h2 class="text-3xl font-bold mb-12 text-center text-gray-800">我們的使命與價值觀</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> <div class="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"> <div class="absolute top-0 right-0 w-24 h-24 bg-pink-100 rounded-bl-full -z-0"></div> <div class="relative z-10"> <div class="text-pink-600 mb-4"> <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L5 10.274zm10 0l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L15 10.274z" clip-rule="evenodd"></path> </svg> </div> <h3 class="text-xl font-semibold mb-3 text-gray-800">使命</h3> <p class="text-gray-600">
幫助每個人發現並展現最佳的自我形象，提升職場競爭力與個人自信。
</p> </div> </div> <div class="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"> <div class="absolute top-0 right-0 w-24 h-24 bg-purple-100 rounded-bl-full -z-0"></div> <div class="relative z-10"> <div class="text-purple-600 mb-4"> <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path> <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path> </svg> </div> <h3 class="text-xl font-semibold mb-3 text-gray-800">願景</h3> <p class="text-gray-600">
成為亞洲領先的形象管理顧問公司，引領形象管理的專業標準與創新發展。
</p> </div> </div> <div class="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"> <div class="absolute top-0 right-0 w-24 h-24 bg-pink-100 rounded-bl-full -z-0"></div> <div class="relative z-10"> <div class="text-pink-600 mb-4"> <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path> </svg> </div> <h3 class="text-xl font-semibold mb-3 text-gray-800">核心價值</h3> <p class="text-gray-600">
專業、創新、尊重個性、持續成長，我們相信每個人都有獨特的魅力與風格。
</p> </div> </div> </div> </div> </section>  <section class="py-16 bg-white"> <div class="container mx-auto px-4"> <h2 class="text-3xl font-bold mb-12 text-center text-gray-800">專業團隊</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> ${teamMembers.map((member) => renderTemplate`<div class="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"> <div class="p-6"> <h3 class="text-xl font-semibold text-gray-800 mb-1">${member.name}</h3> <p class="text-pink-600 text-sm mb-4">${member.title}</p> <p class="text-gray-600 text-sm">${member.bio}</p> </div> </div>`)} </div> </div> </section>  <section class="py-16 bg-gray-50 relative"> <div class="container mx-auto px-4 relative z-10"> <h2 class="text-3xl font-bold mb-12 text-center text-gray-800">成長歷程</h2> <div class="relative"> <!-- 時間軸線 --> <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-500 to-purple-600 z-0"></div> <div class="space-y-12"> ${milestones.map((milestone, index) => renderTemplate`<div${addAttribute(`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`, "class")}> <div${addAttribute(`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`, "class")}> <h3 class="text-xl font-bold text-gray-800 mb-1">${milestone.title}</h3> <p class="text-gray-600">${milestone.description}</p> </div> <div class="w-2/12 flex justify-center"> <div class="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold z-10"> ${milestone.year} </div> </div> <div class="w-5/12"></div> </div>`)} </div> </div> </div> </section>  <section class="py-16 bg-white"> <div class="container mx-auto px-4"> <h2 class="text-3xl font-bold mb-12 text-center text-gray-800">合作夥伴</h2> <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"> <div class="bg-gray-50 p-6 rounded-lg flex items-center justify-center h-32"></div> <div class="bg-gray-50 p-6 rounded-lg flex items-center justify-center h-32"></div> <div class="bg-gray-50 p-6 rounded-lg flex items-center justify-center h-32"></div> <div class="bg-gray-50 p-6 rounded-lg flex items-center justify-center h-32"></div> <div class="bg-gray-50 p-6 rounded-lg flex items-center justify-center h-32"></div> <div class="bg-gray-50 p-6 rounded-lg flex items-center justify-center h-32"></div> </div> </div> </section> ` })}`;
}, "/Users/jillchung/CascadeProjects/chunget.github.io/src/pages/about.astro", void 0);

const $$file = "/Users/jillchung/CascadeProjects/chunget.github.io/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
