document.addEventListener("DOMContentLoaded", () => {

    const frame = document.getElementById("storyFrame");
    const title = document.getElementById("storyTitle");

    document.querySelectorAll(".story-link").forEach(link => {

        link.addEventListener("click", (e) => {
            e.preventDefault();

            const file = window.STORIES_BASE + link.dataset.file;

            title.textContent = link.dataset.title;

            // PDF.js viewer with dark inversion trick
            frame.src =
                "https://mozilla.github.io/pdf.js/web/viewer.html?file=" +
                encodeURIComponent(file);

            frame.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });

    });

});