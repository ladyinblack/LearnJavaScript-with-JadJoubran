const number = document.querySelector("#your-number");
const output = document.querySelector("#output");

number.addEventListener("input", () => {
    output.textContent = evenOrOdd(Number.parseInt(number.value, 10));
});