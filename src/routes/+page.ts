import { loadArticles } from '$lib/md';

export async function load() {
	const mdPages = import.meta.glob('./**/*.md');
	const projects = await loadArticles(mdPages, 'projects');
	const resources = await loadArticles(mdPages, 'resources');

	return { projects, resources };
}
