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

<section id="about-me" class="pt-12 md:pt-12 lg:pt-24 pb-8 md:pb-4 lg:pb-16">
	<Section title="Hi there!">
		<p>
			I'm Lukas. I build things, from analog circuits to full-stack applications. I studied
			Electronics and Computer Engineering at the FH Joanneum in Graz and got my Bachelor of Science
			there. After that, I completed my Master's in Electrical Engineering and Information
			Technology at the Technical University of Munich with a focus on neuroscience and machine
			learning.
			<br />
			This site contains my private and academic projects, including my Bachelor thesis as well as LaTeX
			and Typst templates. Have a look around, and feel free to reach out if you have questions or want
			to get in touch.
		</p>
	</Section>
</section>

<section id="projects">
	<Section title="Projects" center>
		<GroupedCardGrid articles={projects} />
	</Section>
</section>

<section id="resources">
	<Section title="Resources" center>
		<GroupedCardGrid articles={resources} />
	</Section>
</section>
