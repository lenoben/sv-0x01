<script>
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import CTAs from '$lib/components/CTAs.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';

	import { openModal } from '$lib/store';

	let y;
	$: outerHeight = 0;

	function reroute(href) {
		$openModal = false;
		window.location.href = href;
	}
</script>

<ModeWatcher />
{#if $openModal}
	<div
		class="fixed top-0 left-0 w-screen h-screen border-b bg-[#163457] text-slate-50 z-50 flex flex-col gap-8 p-5 px-8 md:hidden"
	>
		<div class="flex items-center justify-between gap-4 border-b pb-2">
			<h1 class="font-semibold text-xl">
				Stellar <span class="text-indigo-400">Styles</span>
			</h1>
			<button on:click={() => ($openModal = false)} class="outline-none border-none bg-[#646cff]">
				<i class="fa-solid fa-xmark text-2xl"></i>
			</button>
		</div>
		<div class="flex flex-col gap-4 flex-1">
			<button
				on:click={() => reroute('#product')}
				class="border-none outline-none p-2 group bg-[#646cff] duration-200 cursor-pointer text-left"
			>
				<p class="duration-200 group-hover:pl-2 poppins text-3xl font-semibold">
					Product <i class="fa-solid fa-chevron-right text-xl pl-4"></i>
				</p>
			</button>
			<button
				on:click={() => reroute('#reviews')}
				class="border-none outline-none p-2 group bg-[#646cff] duration-200 cursor-pointer text-left"
			>
				<p class="duration-200 group-hover:pl-2 poppins text-3xl font-semibold">
					Reviews <i class="fa-solid fa-chevron-right text-xl pl-4"></i>
				</p>
			</button>
			<button
				on:click={() => reroute('#faqs')}
				class="border-none outline-none p-2 group bg-[#646cff] duration-200 cursor-pointer text-left"
			>
				<p class="duration-200 group-hover:pl-2 poppins text-3xl font-semibold">
					FAQs <i class="fa-solid fa-chevron-right text-xl pl-4"></i>
				</p>
			</button>
		</div>
		<div class="flex flex-col items-center justify-center">
			<CTAs />
		</div>
	</div>
{/if}

{#if y > outerHeight}
	<div class="bg-white fixed top-0 left-0 w-full flex flex-col z-20 px-4 fadeIn">
		<Header />
	</div>
{/if}
<slot />
<Footer />
<!-- <svelte:window bind:scrollY={y} bind:outerHeight /> -->
