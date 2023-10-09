<script lang="ts">
	import type { ProjectStatus, RepoType } from '$lib/types';

	export let source: string;
	export let icon_type: RepoType;
	export let status: ProjectStatus;

	// get lufixSch/sound-laser from https://github.com/lufixSch/sound-laser.git
	const repo_name = source.split('/').slice(-2).join('/').split('.git')[0];
</script>

<a
	href={source}
	title="View source (Project status: {status})"
	class="z-10 bg-gray-50 dark:bg-gray-900 flex items-center m-2 p-2 w-fit rounded-md border-solid border-2 text-inherit dark:text-inherit hover:no-underline hover:text-inherit hover:dark:text-inherit space-x-1 hover:border-primary hover:dark:border-primary-dark fill-gray-900 dark:fill-gray-100 hover:fill-primary dark:hover:fill-primary-dark"
	target="_blank"
>
	<div id="icon" class="w-12 h-12 fill-inherit dark:fill-inherit">
		{#if icon_type == 'github'}
			<svg xmlns="http://www.w3.org/2000/svg" height="1em" class="h-full" viewBox="0 0 448 512"
				><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
					d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"
				/></svg
			>
		{:else if icon_type == 'gitlab'}
			<svg xmlns="http://www.w3.org/2000/svg" height="1em" class="h-full" viewBox="0 0 448 512"
				><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
					d="M48 32H400C426.5 32 448 53.5 448 80V432C448 458.5 426.5 480 400 480H48C21.5 480 0 458.5 0 432V80C0 53.5 21.5 32 48 32zM382.1 224.9L337.5 108.5C336.6 106.2 334.9 104.2 332.9 102.9C331.3 101.9 329.5 101.3 327.7 101.1C325.9 100.9 324 101.2 322.3 101.8C320.6 102.5 319 103.5 317.8 104.9C316.6 106.3 315.7 107.9 315.2 109.7L285 201.9H162.1L132.9 109.7C132.4 107.9 131.4 106.3 130.2 104.9C128.1 103.6 127.4 102.5 125.7 101.9C123.1 101.2 122.1 100.1 120.3 101.1C118.5 101.3 116.7 101.9 115.1 102.9C113.1 104.2 111.5 106.2 110.6 108.5L65.94 224.9L65.47 226.1C59.05 242.9 58.26 261.3 63.22 278.6C68.18 295.9 78.62 311.1 92.97 321.9L93.14 322L93.52 322.3L161.4 373.2L215.6 414.1C217.1 415.1 220.9 416.9 223.9 416.9C226.9 416.9 229.9 415.1 232.3 414.1L286.4 373.2L354.8 322L355 321.9C369.4 311 379.8 295.8 384.8 278.6C389.7 261.3 388.1 242.9 382.5 226.1L382.1 224.9z"
				/></svg
			>
		{:else if icon_type == 'bitbucket'}
			<svg xmlns="http://www.w3.org/2000/svg" height="1em" class="h-full" viewBox="0 0 512 512"
				><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
					d="M22.2 32A16 16 0 0 0 6 47.8a26.35 26.35 0 0 0 .2 2.8l67.9 412.1a21.77 21.77 0 0 0 21.3 18.2h325.7a16 16 0 0 0 16-13.4L505 50.7a16 16 0 0 0-13.2-18.3 24.58 24.58 0 0 0-2.8-.2L22.2 32zm285.9 297.8h-104l-28.1-147h157.3l-25.2 147z"
				/></svg
			>
		{/if}
	</div>
	<div>
		<p>{repo_name}</p>
		<p class="m-0">
			<span>
				Status: <div class="h-[1.25rem] w-[1.25rem] inline-block align-middle mb-1">
					{#if status == 'finished'}
						<svg
							viewBox="0 0 512 512"
							fill="none"
							class="h-full fill-green-700 dark:fill-green-500"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clip-path="url(#clip0_201_5)">
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M256 512C397.385 512 512 397.385 512 256C512 114.615 397.385 0 256 0C114.615 0 0 114.615 0 256C0 397.385 114.615 512 256 512ZM207.849 340.898C206.876 339.925 206.005 338.89 205.234 337.804L140.21 272.78C130.837 263.408 130.837 248.212 140.21 238.839C149.582 229.467 164.778 229.467 174.151 238.839L225.059 289.747L337.957 176.849C347.329 167.477 362.525 167.477 371.898 176.849C381.271 186.222 381.271 201.418 371.898 210.79L242.382 340.307C242.267 340.426 242.151 340.545 242.033 340.663C241.906 340.789 241.779 340.914 241.65 341.037C232.267 350.27 217.175 350.224 207.849 340.898Z"
								/>
							</g>
							<defs>
								<clipPath id="clip0_201_5">
									<rect width="512" height="512" fill="white" />
								</clipPath>
							</defs>
						</svg>
					{:else if status == 'wip'}
						<svg
							viewBox="0 0 512 512"
							fill="none"
							class="h-full fill-cyan-700 dark:fill-cyan-500"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clip-path="url(#clip0_201_13)">
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M256 512C397.385 512 512 397.385 512 256H256V0C114.615 0 0 114.615 0 256C0 397.385 114.615 512 256 512Z"
								/>
							</g>
							<defs>
								<clipPath id="clip0_201_13">
									<rect width="512" height="512" fill="white" />
								</clipPath>
							</defs>
						</svg>
					{:else if status == 'stalled'}
						<svg
							viewBox="0 0 512 512"
							fill="none"
							class="h-full fill-orange-700 dark:fill-orange-500"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clip-path="url(#clip0_201_26)">
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M256 512C397.385 512 512 397.385 512 256C512 114.615 397.385 0 256 0C114.615 0 0 114.615 0 256C0 397.385 114.615 512 256 512ZM164 232C150.745 232 140 242.745 140 256C140 269.255 150.745 280 164 280H348C361.255 280 372 269.255 372 256C372 242.745 361.255 232 348 232H164Z"
								/>
							</g>
							<defs>
								<clipPath id="clip0_201_26">
									<rect width="512" height="512" fill="white" />
								</clipPath>
							</defs>
						</svg>
					{:else if status == 'abandoned'}
						<svg
							viewBox="0 0 512 512"
							fill="none"
							class="h-full fill-red-700 dark:fill-red-500"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clip-path="url(#clip0_201_32)">
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M256 512C397.385 512 512 397.385 512 256C512 114.615 397.385 0 256 0C114.615 0 0 114.615 0 256C0 397.385 114.615 512 256 512ZM173.976 173.976C183.348 164.603 198.544 164.603 207.917 173.976L256 222.059L304.083 173.976C313.456 164.603 328.652 164.603 338.024 173.976C347.397 183.348 347.397 198.544 338.024 207.917L289.941 256L338.024 304.083C347.397 313.456 347.397 328.652 338.024 338.024C328.652 347.397 313.456 347.397 304.083 338.024L256 289.941L207.917 338.024C198.544 347.397 183.348 347.397 173.976 338.024C164.603 328.652 164.603 313.456 173.976 304.083L222.059 256L173.976 207.917C164.603 198.544 164.603 183.348 173.976 173.976Z"
								/>
							</g>
							<defs>
								<clipPath id="clip0_201_32">
									<rect width="512" height="512" fill="white" />
								</clipPath>
							</defs>
						</svg>
					{/if}
				</div>
			</span>
		</p>
	</div>
</a>
