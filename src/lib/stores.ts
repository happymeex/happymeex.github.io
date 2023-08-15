import { readable } from "svelte/store";
import { onMount } from "svelte";

/**
 * Store indicating the users screenwidth status.
 */
export const screenMode = readable<"desktop" | "mobile">("desktop", (set) => {
    // Only execute when mounted, or we run into SSR issues when trying to prerender
    onMount(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px");
        const setMode = (ev: MediaQueryListEvent | MediaQueryList) => {
            set(ev.matches ? "mobile" : "desktop");
        };
        setMode(mediaQuery);
        mediaQuery.addEventListener("change", setMode);

        return () => mediaQuery.removeEventListener("change", setMode);
    });
});
