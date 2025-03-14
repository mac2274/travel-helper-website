let overlay = document.querySelector('.div-overlay');

document.querySelector('#submit-button').addEventListener('click', () => {
    overlay.classList.toggle('hidden');
})

let overlayContent = document.querySelector('.overlay-content');
overlayContent.addEventListener('click', () => {
    overlay.classList.toggle('hidden');
})

/* initiieern der tabs */ 
let tab1 = document.querySelector('#tab1');
let tab2 = document.querySelector('#tab2');
let tab3 = document.querySelector('#tab3');
let tab4 = document.querySelector('#tab4');

let img1 = document.querySelector('#img1');
let img2 = document.querySelector('#img2');
let img3 = document.querySelector('#img3');
let img4 = document.querySelector('#img4');

/* event-listener hinzufügen */
tab1.addEventListener('click', () => {
    tabWechsel(tab1, 1);
    useFilter(img1);
})

tab2.addEventListener('click', () => {
    tabWechsel(tab2, 2);
    useFilter(img2);
})

tab3.addEventListener('click', () => {
    tabWechsel(tab3, 3);
    useFilter(img3);
})

tab4.addEventListener('click', () => {
    tabWechsel(tab4, 4);
    useFilter(img4);
})

/* funktion zum tab-sprung */
function tabWechsel(tab, zahl){
    tab.classList.toggle('tab_active');

    for(let i=1; i<5; i++){
        if(i !== zahl){
            let newTab = document.querySelector('#tab' +i);
            if(newTab.classList.contains('tab_active')){
                newTab.classList.remove('tab_active');
            }
        }
    }
}

function useFilter (img){
    img.classList.toggle('icon_filter');
}