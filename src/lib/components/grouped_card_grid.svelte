<script lang="ts">
	import type { mdMetaData } from '$lib/types';
	import Card from './article_card.svelte';

	interface Article {
		slug: string;
		metadata: mdMetaData;
	}

	interface Group {
		level: number;
		articles: Article[];
	}

	interface GroupedArticles {
		uncategorized: { slug: string; metadata: mdMetaData }[];
		groups: { [key: string]: Group };
	}

	export let articles: Article[];

	function getLevel(slug: string) {
		return slug.replace('/index', '').split('/').length - 2;
	}

	function groupArticles(articles: { slug: string; metadata: mdMetaData }[]): GroupedArticles {
		const result: GroupedArticles = { uncategorized: [], groups: {} };

		let category: string | undefined = undefined;
		articles.forEach(({ slug, metadata }) => {
			const level = getLevel(slug);

			if (metadata?.header) {
				category = metadata?.title;
				result.groups[category] = { level, articles: [] };
				return;
			}

			if (category == undefined) {
				result.uncategorized.push({ slug, metadata });
			} else {
				result.groups[category].articles.push({ slug, metadata });
			}
		});

		return result;
	}

	const grouped = groupArticles(articles);
</script>

{#if grouped.uncategorized.length > 0}
	<div class="mb-8">
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
			{#each grouped.uncategorized as article}
				<Card {article} />
			{/each}
		</div>
	</div>
{/if}

{#each Object.entries(grouped.groups) as [groupName, { level, articles }]}
	<div class="mb-8">
		{#if level < 1}
			<h3>{groupName}</h3>
		{:else if level < 2}
			<h4>{groupName}</h4>
		{:else if level < 3}
			<h5>{groupName}</h5>
		{:else}
			<h6>{groupName}</h6>
		{/if}
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
			{#each articles as article}
				<Card {article} />
			{/each}
		</div>
	</div>
{/each}
