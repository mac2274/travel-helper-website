let overlay = document.querySelector('.div-overlay');

document.querySelector('#submit-button').addEventListener('click', () => {
    overlay.classList.toggle('hidden');
})

let overlayContent = document.querySelector('.overlay-content');
overlayContent.addEventListener('click', () => {
    overlay.classList.toggle('hidden');
})

let tab1 = document.querySelector('#tab1');
let tab2 = document.querySelector('#tab2');
let tab3 = document.querySelector('#tab3');
let tab4 = document.querySelector('#tab4');

/* event-listener hinzufügen */
tab1.addEventListener('click', () => {
    tabWechsel(tab1, 1);
})

tab2.addEventListener('click', () => {
    tabWechsel(tab2, 2);
})

tab3.addEventListener('click', () => {
    tabWechsel(tab3, 3);
})

tab4.addEventListener('click', () => {
    tabWechsel(tab4, 4);
})

/* funktion zum tab-sprung */
function tabWechsel(tab, zahl){
    tab.classList.toggle('tab_active');
}