import type { mdMetaData } from './types';

/**
 * Loads articles from Markdown files based on given paths and prefixes.
 * @param {Record<string, () => Promise<unknown>>>} mdPages - A map of filepaths to functions that return a promise containing Markdown content.
 * @param {string|null} [prefix=null] - Optional prefix to be added before each article's URL path. If not provided, it defaults to /.
 * @returns {Promise<Array<{slug: string, metadata: mdMetaData}>>>} - An array of objects where each object contains the slug and metadata of an article.
 */
export function loadArticles(
	mdPages: Record<string, () => Promise<unknown>>,
	prefix: string | null = null
): Promise<Array<{ slug: string; metadata: mdMetaData }>> {
	// Iterate through all keys in the mdPages object.
	const promises = Object.keys(mdPages).map(async (path) => {
		// Extract the slug by removing the file extension and any extra directories from the path.
		const slug = path.replace('/+page.md', '').replace('./', prefix ? `/${prefix}/` : '/');
		// Get the metadata from the Markdown content using the returned value from the corresponding mdPages function.
		const { metadata } = (await mdPages[path]()) as { metadata: mdMetaData };
		// Return an object with both the slug and metadata properties.
		return { slug, metadata };
	});
	// Wait for all promises to resolve and store their results in an array.
	return Promise.all(promises);
}

export function loadArticle(
	mdPages: Record<string, () => Promise<unknown>>,
	identifier: string,
	prefix: string | null = null
): Promise<{ slug: string; metadata: mdMetaData }> {
	const promises = Object.keys(mdPages)
		.filter((path) => path.includes(identifier))
		.map(async (path) => {
			const slug = `${prefix ? `/${prefix}/` : '/'}${identifier}`;
			const { metadata } = (await mdPages[path]()) as { metadata: mdMetaData };
			return { slug, metadata };
		});

	return promises[0];
}
