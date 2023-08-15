<script lang="ts">
    import Seo from "$lib/Seo.svelte";

    const MATH = [
        {
            title: "Generalizations of Knotoids and Spatial Graphs",
            href: "https://arxiv.org/abs/2209.01922",
            description:
                "Paper exploring combinatorial and geometric properties of a new family of knot-theoretic objects.",
        },
        {
            title: "Hyperbolic Knotoids",
            href: "https://arxiv.org/abs/2209.04556",
            description:
                'Paper establishing hyperbolic volume invariants for knotoids, a class of "open-ended knots".',
        },
        {
            title: "Quantum Groups and Hopf Algebras",
            href: "/math/quantum.pdf",
            description:
                "An expository paper on quantum groups and their applications to knot theory.",
        },
        {
            title: "Category Theory Notes",
            href: "/math/vakilnotes.pdf",
            description:
                "Some notes on category theory, loosely following the first chapter of Vakil's algebraic geometry text. " +
                "Don't read this to learn category theory for the first time, but it might be useful as a reference.",
        },
    ];
</script>

<Seo title={"Maxwell Jiang \u2013 Writing"} />
<section>
    <p>
        A blog is forthcoming! In the meantime, you can take a look at some math
        I've written:
    </p>
    <ul>
        {#each MATH as { title, href, description }}
            <li>
                <a class="text-link" {href} target="_blank">{title}</a>: {@html description}
            </li>
        {/each}
    </ul>
</section>

<style>
    li {
        font-size: var(--text-font);
    }
    li a {
        font-weight: 600;
    }
    li:not(:first-of-type) {
        margin-top: var(--xs);
    }
</style>
