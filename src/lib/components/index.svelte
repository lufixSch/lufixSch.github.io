<script lang="ts">
	import type { mdMetaData } from '$lib/types';
	import IndexItem from './index_item.svelte';

	export let articles: {
		metadata: mdMetaData;
		slug: string;
	}[];

	function indent(slug: string) {
		return slug.replace('/index', '').split('/').length - 3;
	}
</script>

<ul>
	{#each articles as article}
		<IndexItem slug={article.slug}>
			{#if article.metadata?.header}
				{article.metadata.title}
			{:else}
				<a
					class="hover:text-primary dark:hover:text-primary-dark"
					style="margin-left: {indent(article.slug) * 8}px;"
					href={article.slug}>{article.metadata.title}</a
				>
			{/if}
		</IndexItem>
	{/each}
</ul>
