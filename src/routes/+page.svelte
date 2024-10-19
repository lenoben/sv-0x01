<script>
  import Conversion from "$lib/components/Conversion.svelte";
  import FaQs from "$lib/components/FAQs.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Product from "$lib/components/Product.svelte";
  import Reviews from "$lib/components/Reviews.svelte";
</script>

<svelte:head>
  <!-- page title -->
  <title>lenoben | sveltekit | stellar styles</title>

  <!-- meta description -->
  <meta
    name="description"
    content="Github user, lenoben showcase of sveltekit static page website with github pages"
  />

  <!-- canonical url -->
  <link rel="canonical" href="https://lenoben.github.io/sv-0x01" />

  <!-- open graph tags for social media -->
  <meta
    property="og:description"
    content="Github user, lenoben showcase of sveltekit static page website with github pages"
  />
  <meta
    property="og:title"
    content="lenoben static page site with github pages"
  />
  <meta
    property="og:image"
    content="https://lenoben.github.io/sv-0x01/lenoben-github-logo.png"
  />
  <meta property="og:url" content="https://lenoben.github.io/sv-0x01" />
  <meta property="og:type" content="website" />

  <!-- twitter card -->
  <meta name="twitter:card" content="Stellar styles, Gym static landing page" />
  <meta
    name="twitter:url"
    content="https://lenoben.github.io/sv-0x01/lenoben-github-logo.png"
  />
  <meta name="twitter:site" content="@llenoben" />
  <meta name="twitter:creator" content="@llenoben" />
  <meta
    name="twitter:title"
    content="lenoben static page site with github pages"
  />
  <meta
    name="twitter:description"
    content="Github user, lenoben showcase of sveltekit static page website with github pages"
  />
  <meta
    property="twitter:image"
    content="https://lenoben.github.io/sv-0x01/lenoben-github-logo.png"
  />

  <!-- Robots Meta Tag -->
  <meta name="robots" content="index, follow" />
</svelte:head>

<main class="flex flex-col">
  <Hero />
  <Product />
  <Reviews />
  <FaQs />
  <Conversion />
</main>
