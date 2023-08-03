<section>
    <div id="text-wrapper">
        <p class="headline">
            Hi, I'm Maxwell! I like designing and building new <b>software</b>,
            <b>interfaces</b>, and <b>visuals</b>.
        </p>
        <p class="headline">
            Currently, I'm a senior at MIT double-majoring in math and computer
            science. In the past, I've been a software engineering intern, a
            math researcher, and a painter.
        </p>
        <p class="headline">
            I care a lot about <i>elegance</i>, <i>clarity</i>, and <i>flow</i>.
            Feel free to reach out, especially if anything I like or do
            resonates with you, too!
        </p>
    </div>
    <img id="headshot" src="/headshot.jpg" alt="Headshot of Maxwell" />
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
    #headshot {
        grid-area: headshot;
        width: 16em;
        border-radius: 50%;
        margin-left: var(--l);
    }
    b {
        font-weight: 600;
    }
</style>
