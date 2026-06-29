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

		let categoryTree: string[] = [];
		articles.forEach(({ slug, metadata }) => {
			const level = getLevel(slug);

			if (metadata?.header) {
				if (level <= categoryTree.length) {
					categoryTree.splice(level);
				}
				categoryTree.push(metadata?.title);
				result.groups[metadata?.title] = { level, articles: [] };
				return;
			}

			if (level == 0) {
				result.uncategorized.push({ slug, metadata });
			} else {
				const category = [...categoryTree].reverse().find((_, idx) => idx < level);
				if (category == undefined) {
					console.error(
						`Unable to find correct Subcategory for ${slug} - Category Tree: ${categoryTree}, Level: ${level}`
					);
					return;
				}

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
	<div class:mb-8={articles.length > 0}>
		{#if level < 1}
			<h3>{groupName}</h3>
		{:else if level < 2}
			<h4>{groupName}</h4>
		{:else if level < 3}
			<h5>{groupName}</h5>
		{:else}
			<h6>{groupName}</h6>
		{/if}

		{#if articles.length > 0}
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
				{#each articles as article}
					<Card {article} />
				{/each}
			</div>
		{/if}
	</div>
{/each}
