<script lang="ts">
import Header from '$lib/components/header.svelte';
import Footer from '$lib/components/footer.svelte';
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header title="Welcome to SvelteKit!" />
<main>
	{@render children()}
</main>
<Footer />
