<script lang="ts">
    import { onMount } from 'svelte';

    onMount(() => {
        console.log('Test component mounted');
    });
</script>
<style>
    .cart-content {
        max-width: 800px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
    }
    .cart-content h2 {
        margin-bottom: 1rem;
        color: #000;
    }
    .cart-content p {
        font-size: 1.1rem;
        color: #000;
    }
</style>
<main>
<div class="cart-content">
    <h2>Your Cart</h2>
    <p>Your cart is currently empty.</p>
    <p>Browse our <a href="/products">products</a> and add items to your cart!</p>
</div>
</main>