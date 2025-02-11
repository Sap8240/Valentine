document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById("yes-button");
    const noButton = document.getElementById("no-button");

    let yesButtonSize = 16; // Initial font size in px

    noButton.addEventListener("click", function () {
        // Increase "Yes" button size at a faster rate
        yesButtonSize *= 5; // Increase by 50% each click
        yesButton.style.fontSize = `${yesButtonSize}px`;

        // Ensure the "Yes" button grows significantly
        yesButton.style.width = `${yesButtonSize * 2}px`;
        yesButton.style.height = `${yesButtonSize * 2}px`;
    });

    // Place the buttons over the ring case image
    const ringCaseImage = document.querySelector(".ring-case-image");
    const buttonsContainer = document.querySelector(".buttons");

    function positionButtonsOverImage() {
        const rect = ringCaseImage.getBoundingClientRect();
        buttonsContainer.style.position = "absolute";
        buttonsContainer.style.left = `${rect.left + rect.width / 2 - 50}px`;
        buttonsContainer.style.top = `${rect.top + rect.height / 2}px`;
    }

    window.addEventListener("resize", positionButtonsOverImage);
    window.addEventListener("load", positionButtonsOverImage);
});
