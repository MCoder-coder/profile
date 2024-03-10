import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead } from '../astro_8kWVznuq.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from './404_DZx8V5zX.mjs';
import { $ as $$HorizontalCard } from './index_BOJuTV7e.mjs';

const $$Astro = createAstro();
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Projects", "sideBarActiveItemID": "projects" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div> <div class="text-3xl w-full font-bold mb-5">Projects</div> </div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "UGG Coma", "img": "/ugg-min.png", "url": "#", "badge": "NEW" })} <div class="divider my-0"></div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "UGG", "img": "/ugg2-min.png", "url": "#" })} <div> <div class="text-3xl w-full font-bold mb-5 mt-10">Projects</div> </div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "AGENTES", "img": "/agentes-min.png", "url": "#" })} <div class="divider my-0"></div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "Apra", "img": "/apra.jpg", "url": "#" })} <div class="divider my-0"></div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "Pagina Fotografias", "img": "/fotografo-min.png", "url": "https://www.juanschtrefotografo.com/" })} <div class="divider my-0"></div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "App de gestion de Articulos", "img": "/siskit.webp", "url": "https://play.google.com/store/apps/details?id=com.jr.lectorbarras&hl=es_419&gl=US" })} ` })}`;
}, "/Users/manueljesusreeb/Documents/astrofy-main/profile/src/pages/projects.astro", void 0);

const $$file = "/Users/manueljesusreeb/Documents/astrofy-main/profile/src/pages/projects.astro";
const $$url = "/projects";

export { $$Projects as default, $$file as file, $$url as url };
