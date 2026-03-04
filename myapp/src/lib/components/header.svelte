<script lang="ts">
    import logo from '$lib/assets/logo.png';
    export let title: string;
</script>

<header>
<div class="logo">
    <img src={logo} alt="Logo" />
</div>
<div class="nav">
    <button><a href="/">Home</a></button>
    <button><a href="/products">Products</a></button>
    <button><a href="/about">About</a></button>
    <button><a href="/contact">Contact</a></button>
</div>
    <h1>{title}</h1>
    <div class="cart">
        <button><a href="/cart">🛒</a></button>
    </div>
</header>

<style>
    header {
        background-color: #555555;
        padding: 1rem;
        text-align: center;
        margin-bottom: 2rem;
    }
    .nav button {
        background: #333;
        border: none;
        padding: 0.5rem 1rem;
        margin: 0 0.5rem;
        color: #fff;
        font-size: 0.9rem;
        cursor: pointer;
    }

    h1 {
        margin: 0;
        font-size: 1.5rem;
        color: #333;
    }
    .nav {
        margin-top: 0.5rem;
    }
    .nav a {
        margin: 0 0.5rem;
        text-decoration: none;
        color: #fff;
        font-size: 0.9rem;
    }
    .nav a:hover {
        text-decoration: underline;
    }
    .logo {
        position: absolute;
        left: 1rem;
        top: 1rem;
    }
    .logo img {
        height: 40px;
    }
    .cart {
        position: absolute;
        right: 5rem;
        top: 1rem;
    }
    .cart button {
        background: none;
        border: none;
        color: #fff;
        font-size: 2rem;
        cursor: pointer;
    }
    .cart button:hover {
        transform: scale(1.2);
    }
</style>