import { loadArticles } from '$lib/md';

export async function load() {
	const mdPages = import.meta.glob('./**/*.md');
	const projects = (await loadArticles(mdPages, null, '/(articles)/')).filter(({ slug }) =>
		slug.includes('projects')
	);
	const resources = (await loadArticles(mdPages, null, '/(articles)/')).filter(({ slug }) =>
		slug.includes('resources')
	);

	return { projects, resources };
}
