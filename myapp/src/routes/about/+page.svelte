<script lang="ts">
    import { onMount } from 'svelte';

    onMount(() => {
        console.log('Test component mounted');
    });
</script>
<style>
    .about-content {
        max-width: 800px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
    }
    .about-content h2 {
        margin-bottom: 1rem;
        color: #000;
    }
    .about-content p {
        font-size: 1.1rem;
        color: #000;
    }
</style>

<main>
<div class="about-content">
    <h2>About Us</h2>
    <p>This is the about page of our SvelteKit application.</p>
    <p>We are passionate about building modern web applications with SvelteKit.</p>
    <p>Feel free to explore our products and contact us for more information!</p>
</div>
</main>