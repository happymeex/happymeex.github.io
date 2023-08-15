<script lang="ts">
    export let title: string;
    export let description: Array<string>;
    export let date: string;
    export let links: Array<{ label: string; href: string }>;
    export let imageUrl: string;
</script>

<section>
    <header>
        <h2 class="title">{@html title}</h2>
        <span class="bullet-separator"> &bullet; </span>
        <h3 class="date">{date}</h3>
    </header>
    <main>
        <article class="description-holder">
            {#each description as paragraph}
                <p class="description">
                    {@html paragraph}
                </p>
            {/each}
        </article>
        <div class="image-holder">
            <img
                class="project-image"
                src={imageUrl}
                alt={`A screenshot of ${title}`}
            />
        </div>
    </main>
    <footer>
        <div class="link-holder">
            {#each links as { label, href }}
                <a class="text-link" target="_blank" {href}>{label}</a>
            {/each}
        </div>
    </footer>
</section>

<style>
    :root {
        --image-width: 300px;
        --image-height: 180px;
    }
    .title {
        font-weight: bold;
    }
    .date {
        color: var(--gray);
    }
    .bullet-separator {
        color: var(--gray);
        margin: 0 var(--xs);
    }
    :is(.title, .date) {
        display: inline-block;
    }
    main {
        display: flex;
        gap: var(--xl);
    }
    section {
        display: flex;
        flex-direction: column;
    }
    .description {
        margin-top: 0;
    }
    .description-holder {
        flex-basis: 60%;
    }
    .image-holder {
        flex-basis: var(--image-width);
        height: var(--image-height);
        overflow: hidden;
        position: relative;
        border-radius: var(--xs);
        box-shadow: 2px 2px 4px var(--light-gray);
    }
    .project-image {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: var(--image-height);
    }
    .link-holder {
        display: flex;
        gap: var(--s);
    }
    @media (max-width: 768px) {
        .image-holder {
            display: none;
        }
        .description-holder {
            flex-basis: 100%;
        }
    }
</style>
