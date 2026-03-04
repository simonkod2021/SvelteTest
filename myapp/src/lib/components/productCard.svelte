<script lang="ts">
   import type { Product } from '$lib/data/products';
   export let product: Product;
   export let onViewDetails: (product: Product) => void;
</script>

<div class="product-card">
    <img src={product.image} alt={product.name} />
    <span class="category">{product.category}</span>
    <h2>{product.name}</h2>
    <p>{product.description}</p>
    <div class="footer">
        <span class="price">{product.price} kr</span>
        <button on:click={() => onViewDetails(product)}>View Details</button>
    </div>
</div>

<style>
    .product-card {

        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        transition: transform 0.2s;
    }
    .product-card:hover {
        transform: translateY(-4px);
    }
    img {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }
    .category {
        display: inline-block;
        margin: 12px 12px 0;
        padding: 2px 8px;
        font-size: 0.75rem;
        background: #e8e8e8;
        border-radius: 4px;
        color: #555;
    }
    h2 {
        margin: 8px 12px 4px;
        font-size: 1.1rem;
    }
    p {
        margin: 0 12px;
        font-size: 0.9rem;
        color: #666;
    }
    .footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px;
    }
    .price {
        font-weight: bold;
        font-size: 1.1rem;
    }
    button {
        padding: 8px 16px;
        background: #333;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    button:hover {
        background: #555;
    }
</style>