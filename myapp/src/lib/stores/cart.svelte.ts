import type { Product } from '$lib/data/products';

let cartItems = $state<Product[]>([]);

export function addToCart(product: Product) {
    cartItems = [...cartItems, product];
}

export function removeFromCart(product: Product) {
    cartItems = cartItems.filter((item: Product) => item.id !== product.id);
}

export function clearCart() {
    cartItems = [];
}

export function getCartItems() {
    return cartItems;
}