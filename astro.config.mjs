import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://mcoder-coder.github.io/distcv/',
  base: 'https://github.com/MCoder-coder/distcv',
  integrations: [mdx(), sitemap(), tailwind()]
});