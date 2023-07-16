<script lang="ts">
    import { fly } from "svelte/transition";
    export let ready: boolean = false;
    export let onOutroEnd: () => void;
    const ANIM_DURATION = 200;
</script>

{#if ready}
    <div
        on:outroend={onOutroEnd}
        in:fly={{ x: -50, duration: ANIM_DURATION }}
        out:fly={{ x: 50, duration: ANIM_DURATION }}
    >
        <slot />
    </div>
{/if}
