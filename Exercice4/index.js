
const button = document.getElementById('myButton');
button.addEventListener('click', () => {
    const text = document.createElement('p');
    text.textContent = 'Bonjour, vous avez cliqué sur le bouton !';
    button.insertAdjacentElement('afterend', text);
});