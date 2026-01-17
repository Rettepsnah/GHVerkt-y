// --- DATA ---
const airportDB = {
    "ENGM": { name: "Oslo lufthavn, Gardermoen", easa: true },
    "ENBR": { name: "Bergen lufthavn, Flesland", easa: true },
    "ENVA": { name: "Trondheim lufthavn, Værnes", easa: true },
    "ENZV": { name: "Stavanger lufthavn, Sola", easa: true },
    "ENTC": { name: "Tromsø lufthavn, Langnes", easa: true },
    "ENBL": { name: "Førde Lufthamn, Bringeland", easa: true },
    "ENBO": { name: "Bodø lufthavn", easa: true },
    "ENEV": { name: "Harstad/Narvik lufthavn, Evenes", easa: true },
    "ENCN": { name: "Kristiansand lufthavn, Kjevik", easa: true },
    "ENAL": { name: "Ålesund lufthavn, Vigra", easa: true },
    "ENHD": { name: "Haugesund lufthavn, Karmøy", easa: true },
    "ENML": { name: "Molde lufthavn, Årø", easa: true },
    "ENKR": { name: "Kirkenes lufthavn, Høybuktmoen", easa: true },
    "ENAT": { name: "Alta lufthavn", easa: true },
    "ENBS": { name: "Båtsfjord lufthavn", easa: false } // Eksempel på ikke-EASA
    // Legg til flere flyplasser her...
};

const steps = {
    "easa_airport": {
        title: "Hvilken lufthavn gjelder det?",
        text: "Skriv inn ICAO-kode (4 bokstaver) eller søk på navn for lufthavnen hvor tjenestene leveres.",
        inputType: "icao"
    },
    "entity_type": {
        title: "Hvem er du?",
        text: "Velg hvilken type aktør du representerer.",
        options: [
            { text: "Lufthavnoperatør", next: "services" },
            { text: "Flyselskap (Egenhandling)", next: "services" },
            { text: "Tredjeparts leverandør", next: "services" }
        ],
        secondary: [
            { text: "Annen aktør", action: "exempt" }
        ]
    },
    "services": {
        title: "Hvilke tjenester leveres?",
        text: "Velg kategorien som best beskriver tjenestene.",
        options: [
            { text: "Bakketjenester (Ground Handling)", next: "exemptions", legal: "Vedlegg 1 - Ground Handling Services" },
            { text: "Flyplassdrift", action: "exempt" }
        ],
        secondary: [
            { text: "Ingen av disse", action: "exempt" }
        ]
    },
    "exemptions": {
        title: "Samsvarsvurdering",
        text: "Basert på dine valg ser det ut til at du omfattes av regelverket.",
        isFinal: true
    }
};

let stepHistory = [];
let currentAirport = null;

// --- FUNKSJONER ---

// Ny funksjon for velkomstsiden
function startTool() {
    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('tool-container').classList.remove('hidden');
    
    // Nullstill input og start første steg
    const input = document.getElementById('icao-input');
    if(input) input.value = "";
    renderStep("easa_airport");
}

function renderStep(stepId) {
    const stepData = steps[stepId];
    if (!stepData) return;

    // Oppdater UI
    document.getElementById('question-title').innerText = stepData.title;
    document.getElementById('question-text').innerText = stepData.text;
    
    // Håndter input-felt
    const inputContainer = document.getElementById('input-container');
    if (stepData.inputType === "icao") {
        inputContainer.classList.remove('hidden');
        setupICAOListener();
    } else {
        inputContainer.classList.add('hidden');
    }

    // Knapper
    const mainContainer = document.getElementById('options-container');
    const secContainer = document.getElementById('secondary-options-container');
    mainContainer.innerHTML = "";
    secContainer.innerHTML = "";

    if (stepData.options) {
        stepData.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'continue-button';
            btn.innerHTML = `<i class="fas fa-check"></i> ${opt.text}`;
            btn.onclick = () => handleOptionClick(opt);
            mainContainer.appendChild(btn);
        });
    }

    if (stepData.secondary) {
        stepData.secondary.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'btn-no';
            btn.innerText = opt.text;
            btn.onclick = () => {
                if (opt.action === "exempt") {
                    showResult("<h3>Unntatt</h3><p>Du faller utenfor virkeområdet.</p>");
                }
            };
            secContainer.appendChild(btn);
        });
    }

    // Stegindikator
    document.querySelectorAll('.flow-step').forEach(el => el.classList.remove('active'));
    const ind = document.getElementById(`step-indicator-${stepId}`);
    if(ind) ind.classList.add('active');

    // Tilbake-knapp
    const backBtn = document.getElementById('back-btn');
    if (stepHistory.length > 0) backBtn.classList.remove('hidden');
    else backBtn.classList.add('hidden');
}

function handleOptionClick(option) {
    if (option.legal) {
        // Hvis valget krever bekreftelse/mer info
        const secContainer = document.getElementById('secondary-options-container');
        // Fjern gammel bekreftelsesknapp
        const oldBtn = document.getElementById('confirm-btn');
        if (oldBtn) oldBtn.remove();

        const confirmBtn = document.createElement('button');
        confirmBtn.id = 'confirm-btn';
        confirmBtn.className = 'btn-reset';
        confirmBtn.style.width = "100%";
        confirmBtn.style.marginBottom = "15px";
        confirmBtn.innerText = "Bekreft valg: " + option.text;
        confirmBtn.onclick = () => {
            stepHistory.push("services"); 
            if (option.next === "exemptions") {
                 showResult(`<div style="color:var(--caa-success); font-size:3rem;"><i class="fas fa-check-circle"></i></div>
                 <h3>Omfattet av regelverket</h3>
                 <p>Du må forholde deg til Forordning (EU) 2025/20.</p>`);
            } else {
                renderStep(option.next);
            }
        };
        secContainer.insertBefore(confirmBtn, secContainer.firstChild);
    } else if (option.next) {
        stepHistory.push("entity_type");
        renderStep(option.next);
    }
}

// Oppdatert lytter med navnesøk
function setupICAOListener() {
    const input = document.getElementById('icao-input');
    const status = document.getElementById('icao-status');
    const suggestionsBox = document.getElementById('search-suggestions');

    if (!input) return;

    // Fjern gamle lyttere ved å klone
    const newNode = input.cloneNode(true);
    input.parentNode.replaceChild(newNode, input);
    const activeInput = document.getElementById('icao-input');

    activeInput.addEventListener('input', (e) => {
        const val = e.target.value.trim().toUpperCase();
        status.innerHTML = "";
        status.className = "";
        suggestionsBox.innerHTML = "";
        suggestionsBox.classList.add('hidden');

        if (val.length < 2) return;

        // 1. ICAO match (4 tegn)
        if (val.length === 4 && airportDB[val]) {
            handleAirportFound(val);
            return;
        }

        // 2. Navnesøk
        const matches = Object.keys(airportDB).filter(code => 
            airportDB[code].name.toUpperCase().includes(val) || code.includes(val)
        );

        if (matches.length > 0) {
            suggestionsBox.classList.remove('hidden');
            
            // Hvis vi finner eksakt én match og brukeren har skrevet ganske mye
            if (matches.length === 1 && val.length > 3) {
                const code = matches[0];
                status.innerHTML = `Fant: <strong>${airportDB[code].name}</strong> (${code})`;
                status.style.color = "var(--caa-success)";
            }

            // Vis maks 3 forslag
            matches.slice(0, 3).forEach(code => {
                const btn = document.createElement('div');
                btn.className = 'suggestion-btn';
                btn.innerHTML = `<span>${airportDB[code].name}</span> <strong>${code}</strong>`;
                btn.onclick = () => {
                    activeInput.value = code;
                    handleAirportFound(code);
                    suggestionsBox.classList.add('hidden');
                };
                suggestionsBox.appendChild(btn);
            });
        } else {
            status.innerText = "Ingen lufthavn funnet.";
            status.style.color = "var(--caa-contrast)";
        }
    });

     activeInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const suggestions = suggestionsBox.querySelectorAll('.suggestion-btn');
            if (suggestions.length === 1) {
                suggestions[0].click();
            }
        }
    });
}

function handleAirportFound(code) {
    const status = document.getElementById('icao-status');
    const airport = airportDB[code];
    
    status.innerHTML = `Valgt: <strong style="color:var(--caa-success)">${airport.name}</strong>`;
    currentAirport = { code: code, ...airport };

    setTimeout(() => {
        stepHistory.push("easa_airport");
        if (airport.easa) {
            renderStep("entity_type");
        } else {
            showResult(`<div style="color:#666; font-size:3rem;"><i class="fas fa-info-circle"></i></div>
            <h3>Ingen krav</h3>
            <p>Lufthavnen <strong>${airport.name}</strong> faller utenfor virkeområdet.</p>`);
        }
    }, 800);
}

function showResult(html) {
    document.getElementById('question-content').classList.add('hidden');
    document.getElementById('back-btn').classList.add('hidden');
    document.querySelectorAll('.flow-step').forEach(el => el.classList.remove('active'));
    
    const resultArea = document.getElementById('result-area');
    resultArea.classList.remove('hidden');
    document.getElementById('result-box').innerHTML = html;
}

function goBack() {
    if (stepHistory.length === 0) return;
    const prevStep = stepHistory.pop();
    renderStep(prevStep);
    document.getElementById('result-area').classList.add('hidden');
    document.getElementById('question-content').classList.remove('hidden');
}