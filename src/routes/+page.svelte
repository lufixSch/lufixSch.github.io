<svelte:head>
	<title>Lukas' Homepage</title>
	<meta name="description" content="Lukas' Homepage containing his projects and guides." />
</svelte:head>

<section id="about-me" class="p-8 md:p-12 lg:p-24 overflow-y-scroll">
	<h2>Hi there!</h2>
	<h6>
		I'm Lukas, a tech enthusiast with a passion for creating innovative electronic and software
		solutions.<br />
		I studied Electronics and Computer Engineering at the FH Joanneum in Graz, where I earned my Bachelor
		of Science, and I'm now pursuing my Master's degree at the Technical University in Munich.
		<br />
		On my website, you'll find my private and academic projects, including my Bachelor thesis and LaTeX
		templates. Feel free to explore these resources, and get in touch if you have any questions or feedback!
	</h6>
</section>

<section id="projects" />

<section id="guides" />

<section id="updates" />

<style lang="postcss">
	section {
		@apply max-h-[560px] h-screen;
	}

	section:nth-child(2n) {
		@apply bg-gray-100 dark:bg-gray-800;
	}
</style>
