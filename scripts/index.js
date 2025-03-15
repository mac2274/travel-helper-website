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
    tabWechsel(tab1, 1, img1);
})

tab2.addEventListener('click', () => {
    tabWechsel(tab2, 2, img2);
    useFilter(img2);
})

tab3.addEventListener('click', () => {
    tabWechsel(tab3, 3, img3);
    useFilter(img3);
})

tab4.addEventListener('click', () => {
    tabWechsel(tab4, 4, img4);
    useFilter(img4);
})

/* funktion zum tab-sprung */
function tabWechsel(tab, zahl, img){
    tab.classList.toggle('tab_active');
    img.classList.toggle('icon_filter');

    for(let i=1; i<5; i++){
        if(i !== zahl){
            /* Difinieren einer neuen Variable für den Tabwechsel*/
            let newTab = document.querySelector('#tab' +i);
            /* Definieren einer neuen Variable für den Bilwechsel*/
            let newImg = document.querySelector('#img' +i)
            if(newTab.classList.contains('tab_active')){
                newTab.classList.remove('tab_active');
                newImg.classList.remove('icon_filter');
            }
        }
    }
}

/* fluege-json auslesen */
const resultContainer = document.querySelector('#option-container');

fluege.forEach(flug => {
    const HTMLcontainer = `
    <div></div>`;    
});

resultContainer.innerHTML += HTMLcontainer; 