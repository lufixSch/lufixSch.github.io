<script lang="ts">
	import type { mdMetaData } from '$lib/types';

	export let metadata: mdMetaData;
	export let slug: string;
	export let bg: 'background' | 'surface';
</script>

<div
	class={`flex flex-col justify-between w-64 rounded-md overflow-hidden bg-gray-${
		bg == 'background' ? '50' : '100'
	} dark:bg-gray-${bg == 'background' ? '900' : '800'}`}
>
	<div>
		{#if metadata.image != null}
			<div class="relative overflow-hidden h-24 flex justify-center md:justify-center items-end">
				<img
					src={metadata.image}
					alt="Article related header"
					class="absolute w-full h-24 object-cover"
				/>
			</div>
		{/if}
		<div class="px-2 overflow-y-scroll">
			<h4 class="z-10 text-center">{metadata.title}</h4>
			<p>{metadata.description}</p>
		</div>
	</div>
	<a href={slug} class="block mb-4 text-center">Read more</a>
</div>
