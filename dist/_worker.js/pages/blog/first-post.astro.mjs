globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, a as createAstro, m as maybeRenderHead, r as renderSlot, b as renderTemplate, d as renderComponent } from '../../chunks/astro/server_CXOgNFyi.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$BlogLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogLayout;
  const { title, date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article> <h1>${title}</h1> <p><em>${date}</em></p> ${renderSlot($$result, $$slots["default"])} </article>`;
}, "/Users/halukyilmaz/Desktop/githubmyrepos/ainfraboost/src/layouts/BlogLayout.astro", void 0);

const $$Astro = createAstro();
const $$FirstPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FirstPost;
  const [post] = await Astro2.glob(/* #__PURE__ */ Object.assign({}), () => "../../../content/blog/first-post.md");
  const { title, date, category = "General" } = post.frontmatter;
  const Content = post.default;
  return renderTemplate`${renderComponent($$result, "BlogLayout", $$BlogLayout, { "title": title, "date": date }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<p><strong>Kategori:</strong> ${category}</p> ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/Users/halukyilmaz/Desktop/githubmyrepos/ainfraboost/src/pages/blog/first-post.astro", void 0);

const $$file = "/Users/halukyilmaz/Desktop/githubmyrepos/ainfraboost/src/pages/blog/first-post.astro";
const $$url = "/blog/first-post";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$FirstPost,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
