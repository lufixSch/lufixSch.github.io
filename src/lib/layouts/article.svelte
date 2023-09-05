<script>
	import '$lib/styles/code.postcss';
	import '@fontsource/ibm-plex-mono/latin.css';

	import SourceCard from '$lib/components/source_card.svelte';

	/**
	 * @type {string}
	 */
	export let title;

	/**
	 * @type {string}
	 */
	export let repository;

	/**
	 * @type {import('$lib/types').RepoType}
	 */
	export let repository_icon;

	/**
	 * @type {import('$lib/types').ProjectStatus}
	 */
	export let status;
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="og:title" content={title} />
</svelte:head>

<section
	id="header"
	class="md:mx-[-2.5rem] lg:mx-[-5rem] lg:mt-[-2rem] mb-[-2.5rem] flex justify-center md:justify-end"
>
	<SourceCard source={repository} icon_type={repository_icon} {status} />
</section>
<section id="content">
	<slot />
</section>
