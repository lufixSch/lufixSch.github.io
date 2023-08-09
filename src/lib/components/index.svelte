<script lang="ts">
	import type { mdMetaData } from '$lib/types';

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
		<li>
			{#if article.metadata?.header}
				{#if indent(article.slug) < 1}
					<h4 style="margin-left: {indent(article.slug) * 8}px;">{article.metadata.title}</h4>
				{:else if indent(article.slug) < 2}
					<h5 style="margin-left: {indent(article.slug) * 8}px;">{article.metadata.title}</h5>
				{:else}
					<h6 style="margin-left: {indent(article.slug) * 8}px;">{article.metadata.title}</h6>
				{/if}
			{:else}
				<a
					class="hover:text-primary dark:hover:text-primary-dark"
					style="margin-left: {indent(article.slug) * 8}px;"
					href={article.slug}>{article.metadata.title}</a
				>
			{/if}
		</li>
	{/each}
</ul>
