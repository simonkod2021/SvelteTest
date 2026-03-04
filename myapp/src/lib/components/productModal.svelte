<script lang="ts">
    import type { Product } from '$lib/data/products';
    import { addToCart } from '$lib/stores/cart.svelte';
    export let showModal = false;
    export let selectedProduct: Product | null = null;
    export let onClose: () => void;
</script>
{#if showModal && selectedProduct}
    <div class="modal-overlay" role="button" tabindex="-1" onclick={onClose} onkeydown={(e) => e.key === 'Escape' && onClose()}>
        <div class="modal-content" role="dialog" aria-modal="true" tabindex="-1" onclick={(e) => e.stopPropagation()} onkeydown={(e) => e.key === 'Escape' && onClose()}>
            <button class="close-button" onclick={onClose}>✕</button>
            <img src={selectedProduct.image} alt={selectedProduct.name} />
            <h2>{selectedProduct.name}</h2>
            <p>{selectedProduct.description}</p>
            <span class="price">{selectedProduct.price} kr</span>
            <button class="add" onclick={() => addToCart(selectedProduct)}>Add to Cart</button>
        </div>
    </div>
{/if}
<style>
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .modal-content {
        background: #fff;
        padding: 24px;
        border-radius: 8px;
        max-width: 500px;
        width: 100%;
        position: relative;
    }
    .close-button {
        position: absolute;
        top: 12px;
        right: 12px;
        background: #333;
        color: #fff;
        border: none;
        border-radius: 4px;
        padding: 4px 8px;
        cursor: pointer;
    }
    img {
        width: 100%;
        height: auto;
        margin-bottom: 16px;
    }
    h2 {
        margin-top: 0;
    }
    .price {
        font-weight: bold;
        font-size: 1.2rem;
    }
    .add {
        margin-top: 16px;
        padding: 12px 24px;
        background-color: #007BFF;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    .add:hover {
        background-color: #0056b3;
    }
</style>