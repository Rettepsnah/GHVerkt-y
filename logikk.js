// Database over lufthavner
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
    "ENBS": { name: "Båtsfjord lufthavn", easa: true },
    "ENKB": { name: "Kristiansund lufthavn, Kvernberget", easa: true },
    "ENSB": { name: "Svalbard lufthavn, Longyear", easa: true },
    "ENSR": { name: "Sørkjosen lufthavn", easa: true },
    "ENTO": { name: "Sandefjord lufthavn, Torp", easa: true },
    "ENSO": { name: "Stord lufthavn", easa: true },
    "ENSG": { name: "Sogndal lufthamn, Haukåsen", easa: true },
    "ENSS": { name: "Vardø lufthavn, Svartnes", easa: true },
    "ENLK": { name: "Leknes lufthavn", easa: true },
    "ENMS": { name: "Mosjøen lufthavn, Kjærstad", easa: true },
    "ENST": { name: "Sandnessjøen lufthavn, Stokka", easa: true },
    "ENRY": { name: "Moss lufthavn, Rygge", easa: false },
    "ENOL": { name: "Ørland lufthavn", easa: false },
    "ENAN": { name: "Andøya lufthavn", easa: true },
    "ENHF": { name: "Hammerfest lufthavn", easa: true },
    "ENHV": { name: "Honningsvåg lufthavn, Valan", easa: true },
    "ENVD": { name: "Vadsø lufthavn", easa: true },
    "ENRS": { name: "Røst lufthavn", easa: true },
    "ENSH": { name: "Svolvær lufthavn", easa: true },
    "ENRA": { name: "Mo i Rana lufthavn", easa: true },
    "ENBN": { name: "Brønnøysund lufthavn", easa: true },
    "ENNA": { name: "Lakselv lufthavn, Banak", easa: true },
    "ENSD": { name: "Sandane lufthavn", easa: true },
    "ENFL": { name: "Florø lufthavn", easa: true },
    "ENOV": { name: "Hovden lufthavn, Ørsta/Volda", easa: true },
    "ENRM": { name: "Rørvik lufthavn", easa: true },
    "ENRO": { name: "Røros lufthavn", easa: true },
    "ENNM": { name: "Namsos lufthavn", easa: true },
    "ENMH": { name: "Mehamn lufthavn", easa: true },
    "ENBV": { name: "Berlevåg lufthavn", easa: true },
    "ENHK": { name: "Hasvik lufthavn", easa: true },
    "ENSK": { name: "Stokmarknes lufthavn", easa: true }
};

// Data for infobokser i Steg 1
const step1Info = `
    <div class="info-card-modern blue">
        <i class="fas fa-question-circle info-icon"></i>
        <div class="info-content">
            <h4>Hva er en EASA-lufthavn?</h4>
            <p>En lufthavn underlagt (EU) 2018/1139. Må være åpen for allmennheten, ha kommersiell trafikk og instrumentprosedyrer.</p>
        </div>
    </div>
    <div class="info-card-modern">
        <i class="fas fa-exclamation-circle info-icon"></i>
        <div class="info-content">
            <h4>Lufthavner som er unntatt</h4>
            <p>Militære lufthavner og de fleste kortbanelufthavner er normalt unntatt, men sjekk ICAO-koden for sikkerhet.</p>
        </div>
    </div>
`;

// Data for infoboks i Steg 3
const step3Info = `
    <div class="info-card-modern blue" style="grid-column: span 2;">
        <i class="fas fa-info-circle info-icon"></i>
        <div class="info-content">
            <h4>Om bakketjenester</h4>
            <p>Regelverket gjelder kun hvis du leverer spesifikke bakketjenester listet nedenfor på en EASA-lufthavn. Hvis du leverer andre tjenester enn disse, er du ikke omfattet.</p>
        </div>
    </div>
`;

// Liste over unntak (Steg 4)
const exemptionsList = `
    <h4>Følgende aktiviteter er unntatt regelverket:</h4>
    <ul>
        <li>(a) Marshalling of aircraft</li>
        <li>(b) Flight dispatch tasks (Regulation (EU) No 965/2012)</li>
        <li>(c) Load control tasks (load planning, mass and balance, etc.)</li>
        <li>(d) Ground supervision</li>
        <li>(e) Oil handling for the aircraft (utført av vedlikeholdsorganisasjon)</li>
        <li>(f) Aircraft exterior cleaning (utført av vedlikeholdsorganisasjon)</li>
        <li>(g) Andre bakketjenester utført i forbindelse med vedlikehold</li>
        <li>(h) Transport av passasjerer og crew (hvis dette er eneste tjeneste)</li>
        <li>(i) Self-handling for ikke-kommersielle eller små fly</li>
        <li>(j) Assistanse til PRM (hvis utført av lufthavnoperatør uten andre tjenester)</li>
    </ul>
    <p><strong>Fall ditt arbeid inn under noen av punktene over?</strong></p>
`;

// Konfigurasjon av stegene
const flow = [
    {
        id: "easa_airport",
        question: "Leveres tjenesten på en EASA Lufthavn?",
        extraHtml: step1Info,
        requireICAO: true,
        options: [
            { text: "Gå videre", next: "entity_type", condition: "checkICAO" }
        ]
    },
    {
        id: "entity_type",
        question: "Hvilken organisasjon representerer du?",
        layout: "horizontal",
        options: [
            { text: "GHSP", sub: "Ground Handling Provider", next: "service_type" },
            { text: "ADR", sub: "Lufthavnoperatør", next: "service_type" },
            { text: "AOC", sub: "Flyselskap", next: "service_type" }
        ],
        secondaryOption: { text: "Ingen av disse", result: "Du er ikke omfattet av regelverket (EU) 2025/20." }
    },
    {
        id: "service_type",
        question: "Hvilken bakketjeneste leverer dere?",
        extraHtml: step3Info,
        layout: "horizontal",
        options: [
            { text: "Passenger Handling", icon: "fa-users", legal: "Article 2(2)(a)", isService: true },
            { text: "Baggage Handling", icon: "fa-suitcase", legal: "Article 2(2)(b)", isService: true },
            { text: "Aircraft Servicing", icon: "fa-plane-arrival", legal: "Article 2(2)(c) (Fuel, de-icing etc.)", isService: true },
            { text: "Turnaround", icon: "fa-sync", legal: "Article 2(2)(d) (Loading, pushback)", isService: true },
            { text: "Mail & Cargo", icon: "fa-box-open", legal: "Article 2(2)(e)", isService: true }
        ],
        secondaryOption: { text: "Ingen av disse", result: "Tjenesten du leverer faller utenfor definisjonene i (EU) 2025/20." }
    },
    {
        id: "exemptions",
        question: "Er aktiviteten unntatt regelverket?",
        infoContent: exemptionsList,
        layout: "horizontal",
        options: [
            { text: "Ja", sub: "Vi er unntatt", result: "Du er <strong>unntatt</strong> regelverket og trenger ikke sende samsvarserklæring." },
            { text: "Nei", sub: "Ikke unntatt", result: "<strong>KONKLUSJON:</strong> Du skal levere inn samsvarserklæring iht. (EU) 2025/20.", isFinal: true }
        ]
    }
];

// Tilstand
let stepHistory = [];

/**
 * NY: Start funksjon som viser veilederen
 */
function startWizard() {
    document.getElementById('start-page').classList.add('hidden');
    document.getElementById('wizard-container').classList.remove('hidden');
    document.getElementById('wizard-container').classList.add('fade-in');
    renderStep('easa_airport');
}

/**
 * Hovedfunksjon for å vise et steg
 */
function renderStep(stepId, isBack = false) {
    const step = flow.find(s => s.id === stepId);
    
    // Håndter historikk
    if (!isBack && stepHistory.length > 0 && stepHistory[stepHistory.length - 1] !== stepId) {
        if (!stepHistory.includes(stepId)) stepHistory.push(stepId);
    } else if (stepHistory.length === 0) {
        stepHistory.push(stepId);
    }
    
    // Oppdater step-indikator
    document.querySelectorAll('.flow-step').forEach(el => el.classList.remove('active'));
    const indicator = document.getElementById(`step-indicator-${stepId}`);
    if (indicator) indicator.classList.add('active');

    // Vis/skjul tilbake-knapp
    const backBtn = document.getElementById('back-btn');
    if (stepId === "easa_airport") {
        backBtn.classList.add('hidden');
        stepHistory = ["easa_airport"]; // Reset historikk
    } else {
        backBtn.classList.remove('hidden');
    }

    // Nullstill visning av containere
    const icaoContainer = document.getElementById('icao-search-container');
    const infoGrid = document.getElementById('info-grid');
    const infoBox = document.getElementById('info-box');
    const serviceBox = document.getElementById('service-detail-box');
    const container = document.getElementById('options-container');
    const secondaryContainer = document.getElementById('secondary-options-container');

    // Sett tittel
    document.getElementById('step-title').innerText = step.question;

    // Spesialhåndtering for Steg 1 (ICAO)
    if (stepId === "easa_airport") {
        icaoContainer.classList.remove('hidden');
        setupICAOListener(); 
    } else {
        icaoContainer.classList.add('hidden');
    }

    // Vis ekstra HTML (Infobokser)
    if (step.extraHtml) {
        infoGrid.innerHTML = step.extraHtml;
        infoGrid.classList.remove('hidden');
    } else {
        infoGrid.classList.add('hidden');
    }

    // Vis tekstboks (Unntaksliste)
    if (step.infoContent) {
        infoBox.innerHTML = step.infoContent;
        infoBox.classList.remove('hidden');
    } else {
        infoBox.classList.add('hidden');
    }

    // Skjul service-detaljer ved nytt steg
    serviceBox.classList.add('hidden');
    container.innerHTML = '';
    secondaryContainer.innerHTML = '';

    // Generer knapper
    if (stepId !== "easa_airport") { // For steg 1 lages knappen av ICAO-lytteren
        step.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'continue-button';
            
            let html = "";
            if (opt.icon) html += `<i class="fas ${opt.icon}" style="font-size: 1.5rem; margin-bottom: 10px; color: var(--caa-blue);"></i>`;
            html += `<strong>${opt.text}</strong>`;
            if (opt.sub) html += `<span style="font-size:0.9rem; color:#666;">${opt.sub}</span>`;
            
            btn.innerHTML = html;
            
            btn.onclick = () => {
                if (opt.isService) {
                    handleServiceClick(opt, secondaryContainer);
                } else if (opt.result) {
                    showResult(opt.result);
                } else {
                    stepHistory.push(opt.next);
                    renderStep(opt.next);
                }
            };
            container.appendChild(btn);
        });
    }

    // Sekundære knapper (f.eks. "Ingen av disse")
    if (step.secondaryOption) {
        const btn = document.createElement('button');
        btn.innerText = step.secondaryOption.text;
        btn.className = 'btn-reset'; // Bruk reset-stil for sekundær
        btn.style.width = "100%";
        btn.style.marginTop = "15px";
        btn.style.backgroundColor = "#fff";
        btn.style.border = "1px solid #ccc";
        btn.style.color = "#666";
        
        btn.onclick = () => showResult(step.secondaryOption.result);
        secondaryContainer.appendChild(btn);
    }
}

/**
 * Håndterer input for ICAO-søk med .trim()
 */
function setupICAOListener() {
    const input = document.getElementById('icao-input');
    const status = document.getElementById('icao-status');
    const nextBtnContainer = document.getElementById('options-container');

    // Nullstill input ved ny render
    input.value = '';
    status.innerText = '';
    status.className = '';
    nextBtnContainer.innerHTML = '';

    input.onkeyup = (e) => {
        // .trim() fjerner mellomrom før/etter
        const val = e.target.value.trim().toUpperCase();
        
        if (val.length === 4) {
            const airport = airportDB[val];
            if (airport) {
                if (airport.easa) {
                    status.innerHTML = `<span style="color:var(--caa-success)"><i class="fas fa-check"></i> ${airport.name} er en EASA-lufthavn.</span>`;
                    
                    nextBtnContainer.innerHTML = `
                        <button class="continue-button" onclick="stepHistory.push('easa_airport'); renderStep('entity_type')">
                            <strong><i class="fas fa-arrow-right"></i> Gå videre</strong>
                            <span>Start vurdering for ${airport.name}</span>
                        </button>
                    `;
                } else {
                    status.innerText = "Denne lufthavnen er registrert, men ikke omfattet av EASA-reglene.";
                    status.style.color = "orange";
                    nextBtnContainer.innerHTML = '';
                }
            } else {
                status.innerText = "Fant ikke lufthavn med denne koden.";
                status.style.color = "var(--caa-contrast)";
                nextBtnContainer.innerHTML = '';
            }
        } else {
            status.innerText = "";
            nextBtnContainer.innerHTML = '';
        }
    };
}

function handleServiceClick(option, secondaryContainer) {
    // Vis info om tjenesten
    const detailBox = document.getElementById('service-detail-box');
    document.getElementById('service-title').innerText = option.text;
    document.getElementById('service-text').innerHTML = `<p>Omfattes av definisjonen i ${option.legal}.</p>`;
    detailBox.classList.remove('hidden');

    // Fjern gammel bekreftelsesknapp
    const oldBtn = document.getElementById('confirm-btn');
    if (oldBtn) oldBtn.remove();

    // Legg til ny bekreftelse
    const confirmBtn = document.createElement('button');
    confirmBtn.id = 'confirm-btn';
    confirmBtn.className = 'continue-button';
    confirmBtn.style.backgroundColor = "#e8f5e9";
    confirmBtn.style.borderColor = "#2e7d32";
    confirmBtn.innerHTML = `<strong><i class="fas fa-check"></i> Bekreft valg: ${option.text}</strong>`;
    
    confirmBtn.onclick = () => {
        stepHistory.push("exemptions");
        renderStep("exemptions");
    };
    
    secondaryContainer.insertBefore(confirmBtn, secondaryContainer.firstChild);
}

function showResult(text) {
    document.getElementById('question-content').classList.add('hidden');
    document.getElementById('back-btn').classList.add('hidden'); 
    document.querySelectorAll('.flow-step').forEach(el => el.classList.remove('active'));
    
    const resultArea = document.getElementById('result-area');
    resultArea.classList.remove('hidden');
    document.getElementById('result-box').innerHTML = text;
}

function goBack() {
    if (stepHistory.length > 1) {
        stepHistory.pop(); 
        const prevStep = stepHistory[stepHistory.length - 1];
        renderStep(prevStep, true); 
    } else {
        // Hvis vi går helt tilbake, vis startside igjen?
        // For nå går vi bare til steg 1
        renderStep("easa_airport", true);
    }
}