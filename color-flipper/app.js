const body = document.getElementsByTagName("body")[0] /*get tag name of body elements- returns array*/

function setColor(name) {
    body.style.backgroundColor = name;
}

function randomColor() {
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)

    const color = `rgb(${red}, ${green}, ${blue})` /*string manipulation using backticks to create color*/
    body.style.backgroundColor = color;
}
