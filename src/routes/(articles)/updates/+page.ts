import { loadArticles } from '$lib/md';

export async function load() {
	const mdPages = import.meta.glob('./**/*.md');
	const articles = await loadArticles(mdPages, 'updates');

	return { articles };
}
