<script lang="ts">
   
</script>
<style>
    
    p {
        font-size: 1.2rem;
        color: #555;
    }
    form {
        display: flex;
        flex-direction: column;
        max-width: 400px;
        margin-top: 1rem;
    }
    label {
        margin-bottom: 0.5rem;
        font-weight: bold;
    }
    input, textarea {
        margin-bottom: 1rem;
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
    button {
        padding: 0.75rem;
        background-color: #007BFF;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    button:hover {
        background-color: #0056b3;
    }
    .contact-form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 2rem;
    }
    .contact-form h2 {
        margin-bottom: 0.5rem;
        color: #000;
    }
    .contact-form p {
        margin-bottom: 1.5rem;
        color: #000;
    }
    .contact-form form {
        width: 100%;
        max-width: 25rem;
    }
</style>

<main>
    <div class="contact-form">
    <h2>Contact Us</h2>
    <p>Have questions or need assistance? Reach out to us!</p>
    <form>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="5" required></textarea>

        <button type="submit">Send Message</button>
    </form>
    </div>
</main>