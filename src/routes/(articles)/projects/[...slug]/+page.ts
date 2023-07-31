import { error } from '@sveltejs/kit';

export async function load({ params }) {
	console.log('Projects Path:', params.slug);

	const slug = params.slug.split('/', 2);

	try {
		const post = await import(`../../../../articles/projects/${slug[0]}/${slug[1]}.md`);
		const { default: content, metadata } = post;
		return { content, metadata };
	} catch (err) {
		console.log(err);
		throw error(404, 'It seems like this project does not exist!');
	}
}
