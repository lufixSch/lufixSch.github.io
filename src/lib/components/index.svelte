<script lang="ts">
	export let projects: {
		title: string;
		slug: string;
	}[];

	function indent(slug: string) {
		return slug.replace('/index', '').split('/').length - 4;
	}
</script>

<ul>
	{#each projects as project}
		<li>
			<a
				class="hover:text-primary dark:hover:text-primary-dark"
				style="margin-left: {indent(project.slug) * 8}px;"
				href={project.slug}>{project.title}</a
			>
		</li>
	{/each}
</ul>
