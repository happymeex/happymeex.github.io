<script lang="ts">
    import Project from "./Project.svelte";
    import twisearch from "$lib/images/twisearch.png";
    import taletree from "$lib/images/taletree.png";
    import gardenia from "$lib/images/gardenia.png";
    import teapot from "$lib/images/teapot_watercolor.png";
    import Ornament from "$lib/Ornament.svelte";
    import Seo from "$lib/Seo.svelte";
    const projects = [
        {
            title: "Non-Photorealistic Renderer",
            date: "Dec 2023",
            description: [
                "A CPU-based ray tracer for non-photorealistic rendering in cel shading and watercolor styles. \
                Final project for MIT's 6.4400 Computer Graphics course, \
                built in collaboration with Daniel Hu. This was runner-up for best project.",
                "Written in C++ with OpenGL.",
            ],
            links: [
                {
                    label: "Github",
                    href: "https://github.com/happymeex/npr-graphics",
                },
            ],
            imageUrl: teapot,
        },
        {
            title: "Gardenia",
            date: "Aug 2023",
            description: [
                "A 2D platformer game about a shapeshifting forest-dweller who protects the woods from robots. \
                Features single-player survival mode and multiplayer brawl mode. \
                All art, animation, music, and design are my own. \
                Aesthetic and gameplay inspired by Hollow Knight.",
                "Built with Typescript, <a class='text-link' target='_blank' href='https://phaser.io/'>PhaserJS</a>, and Go.",
            ],
            links: [
                {
                    label: "Github",
                    href: "https://github.com/happymeex/gardenia",
                },
                {
                    label: "Deployment",
                    href: "https://gardenia-production.up.railway.app/",
                },
            ],
            imageUrl: gardenia,
        },
        {
            title: "Inn Searcher",
            date: "May 2023",
            description: [
                'A search website for \
                    ✨<a class="text-link" target="_blank" href="https://wanderinginn.com">The Wandering Inn</a>✨, \
                    a great fantasy LitRPG webnovel with 600+ chapters. \
                    Improves the usability of the webnovel\'s built-in search functionality with features I wished it had: \
                    search results with keyword-highlighted exerpts, \
                    features for sorting results by relevance or chronology, and \
                    a few Easter eggs.',
                "Built with Node, Typescript, Express for backend and good old HTML/CSS/JS for frontend.",
            ],
            links: [
                {
                    label: "Github",
                    href: "https://github.com/happymeex/inn-search",
                },
                {
                    label: "Deployment",
                    href: "https://twisearch.up.railway.app/",
                },
            ],
            imageUrl: twisearch,
        },
        {
            title: "TaleTree",
            date: "Jan 2023",
            description: [
                'Web app for collaborative writing. Implements original tree-like UI alongside traditional \
            post-based social media features. Entry for MIT Weblab, where it was a Semifinalist and winner of "Most Unique Concept" award.',
                "Designed with Figma, built with Mongo/Express/React/Node stack.",
            ],
            links: [
                {
                    label: "Github",
                    href: "https://github.com/happymeex/taletree",
                },
                {
                    label: "Deployment",
                    href: "https://taletree.herokuapp.com/",
                },
            ],
            imageUrl: taletree,
        },
    ];
</script>

<Seo title={"Maxwell Jiang \u2013 Code"} />
<section class="description">
    <p>
        Here are some projects I've worked on. Feel free to reach out with
        questions or ideas!
    </p>
</section>
<Ornament />
{#each projects as project, i}
    <div class="project-container" data-index={i}>
        <Project {...project} />
    </div>
{/each}

<style>
    .description {
        margin-bottom: var(--xl);
    }
    .project-container:not([data-index="0"]) {
        margin-top: var(--xxl);
    }
</style>
