
const inputRef = document.getElementById("validation-input");

const onBlur = (event) => {
    const inputDataLength = Number(event.currentTarget.dataset.length);
    const inputDataLengthUser = Number(event.currentTarget.value.trim().length);

    if (inputDataLength === inputDataLengthUser) {
        inputRef.classList.add("valid");
        inputRef.classList.remove("invalid");
    } else {
        inputRef.classList.remove("valid");
        inputRef.classList.add("invalid");
    }
};

inputRef.addEventListener("blur", onBlur);