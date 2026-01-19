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
    "ENSK": { name: "Stokmarknes lufthavn", easa: true },
    "ENVY": { name: "Værøy Helikopterhavn, Tabbisodden", easa: true, isHelicopter: true },
    "ENNO": { name: "Notodden lufthavn, Tuven", easa: false }
};

// Data for infobokser i Steg 1
const step1Info = `
    <div class="info-card-modern blue">
        <div class="info-header-row">
            <i class="fas fa-question-circle info-icon"></i>
            <div class="info-content">
                <h4>Hva er en EASA-lufthavn?</h4>
                <p>En EASA-lufthavn er en flyplass som oppfyller felleseuropeiske krav til utforming og drift (sertifisering). For at en flyplass i det hele tatt skal falle inn under dette regelverket (Basisforordning 2018/1139 Art. 2.1.e), må den oppfylle alle disse kriteriene:</p>
                <ul style="margin-top:10px; margin-bottom:10px; padding-left:20px;">
                    <li>Den er åpen for offentlig bruk (public use).</li>
                    <li>Den betjener kommersiell luftfart (rute-, charter- eller fraktflyging).</li>
                    <li>Den har en asfaltert/dekket instrumentrullebane på 800 meter eller mer (eller betjener helikoptre med instrumentprosedyrer).</li>
                </ul>
                <p>Hvis en flyplass ikke oppfyller disse (f.eks. kun har gressbane eller er stengt for kommersiell trafikk), er den uansett en nasjonal lufthavn.</p>
            </div>
        </div>
    </div>

    <div class="info-card-modern">
        <div class="info-header-row">
            <i class="fas fa-exclamation-circle info-icon"></i>
            <div class="info-content">
                <h4>Lufthavner som er unntatt</h4>
                <p>Selv om en flyplass oppfyller kriteriene over (f.eks. 900 meter asfalt og rutetrafikk), gir artikkel 2.7 i forordningen Norge (ved Luftfartstilsynet) en rett til å unnta flyplassen fra EASA-reglene dersom den har:</p>
                <ul style="margin-top:5px; margin-bottom:5px; padding-left:20px;">
                    <li>Under 10 000 passasjerer i året, og</li>
                    <li>Under 850 fraktbevegelser i året.</li>
                </ul>
            </div>
        </div>
    </div>
`;

// Data for infoboks i Steg 2
const step2Info = `
    <div class="info-card-modern yellow" style="grid-column: span 2;">
        <i class="fas fa-plane info-icon"></i>
        <div class="info-content">
            <h4>For flyselskaper (AOC)</h4>
            <p>Regelverket gjelder kun for <strong>CAT-operasjoner</strong> med komplekse motordrevne luftfartøy. Helikopter er unntatt fra dette regelverket.</p>
        </div>
    </div>
`;

// Detaljert innhold for Steg 3 (Tjenester)
const serviceDetails = {
    passenger: `
        <ul class="detail-list">
            <li>Passenger handling, including passengers with reduced mobility, including safety aspects of passenger and baggage acceptance at the aerodrome, safety of passengers during boarding and disembarkation using ground support equipment and during transit or transfer, and ground transportation of passengers between the aerodrome terminal and the aircraft.</li>
        </ul>
    `,
    baggage: `
        <ul class="detail-list">
            <li>Baggage handling, including baggage identification, sorting, building, transfer, arrival and reclaim.</li>
        </ul>
    `,
    aircraft: `
        <ul class="detail-list">
            <li>Operation of ground support equipment (GSE) used for ground handling services, including loading and unloading of catering, and the movement of those GSE on the apron and around the aircraft;</li>
            <li>Aircraft refuelling and defuelling, namely into-plane fuelling services at the aerodrome;</li>
            <li>Aircraft toilet servicing;</li>
            <li>Potable water servicing;</li>
            <li>Aircraft exterior cleaning;</li>
            <li>Aircraft de-icing and anti-icing;</li>
        </ul>
    `,
    turnaround: `
        <ul class="detail-list">
            <li>Activities upon aircraft arrival, including aircraft securing on the ground;</li>
            <li>Loading and unloading of baggage, cargo, mail, catering, and loading supervision;</li>
            <li>Activities upon aircraft departure;</li>
            <li>Aircraft towing and pushback;</li>
        </ul>
    `,
    mailcargo: `
        <ul class="detail-list">
            <li>Cargo acceptance on behalf of the aircraft operator;</li>
            <li>Final build-up and storage;</li>
            <li>Final weighing and tagging of unit load devices;</li>
            <li>Final checks before air transportation;</li>
            <li>Ground transportation of cargo and mail between the point of final checks and the aircraft.</li>
        </ul>
    `
};

// Konfigurasjon av stegene
const flow = [
    {
        id: "easa_airport",
        question: "Tjenestetilbyder på en EASA-lufthavn?",
        extraHtml: step1Info,
        requireICAO: true, 
        options: [
            { text: "Gå videre", next: "entity_type", condition: "checkICAO" } 
        ]
    },
    {
        id: "entity_type",
        question: "Tilhører du en av disse aktør-kategoriene?",
        layout: "horizontal",
        extraHtml: step2Info,
        options: [
            { text: "GHSP", sub: "Ground Handling Service Provider", next: "service_type" },
            { text: "ADR", sub: "Lufthavnoperatør som også utfører ground handling", next: "service_type" },
            { text: "AOC", sub: "Flyselskap som også utfører self-handling", next: "service_type" }
        ],
        secondaryOption: { text: "Ingen av disse", result: "Du er ikke omfattet av regelverket (EU) 2025/20." }
    },
    {
        id: "service_type",
        question: "Hvilken type tjenester leverer du?",
        layout: "horizontal",
        options: [
            { text: "Passenger Handling", icon: "fa-users", detailKey: "passenger", isService: true },
            { text: "Baggage Handling", icon: "fa-suitcase", detailKey: "baggage", isService: true },
            { text: "Aircraft Servicing", icon: "fa-plane-arrival", detailKey: "aircraft", isService: true },
            { text: "Turnaround", icon: "fa-sync", detailKey: "turnaround", isService: true },
            { text: "Mail & Cargo", icon: "fa-box-open", detailKey: "mailcargo", isService: true }
        ],
        secondaryOption: { text: "Ingen av disse", result: "Tjenesten du leverer faller utenfor definisjonene i (EU) 2025/20." }
    },
    {
        id: "exemptions",
        question: "Noen tjenester og aktiviteter er unntatt regelverket - Er noen av disse aktuelle for deg?",
        layout: "grid",
        options: [
            { text: "Marshalling of aircraft", type: "dashed", action: "confirm_exempt" },
            { text: "Flight dispatch tasks (Regulation (EU) No 965/2012)", type: "dashed", action: "confirm_exempt" },
            { text: "Load control tasks (load planning, mass and balance, etc.)", type: "dashed", action: "confirm_exempt" },
            { text: "Ground supervision", type: "dashed", action: "confirm_exempt" },
            // ENDRET: Uthevet fet skrift
            { 
                text: "<strong>For vedlikeholdsorganisasjoner iht. (EU) No 1321/2014)</strong><br><br>Oil handling for the aircraft (including replenishment, servicing)<br><br>Aircraft exterior cleaning when performed by maintenance<br><br>Any other ground handling activity for the purpose of aircraft maintenance", 
                type: "dashed", 
                action: "confirm_exempt" 
            },
            // ENDRET: Uthevet fet skrift
            { 
                text: "<strong>For AOC</strong><br><br>Commercial air transport operations with other-than-complex motor-powered aircraft<br><br>Any flight operations with complex or other-than-complex motor-powered aircraft that are not commercial air transport operations", 
                type: "dashed", 
                action: "confirm_exempt" 
            },
            // ENDRET: Uthevet fet skrift
            { 
                text: "<strong>For ADR - Lufthavnsoperatør</strong><br><br>Handling of passengers with reduced mobility, or ground transportation of passengers and crew members, or both, when these are the only ground handling services provided by an aerodrome operator with its own personnel, not cumulated with other ground handling services provided by that aerodrome operator.", 
                type: "dashed", 
                action: "confirm_exempt" 
            },
            {
                type: "static",
                html: `
                    <div class="info-card-modern yellow grid-static-item">
                        <div class="info-content">
                            <h4>CARGO AND MAIL HANDLING IN A CARGO WAREHOUSE</h4>
                            <p>Merk at varehus som ikke ligger på lufthavnen, eller i umiddelbar nærhet, dvs. helt inntil flyplassgjerdet, er unntatt regelverket.</p>
                            <p style="margin-top:10px; font-style:italic;">"Only the cargo warehouses that are located at an aerodrome or adjacent to it and that are responsible for final cargo checks and acceptance before the cargo is loaded on the aircraft are included in the scope of Commission Delegated Regulation (EU) 2025/20."</p>
                        </div>
                    </div>
                `
            }
        ],
        secondaryOption: { 
            text: "Nei", 
            result: "<strong>Resultat:</strong><br>Tjenestene du utfører er omfattet av regelverket, og du må levere inn samsvarserklæring iht. (EU) 2025/20." 
        }
    }
];

// Tilstand
let stepHistory = [];
let userChoices = {
    airport: "",
    entity: "",
    service: "",
    exempt: "Nei"
};

function startTool() {
    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('tool-container').classList.remove('hidden');
    const input = document.getElementById('icao-input');
    if(input) input.value = "";
    renderStep("easa_airport");
}

function renderStep(stepId, isBack = false) {
    const step = flow.find(s => s.id === stepId);
    
    // Animasjon
    const contentDiv = document.getElementById('question-content');
    contentDiv.classList.remove('fade-in');
    void contentDiv.offsetWidth; 
    contentDiv.classList.add('fade-in');

    // Håndter historikk
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

    infoGrid.innerHTML = "";
    infoGrid.classList.add('hidden');
    infoBox.innerHTML = "";
    infoBox.classList.add('hidden');
    serviceBox.classList.add('hidden');
    container.innerHTML = '';
    secondaryContainer.innerHTML = '';

    if (stepId === "easa_airport" && step.extraHtml) {
        infoGrid.innerHTML = step.extraHtml;
        infoGrid.classList.remove('hidden');
    }

    if (step.layout === "horizontal") {
        container.className = "button-grid-main horizontal-grid";
    } else if (step.layout === "grid") {
        container.className = "button-grid-main dashed-grid"; 
    } else {
        container.className = "button-grid-main vertical-grid";
    }

    if (stepId !== "easa_airport") {
        step.options.forEach(opt => {
            
            if (opt.type === "static") {
                const div = document.createElement('div');
                div.innerHTML = opt.html;
                div.style.height = "100%"; 
                container.appendChild(div);
                return; 
            }

            const btn = document.createElement('button');
            
            if (opt.type === "dashed") {
                btn.className = 'dashed-btn';
            } else {
                btn.className = 'continue-button';
            }
            
            let html = "";
            if (opt.icon) html += `<i class="fas ${opt.icon}"></i>`;
            html += `<div>${opt.text}</div>`;
            if (opt.sub) html += `<div style="font-size:0.8rem; font-weight:normal; margin-top:5px;">${opt.sub}</div>`;
            
            btn.innerHTML = html;
            
            btn.onclick = () => {
                // Lagre valg (utenom Service som lagres ved bekreftelse)
                if (stepId === "entity_type") userChoices.entity = opt.text;

                if (opt.isService) {
                    container.querySelectorAll('.continue-button').forEach(b => b.classList.remove('selected'));
                    btn.classList.add('selected'); 
                    handleServiceClickNew(opt, secondaryContainer, container, btn);
                } 
                else if (opt.action === "confirm_exempt") {
                    userChoices.exempt = "Ja (" + opt.text.substring(0, 30) + "...)";
                    container.querySelectorAll('.dashed-btn').forEach(b => b.classList.remove('selected'));
                    btn.classList.add('selected');
                    handleExemptionClick(opt, secondaryContainer);
                }
                else if (stepId === "entity_type") {
                    container.querySelectorAll('.continue-button').forEach(b => b.classList.remove('selected'));
                    btn.classList.add('selected');

                    const oldBtn = document.getElementById('next-step-btn');
                    if(oldBtn) oldBtn.remove();

                    const nextBtn = document.createElement('button');
                    nextBtn.id = 'next-step-btn';
                    nextBtn.className = 'btn-reset';
                    nextBtn.style.width = "100%";
                    nextBtn.style.marginTop = "20px";
                    nextBtn.style.marginBottom = "20px";
                    nextBtn.innerHTML = `Gå videre <i class="fas fa-arrow-right"></i>`;
                    nextBtn.onclick = () => {
                         stepHistory.push(opt.next);
                         renderStep(opt.next);
                    };
                    secondaryContainer.insertBefore(nextBtn, secondaryContainer.firstChild);

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

    const contentArea = document.getElementById('question-content');
    
    if (stepId !== "easa_airport" && step.extraHtml) {
        contentArea.insertBefore(infoGrid, secondaryContainer); 
        infoGrid.innerHTML = step.extraHtml;
        infoGrid.classList.remove('hidden');
    } else if (stepId === "easa_airport") {
        const infoBox = document.getElementById('info-box');
        contentArea.insertBefore(infoGrid, infoBox); 
    }
    
    if (stepId === "service_type") {
        contentArea.insertBefore(serviceBox, secondaryContainer);
    }

    if (step.infoContent) {
        infoBox.innerHTML = step.infoContent;
        infoBox.classList.remove('hidden');
    } else {
        infoBox.classList.add('hidden');
    }

    if (step.secondaryOption) {
        const noBtn = document.createElement('button');
        
        // ENDRET: Gul knapp kun for steg 4, grønn for andre
        if (stepId === 'exemptions') {
            noBtn.className = 'btn-highlight-yellow';
        } else {
            noBtn.className = 'btn-highlight-green';
        }
        
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
    const nameDisplay = document.getElementById('icao-name-display');
    const iconBox = document.getElementById('icao-icon-box');
    const status = document.getElementById('icao-status');
    
    const updateButton = (isValid, airportName) => {
        buttonContainer.innerHTML = ''; 
        if (isValid) {
            const btn = document.createElement('button');
            btn.className = 'btn-reset'; 
            btn.style.width = "100%"; 
            btn.innerHTML = `Gå videre <i class="fas fa-arrow-right"></i>`;
            btn.onclick = () => {
                userChoices.airport = airportName || (input.value.toUpperCase());
                stepHistory.push("entity_type");
                renderStep("entity_type");
            };
            buttonContainer.appendChild(btn);
        }
    };

    const showManualButton = () => {
        buttonContainer.innerHTML = '';
        const manBtn = document.createElement('button');
        manBtn.className = 'btn-manual-confirm';
        manBtn.innerHTML = "Jeg bekrefter at dette er en EASA-lufthavn";
        manBtn.onclick = () => {
            nameDisplay.innerText = "Manuelt bekreftet";
            iconBox.innerHTML = '<i class="fas fa-check" style="color: green;"></i>';
            iconBox.style.borderColor = "green";
            status.innerHTML = `<span style="color:#856404">Manuelt bekreftet.</span>`;
            updateButton(true, input.value + " (Manuelt bekreftet)");
        };
        buttonContainer.appendChild(manBtn);
    };

    const easaLink = `<br><br><a href="https://www.easa.europa.eu/en/datasets/aerodromes-falling-scope-regulation-eu-20181139" target="_blank">Se EASA sin oversikt over lufthavner her</a>`;

    const checkInput = () => {
        const val = input.value.toUpperCase();
        
        if (val.length < 4) {
             nameDisplay.innerText = "";
             iconBox.innerHTML = "";
             iconBox.style.borderColor = "#e0e0e0";
             status.innerText = ""; 
             updateButton(false);
             return;
        }

        if (val.length === 4) {
            const airport = airportDB[val];
            if (airport) {
                nameDisplay.innerText = airport.name;

                if (airport.easa) {
                    iconBox.innerHTML = '<i class="fas fa-check" style="color: green;"></i>';
                    iconBox.style.borderColor = "green";
                    
                    if (airport.isHelicopter) {
                         status.innerHTML = `
                            ${airport.name} er en EASA-lufthavn.
                            <div class="helicopter-warning">
                                <i class="fas fa-exclamation-triangle"></i>
                                <strong>OBS:</strong> Denne lufthavnen er unntatt da helikopterdrift ikke omfattes av regelverket.
                            </div>
                            ${easaLink}
                        `;
                    } else {
                         status.innerHTML = `${airport.name} er en EASA-lufthavn.${easaLink}`;
                    }
                    
                    updateButton(true, `${airport.name} (${val})`);
                } else {
                    iconBox.innerHTML = '<i class="fas fa-times" style="color: red;"></i>';
                    iconBox.style.borderColor = "red";

                    status.innerHTML = `${airport.name} er IKKE en EASA-lufthavn (Unntatt).${easaLink}`;
                    updateButton(false);
                }
            } else { 
                nameDisplay.innerText = "Ukjent";
                iconBox.innerHTML = '<i class="fas fa-question" style="color: orange;"></i>';
                iconBox.style.borderColor = "orange";
                
                status.innerHTML = `Ukjent ICAO-kode.${easaLink}`; 
                showManualButton();
            }
        }
    };

    input.oninput = checkInput;
    if(input.value.length === 4) checkInput();
}

function handleServiceClickNew(option, secondaryContainer, buttonContainer, clickedBtn) {
    const serviceBox = document.getElementById('service-detail-box');
    
    const oldNextBtn = document.getElementById('next-step-btn');
    if (oldNextBtn) oldNextBtn.remove();

    serviceBox.classList.remove('hidden');
    
    const detailContent = serviceDetails[option.detailKey] || "<p>Ingen detaljer.</p>";
    
    serviceBox.innerHTML = `
        <h4>${option.text}</h4>
        ${detailContent}
        <div class="service-actions">
            <button id="btn-select-service" class="btn-select">Velg</button>
            <button id="btn-close-service" class="btn-close">Lukk</button>
        </div>
    `;

    document.getElementById('btn-close-service').onclick = () => {
        serviceBox.classList.add('hidden');
        clickedBtn.classList.remove('selected');
        if(document.getElementById('next-step-btn')) document.getElementById('next-step-btn').remove();
    };

    document.getElementById('btn-select-service').onclick = () => {
        userChoices.service = option.text;
        
        const nextBtn = document.createElement('button');
        nextBtn.id = 'next-step-btn';
        nextBtn.className = 'btn-reset';
        nextBtn.style.width = "100%";
        nextBtn.style.marginTop = "20px";
        nextBtn.innerHTML = `Gå videre <i class="fas fa-arrow-right"></i>`;
        nextBtn.onclick = () => {
             stepHistory.push("exemptions");
             renderStep("exemptions");
        };
        
        secondaryContainer.insertBefore(nextBtn, secondaryContainer.firstChild);
        
        document.getElementById('btn-select-service').innerText = "Valgt";
        document.getElementById('btn-select-service').disabled = true;
        document.getElementById('btn-select-service').style.backgroundColor = "#6A8E7F"; 
    };
}

function handleExemptionClick(option, secondaryContainer) {
    const oldBtn = document.getElementById('confirm-btn');
    if (oldBtn) oldBtn.remove();

    const confirmBtn = document.createElement('button');
    confirmBtn.id = 'confirm-btn';
    confirmBtn.className = 'btn-reset';
    confirmBtn.style.width = "100%";
    confirmBtn.style.marginBottom = "15px";
    confirmBtn.innerText = "Gå videre"; 
    confirmBtn.onclick = () => {
        showResult("Du er <strong>unntatt</strong> regelverket og trenger ikke sende samsvarserklæring.");
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
    document.querySelector('.result-header').innerText = "Resultat";

    const summaryBox = document.getElementById('result-summary');
    summaryBox.classList.remove('hidden');
    summaryBox.innerHTML = `
        <h4>Dine valg:</h4>
        <div class="summary-item"><span class="summary-label">Lufthavn:</span> <span>${userChoices.airport || "-"}</span></div>
        <div class="summary-item"><span class="summary-label">Organisasjon:</span> <span>${userChoices.entity || "-"}</span></div>
        <div class="summary-item"><span class="summary-label">Tjeneste:</span> <span>${userChoices.service || "-"}</span></div>
        <div class="summary-item"><span class="summary-label">Unntak:</span> <span>${userChoices.exempt}</span></div>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    // startTool() kalles fra HTML
});