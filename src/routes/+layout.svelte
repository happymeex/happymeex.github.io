<script lang="ts">
    import "@fontsource-variable/eb-garamond";
    import "@fontsource-variable/nunito-sans";
    import { page } from "$app/stores";
    import Layout from "$lib/Layout.svelte";
    import NavLink from "$lib/NavLink.svelte";
    import FlyInOut from "$lib/FlyInOut.svelte";
    import Footer from "$lib/Footer.svelte";
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

<Layout>
    <header slot="header">
        <a id="name" href="/" on:click={getNavTrigger("/")}>Maxwell Jiang</a>
        <span class="header-bullet">&bullet;</span>
        <nav>
            {#each sitePages as sitePage (sitePage.href)}
                {@const selected = $page.route.id === sitePage.href}
                <NavLink
                    on:click={getNavTrigger(sitePage.href)}
                    href={sitePage.href}
                    {selected}>{sitePage.title}</NavLink
                >
            {/each}
        </nav>
    </header>
    <main slot="main">
        <FlyInOut ready={contentReady} onOutroEnd={() => (contentReady = true)}>
            <slot />
        </FlyInOut>
    </main>
    <Footer slot="footer" />
</Layout>

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

        --text-font: 18px;
        --serif: "EB Garamond Variable", serif;
        --sans-serif: "Nunito Sans Variable", sans-serif;
        --content-width: 900px;
        --background-color: #f9f9f3;
        --separator-color: var(--off-black);
    }
    :global(body) {
        margin: 0;
        color: var(--off-black);
        background-color: var(--background-color);
        font-family: var(--sans-serif);
    }
    :global(h1, h2, h3, h4) {
        font-weight: 400;
    }
    :global(li, p) {
        font-weight: 300;
        line-height: 1.3;
        letter-spacing: 0.01em;
    }
    :global(p) {
        text-align: justify;
        hyphens: auto;
        overflow-wrap: anywhere;
        font-size: var(--text-font);
    }
    :global(a) {
        color: inherit;
    }
    :global(.text-link) {
        text-underline-offset: var(--xxs);
        transition: 0.2s;
        text-decoration-color: var(--light-gray);
    }
    :global(.text-link:hover) {
        transition: 0.2s;
        color: black;
        filter: brightness(0.7);
    }
    #name {
        color: black;
        font-size: var(--xl);
        font-weight: 700;
        letter-spacing: -0.01em;
        font-family: var(--sans-serif);
        text-decoration: none;
    }
    header {
        margin: auto;
        width: 100%;
        max-width: var(--content-width);
        padding: var(--xl) 0;
        box-sizing: border-box;
        display: flex;
        align-items: baseline;
        gap: var(--l);
    }
    .header-bullet {
        color: var(--gray);
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
    @media (max-width: 768px) {
        main {
            width: 90vw;
        }
        .header-bullet {
            display: none;
        }
        header {
            flex-direction: column;
            align-items: center;
        }
    }
</style>
