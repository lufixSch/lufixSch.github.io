<script lang="ts">
	export let title: string;
</script>

<div class="flex justify-center">
	<div class="pb-8 px-8 md:px-12 lg:px-24 w-full md:max-w-7xl">
		<h2>{title}</h2>
		<slot />
	</div>
</div>
