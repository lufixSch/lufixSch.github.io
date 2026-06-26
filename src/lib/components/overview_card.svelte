<script lang="ts">
	import type { mdMetaData } from '$lib/types';

	export let metadata: mdMetaData;
	export let slug: string;
	export let bg: 'background' | 'surface';

	const isBackground = bg === 'background';
</script>

<a
	href={slug}
	class="flex flex-col justify-between w-64 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 {isBackground ? 'bg-gray-50 dark:bg-gray-900' : 'bg-gray-100 dark:bg-gray-800'}"
>
	<div>
		{#if metadata.image}
			<div class="relative overflow-hidden h-24 flex justify-center items-end">
				<img
					src={metadata.image}
					alt={metadata.title}
					class="absolute w-full h-24 object-cover"
				/>
			</div>
		{/if}
		<div class="px-4 py-3">
			<h4 class="text-center font-bold mb-2">{metadata.title}</h4>
			<p class="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">{metadata.description}</p>
		</div>
	</div>
	<div class="px-4 pb-4">
		<span class="block text-center text-primary dark:text-primary-light hover:underline">Read more</span>
	</div>
</a>
