document.querySelector('#submit-button').addEventListener('click', () => {
    let overlay = document.querySelector('.div-overlay');
    overlay.classList.toggle('hidden');

        let overlayContent = document.querySelector('.ovelay-content');
        overlayContent.addEventListener('click', () => {
            overlay.classList.toggle('hidden');
    })
})

