import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const post = await import(`../../../articles/projects/${params.slug}.md`);
		const { default: content, metadata } = post;
		return { content, metadata };
	} catch {
		throw error(404, 'It seems like this project does not exist!');
	}
}
