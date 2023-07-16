<script lang="ts">
    import "@fontsource/ubuntu/300.css";
    import "@fontsource/ubuntu/400.css";
    import "@fontsource/ubuntu/700.css";
    import "@fontsource-variable/eb-garamond";
    import { page } from "$app/stores";
    import Link from "$lib/Link.svelte";
    import FlyInOut from "$lib/FlyInOut.svelte";
    const sitePages = [
        {
            title: "Resume",
            href: "/resume",
        },
        {
            title: "Code",
            href: "/code",
        },
        {
            title: "Art",
            href: "/art",
        },
        {
            title: "Writing",
            href: "/writing",
        },
    ];
    // Manage fly-in/fly-out animation for navigation betwixt pages
    let contentReady = true; // false means the previous page's flyout animation is in progress
    const getNavTrigger = (href: string) => {
        return () => {
            const selected = $page.route.id === href;
            if (!selected) contentReady = false;
        };
    };
</script>

<header>
    <a id="name" href="/" on:click={getNavTrigger("/")}>Maxwell Jiang</a>
    <nav>
        {#each sitePages as sitePage (sitePage.href)}
            {@const selected = $page.route.id === sitePage.href}
            <Link
                on:click={getNavTrigger(sitePage.href)}
                href={sitePage.href}
                {selected}>{sitePage.title}</Link
            >
        {/each}
    </nav>
</header>

<main>
    <FlyInOut ready={contentReady} onOutroEnd={() => (contentReady = true)}>
        <slot />
    </FlyInOut>
</main>

<style>
    :global(:root) {
        --off-black: #313131;
        --gray: #616161;
        --light-gray: #b6b6b6;
        --off-white: #e9e9e9;

        --xxs: 2px;
        --xs: 4px;
        --s: 8px;
        --m: 16px;
        --l: 24px;
        --xl: 32px;
        --xxl: 40px;
        --xxxl: 48px;

        --content-width: 900px;
    }
    :global(body) {
        margin: 0;
        color: var(--off-black);
        background-color: var(--off-white);
        font-family: "Ubuntu", sans-serif;
    }
    :global(a) {
        color: inherit;
        text-decoration: none;
    }
    #name {
        color: black;
        font-size: var(--xl);
        font-weight: 700;
        font-family: "EB Garamond Variable", serif;
    }
    header {
        margin: auto;
        width: 100%;
        max-width: var(--content-width);
        padding: var(--xl) 0;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    header nav {
        display: flex;
        gap: var(--xl);
        font-size: 20px;
    }
    main {
        margin: auto;
        width: 100%;
        max-width: var(--content-width);
    }
    :global(h1, h2, h3, h4) {
        font-weight: 400;
    }
</style>
