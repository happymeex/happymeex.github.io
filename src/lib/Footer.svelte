<script lang="ts">
    import ContactBar from "./ContactBar.svelte";
    import Ornament from "./Ornament.svelte";
</script>

<footer>
    <div class="ornament-holder">
        <Ornament isSeparator={false} />
    </div>
    <ContactBar />
    <p>&copy; 2023 Maxwell Jiang</p>
</footer>

<style>
    footer {
        width: 100%;
        box-sizing: border-box;
        padding: var(--l) var(--m) 40px;
        margin-bottom: 0;
        margin-top: 80px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    p {
        font-size: var(--m);
    }

    .ornament-holder {
        margin-bottom: var(--xs);
    }
</style>
