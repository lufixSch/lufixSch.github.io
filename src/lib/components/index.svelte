<script lang="ts">
	import type { mdMetaData } from '$lib/types';
	import IndexItem from './index_item.svelte';

	export let articles: {
		metadata: mdMetaData;
		slug: string;
	}[];
</script>

<ul>
	{#each articles as article}
		<IndexItem slug={article.slug}>
			{#if article.metadata?.header}
				{article.metadata.title}
			{:else}
				<a
					class="hover:text-primary dark:hover:text-primary-dark"
					href={article.slug}
					title={article.metadata.description}
					>{article.metadata.title}
				</a>
			{/if}
		</IndexItem>
	{/each}
</ul>
