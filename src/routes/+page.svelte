<script lang="ts">
	import OverviewCard from '$lib/components/overview_card.svelte';
	import Section from '$lib/components/section.svelte';

	export let data;
	const { projects, resources, updates } = data;
</script>

<svelte:head>
	<title>Lukas' Homepage</title>
	<meta name="description" content="Lukas' Homepage containing his projects and guides." />
</svelte:head>

<section id="about-me" class="pt-12 md:pt-12 lg:pt-24 md:pb-4 lg:pb-16">
	<Section title="Hi there!">
		<h6>
			I'm Lukas, a tech enthusiast with a passion for creating innovative electronic and software
			solutions.<br />
			I studied Electronics and Computer Engineering at the FH Joanneum in Graz, where I earned my Bachelor
			of Science, and I'm now pursuing my Master's degree at the Technical University in Munich.
			<br />
			On my website, you'll find my private and academic projects, including my Bachelor thesis and LaTeX
			templates. Feel free to explore these resources, and get in touch if you have any questions or
			feedback!
		</h6>
	</Section>
</section>

<section id="projects">
	<Section title="Projects">
		<div
			class="flex w-full justify-between items-center md:items-stretch flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6"
		>
			{#each projects as project}
				<OverviewCard metadata={project.metadata} slug={project.slug} bg="background" />
			{/each}
		</div>
	</Section>
</section>

<section id="ressources">
	<Section title="Ressources">
		<div
			class="flex w-full justify-between items-center md:items-stretch flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6"
		>
			{#each resources as ressource}
				<OverviewCard metadata={ressource.metadata} slug={ressource.slug} bg="surface" />
			{/each}
		</div>
	</Section>
</section>

<!--WIP - Need to add some blog posts/updates first-->
<!--<section id="updates" />-->

<style lang="postcss">
    @reference "tailwindcss";

	section:nth-child(2n) {
		@apply bg-gray-100 dark:bg-gray-800;
	}
</style>
