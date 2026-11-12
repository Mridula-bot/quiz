document.addEventListener("DOMContentLoaded", function () {
    console.log("Quiz Question Sorting System loaded successfully!");

    const deleteButtons = document.querySelectorAll(".delete-button");

    deleteButtons.forEach(function (button) {
        button.addEventListener("click", function (event) {
            const confirmation = confirm(
                "Are you sure you want to delete this question?"
            );

            if (!confirmation) {
                event.preventDefault();
            }
        });
    });
});