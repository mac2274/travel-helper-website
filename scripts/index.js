// ---------- QuerySelectors 
let resultContainer = document.querySelector('#fluege-container');
let flightFrom = document.querySelector('#flight-from'); //input-feld wird genommen und vergleichbar gemacht
let flightTo = document.querySelector('#flight-to'); //input-feld wird genommen und vergleichbar gemacht

// Tabs
let tab1 = document.querySelector('#tab1');
let tab2 = document.querySelector('#tab2');
let tab3 = document.querySelector('#tab3');
let tab4 = document.querySelector('#tab4');
// Imgages
let img1 = document.querySelector('#img1');
let img2 = document.querySelector('#img2');
let img3 = document.querySelector('#img3');
let img4 = document.querySelector('#img4');

// ------------- EventListener
document.addEventListener('DOMContentLoaded', init); // Initialisieren nach Laden der Seite
document.querySelector('#submit-button').addEventListener('click', startSearch); // Eventlistener nach Absenden der Suche

// Hilfsfunktionen
// Funktion zum Tabsprung 
function tabWechsel(tab, zahl, img) {
    tab.classList.toggle('tab_active');
    img.classList.toggle('icon_filter');

    for (let i = 1; i < 5; i++) {
        if (i !== zahl) {
            // Definieren einer neuen Variable für den Tabwechsel
            let newTab = document.querySelector('#tab' + i);
            // Definieren einer neuen Variable für den Bildwechsel
            let newImg = document.querySelector('#img' + i)
            if (newTab.classList.contains('tab_active')) {
                newTab.classList.remove('tab_active');
                newImg.classList.remove('icon_filter');
            }
        }
    }
}
// unterstützende Hilfsfunktionen füt Tabsprung
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

// ---------------- Funktionen
function init(){
    flightFrom.value = localStorage.getItem('von');
    flightTo.value = localStorage.getItem('nach');
}

// Funktion nach betätigen des Buttons
function startSearch() {
    // Funktion zum Starten der Suche   
    resultContainer.innerHTML = ''; // Suchergebniss wird entfernt, Neue Suche kann starten 

    // fetch um daten aus json-datei zu erhalten 
    
    fetchData();
    setLocalStorage();
}

function fetchData() {
// flightFrom und FlightTo in Api einbauen
    let apiURL = `https://storage01.dbe.academy/fswd/travel-api.php?start=${flightFrom.value}&ziel=${flightTo.value}&datum=13.09.2025`;

    fetch(apiURL, {
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Error" + response.status);
            }
            return response.json();
        })
        // die umgewandte Json-Datei in JS nutzen
        .then(data => {
            //console.log("Flugdaten geladen:", data);
            let fetchedData = data;
            generateHTML(fetchedData);
        })
        .catch(error => {
            console.log("Fehler beim Laden der Daten:" + error);
        })
}

function generateHTML(fetchedData) {
    flightFrom.value.toLowerCase(); //input-feld wird genommen und vergleichbar gemacht
    flightTo.value.toLowerCase(); //input-feld wird genommen und vergleichbar gemacht

    let checkedEco = document.querySelector('#checkbox-economy').checked;
    let checkedNonStop = document.querySelector('#checkbox-nonstop').checked;

    fetchedData.forEach((flug) => {
        // filtern nach Eingabe
        let lcFlugStart = flug.start.toLowerCase(); //Feld im Array wird vergleichbar gemacht
        let lcFlugZiel = flug.ziel.toLowerCase(); //Feld im Array wird vergleichbar gemacht  

        if (lcFlugStart.includes(flightFrom) && lcFlugZiel.includes(flightTo)) {
            if (checkedNonStop && flug.stops !== 0) {
                return;
            }
            if (checkedEco) {
                resultContainer.innerHTML += filteresEco(flug);
            } else {
                resultContainer.innerHTML += filteredSearch(flug);
            }
        }
    })
}

function filteresEco(flug) {
    return ` <div class="option-container">    
                        <div class="time">
                            <div class="leaving-time">10:10
                                <div class="leaving-airport">${flug.start}</div>
                                <div class="flying-time">Dauer ${flug.flugdauer}</div>
                            </div>    
                        </div>
                                        
                        <div class="stops">${flug.stops}</div>
                                
                        <div class="arriving-time">12:45
                            <div class="arriving-airport">${flug.ziel}
                                <div class="terminal">${flug.terminal}</div>                                    
                            </div>
                        </div>

                        <div class="flight-classes">
                            <div class="economy">
                                <span class="bold">Economy</span>
                                ab
                                <span class="bold">${flug.preis.economy}</span>
                                <img src="resources/img/icon/arrow-down.png" alt="">
                            </div>
                        </div>
                    </div>`;
}

function filteredNonStop(flug) {
    return `  <div class="option-container">    
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
                </div>;
            `;
}

function filteredSearch(flug) {
    return `<div class="option-container">    
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

 // set localStorage
 function setLocalStorage(){
    localStorage.setItem("von", flightFrom.value);
    localStorage.setItem("nach", flightTo.value);
}