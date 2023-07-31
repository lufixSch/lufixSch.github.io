<script lang="ts">
	export let data;
	const { projects } = data;

	console.log(projects);
</script>

<section>
	<ul>
		{#each projects as project}
			<li><a href={project.slug}>{project.title}</a></li>
		{/each}
	</ul>
</section>
