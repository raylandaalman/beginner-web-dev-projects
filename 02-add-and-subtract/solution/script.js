const minus = document.querySelectorAll("button")[0];
const plus = document.querySelectorAll("button")[1];
let value = Number(document.querySelector("h2").innerText); // number 0 instead of string 0


const addOne = () => {
    value++
    document.querySelector("h2").innerText = value.toString();
};

const subOne = () => {
    value--
    document.querySelector("h2").innerText = value.toString();
};

minus.addEventListener("click", subOne);
plus.addEventListener("click", addOne);