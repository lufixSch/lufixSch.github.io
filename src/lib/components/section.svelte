<script lang="ts">
	export let title: string;
    export let center = false
</script>

<div class="flex justify-center py-4 md:py-12">
	<div class="w-full md:max-w-7xl px-4 md:px-8 lg:px-12">
		<h2 class="{center ? 'text-center' : ''}">{title}</h2>
		<slot />
	</div>
</div>
