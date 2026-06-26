<script lang="ts">
	import RepoIcon from './repo_icon.svelte';
	import StatusBadge from './status_badge.svelte';
	import type { ProjectStatus, RepoType } from '$lib/types';

	export let source: string;
	export let icon_type: RepoType;
	export let status: ProjectStatus;

	// get lufixSch/sound-laser from https://github.com/lufixSch/sound-laser.git
	const repo_name = source.split('/').slice(-2).join('/').split('.git')[0];
</script>

<a
	href={source}
	title="View source (Project status: {status})"
	class="z-10 bg-white dark:bg-gray-800 flex items-center m-2 p-3 w-fit rounded-lg border border-gray-200 dark:border-gray-700 text-inherit dark:text-inherit hover:no-underline hover:text-inherit hover:dark:text-inherit hover:border-primary hover:dark:border-primary-dark transition-all duration-200"
	target="_blank"
>
	<div class="w-8 h-8 mr-3 flex-shrink-0 fill-gray-900 dark:fill-gray-100">
		<RepoIcon icon_type={icon_type} />
	</div>
	<div class="flex items-center gap-3">
		<p class="m-0 font-medium">{repo_name}</p>
		<StatusBadge {status} />
	</div>
</a>
