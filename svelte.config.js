import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import { mdsvex } from 'mdsvex';
import highlighter from './src/lib/util/codeHighlighter.mjs';
// import remarkCallouts from './src/lib/util/remarkCallouts.mjs';

const layouts = {
	default: join(__dirname, './src/lib/layouts/default.svelte'),
	article: join(__dirname, './src/lib/layouts/article.svelte'),
	error: join(__dirname, './src/lib/layouts/error.svelte')
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	extensions: ['.svelte', '.md'],
	preprocess: [
		mdsvex({
			extensions: ['.md'],
			layout: {
				_: layouts.default,
				project: layouts.article,
				article: layouts.article,
				error: layouts.error
			},
			highlight: {
				highlighter
			},
			remarkPlugins: []
		}),
		vitePreprocess()
	],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			preprocess: false
		})
	}
};

export default config;
