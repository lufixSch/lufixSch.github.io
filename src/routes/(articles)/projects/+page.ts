import { loadArticles } from '$lib/md';

export async function load() {
	const mdPages = import.meta.glob('./**/*.md');
	const projects = await loadArticles(mdPages, 'projects');

	console.log(projects);

	return { projects };
}
