function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const onClickChangeColor = (event) => {
  textRef.textContent = getRandomHexColor();

  bodyRef.style.backgroundColor = textRef.textContent;
};

const textRef = document.querySelector(".color");
const buttonRef = document.querySelector(".change-color");
const bodyRef = document.body;

buttonRef.addEventListener("click", onClickChangeColor);