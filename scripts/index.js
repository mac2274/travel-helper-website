document.querySelector('#submit-button').addEventListener('click', () => {
    let overlay = document.querySelector('.div-overlay');
    if(overlay){
        overlay.classList.toggle('hidden');
    }
})