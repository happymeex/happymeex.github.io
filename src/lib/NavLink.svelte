<script lang="ts">
    export let href: string;
    export let selected: boolean;
</script>

<a class:selected {href} on:click><slot /></a>

<style>
    :root {
        --transition-time: 0.2s;
    }
    a {
        text-decoration: none;
        color: inherit;
        opacity: 70%;
        position: relative;
        font-weight: 700;
        transition: var(--transition-time);
    }
    a:hover {
        opacity: 100%;
        transition: var(--transition-time) ease;
    }
    a::before {
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: currentColor;
        content: "";
        width: 100%;
        height: 2px;
        transform-origin: top right;
        transform: scaleX(0);
        transition: transform var(--transition-time) ease;
    }
    a:hover::before {
        transform-origin: top left;
        transform: scaleX(1);
    }
    a.selected::before {
        transform: scaleX(1);
    }
    a.selected {
        opacity: 100%;
    }
</style>
