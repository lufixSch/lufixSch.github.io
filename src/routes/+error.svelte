<script lang="ts">
	import { page } from '$app/stores';
</script>

<body class="flex flex-col items-center justify-center h-screen dark:bg-gray-900 dark:text-white">
	<h1>{$page.status}</h1>
	<h4 class="mt-0">{$page.error?.message}</h4>
	<p class="text-center">
		This might happen because of broken links in articles which were autogenerated from Markdown
		files of the project.<br />
		Try opening the project's GitHub or GitLab page and see if the link works there.
	</p>
</body>
