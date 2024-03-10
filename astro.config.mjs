import { defineConfig } from 'astro/config';
import zeabur from '@zeabur/astro-adapter/serverless';

export default defineConfig({
  output: 'server',
  adapter: zeabur(),
});