<script lang="ts">
	import { page } from '$app/stores';
	import { theme } from '../stores';

	let open_menu = false;

	const routes = [
		{ path: '/projects', name: 'Projects' },
		{ path: '/resources', name: 'Resources' },
		{ path: '/updates', name: 'Updates' }
	];
</script>

<nav class="z-20 bg-gray-100 dark:bg-gray-800 fixed top-0 left-0 w-full">
	<div class="flex justify-between items-center h-14">
		<div class="flex items-center">
			<a href="/">
				<img
					src={$theme === 'light' ? '/logo_light_small.png' : '/logo_dark_small.png'}
					alt="logo"
					class="ml-4 w-12 h-12"
				/>
			</a>
		</div>
		<ul class="hidden sm:flex flex-row">
			{#each routes as route}
				<li>
					<a class:active={$page.url.pathname.includes(route.path)} href={route.path}
						>{route.name}</a
					>
				</li>
			{/each}
		</ul>
		<button
			class="flex sm:hidden hover:bg-primary dark:hover:bg-primary-dark hover:text-white"
			type="button"
			on:click={() => (open_menu = !open_menu)}
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
					<a class:active={$page.url.pathname === route.path} href={route.path}>{route.name}</a>
				</li>
			{/each}
		</ul>
	{/if}
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
		@apply hover:text-white;
		@apply hover:bg-primary;
		@apply dark:hover:bg-primary-dark;
	}
	li a.active {
		@apply text-white;
		@apply bg-primary;
		@apply dark:bg-primary-dark;
	}
</style>
