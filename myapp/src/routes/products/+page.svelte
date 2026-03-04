<script lang="ts">
import ProductCard from '$lib/components/productCard.svelte';
import ProductModal from '$lib/components/productModal.svelte';
import type { Product } from '$lib/data/products';
import { products } from '$lib/data/products';

let showModal = false;
let selectedProduct: Product | null = null;

   function closeModal() {
         showModal = false;
    }
    function openModal(product: Product) {
        selectedProduct = product;
        showModal = true;
    }
</script>
    <div class="product-grid">
        {#each products as product (product.id)}
            <ProductCard {product} onViewDetails={openModal}/>
        {/each}
    </div>
    <ProductModal {showModal} {selectedProduct} onClose={closeModal}/>

<style>
    .product-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 24px;
        padding: 24px;
        max-width: 1200px;
        margin: 0 auto;
    }
</style>




