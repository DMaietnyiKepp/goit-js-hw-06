
const formRef = document.querySelector(".login-form");
const profile = {};

formRef.addEventListener("submit", (event) => {
    event.preventDefault();

    const emailValue = formRef.elements.email.value.trim();
    const passwordValue = formRef.elements.password.value.trim();

    if (emailValue === "" || passwordValue === "") {
        alert("All fields must be filled in");
    } else {
        profile.email = emailValue;
        profile.password = passwordValue;
        console.log(profile);
    }

    formRef.reset();
});