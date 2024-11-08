document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("myModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalImage = document.getElementById("modalImage");
    const closeBtn = document.querySelector(".close");

    document.querySelectorAll(".openModal").forEach(button => {
        button.addEventListener("click", () => {
            const country = button.getAttribute("data-country");
            const topic = button.getAttribute("data-topic");
            modalTitle.textContent = `${country} - ${topic}`;
            modalImage.src = `images/${country}_${topic.replace(/\s/g, "_").toLowerCase()}.jpg`;
            modal.style.display = "flex";
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
