<script lang="ts">
	import Navbar from '../lib/components/navbar.svelte';
	import '../app.postcss';

	import { theme } from '$lib/stores';
	import { onMount } from 'svelte';
	import Footer from '$lib/components/footer.svelte';

	onMount(() => {
		// Listen for changes to the 'prefers-color-scheme' media query and update the theme
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		theme.set(mediaQuery.matches ? 'dark' : 'light');
		mediaQuery.addEventListener('change', (e) => {
			theme.set(e.matches ? 'dark' : 'light');
		});
	});
</script>

<Navbar />
<div class="min-h-screen flex flex-col justify-between">
	<body class="">
		<slot />
	</body>
	<Footer />
</div>
