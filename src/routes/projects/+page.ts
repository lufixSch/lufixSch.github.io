import type { mdMetaData } from '$lib/types';

export async function load() {
	const mdPages = import.meta.glob('/src/articles/projects/**/*.md');
	const projects = await Promise.all(
		Object.keys(mdPages).map(async (path) => {
			const slug = path.replace('.md', '').replace('/src/articles', '').replace('[slug]/', '');

			let title: string;
			try {
				const { metadata } = (await mdPages[path]()) as { metadata: mdMetaData };
				title = metadata.title;
			} catch {
				title = slug.split('/').pop() as string;
			}

			return { slug, title };
		})
	);

	return { projects };
}
