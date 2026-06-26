document.addEventListener("DOMContentLoaded", () => {

    const frame = document.getElementById("storyFrame");
    const title = document.getElementById("storyTitle");

    document.querySelectorAll(".story-link").forEach(link => {

        link.addEventListener("click", (e) => {
            e.preventDefault();

            const file = link.dataset.file;
            const storyTitle = link.dataset.title;

            title.textContent = storyTitle;

            // direct PDF load (THIS is what works on GitHub Pages)
            frame.src = window.STORIES_BASE + file;

            frame.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });

    });

});