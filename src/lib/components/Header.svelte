<script>
	import { openModal } from '$lib/store';
	import Theme from './Theme.svelte';
	import { base } from '$app/paths';

</script>

<header class="flex flex-col z-20 relative">
	<div class="max-w-[1400px] mx-auto w-full flex items-center justify-between p-4 py-6">
		<div class="flex space-x-2 justify-center items-center">
			<a href="{base}/">
				<h1 class="font-semibold text-lg md:text-4xl">
					Stellar <span class="text-indigo-400">Styles</span>
				</h1>
			</a>

			<Theme />
		</div>
		<button
			on:click={() => ($openModal = true)}
			class="md:hidden bg-indigo-400 dark:bg-[#020ef3] grid place-items-center"
		>
			<i class="fa-solid fa-bars text-white"></i>
		</button>
		<nav class="hidden md:flex items-center gap-4 lg:gap-6">
			<a href="{base}#product" class="duration-200 hover:text-indigo-400 cursor-pointer">Product</a>
			<a href="{base}#reviews" class="duration-200 hover:text-indigo-400 cursor-pointer">Reviews</a>
			<a href="{base}#faqs" class="duration-200 hover:text-indigo-400 cursor-pointer">FAQs</a>
			<button class="border-[#646cff] dark:text-white dark:bg-[#646cff]">
				<p>Start free today</p>
			</button>
		</nav>
	</div>
</header>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
