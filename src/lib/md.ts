import type { mdMetaData } from './types';


export function loadArticles(
	mdPages: Record<string, () => Promise<unknown>>,
	prefix: string | null = null
) {
	return Promise.all(
		Object.keys(mdPages).map(async (path) => {
			const slug = path.replace('/+page.md', '').replace('./', prefix ? `/${prefix}/` : '/');
			const { metadata } = (await mdPages[path]()) as { metadata: mdMetaData };

			return { slug, metadata };
		})
	);
}

