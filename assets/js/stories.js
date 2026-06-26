document.addEventListener("DOMContentLoaded", () => {

    const frame = document.getElementById("storyFrame");
    const title = document.getElementById("storyTitle");

    document.querySelectorAll("[data-file]").forEach(link => {

        link.addEventListener("click", e => {
            e.preventDefault();

            title.textContent = link.dataset.title;

            frame.src =
                window.STORIES_BASE +
                link.dataset.file.replace(/ /g,"%20").replace(/;/g,"%3B");

            frame.scrollIntoView({
                behavior: "smooth"
            });
        });

    });

});

