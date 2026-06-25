<script lang="ts">
	import RepoIcon from './repo_icon.svelte';
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
		<RepoIcon icon_type={icon_type} />
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
							class="h-full fill-status-finished dark:fill-status-finished-dark"
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
							class="h-full fill-status-wip dark:fill-status-wip-dark"
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
							class="h-full fill-status-stalled dark:fill-status-stalled-dark"
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
							class="h-full fill-status-abandoned dark:fill-status-abandoned-dark"
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
