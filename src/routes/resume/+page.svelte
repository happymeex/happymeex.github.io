<script lang="ts">
    const workExperience = [
        {
            position: "Software intern at Autodesk",
            dates: "Summer 2023",
            description: [
                "Developed Autodesk's Web UI toolkit.",
                "Built web app using toolkit to establish usage and best-practices example for Autodesk developers.",
                "Built microfrontend proof-of-concept apps for web components team.",
            ],
        },
        {
            position: "Math researcher at Williams College SMALL REU",
            dates: "Summer 2022",
            description: [
                "Conducted original research in low-dimensional topology resulting in two preprints.",
                "Collaborated closely with professor and undergraduate group of 8.",
            ],
        },
        {
            position: "Researcher at MIT UROP Program",
            dates: "Fall 2021",
            description: [
                "Developed data visualization features for the Unity (C#) client" +
                    " of NeuralMMO, a massive-multiplayer-online environment for" +
                    " artificial intelligence",
            ],
        },
        {
            position: "Software intern at Crestron Electronics",
            dates: "Summer 2021",
            description: [
                "Designed and implemented language server using TypeScript and Node for proprietary " +
                    "programming language, supporting semantic code completion and diagnostics with error handling.",
                "Worked with analytics team to extract, clean, and visualize clients' device data.",
            ],
        },
        {
            position: "Lab assistant for MIT Introduction to Machine Learning",
            dates: "Spring 2021",
            description: [
                "Served on staff for MIT's intro ML course (200-300 total students) surveying fundamentals of the field.",
                "Weekly responsibilities: taught office hours, handled lab conceptual discussions, crafted video solutions for exercises.",
            ],
        },
        {
            position: "Instructor at Awesomemath Summer Program",
            dates: "June 2020",
            description: [
                "Designed curriculum and assembled problem sets, tests, and " +
                    "teaching materials for contest-math combinatorics class. Taught " +
                    "and ran office hours for gifted class of 20.",
            ],
        },
    ];
    const awards = [
        { title: "Neo Scholar Finalist", date: "2023" },
        { title: "Putnam Exam, Top 200", date: "2021" },
        {
            title: "USAJMO Honorable Mention, MOP Invitee",
            date: "2018",
        },
        { title: "USACO Gold Division", date: " 2017" },
    ];
</script>

<section class="resume-section">
    <h2 class="resume-section-header">Education</h2>
    <header>
        <h2>Massachusetts Institute of Technology</h2>
        <h3>Aug 2020 &mdash; May 2024 (Anticipated)</h3>
    </header>
    <h4 style:margin-bottom="var(--s)">
        B.S. Computer Science and B.S. Mathematics (GPA: 5.0 / 5.0)
    </h4>
    <h4 style:margin-bottom="var(--s)">
        Selected coursework (* indicates graduate-level)
    </h4>
    <ul>
        <li>
            <b>CS</b>: Algorithms II, Software Construction, Introduction to
            Machine Learning, Design for the Web, Computation Structures, Low
            Level Programming in C and Assembly, Operating Systems, Computer
            Graphics, Software Performance Engineering, Natural Language
            Processing
        </li>
        <li>
            <b>Math</b>: Abstract Algebra I/II, Fourier Analysis, Complex
            Analysis, Elliptic Curves, Commutative Algebra*, Algebraic Topology
            I*, Algebraic Geometry I*, Combinatorics*
        </li>
    </ul>
</section>
<section class="resume-section">
    <h2 class="resume-section-header">Work Experience</h2>
    {#each workExperience as job}
        <section class="work-experience-entry">
            <header>
                <h2>{job.position}</h2>
                <h3>{job.dates}</h3>
            </header>
            <ul>
                {#each job.description as bullet}
                    <li>{bullet}</li>
                {/each}
            </ul>
        </section>
    {/each}
    <section class="resume-section">
        <h2 class="resume-section-header">Awards and Recognitions</h2>
        {#each awards as { title, date }}
            <section
                class="award-entry"
                style:display="flex"
                style:justify-content="space-between"
            >
                <h3>{title}</h3>
                <h3>{date}</h3>
            </section>
        {/each}
    </section>
</section>

<style>
    header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
    }
    .resume-section-header {
        border-bottom: 1px solid var(--light-gray);
    }
    .resume-section header {
        margin: var(--s) 0;
    }
    .resume-section:not(:first-of-type) {
        margin-top: var(--l);
    }
    .work-experience-entry {
        margin-top: var(--s);
    }
    .award-entry {
        margin-top: var(--xs);
    }
    h2,
    h3,
    h4,
    ul {
        margin: 0;
    }
</style>
