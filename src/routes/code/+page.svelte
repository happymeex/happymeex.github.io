<script lang="ts">
    import Project from "./Project.svelte";
    import twisearch from "$lib/images/twisearch.png";
    import taletree from "$lib/images/taletree.png";
    import Ornament from "$lib/Ornament.svelte";
    const projects = [
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

<div class="description">
    <p>
        Here are some projects I've worked on. Feel free to reach out with
        questions or ideas!
    </p>
</div>
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
