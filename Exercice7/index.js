function convertToBinary() {
    const input = document.getElementById('decimalInput').value;
    const result = document.getElementById('binaryResult');
    const number = parseInt(input, 10);
        if (!/^\d+$/.test(input)) {
            result.textContent = '';
            return;
        }
    result.textContent = number.toString(2);
}
