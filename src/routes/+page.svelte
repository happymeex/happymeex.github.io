<script lang="ts">
    import Seo from "$lib/Seo.svelte";
</script>

<Seo title="Maxwell Jiang" />
<section>
    <div id="text-wrapper">
        <p class="headline">
            Hi, I'm Maxwell! I like designing and building new <b>software</b>,
            <b>interfaces</b>, and <b>visuals</b>.
        </p>
        <p class="headline">
            Currently, I'm a senior at MIT double-majoring in math and computer
            science. In the past, I've been a software engineering intern, a
            math researcher, and a painter. Regarding my work, I care a lot
            about <i>elegance</i> and <i>clarity</i>.
        </p>
        <p class="headline">
            Feel free to <a
                class="text-link"
                href="mailto:maxwell.d.jiang@gmail.com"
                target="_blank">reach out</a
            >, especially if anything I like or do resonates with you, too!
        </p>
    </div>
    <div id="headshot-container">
        <img src="/headshot.jpg" alt="Headshot of Maxwell" />
    </div>
</section>

<style>
    section {
        margin-top: var(--l);
        width: 100%;
        display: grid;
        grid-template: "text-wrapper headshot";
    }
    p {
        margin: 0;
    }
    i {
        font-family: var(--serif);
    }
    #text-wrapper {
        grid-area: text-wrapper;
    }
    #text-wrapper p:not(:first-of-type) {
        margin-top: var(--xl);
    }
    .headline {
        font-size: 20px;
    }
    #headshot-container {
        grid-area: headshot;
        margin-left: var(--xl);
        display: flex;
        justify-content: center;
    }
    #headshot-container img {
        width: 16em;
        border-radius: 50%;
    }
    b {
        font-weight: 600;
    }
    @media (max-width: 768px) {
        section {
            grid-template: "headshot" "text-wrapper";
        }
        #headshot-container {
            margin-left: 0;
            margin-bottom: var(--xl);
        }
    }
</style>
