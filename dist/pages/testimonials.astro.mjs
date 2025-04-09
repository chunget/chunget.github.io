/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_tUoYdV_S.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_D0EbfkZl.mjs';
/* empty css                                        */
export { renderers } from '../renderers.mjs';

const $$Testimonials = createComponent(($$result, $$props, $$slots) => {
  const testimonials = [
    {
      title: "\u79D1\u6280\u65B0\u8CB4",
      beforeAfter: false,
      quote: "\u900F\u904E\u7B2C\u4E00\u6B21\u8272\u5F69\u8AB2\u7A0B\u7684\u9AD4\u9A57\uFF0C\u5C0D\u7A7F\u642D\u66F4\u6709\u8208\u8DA3\uFF0C\u5831\u540D\u4E86\u500B\u4EBA\u8272\u5F69\u898F\u5283\u7684\u670D\u52D9\uFF0C\u627E\u5230\u9069\u5408\u81EA\u5DF1\u7684\u8272\u5F69\uFF0C\u66F4\u900F\u904E\u77ED\u77ED\u76842\u5C0F\u6642\u5B78\u5230\u57FA\u790E\u8272\u5F69\u642D\u914D\u7684\u65B9\u6CD5\uFF0C\u5373\u4F7F\u904B\u7528\u539F\u672C\u7684\u8863\u670D\uFF0C\u4E5F\u80FD\u642D\u914D\u51FA\u4E0D\u4E00\u6A23\u7684\u98A8\u683C\u3002\u8EAB\u908A\u7684\u540C\u4E8B\u670B\u53CB\u5C0D\u6211\u7684\u6539\u8B8A\u7D66\u4E88\u6975\u5927\u7684\u9F13\u52F5\uFF0C\u6211\u4E5F\u958B\u59CB\u5C0D\u81EA\u5DF1\u7684\u5F62\u8C61\u6108\u4F86\u6108\u6709\u81EA\u4FE1\u3002",
      role: "\u8077\u5834\u65B0\u9BAE\u4EBA",
      image: "/images/after1.jpg"
    },
    {
      title: "\u5065\u5EB7\u7BA1\u7406\u4E2D\u968E\u4E3B\u7BA1",
      beforeAfter: false,
      quote: "\u900F\u904E\u8272\u5F69\u6E2C\u8272\u53CA\u5F69\u599D\u3001\u7A7F\u642D\u7684\u8AB2\u7A0B\uFF0C\u627E\u5230\u5C6C\u65BC\u81EA\u5DF1\u7684\u500B\u4EBA\u8272\u5F69\uFF0C\u539F\u4F86\u559C\u6B61\u7684\u984F\u8272\u4E0D\u4E00\u5B9A\u9069\u5408\u81EA\u5DF1\uFF0C\u900F\u904E\u9069\u5408\u7684\u8272\u5F69\u53CD\u800C\u80FD\u5C07\u5167\u5728\u7684\u6211\u986F\u73FE\u51FA\u4F86\uFF0C\u9084\u53EF\u4EE5\u8B93\u81EA\u5DF1\u770B\u8D77\u4F86\u6C23\u8272\u66F4\u597D\u3001\u66F4\u5E74\u8F15\uFF0C\u800C\u4E14\u9078\u5C0D\u8863\u670D\u7684\u6B3E\u5F0F\uFF0C\u4E0D\u5FC5\u7528\u5927\u588A\u80A9\u3001\u5927\u7D05\u7684\u53E3\u7D05\uFF0C\u4E00\u6A23\u80FD\u5920\u6709\u8CEA\u611F\u7684\u5C55\u73FE\u6211\u7684\u5C08\u696D\u5F62\u8C61\u3002",
      role: "\u5C08\u696D\u4EBA\u58EB|\u4E2D\u968E\u4E3B\u7BA1",
      image: "/images/after2.jpg"
    },
    {
      title: "\u91AB\u7F8E\u4E2D\u5FC3\u4F01\u696D\u4E3B",
      beforeAfter: false,
      quote: "\u900F\u904E\u5B8C\u6574\u7684\u500B\u4EBA\u5F62\u8C61\u5B9A\u4F4D\u670D\u52D9\uFF0C\u6709\u7B56\u7565\u7684\u66FF\u500B\u4EBA\u53CA\u54C1\u724C\u9593\u627E\u5230\u9069\u5408\u7684\u98A8\u683C\uFF0C\u4E5F\u91CD\u65B0\u6AA2\u8996\u4E86\u73FE\u6709\u7684\u8863\u6AE5\u72C0\u6CC1\uFF0C\u4E26\u4E14\u7CBE\u6E96\u7684\u5B9A\u4F4D\u4E86\u9069\u5408\u5728\u65E5\u5E38\u5DE5\u4F5C\u3001\u5A92\u9AD4\u66DD\u5149\u3001\u5546\u52D9\u6D3B\u52D5\u6642\uFF0C\u53EF\u4EE5\u4F7F\u7528\u7684\u984F\u8272\u3001\u6B3E\u5F0F\u3001\u642D\u914D\u98A8\u683C\u3002\u5FEB\u901F\u7684\u8B93\u6211\u5728\u6BCF\u4E00\u500B\u5834\u5408\u505A\u5207\u63DB\u6642\u53EF\u4EE5\u4E0D\u5FC5\u8CBB\u5FC3\u4E5F\u90FD\u6709\u4E0D\u540C\u537B\u53C8\u9644\u5408\u54C1\u724C\u5F62\u8C61\u7684\u500B\u4EBA\u98A8\u683C\u3002",
      role: "\u4F01\u696D\u4E3B|\u9AD8\u968E\u4E3B\u7BA1",
      image: "/images/after3.jpg"
    },
    {
      title: "\u4E8C\u4EE3\u4F01\u696D\u63A5\u73ED",
      beforeAfter: false,
      quote: "\u5F62\u8C61\u7684\u63D0\u6607\u8B93\u6211\u5728\u9762\u5C0D\u9700\u8981\u5E36\u9818\u8CC7\u6DF1\u54E1\u5DE5\u6642\uFF0C\u66F4\u6709\u81EA\u4FE1\u53CA\u8AAA\u670D\u529B\u3002\u4E5F\u89BA\u5F97\u81EA\u5DF1\u66F4\u6709\u9B45\u529B!",
      role: "\u4F01\u696D\u4E3B|\u9AD8\u968E\u4E3B\u7BA1",
      image: "/images/after4.jpg"
    },
    {
      title: "\u5E74\u8F15\u4F46\u8CC7\u6DF1\u7684\u8CA1\u7D93\u7BA1\u7406\u8005",
      beforeAfter: false,
      quote: "\u627E\u5230\u81EA\u5DF1\u7684\u8272\u5F69\u8B93\u6211\u4E0D\u5FC5\u88DD\u6210\u719F\u4E5F\u6709\u5C08\u696D\u611F\uFF0C\u80FD\u5920\u7A7F\u51FA\u81EA\u5DF1\u7684\u98A8\u683C\uFF0C\u4E26\u4E14\u6703\u642D\u914D\u771F\u958B\u5FC3!",
      role: "\u5C08\u696D\u4EBA\u58EB|\u4E2D\u968E\u4E3B\u7BA1",
      image: "/images/after5.jpg"
    },
    {
      title: "\u5065\u5EB7\u9867\u554F",
      beforeAfter: false,
      quote: "\u7626\u4E0B\u4F86\u5F8C\u56E0\u70BA\u4E0D\u6703\u642D\u914D\u89BA\u5F97\u7A7F\u8212\u670D\u5C31\u597D\uFF0C\u7A7F\u4E0A\u81EA\u5DF1\u559C\u6B61\u4F46\u4E0D\u6703\u642D\u7684\u8863\u670D\uFF0C\u89BA\u5F97\u81EA\u5DF1\u597D\u7F8E!",
      role: "\u5C08\u696D\u4EBA\u58EB|\u4E2D\u968E\u4E3B\u7BA1",
      image: "/images/after6.jpg"
    },
    {
      title: "\u7522\u96AA\u9AD8\u968E\u4E3B\u7BA1",
      beforeAfter: false,
      quote: "\u7FD2\u6163\u7528\u9ED1\u8272\u4F86\u986F\u793A\u5C08\u696D\u611F\uFF0C\u6C92\u60F3\u5230\u9069\u5408\u81EA\u5DF1\u7684\u984F\u8272\u7A7F\u696D\u4E86\u4E5F\u53EF\u4EE5\u6709\u89AA\u5207\u4E5F\u5C08\u696D\u7684\u98A8\u683C!",
      role: "\u4F01\u696D\u4E3B|\u9AD8\u968E\u4E3B\u7BA1",
      image: "/images/after7.jpg"
    }
  ];
  const categories = [
    { name: "\u5168\u90E8", filter: "all" },
    { name: "\u8077\u5834\u65B0\u9BAE\u4EBA", filter: "\u65B0\u9BAE\u4EBA" },
    { name: "\u5C08\u696D\u4EBA\u58EB", filter: "\u5C08\u696D\u4EBA\u58EB" },
    { name: "\u4F01\u696D\u4E3B", filter: "\u4F01\u696D\u4E3B" }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u5B78\u54E1\u5206\u4EAB - \u597D\u5708\u5708\u597D\u611F\u5F62\u8C61\u5B78\u82D1", "data-astro-cid-gx536xi6": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-16 relative" data-astro-cid-gx536xi6> <div class="absolute inset-0 z-0 opacity-20" data-astro-cid-gx536xi6> <img src="/images/after1.jpg" alt="學員分享背景" class="w-full h-full object-cover" data-astro-cid-gx536xi6> </div> <div class="container mx-auto px-4 text-center relative z-10" data-astro-cid-gx536xi6> <h1 class="text-4xl font-bold mb-4" data-astro-cid-gx536xi6>學員分享</h1> <p class="text-lg max-w-3xl mx-auto" data-astro-cid-gx536xi6>
真實的轉變故事，見證好圈圈如何幫助職場人士從內而外提升形象
</p> </div> </section> <section class="py-16 bg-white" data-astro-cid-gx536xi6> <div class="container mx-auto px-4" data-astro-cid-gx536xi6> <div class="mb-12" data-astro-cid-gx536xi6> <div class="flex flex-wrap justify-center gap-4" data-astro-cid-gx536xi6> ${categories.map((category) => renderTemplate`<button class="category-button" data-astro-cid-gx536xi6>${category.name}</button>`)} </div> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-astro-cid-gx536xi6> ${testimonials.map((testimonial) => renderTemplate`<div class="card" data-astro-cid-gx536xi6> <div class="testimonial-content" data-astro-cid-gx536xi6> <div class="testimonial-header" data-astro-cid-gx536xi6> <img${addAttribute(testimonial.image, "src")}${addAttribute(testimonial.title, "alt")} class="testimonial-image" data-astro-cid-gx536xi6> <div class="testimonial-info" data-astro-cid-gx536xi6> <h3 class="testimonial-title text-pink-600" data-astro-cid-gx536xi6>${testimonial.title}</h3> <p class="testimonial-role" data-astro-cid-gx536xi6>${testimonial.role}</p> </div> </div> <blockquote class="testimonial-quote" data-astro-cid-gx536xi6>
"${testimonial.quote}"
</blockquote> </div> </div>`)} </div> </div> </section> <section class="py-16 bg-gray-50" data-astro-cid-gx536xi6> <div class="container mx-auto px-4" data-astro-cid-gx536xi6> <h2 class="text-3xl font-bold text-center mb-12" data-astro-cid-gx536xi6>形象改變前後對比</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-astro-cid-gx536xi6> <div class="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow" data-astro-cid-gx536xi6> <div class="flex space-x-4 mb-4" data-astro-cid-gx536xi6> <div class="w-1/2" data-astro-cid-gx536xi6> <p class="text-center mb-2 text-sm font-medium text-gray-500" data-astro-cid-gx536xi6>改變前</p> <img src="/images/before1.jpg" alt="改變前" class="w-full h-48 object-cover rounded-lg" data-astro-cid-gx536xi6> </div> <div class="w-1/2" data-astro-cid-gx536xi6> <p class="text-center mb-2 text-sm font-medium text-gray-500" data-astro-cid-gx536xi6>改變後</p> <img src="/images/after1.jpg" alt="改變後" class="w-full h-48 object-cover rounded-lg" data-astro-cid-gx536xi6> </div> </div> <h3 class="text-lg font-semibold text-pink-600" data-astro-cid-gx536xi6>職場新鮮人的蛻變</h3> <p class="text-gray-600 text-sm" data-astro-cid-gx536xi6>透過色彩分析和穿搭指導，展現專業自信</p> </div> <div class="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow" data-astro-cid-gx536xi6> <div class="flex space-x-4 mb-4" data-astro-cid-gx536xi6> <div class="w-1/2" data-astro-cid-gx536xi6> <p class="text-center mb-2 text-sm font-medium text-gray-500" data-astro-cid-gx536xi6>改變前</p> <img src="/images/before2.jpg" alt="改變前" class="w-full h-48 object-cover rounded-lg" data-astro-cid-gx536xi6> </div> <div class="w-1/2" data-astro-cid-gx536xi6> <p class="text-center mb-2 text-sm font-medium text-gray-500" data-astro-cid-gx536xi6>改變後</p> <img src="/images/after2.jpg" alt="改變後" class="w-full h-48 object-cover rounded-lg" data-astro-cid-gx536xi6> </div> </div> <h3 class="text-lg font-semibold text-pink-600" data-astro-cid-gx536xi6>專業人士的形象提升</h3> <p class="text-gray-600 text-sm" data-astro-cid-gx536xi6>從基本穿搭到高階形象管理，全方位提升</p> </div> <div class="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow" data-astro-cid-gx536xi6> <div class="flex space-x-4 mb-4" data-astro-cid-gx536xi6> <div class="w-1/2" data-astro-cid-gx536xi6> <p class="text-center mb-2 text-sm font-medium text-gray-500" data-astro-cid-gx536xi6>改變前</p> <img src="/images/before3.jpg" alt="改變前" class="w-full h-48 object-cover rounded-lg" data-astro-cid-gx536xi6> </div> <div class="w-1/2" data-astro-cid-gx536xi6> <p class="text-center mb-2 text-sm font-medium text-gray-500" data-astro-cid-gx536xi6>改變後</p> <img src="/images/after3.jpg" alt="改變後" class="w-full h-48 object-cover rounded-lg" data-astro-cid-gx536xi6> </div> </div> <h3 class="text-lg font-semibold text-pink-600" data-astro-cid-gx536xi6>企業主的領導形象塑造</h3> <p class="text-gray-600 text-sm" data-astro-cid-gx536xi6>打造專屬風格，展現領導魅力與品牌一致性</p> </div> </div> </div> </section> ` })}`;
}, "/Users/jillchung/CascadeProjects/chunget.github.io/src/pages/testimonials.astro", void 0);

const $$file = "/Users/jillchung/CascadeProjects/chunget.github.io/src/pages/testimonials.astro";
const $$url = "/testimonials";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Testimonials,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
