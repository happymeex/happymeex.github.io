import { readable } from "svelte/store";

/**
 * Store indicating the users screenwidth status.
 *
 * Be careful to check if a component is mounted before using this,
 * or you'll run into SSR issues.
 */
export const screenMode = readable<"desktop" | "mobile">("desktop", (set) => {
    const mediaQuery = window.matchMedia("(max-width: 768px");
    const setMode = (ev: MediaQueryListEvent | MediaQueryList) => {
        set(ev.matches ? "mobile" : "desktop");
    };
    setMode(mediaQuery);
    mediaQuery.addEventListener("change", setMode);

    return () => mediaQuery.removeEventListener("change", setMode);
});
