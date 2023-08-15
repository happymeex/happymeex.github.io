<script lang="ts">
    import { onMount } from "svelte";
    import Ornament from "$lib/Ornament.svelte";
    import DetailedView from "./DetailedView.svelte";
    import { screenMode } from "$lib/stores";
    import Seo from "$lib/Seo.svelte";

    let isMounted = false;
    onMount(() => (isMounted = true));
    $: isDesktop = isMounted && $screenMode === "desktop";

    const IG_URL = "https://instagram.com/happy_meex";
    const images = [
        { file: "horimiya.png", alt: "Man giving candy illustration" },
        { file: "xiao.png", alt: "Asian village nighttime illustration" },
        { file: "yelan.png", alt: "Asian village daytime illustration" },
        { file: "zuko.jpg", alt: "Zuko fan art" },
        { file: "blu.png", alt: "Forest ninja illustration" },
        { file: "siblings.jpg", alt: "Forest river illustration" },
        { file: "hobie.png", alt: "Hobie Brown fan art" },
        { file: "homura.jpg", alt: "Homura fan art" },
    ];
    let NUM_COLUMNS = 2;
    let columns: { file: string; alt: string }[][] = [];
    const numImages = images.length;
    let numPerCol = Math.ceil(numImages / NUM_COLUMNS);
    $: {
        // checking mounted status redundantly to prevent split-second 1-col render on desktop
        if (isMounted) {
            if (isDesktop) NUM_COLUMNS = 2;
            else NUM_COLUMNS = 1;
        }
    }
    $: {
        columns = [];
        numPerCol = Math.ceil(numImages / NUM_COLUMNS);
        for (let i = 0; i < NUM_COLUMNS; i++) {
            columns.push(images.slice(i * numPerCol, (i + 1) * numPerCol));
        }
    }

    let imageIndex: number | null = null;
</script>

<Seo title={"Maxwell Jiang \u2013 Art"} />
<section>
    <p>
        I am a digital artist interested in illustration and concept art, mainly
        the kind found in games and animation. In the past, I studied
        traditional oil painting and sketching.
    </p>
    <p>
        In the future, I may decide to make a separate website dedicated to my
        art, but for now enjoy a sampling of my work below. You can also find me
        on <a class="text-link" href={IG_URL} target="_blank">Instagram</a>.
    </p>
</section>
<div style="margin-top: var(--l)">
    <Ornament width="var(--separator-width)" color="var(--separator-color)" />
</div>
<div id="image-container" style={`--num-columns: ${NUM_COLUMNS}`}>
    {#each columns as col, i}
        <div class="column">
            {#each col as { file, alt }, j}
                <button
                    on:click={() => (imageIndex = i * numPerCol + j)}
                    disabled={!isDesktop}
                >
                    <img src={`/art/${file}`} {alt} />
                </button>
            {/each}
        </div>
    {/each}
</div>
{#if isDesktop}
    <DetailedView {images} {imageIndex} on:close={() => (imageIndex = null)} />
{/if}

<style>
    button {
        padding: 0;
        margin: 0;
        border: none;
        background: none;
    }
    #image-container {
        --image-gap: var(--s);

        margin-top: var(--xl);
        display: flex;
        gap: var(--image-gap);
    }
    .column {
        display: flex;
        flex-direction: column;
        gap: var(--image-gap);
        width: calc(100% / var(--num-columns));
    }
    #image-container img {
        width: 100%;
    }
    #image-container img:hover {
        cursor: pointer;
    }
</style>
