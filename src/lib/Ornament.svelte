<script lang="ts">
    export let width: string = "200px";
    export let color: string = "var(--separator-color)";
    export let isSeparator: boolean = true;
</script>

<div
    class="ornament-container"
    style={`--color: ${color};`}
    role={isSeparator ? "separator" : "none"}
>
    <svg
        id="Layer_2"
        data-name="Layer 2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 163.96 19.48"
        {width}
    >
        <g id="Layer_1-2" data-name="Layer 1">
            <path
                class="cls-2"
                d="m80.78,13.2c-.69-.55-1.61-1.12-2.83-1.52-1.31-.42-2.48-.48-3.27-.46-.55-.45-1.53-1.37-2.14-2.81-.47-1.12-.53-2.12-.52-2.74.44.02.99.08,1.59.25,1.25.34,2.11.96,2.58,1.37-.19-.64-.48-1.92-.09-3.45.51-2.02,1.86-3.25,2.41-3.7.27.09.55.21.83.35,1.46.72,2.34,1.79,2.82,2.54-.03,1.1-.06,2.2-.09,3.29-.17.15-.42.4-.69.73-.35.44-1.54,2.03-1.26,4.15.06.46.21,1.17.65,1.99Z"
            />
            <path class="cls-1" d="m0,10.92h63.3" />
            <path
                class="cls-3"
                d="m82.02,19.48c3.22,0,3.22-5,0-5s-3.22,5,0,5h0Z"
            />
            <path
                class="cls-2"
                d="m86.04,14.37c1.38-1.88,4.12-2,6.59-2.11,1.15-.05,2.78-.03,4.72.33-.32.8-1.19,2.65-3.17,3.84-2.58,1.55-6.01,1.36-8.86-.43.09-.43.28-1.04.71-1.63Z"
            />
            <path class="cls-1" d="m100.66,10.92h63.3" />
            <path
                class="cls-2"
                d="m84.05,11.21c.28-2.12-.91-3.71-1.26-4.15-.26-.33-.52-.58-.69-.73-.03-1.1-.06-2.2-.09-3.29.49-.75,1.36-1.82,2.82-2.54.28-.14.56-.25.83-.35.54.44,1.9,1.68,2.41,3.7.39,1.54.11,2.81-.09,3.45.48-.4,1.33-1.02,2.58-1.37.6-.17,1.15-.23,1.59-.25.02.62-.05,1.62-.52,2.74-.61,1.44-1.59,2.36-2.14,2.81-.78-.02-1.96.03-3.27.46-1.22.39-2.15.97-2.83,1.52.44-.82.59-1.54.65-1.99Z"
            />
            <path
                class="cls-2"
                d="m77.96,14.37c-1.38-1.88-4.12-2-6.59-2.11-1.15-.05-2.78-.03-4.72.33.32.8,1.19,2.65,3.17,3.84,2.58,1.55,6.01,1.36,8.86-.43-.09-.43-.28-1.04-.71-1.63Z"
            />
        </g>
    </svg>
</div>

<style>
    .ornament-container {
        color: var(--color);

        display: flex;
        justify-content: center;
    }
    path {
        stroke: var(--color);
        fill: var(--color);
    }
    .cls-1 {
        stroke-width: 1.5px;
    }

    .cls-1,
    .cls-2 {
        stroke-miterlimit: 10;
    }

    .cls-2 {
        stroke-width: 0.25px;
    }

    .cls-3 {
        stroke-width: 0px;
    }
</style>
