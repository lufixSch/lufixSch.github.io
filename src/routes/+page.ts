import { loadArticle, loadArticles } from '$lib/md';

export async function load() {
	const highlight_projects = [
		'bachelor_thesis',
		'electronics_projects/effect_pedals',
		'programming_projects/isek'
	];

	const highlght_resources = ['guides/latex', 'templates/report', 'templates/thesis'];

	const mdPages = import.meta.glob('./**/*.md');
	const projects = await Promise.all(
		highlight_projects.map((project) => loadArticle(mdPages, project, 'projects'))
	);
	const resources = await Promise.all(
		highlght_resources.map((resource) => loadArticle(mdPages, resource, 'resources'))
	);
	const updates = await loadArticles(mdPages, 'updates');

	return { projects, resources, updates };
}
