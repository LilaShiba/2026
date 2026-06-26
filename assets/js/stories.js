document.addEventListener("DOMContentLoaded", () => {

    const frame = document.getElementById("storyFrame");
    const title = document.getElementById("storyTitle");

    document.querySelectorAll(".story-link").forEach(link => {

        link.addEventListener("click", (e) => {
            e.preventDefault();

            title.textContent = link.dataset.title;

            frame.src = window.STORIES_BASE + link.dataset.file;

            frame.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });

    });

});