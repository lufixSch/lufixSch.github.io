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

	/**
	 * @type {string}
	 */
	export let image;
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="og:title" content={title} />
</svelte:head>

<section
	id="header"
	class={`relative overflow-hidden flex justify-center md:justify-end items-end ${
		image != null ? 'h-36' : ''
	}`}
>
	{#if image != null}
		<img src={image} alt="Article related header" class="absolute w-full h-36 object-cover" />
	{/if}
	<SourceCard source={repository} icon_type={repository_icon} {status} />
</section>
<section id="content">
	<slot />
</section>
