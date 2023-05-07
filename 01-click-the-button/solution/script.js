const button = document.getElementById("click");
const body = document.body;

const addText = () => {
    const newP = document.createElement("p");
    const newText = document.createTextNode("You Clicked The Button!");
    newP.appendChild(newText);
    body.append(newP);
};

button.addEventListener("click", addText);