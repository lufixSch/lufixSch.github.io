<script lang="ts">
	import type { mdMetaData } from '$lib/types';
	import RepoIcon from './repo_icon.svelte';

	export let article: {
		slug: string;
		metadata: mdMetaData;
	};

	const { metadata, slug } = article;

	const statusColors: Record<mdMetaData['status'], string> = {
		finished: 'bg-status-finished text-status-finished-text dark:bg-status-finished-dark dark:text-status-finished-text-dark',
		wip: 'bg-status-wip text-status-wip-text dark:bg-status-wip-dark dark:text-status-wip-text-dark',
		stalled: 'bg-status-stalled text-status-stalled-text dark:bg-status-stalled-dark dark:text-status-stalled-text-dark',
		abandoned: 'bg-status-abandoned text-status-abandoned-text dark:bg-status-abandoned-dark dark:text-status-abandoned-text-dark'
	};

	const currentStatusColor = statusColors[metadata.status] || statusColors.abandoned;
</script>

<a
	href={slug}
	class="block rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 hover:border-primary hover:dark:border-primary-dark transition-all duration-200 hover:no-underline"
>
	<div class="flex flex-col h-full">
		<div class="flex-grow">
			<h5 class="mt-0 text-gray-900 dark:text-gray-100">{metadata.title}</h5>
			{#if metadata.description}
				<p class="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-3">
					{metadata.description}
				</p>
			{/if}
		</div>
		<div class="flex items-center justify-between gap-2 mt-3">
			<span
				class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium {currentStatusColor}"
			>
				{metadata.status}
			</span>
			{#if metadata.repository_icon}
				<span class="w-4 h-4 fill-gray-900 dark:fill-gray-100">
					<RepoIcon icon_type={metadata.repository_icon} />
				</span>
			{/if}
		</div>
	</div>
</a>
