const display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        const expr = display.value;

        if (/\/0(?!\d)/.test(expr.replace(/\s+/g, ''))) {
            display.value = 'Division by zero is not allowed';
            return;
        }
        display.value = eval(expr);
    } catch {
        display.value = 'Erreur';
    }
}

window.appendToDisplay = appendToDisplay;
window.clearDisplay = clearDisplay;
window.calculateResult = calculateResult;
