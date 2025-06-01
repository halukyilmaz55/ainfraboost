globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, m as maybeRenderHead, e as addAttribute, b as renderTemplate, d as renderComponent } from '../chunks/astro/server_CXOgNFyi.mjs';
export { renderers } from '../renderers.mjs';

const $$Logo = createComponent(($$result, $$props, $$slots) => {
  const logoSrc = "/ainfraboost.png";
  return renderTemplate`${maybeRenderHead()}<div style="text-align:center; margin-top:2rem;"> <img${addAttribute(logoSrc, "src")} alt="Ainfraboost Logo" style="max-width: 200px;"> </div>`;
}, "/Users/halukyilmaz/Desktop/githubmyrepos/ainfraboost/src/components/Logo.astro", void 0);

const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Ainfraboost \u2013 Cloud \u2022 DevOps \u2022 AI" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Welcome to Ainfraboost</h1> <p>Cloud • DevOps • AI • Technology with a Twist</p> ${renderComponent($$result2, "Logo", $$Logo, {})} ` })}`;
}, "/Users/halukyilmaz/Desktop/githubmyrepos/ainfraboost/src/layouts/BaseLayout.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Ainfraboost \u2013 Cloud \u2022 DevOps \u2022 AI" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Welcome to Ainfraboost</h1> <p>Cloud • DevOps • AI • Technology with a Twist</p> ${renderComponent($$result2, "Logo", $$Logo, {})} ` })}`;
}, "/Users/halukyilmaz/Desktop/githubmyrepos/ainfraboost/src/pages/index.astro", void 0);

const $$file = "/Users/halukyilmaz/Desktop/githubmyrepos/ainfraboost/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
