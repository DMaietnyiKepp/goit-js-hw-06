
const inputRef = document.getElementById("font-size-control");
const textRef = document.getElementById("text");

textRef.style.fontSize = inputRef.value + "px";

const onInput = () => (textRef.style.fontSize = inputRef.value + "px");

inputRef.addEventListener("input", onInput);