globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, a as createAstro, m as maybeRenderHead, e as addAttribute, b as renderTemplate } from '../chunks/astro/server_CXOgNFyi.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = await Astro2.glob(/* #__PURE__ */ Object.assign({}), () => "../../../content/blog/*.md");
  const postList = posts.map((post) => {
    const { title, date, category = "General", summary = "" } = post.frontmatter;
    const slug = post.file.split("/").pop().replace(".md", "");
    return { title, date, category, summary, slug };
  }).sort((a, b) => new Date(b.date) - new Date(a.date));
  return renderTemplate`${maybeRenderHead()}<h1>Ainfraboost Blog</h1> <ul> ${postList.map((post) => renderTemplate`<li style="margin-bottom:1.5rem"> <a${addAttribute(`/blog/${post.slug}`, "href")}><strong>${post.title}</strong></a> — <em>${post.date}</em><br> <small><strong>${post.category}</strong> | ${post.summary}</small> </li>`)} </ul>`;
}, "/Users/halukyilmaz/Desktop/githubmyrepos/ainfraboost/src/pages/blog/index.astro", void 0);

const $$file = "/Users/halukyilmaz/Desktop/githubmyrepos/ainfraboost/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
