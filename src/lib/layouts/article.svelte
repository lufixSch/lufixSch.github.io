<script>
	import '$lib/styles/code.postcss';
	import '@fontsource/ibm-plex-mono/latin.css';

	import SourceCard from '$lib/components/source_card.svelte';
	import moment from 'moment';

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

	/**
	 * @type {string}
	 */
	export let last_update;
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
		<img
			src={image}
			alt="Article related header"
			class="absolute w-full h-36 object-cover rounded-md"
		/>
	{/if}
	<SourceCard source={repository} icon_type={repository_icon} {status} />
</section>
<section id="content">
	<slot />
</section>
<p class="mt-4 mb-4 text-xs text-right">
	Last page update: {moment(last_update).utc().format('dddd, MMMM Do YYYY, HH:mm:ss z')}
</p>
