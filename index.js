let button = document.getElementById('submit-button');
button.addEventListener('click', () => {
    let overlay = document.getElementsByClassName('div-overlay');
    overlay.classList.remove('hidden');
})