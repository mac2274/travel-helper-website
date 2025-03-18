//fluege-json als array Einfachheitshalber
const fluege = [
    {
        "start": "Stuttgart (STR)",
        "ziel": "Frankfurt (FRA)",
        "stops": 0,
        "flugdauer": "1h 10m",
        "preis": {
            "business": "350 EUR",
            "economy": "150 EUR"
        },
        "terminal": "T1"
    },
    {
        "start": "Stuttgart (STR)",
        "ziel": "Berlin (BER)",
        "stops": 0,
        "flugdauer": "1h 25m",
        "preis": {
            "business": "400 EUR",
            "economy": "180 EUR"
        },
        "terminal": "T2"
    },
    {
        "start": "Stuttgart (STR)",
        "ziel": "München (MUC)",
        "stops": 0,
        "flugdauer": "1h 05m",
        "preis": {
            "business": "370 EUR",
            "economy": "160 EUR"
        },
        "terminal": "T1"
    },
    {
        "start": "Stuttgart (STR)",
        "ziel": "Hamburg (HAM)",
        "stops": 1,
        "flugdauer": "2h 45m",
        "preis": {
            "business": "450 EUR",
            "economy": "200 EUR"
        },
        "terminal": "T3"
    },
    {
        "start": "Stuttgart (STR)",
        "ziel": "Düsseldorf (DUS)",
        "stops": 0,
        "flugdauer": "1h 20m",
        "preis": {
            "business": "380 EUR",
            "economy": "170 EUR"
        },
        "terminal": "T1"
    },
    {
        "start": "Stuttgart (STR)",
        "ziel": "Zürich (ZRH)",
        "stops": 0,
        "flugdauer": "1h 10m",
        "preis": {
            "business": "390 EUR",
            "economy": "180 EUR"
        },
        "terminal": "T2"
    },
    {
        "start": "Stuttgart (STR)",
        "ziel": "Wien (VIE)",
        "stops": 1,
        "flugdauer": "2h 15m",
        "preis": {
            "business": "420 EUR",
            "economy": "190 EUR"
        },
        "terminal": "T1"
    },
    {
        "start": "Stuttgart (STR)",
        "ziel": "Paris (CDG)",
        "stops": 0,
        "flugdauer": "1h 30m",
        "preis": {
            "business": "430 EUR",
            "economy": "200 EUR"
        },
        "terminal": "T3"
    },
    {
        "start": "Stuttgart (STR)",
        "ziel": "Amsterdam (AMS)",
        "stops": 0,
        "flugdauer": "1h 35m",
        "preis": {
            "business": "440 EUR",
            "economy": "210 EUR"
        },
        "terminal": "T2"
    },
    {
        "start": "Stuttgart (STR)",
        "ziel": "Madrid (MAD)",
        "stops": 1,
        "flugdauer": "3h 15m",
        "preis": {
            "business": "500 EUR",
            "economy": "250 EUR"
        },
        "terminal": "T1"
    }
] 

// overlay[1] nicht mehr nötig, jetzt brauchen wir #submit-button für Suchfunktion[2]

// let overlay = document.querySelector('.div-overlay');

// document.querySelector('#submit-button').addEventListener('click', () => {
//     overlay.classList.toggle('hidden');
// })

// let overlayContent = document.querySelector('.overlay-content');
// overlayContent.addEventListener('click', () => {
//     overlay.classList.toggle('hidden');
// })

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

/* fluege-json auslesen -> json ist jetzt in der js-datei definiert um kein fetch machen zu müssen*/

document.querySelector('#submit-button').addEventListener('click', () => {
    let flightFrom = document.querySelector('#flight-from').value;
    let flightTo = document.querySelector('#flight-to').value;
    let resultContainer = document.querySelector('#fluege-container');

    resultContainer.innerHTML = '';

    fluege.forEach((flug) => {

        if(flug.start.includes(flightFrom) && flug.ziel.includes(flightTo)) {
            resultContainer.innerHTML = `
                <div class="option-container">    
                    <div class="time">
                        <div class="leaving-time">10:10
                            <div class="leaving-airport">${flug.start}</div>
                            <div class="flying-time">Dauer ${flug.flugdauer}</div>
                        </div>
                                
                        <div class="stops">${flug.stops}</div>
                        
                        <div class="arriving-time">12:45
                            <div class="arriving-airport">${flug.ziel}
                                <div class="terminal">${flug.terminal}</div>
                            </div>
                        </div>
                    </div>

                    <div class="flight-classes">
                        <div class="economy">
                            <span class="bold">Economy</span>
                            ab
                            <span class="bold">${flug.preis.economy}</span>
                            <img src="resources/img/icon/arrow-down.png" alt="">
                        </div>
                        <div class="business">
                            <span class="bold">Business</span>
                            ab
                            <span class="bold">${flug.preis.business}</span>
                            <img src="resources/img/icon/arrow-down.png" alt="">
                        </div>
                    </div>
                </div>`;  
        }
    });
});

