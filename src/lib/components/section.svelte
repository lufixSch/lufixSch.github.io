<script lang="ts">
	export let title: string;
</script>

<div class="flex justify-center py-12 md:py-16">
	<div class="w-full md:max-w-7xl px-4 md:px-8 lg:px-12">
		<h2 class="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
		<slot />
	</div>
</div>
