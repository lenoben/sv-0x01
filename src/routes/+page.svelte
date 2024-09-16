<script>
	import Conversion from '$lib/components/Conversion.svelte';
	import FaQs from '$lib/components/FAQs.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Product from '$lib/components/Product.svelte';
	import Reviews from '$lib/components/Reviews.svelte';
</script>

<svelte:head>
	<title>lenoben | sveltekit | stellar styles</title>
	<meta
		name="description"
		content="Github user, lenoben showcase of sveltekit static page website with github pages"
	/>
	<meta property="og:title" content="Sveltekit static page site with github pages" />
</svelte:head>

<main class="flex flex-col">
	<Hero />
	<Product />
	<Reviews />
	<FaQs />
	<Conversion />
</main>
