<script lang="ts">
	import Index from '$lib/components/index.svelte';

	export let data;
	const { articles } = data;
</script>

<svelte:head>
	<title>Projects</title>
	<meta name="description" content="Projects I have worked on." />
</svelte:head>

<h2>Projects</h2>
<p class="mb-2 pb-2 border-b-2">Here are some of the projects I've worked on over the years.</p>
<Index {articles} />
