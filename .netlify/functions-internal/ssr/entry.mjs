import { renderers } from './renderers.mjs';
import { manifest } from './manifest_B-bGDG3n.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./chunks/generic_D7YT_9C1.mjs');
const _page1 = () => import('./chunks/404_C8_9t908.mjs');
const _page2 = () => import('./chunks/cv_CsX-P6Qf.mjs');
const _page3 = () => import('./chunks/projects_DhccjW3m.mjs');
const _page4 = () => import('./chunks/rss_CvlaIMDw.mjs');
const _page5 = () => import('./chunks/services_BaGU8Pz0.mjs');
const _page6 = () => import('./chunks/index_C3jVLJtJ.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/cv.astro", _page2],
    ["src/pages/projects.astro", _page3],
    ["src/pages/rss.xml.js", _page4],
    ["src/pages/services.astro", _page5],
    ["src/pages/index.astro", _page6]
]);
const middleware = (_, next) => next();
const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware
});
const _args = {
    "middlewareSecret": "03355cf9-fb9b-408a-b483-3b1533ca3b99"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
