
const refs = {
    input: document.querySelector("#name-input"),
    nemalabel: document.querySelector("#name-output"),
};
refs.input.addEventListener("input", (event) => {
    refs.nemalabel.textContent = event.currentTarget.value;
    if (refs.nemalabel.textContent.length === 0) {
        refs.nemalabel.textContent = "Anonymous";
    }
});