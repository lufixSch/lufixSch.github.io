<script lang="ts">
	export let slug: string;

	function indent(slug: string) {
		return slug.replace('/index', '').split('/').length - 3;
	}
</script>

<li>
	{#if indent(slug) < 1}
		<h4 style="margin-left: {indent(slug) * 12}px;"><slot /></h4>
	{:else if indent(slug) < 2}
		<h5 style="margin-left: {indent(slug) * 12}px;"><slot /></h5>
	{:else if indent(slug) < 3}
		<h6 style="margin-left: {indent(slug) * 12}px;"><slot /></h6>
	{:else}
		<p style="margin-left: {indent(slug) * 12}px;"><slot /></p>
	{/if}
</li>
