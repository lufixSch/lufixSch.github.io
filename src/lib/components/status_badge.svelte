<script lang="ts">
	import type { ProjectStatus } from '$lib/types';

	export let status: ProjectStatus;
	export let size: 'sm' | 'md' | 'lg' = 'sm';

	const statusColors: Record<ProjectStatus, string> = {
		finished: 'bg-status-finished text-status-finished-text dark:bg-status-finished-dark dark:text-status-finished-text-dark',
		wip: 'bg-status-wip text-status-wip-text dark:bg-status-wip-dark dark:text-status-wip-text-dark',
		stalled: 'bg-status-stalled text-status-stalled-text dark:bg-status-stalled-dark dark:text-status-stalled-text-dark',
		abandoned: 'bg-status-abandoned text-status-abandoned-text dark:bg-status-abandoned-dark dark:text-status-abandoned-text-dark'
	};

	const sizeClasses = {
		sm: 'px-2 py-0.5 text-xs',
		md: 'px-3 py-1 text-sm',
		lg: 'px-4 py-1.5 text-base'
	};

	const currentStatusColor = statusColors[status] || statusColors.abandoned;
	const currentSizeClass = sizeClasses[size];
</script>

<span
	class="inline-flex items-center rounded font-medium {currentStatusColor} {currentSizeClass}"
>
	{status}
</span>
