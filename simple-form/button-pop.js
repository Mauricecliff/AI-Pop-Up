const openButton = document.getElementById("openPopup");
const popup = document.getElementById("popup");
const closeButton = document.getElementById("closePopup");
const closeIcon = document.getElementById("closeIcon");

if (!openButton || !(popup instanceof HTMLDialogElement) || !closeButton || !closeIcon) {
    throw new Error("The pop-up page is missing a required element.");
}

let closeTimer;

function openPopup() {
    if (!popup.open) {
        popup.showModal();
        closeButton.focus();
    }
}

function closePopup() {
    if (!popup.open || popup.classList.contains("is-closing")) {
        return;
    }

    popup.classList.add("is-closing");
    closeTimer = window.setTimeout(() => {
        popup.close();
        popup.classList.remove("is-closing");
        openButton.focus();
    }, 220);
}

openButton.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);
closeIcon.addEventListener("click", closePopup);

popup.addEventListener("click", (event) => {
    if (event.target === popup) {
        closePopup();
    }
});

popup.addEventListener("cancel", (event) => {
    event.preventDefault();
    closePopup();
});

popup.addEventListener("close", () => {
    window.clearTimeout(closeTimer);
    popup.classList.remove("is-closing");
    openButton.focus();
});
