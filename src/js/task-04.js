
const valueElement = document.querySelector('#value');

const counterValue = {
    value: 0,
    decrement(value) {
        this.value -= 1;
    },
    increment(value) {
        this.value += 1;
    }
};

const decButton = document.querySelector('button[data-action="decrement"]');
decButton.addEventListener("click", ()=>{
    counterValue.decrement();
    valueElement.textContent = counterValue.value;
});
const incButton = document.querySelector('button[data-action="increment"]');
incButton.addEventListener("click", ()=> {
    counterValue.increment();
    valueElement.textContent = counterValue.value;
});