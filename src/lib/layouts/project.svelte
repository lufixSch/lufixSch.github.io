<script lang="ts">
	import SourceCard from '$lib/components/source_card.svelte';
	import '$lib/styles/code.postcss';
	import type { ProjectStatus, RepoType } from '$lib/types';
	import '@fontsource/ibm-plex-mono/latin.css';

	export let repository: string;
	export let repository_icon: RepoType;
	export let status: ProjectStatus;
</script>

<section
	id="header"
	class="md:mx-[-2.5rem] lg:mx-[-5rem] lg:mt-[-2rem] mb-[-2.5rem] flex justify-center md:justify-end"
>
	<SourceCard source={repository} icon_type={repository_icon} {status} />
</section>
<section id="content">
	<slot />
</section>
