<script lang="ts">
	import GroupedCardGrid from '$lib/components/grouped_card_grid.svelte';
	import Section from '$lib/components/section.svelte';

	export let data;
	const { projects, resources } = data;
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
		<p class="mb-2 pb-2 border-b-2">Here are some of the projects I've worked on over the years.</p>
		<GroupedCardGrid articles={projects} />
	</Section>
</section>

<section id="resources">
	<Section title="Resources">
		<p class="mb-2 pb-2 border-b-2">
			This section contains all the resources I have created. This includes templates, formula sheets,
			and some guides. I hope you find them useful.
		</p>
		<GroupedCardGrid articles={resources} />
	</Section>
</section>
