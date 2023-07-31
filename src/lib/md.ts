import type { mdMetaData } from './types';

export function loadArticles(mdPages: Record<string, () => Promise<unknown>>, prefix: string) {
	return Promise.all(
		Object.keys(mdPages).map(async (path) => {
			const slug = path.replace('+page.md', '').replace('./', `/${prefix}/`);

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
}
