<script lang="ts">
	import Index from '$lib/components/index.svelte';

	export let data;
	const { articles } = data;
</script>

<h2>Resources</h2>
<p class="mb-2 pb-2 border-b-2">
	This section contains all the resources I have created. This includes templates, formula sheets,
	and some guides. I hope you find them useful.
</p>
<Index {articles} />
