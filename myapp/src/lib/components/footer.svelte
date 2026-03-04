<script lang="ts">
let year = new Date().getFullYear();
let company = "example.com";
</script>

<footer>
    <p>&copy; {year} {company}. All rights reserved.</p>
</footer>

<style>
    footer {
        background-color: #555555;
        padding: 1rem;
        text-align: center;
        margin-top: 2rem;
    }
    p {
        margin: 0;
        font-size: 0.9rem;
        color: #333;
    }
</style>