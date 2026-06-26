function loadStory(title, file) {

    document.getElementById("storyTitle").textContent = title;

    document.getElementById("storyFrame").src =
        window.STORIES_BASE + encodeURIComponent(file);

    document.getElementById("storyFrame")
        .scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
}