<script lang="ts">
    import Instagram from "./icons/Instagram.svelte";
    import Email from "$lib/icons/Email.svelte";
    import Github from "$lib/icons/Github.svelte";
    import Twitter from "$lib/icons/Twitter.svelte";
    import LinkedIn from "$lib/icons/LinkedIn.svelte";

    const icons = [
        { icon: Email, href: "mailto:maxwell.d.jiang@gmail.com" },
        { icon: Github, href: "https://github.com/happymeex" },
        { icon: Instagram, href: "https://www.instagram.com/happy_meex/" },
        { icon: Twitter, href: "https://twitter.com/EC_Matrix" },
        {
            icon: LinkedIn,
            href: "https://www.linkedin.com/in/maxwell-jiang-3964531b9/",
        },
    ];
</script>

<aside>
    {#each icons as { icon, href }}
        <a {href} target="_blank"><svelte:component this={icon} /></a>
    {/each}
</aside>

<style>
    aside {
        display: flex;
        gap: var(--xs);
    }
</style>
