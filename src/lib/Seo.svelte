<script lang="ts">
    export let title: string;
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="og:title" content={title} />
    <meta
        name="description"
        content="Software engineer and artist, building and dreaming."
    />
    <meta
        property="og:description"
        content="Software engineer and artist, building and dreaming."
    />
    <meta
        property="og:image"
        content="https://maxwelljiang.com/art/siblings.jpg"
    />
    <meta name="twitter:card" content="summary_large_image" />
</svelte:head>
