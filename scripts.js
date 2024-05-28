const input = document.querySelector("#input");
const counter = document.querySelector(".counter");
const toggleButton = document.querySelector("#toggle");

let mode = "characters";

toggleButton.addEventListener("click", () => {
    if (mode === "chacacters") {
        mode = "words";
        toggleButton.textContent = "Contar caracteres";
    } else {
        mode = "characters";
        toggleButton.textContent = "Contar palavras";
    }

    input.dispatchEvent(new Event("input"));
});

input.addEventListener("input", () => {
    let count = 0;

    if (mode === "chacacters") {
        count = input.value.length;

        counter.textContent = `${count} caractere(s)`;
    } else {
        const words = input.value.trim().split(/\s+/);
        count = input.value.trim() == "" ? 0 : words.length;
        counter.textContent = `${count} palavras(s)`;
    }
});