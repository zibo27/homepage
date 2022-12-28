console.log("Witam Was serdecznie nazywam się Sebastian Pawłowski :) !");

let button = document.querySelector(".button");
let motyw = document.querySelector(".motyw");
let mainHeaderWhite = document.querySelector(".mainHeaderWhite");
let header = document.querySelector(".header");
let headerText = header.innerText;

button.addEventListener("click", () => {
    header.remove();
    button.innerText = "Brak nagłówka"
});

motyw.addEventListener("click", () => {
    header.classList.toggle("mainHeaderWhite");
    motyw.innerText = header.classList.contains("mainHeaderWhite") ? "Włącz ciemny nagłówek" : "Włącz jasny nagłówek";
    header.innerText === headerText ? "Zadanie 3 - interakcja przycisku" : header.innerText = headerText;
});