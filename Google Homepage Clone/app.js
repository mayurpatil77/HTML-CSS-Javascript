document.addEventListener("DOMContentLoaded", function () {
    const productsModal = document.getElementById("products-Modal");
    const modal = document.getElementById("myModal");
    const closeModalButton = modal.querySelector(".close");

    productsModal.addEventListener("click", function () {
        modal.style.display = "block";
    });

    closeModalButton.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

