<script lang="ts">
	import { theme } from '../stores';
	import { onMount, onDestroy } from 'svelte';
	import { afterNavigate } from '$app/navigation';

	let open_menu = false;
	let active_section = 'about-me';
	let observer: IntersectionObserver | null = null;

	const routes = [
		{ path: '/#projects', name: 'Projects', id: 'projects' },
		{ path: '/#resources', name: 'Resources', id: 'resources' }
	];

	const setupObserver = () => {
		if (observer) {
			observer.disconnect();
		}

        console.log("Setup Observer")

		const sections = document.querySelectorAll('section[id]');
		const newObserver = new IntersectionObserver(
			(entries) => {
				let mostVisibleSection = '';
				let maxIntersectionRatio = -1;

				entries.forEach((entry) => {
					if (entry.isIntersecting && entry.intersectionRatio > maxIntersectionRatio) {
						maxIntersectionRatio = entry.intersectionRatio;
						mostVisibleSection = entry.target.id;
					}
				});

				if (mostVisibleSection) {
					active_section = mostVisibleSection;
				}
			},
			{ threshold: 0.1, rootMargin: '-60px 0px -70% 0px' }
		);

		observer = newObserver;
		sections.forEach((section) => newObserver.observe(section));
	};

	onMount(() => {
		setupObserver();
	});

	afterNavigate(() => {
		setupObserver();
	});

	onDestroy(() => {
		if (observer) {
			observer.disconnect();
		}
	});
</script>

<nav class="z-20 fixed top-0 left-0 w-full">
	<div
		class="m-2 px-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm"
	>
		<div class="flex justify-between items-center h-14">
			<div class="flex items-center">
				<a href="/">
					<img
						src={$theme === 'light' ? '/logo_light_small.png' : '/logo_dark_small.png'}
						alt="logo"
						class="w-12 h-12"
					/>
				</a>
			</div>
			<ul class="hidden sm:flex flex-row">
				{#each routes as route}
					<li>
						<a class:active={active_section === route.id} href={route.path}>{route.name}</a>
					</li>
				{/each}
			</ul>
			<button class="flex sm:hidden" type="button" on:click={() => (open_menu = !open_menu)}
				><svg
					class="fill-current p-4"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 448 512"
					height="3.5rem"
					><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
						d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
					/></svg
				></button
			>
		</div>
		{#if open_menu}
			<ul class="flex-row" id="main-menu">
				{#each routes as route}
					<li>
						<a href={route.path}>{route.name}</a>
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</nav>

<style lang="postcss">
	a {
		@apply text-gray-900 dark:text-gray-100;
	}

	ul {
		@apply list-none;
	}
	li a {
		@apply block px-4 py-4 font-medium uppercase;
		@apply transition duration-200;
		@apply no-underline;
		@apply hover:text-primary dark:hover:text-primary-dark;
		@apply hover:border-b active:border-b border-primary dark:border-primary-dark;
	}
	li a.active {
		@apply text-primary dark:text-primary-dark;
		@apply border-b border-primary dark:border-primary-dark;
	}
</style>
