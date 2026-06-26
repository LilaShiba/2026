document.addEventListener("DOMContentLoaded", () => {

    const frame = document.getElementById("storyFrame");
    const title = document.getElementById("storyTitle");

    document.querySelectorAll("[data-file]").forEach(link => {

        link.addEventListener("click", e => {
            e.preventDefault();

            const file = window.STORIES_BASE + link.dataset.file;

            title.textContent = link.dataset.title;

<<<<<<< HEAD
            // PDF.js viewer with dark inversion trick
            frame.src =
                "https://mozilla.github.io/pdf.js/web/viewer.html?file=" +
                encodeURIComponent(file);
=======
            frame.src =
                window.STORIES_BASE +
                link.dataset.file.replace(/ /g,"%20").replace(/;/g,"%3B");
>>>>>>> parent of e9c2461 (v1)

            frame.scrollIntoView({
                behavior: "smooth"
            });
        });

    });

});

