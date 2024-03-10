import { renderers } from './renderers.mjs';
import { manifest } from './manifest_Dgt03hMk.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_5yJCAC5S.mjs');
const _page1 = () => import('./chunks/404_DQ_peNnS.mjs');
const _page2 = () => import('./chunks/cv_jm1BLlYs.mjs');
const _page3 = () => import('./chunks/projects_C5OSj8zj.mjs');
const _page4 = () => import('./chunks/rss_ClCKPJkj.mjs');
const _page5 = () => import('./chunks/services_vn1LqqUJ.mjs');
const _page6 = () => import('./chunks/index_CzU37_ZO.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/cv.astro", _page2],
    ["src/pages/projects.astro", _page3],
    ["src/pages/rss.xml.js", _page4],
    ["src/pages/services.astro", _page5],
    ["src/pages/index.astro", _page6]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "46997cd5-1048-43f2-a480-0ec7c79cbbe3"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
