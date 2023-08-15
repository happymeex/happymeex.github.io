<script lang="ts">
    import { createEventDispatcher, onMount } from "svelte";
    import { fade } from "svelte/transition";
    export let images: Array<{ file: string; alt: string }>;
    /** Index of image user clicked initially to open the large view. If `null`, viewer is closed. */
    export let imageIndex: number | null;

    let isMounted = false; // use this flag to separate SSR from CSR

    onMount(() => (isMounted = true));

    let displacement = 0;
    const dispatch = createEventDispatcher();
    function closeModal() {
        dispatch("close");
    }
    function handleOverlayClick(e: MouseEvent) {
        if (e.target instanceof Element) {
            if (["button", "img"].includes(e.target.tagName.toLowerCase()))
                return;
            else closeModal();
        }
    }
    function handleNav(dir: 1 | -1) {
        displacement += dir;
    }

    function handleKeyDown(e: KeyboardEvent) {
        if (imageIndex === null) return;
        switch (e.key) {
            case "Escape":
                closeModal();
                break;
            case "ArrowLeft":
                if (imageIndex + displacement > 0) handleNav(-1);
                break;
            case "ArrowRight":
                if (imageIndex + displacement < images.length - 1) handleNav(1);
                break;
        }
    }

    $: {
        if (imageIndex !== null) {
            // execute whenever user opens modal
            displacement = 0;
            if (isMounted) window.addEventListener("keydown", handleKeyDown);
        } else if (isMounted) {
            window.removeEventListener("keydown", handleKeyDown);
        }
    }

    $: index = imageIndex !== null ? imageIndex + displacement : null;
    // attach click handler to modal overlay programmatically for web accessibility reasons
    let modalOverlay: HTMLDivElement;
    $: if (index !== null && modalOverlay) {
        modalOverlay.addEventListener("click", handleOverlayClick, {
            capture: true,
        });
    } else if (modalOverlay) {
        modalOverlay.removeEventListener("click", handleOverlayClick);
    }
</script>

{#if index !== null}
    <div
        class="overlay"
        transition:fade={{ duration: 200 }}
        bind:this={modalOverlay}
        aria-modal
    >
        {#each images as image, i}
            {#if index === i}
                <div class="wrapper" transition:fade={{ duration: 400 }}>
                    <img src={`/art/${image.file}`} alt={image.alt} />
                </div>
            {/if}
        {/each}
        <div class="nav-buttons">
            <div>
                {#if index > 0}
                    <button id="go-left" on:click={() => handleNav(-1)}
                        >&#10094;</button
                    >
                {/if}
            </div>
            <div>
                {#if index < images.length - 1}
                    <button id="go-right" on:click={() => handleNav(1)}
                        >&#10095;</button
                    >
                {/if}
            </div>
        </div>
        <button id="close-button" on:click={closeModal}>&times;</button>
    </div>
{/if}

<style>
    .overlay {
        --button-side-padding: var(--xl);

        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0 0 0 / 0.6);
        backdrop-filter: blur(4px);
    }
    .wrapper {
        position: fixed;
        width: fit-content;
        height: fit-content;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
    }
    .wrapper img {
        max-height: 90vh;
        max-width: 80vw;
    }
    button {
        background: none;
        border: none;
        padding: 0;
        font-size: var(--xxl);
        color: var(--light-gray);
    }
    button:hover {
        cursor: pointer;
    }
    .nav-buttons {
        position: absolute;
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
    }
    #close-button {
        position: absolute;
        right: 0;
        top: 0;
        padding: var(--s) var(--button-side-padding);
        font-size: var(--xxl);
    }
    #go-left {
        padding: var(--xl) var(--xl) var(--xl) var(--button-side-padding);
    }
    #go-right {
        padding: var(--xl) var(--button-side-padding) var(--xl) var(--xl);
    }
</style>
