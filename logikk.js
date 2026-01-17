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

const step3Info = `
    <div class="info-card-modern blue" style="grid-column: span 2;">
        <i class="fas fa-info-circle info-icon"></i>
        <div class="info-content">
            <h4>Om bakketjenester</h4>
            <p>Regelverket gjelder kun hvis du leverer spesifikke bakketjenester listet nedenfor på en EASA-lufthavn. Hvis du leverer andre tjenester enn disse, er du ikke omfattet.</p>
        </div>
    </div>
`;

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

let stepHistory = [];
let currentAirport = null;

function startTool() {
    document.getElementById('start-card').classList.add('hidden');
    document.getElementById('quiz-card').classList.remove('hidden');
    
    // Reset inputs
    const input = document.getElementById('icao-input');
    if(input) input.value = "";
    
    renderStep("easa_airport");
}

function renderStep(stepId, isBack = false) {
    const step = flow.find(s => s.id === stepId);
    
    if (!isBack && stepHistory.length > 0 && stepHistory[stepHistory.length - 1] !== stepId) {
        if (!stepHistory.includes(stepId)) stepHistory.push(stepId); 
    } else if (stepHistory.length === 0) {
        stepHistory.push(stepId);
    }
    
    document.querySelectorAll('.flow-step').forEach(el => el.classList.remove('active'));
    const indicator = document.getElementById(`step-indicator-${stepId}`);
    if (indicator) indicator.classList.add('active');

    const backBtn = document.getElementById('back-btn');
    if (stepId === "easa_airport") {
        backBtn.classList.add('hidden');
        stepHistory = ["easa_airport"];
    } else {
        backBtn.classList.remove('hidden');
    }

    const icaoContainer = document.getElementById('icao-search-container');
    const infoGrid = document.getElementById('info-grid');
    const infoBox = document.getElementById('info-box');
    const serviceBox = document.getElementById('service-detail-box');
    const container = document.getElementById('options-container');
    const secondaryContainer = document.getElementById('secondary-options-container');

    document.getElementById('question-text').innerText = step.question;
    
    if (stepId === "easa_airport") {
        icaoContainer.classList.remove('hidden');
        setupICAOListener(container);
    } else {
        icaoContainer.classList.add('hidden');
    }

    if (step.extraHtml) {
        infoGrid.innerHTML = step.extraHtml;
        infoGrid.classList.remove('hidden');
    } else {
        infoGrid.classList.add('hidden');
    }

    if (step.infoContent) {
        infoBox.innerHTML = step.infoContent;
        infoBox.classList.remove('hidden');
    } else {
        infoBox.classList.add('hidden');
    }

    serviceBox.classList.add('hidden');
    container.innerHTML = '';
    secondaryContainer.innerHTML = '';

    if (step.layout === "horizontal") {
        container.className = "button-grid-main horizontal-grid";
    } else {
        container.className = "button-grid-main vertical-grid";
    }

    if (stepId !== "easa_airport") {
        step.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'continue-button';
            
            let html = "";
            if (opt.icon) html += `<i class="fas ${opt.icon}"></i>`;
            html += `<div>${opt.text}</div>`;
            if (opt.sub) html += `<div style="font-size:0.8rem; font-weight:normal; margin-top:5px;">${opt.sub}</div>`;
            
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

    if (step.secondaryOption) {
        const noBtn = document.createElement('button');
        noBtn.className = 'btn-no';
        noBtn.innerText = step.secondaryOption.text;
        noBtn.onclick = () => showResult(step.secondaryOption.result);
        secondaryContainer.appendChild(noBtn);
    }
}

function goBack() {
    if (stepHistory.length > 1) {
        stepHistory.pop();
        const prevStep = stepHistory[stepHistory.length - 1];
        renderStep(prevStep, true);
    }
}

function setupICAOListener(buttonContainer) {
    const input = document.getElementById('icao-input');
    const status = document.getElementById('icao-status');
    const validIcon = document.getElementById('icao-valid-icon');
    
    const updateButton = (isValid) => {
        buttonContainer.innerHTML = '';
        if (isValid) {
            const btn = document.createElement('button');
            btn.className = 'continue-button';
            btn.style.width = "100%";
            btn.style.backgroundColor = "#e8f5e9";
            btn.style.borderColor = "#6A8E7F";
            btn.innerHTML = `<strong>Gå videre</strong><br><span style='font-size:0.8rem'>Lufthavn godkjent</span>`;
            btn.onclick = () => {
                stepHistory.push("entity_type");
                renderStep("entity_type");
            };
            buttonContainer.appendChild(btn);
        }
    };

    if(input.value.length === 4 && airportDB[input.value.toUpperCase()]) {
            const airport = airportDB[input.value.toUpperCase()];
            if(airport.easa) updateButton(true);
    }

    input.oninput = (e) => {
        const val = e.target.value.toUpperCase();
        if (val.length === 4) {
            const airport = airportDB[val];
            if (airport) {
                if (airport.easa) {
                    status.innerHTML = `${airport.name} er en EASA-lufthavn.`;
                    // Bruker variabelen --caa-blue for teksten
                    status.style.color = "var(--caa-blue)";
                    validIcon.classList.remove('hidden');
                    updateButton(true);
                } else {
                    status.innerText = `${airport.name} er IKKE en EASA-lufthavn (Unntatt).`;
                    status.style.color = "#d9534f";
                    validIcon.classList.add('hidden');
                    updateButton(false);
                }
            } else { 
                status.innerText = "Ukjent ICAO-kode."; 
                status.style.color = "#d9534f"; 
                validIcon.classList.add('hidden');
                updateButton(false);
            }
        } else { 
            status.innerText = ""; 
            validIcon.classList.add('hidden');
            updateButton(false);
        }
    };
}

function handleServiceClick(option, secondaryContainer) {
    const serviceBox = document.getElementById('service-detail-box');
    serviceBox.classList.remove('hidden');
    serviceBox.innerHTML = `<h4>${option.text}</h4><p>Juridisk ref: ${option.legal}</p>`;
    
    const oldBtn = document.getElementById('confirm-btn');
    if (oldBtn) oldBtn.remove();

    const confirmBtn = document.createElement('button');
    confirmBtn.id = 'confirm-btn';
    confirmBtn.className = 'btn-reset';
    confirmBtn.style.width = "100%";
    confirmBtn.style.marginBottom = "15px";
    confirmBtn.innerText = "Bekreft valg: " + option.text;
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