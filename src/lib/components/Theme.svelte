<script>
	import Sun from 'lucide-svelte/icons/sun';
	import Moon from 'lucide-svelte/icons/moon';

	import { toggleMode } from 'mode-watcher';
	import { Button } from '$lib/components/ui/button/index.js';
</script>

<Button on:click={toggleMode} class="dark:bg-transparent" variant="ghost" size="icon">
	<Sun class="absolute h-[1.2rem] w-[1.2rem] flex dark:hidden " />
	<Moon class="absolute h-[1.2rem] w-[1.2rem] hidden dark:flex dark:text-white" />
	<span class="sr-only">Toggle theme</span>
</Button>
