document.addEventListener("DOMContentLoaded", function () {
    let display = document.getElementById("resultado");

    function appendToDisplay(value) {
        display.innerText += value;
    }

    function clearDisplay() {
        display.innerText = "";
    }

    function calculateResult() {
        try {
            let expression = display.innerText.replace(/(\d+)%/g, "($1/100)");
            display.innerText = eval(expression);
        } catch (error) {
            display.innerText = "Erro";
        }
    }

    window.appendToDisplay = appendToDisplay;
    window.clearDisplay = clearDisplay;
    window.calculateResult = calculateResult;
});


function appendToDisplay(value) {
    display.innerText += value;
}

function clearDisplay() {
    display.innerText = "";
}

function calculateResult() {
    try {
        display.innerText = eval(display.innerText);
    } catch (error) {
        display.innerText = "Erro";
    }
}