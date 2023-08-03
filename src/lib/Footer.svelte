<script lang="ts">
    import Instagram from "./icons/Instagram.svelte";
    import Email from "$lib/icons/Email.svelte";
    import Github from "$lib/icons/Github.svelte";
    import Twitter from "$lib/icons/Twitter.svelte";
    import LinkedIn from "$lib/icons/LinkedIn.svelte";
    import ContactBar from "./ContactBar.svelte";

    const icons = [
        { icon: Instagram, href: "https://www.instagram.com/happy_meex/" },
        { icon: Twitter, href: "https://twitter.com/EC_Matrix" },
        {
            icon: LinkedIn,
            href: "https://www.linkedin.com/in/maxwell-jiang-3964531b9/",
        },
        { icon: Github, href: "https://github.com/happymeex" },
        { icon: Email, href: "mailto:maxwell.d.jiang@gmail.com" },
    ];
</script>

<footer>
    <ContactBar />
    <p>&copy; 2023 Maxwell Jiang</p>
</footer>

<style>
    footer {
        width: 100%;
        background-color: var(--footer-background-color);
        box-sizing: border-box;
        padding: var(--l) var(--m) 40px;
        margin-bottom: 0;
        margin-top: 80px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    p {
        font-size: var(--m);
    }
</style>
