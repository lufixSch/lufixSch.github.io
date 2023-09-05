<script lang="ts">
	import Index from '$lib/components/index.svelte';

	export let data;
	const { articles } = data;
</script>

<svelte:head>
	<title>Updates</title>
	<meta name="description" content="Updates on what I'm up to." />
</svelte:head>

<h2>Updates</h2>
<p class="mb-2 pb-2 border-b-2">
	If you're interested in what I'm up to, I post updates here. At the moment I am not sure how often
	this will be the case.
</p>
<Index {articles} />
