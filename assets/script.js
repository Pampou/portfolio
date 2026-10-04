function renderGamesSelection() {
    const gamesSelection = document.querySelector("#games-selection");

    gamesSelection.innerHTML = selectedGamesData.map(selectedGameData => `
        <a class="selected-game" href="${selectedGameData.link}" target="_blank" rel="noopener noreferrer">
            <div class="selected-game-content">
                <div class="selected-game-content-left">
                    <span class="selected-game-title" data-i18n="${selectedGameData.gameTitle}"></span>
                    -
                    <span class="selected-game-type" data-i18n="${selectedGameData.gameType}"></span>
                    ${selectedGameData.context?.trim()
            ? `- <span class="selected-game-context" data-i18n="${selectedGameData.context}"></span>`
            : ""
        }
                    <br>
                    <span class="selected-game-jobs" data-i18n="${selectedGameData.jobs}"></span>
                </div>
                <div class="selected-game-content-right">
                    ${selectedGameData.reward?.trim()
            ? `<span class="selected-game-reward" data-i18n="${selectedGameData.reward}"></span>`
            : ""
        }
                    <span class="selected-game-technology" data-i18n="${selectedGameData.technology}"></span>
                    <span class="selected-game-team" data-i18n="${selectedGameData.team}"></span>
                    <span class="selected-game-duration" data-i18n="${selectedGameData.duration}"></span>
                    
                </div>                                
            </div>
        </a>
    `).join("");
}

function renderSkills() {
    const skills = document.querySelector("#skills");

    skills.innerHTML = skillsData.map(skill => `
        <li>${skill}</li>
    `).join("");
}

function renderSoftSkills() {
    const softSkills = document.querySelector("#softSkills");

    softSkills.innerHTML = softSkillsData.map(softSkill => `
        <li data-i18n="${softSkill}"></li>
    `).join("");
}

function renderLanguages() {
    const languages = document.querySelector("#languages");

    languages.innerHTML = languagesData.map(language => `
        <li data-i18n="${language}"></li>
    `).join("");
}

function renderExperiences() {
    const learning = document.querySelector("#learning");

    learning.innerHTML = learningExperiencesData.map(learningExperience => `
        <div class="resume-item">
            <h4 data-i18n="${learningExperience.titleKey}"></h4>
            <h5 data-i18n="${learningExperience.periodKey}"></h5>
            <p>
                <em data-i18n="${learningExperience.companyKey}"></em>
            </p>
            <ul>
            ${learningExperience.lines.map(lineKey => `
                <li data-i18n="${lineKey}"></li>
            `).join("")}
            </ul>
        </div>
    `).join("");

    const experiences = document.querySelector("#experiences");

    experiences.innerHTML = workExperiencesData.map(workExperience => `
        <div class="resume-item">
            <h4 data-i18n="${workExperience.titleKey}"></h4>
            <h5 data-i18n="${workExperience.periodKey}"></h5>
            <p>
                <em data-i18n="${workExperience.companyKey}"></em>
            </p>
            <ul>
            ${workExperience.lines.map(lineKey => `
                <li data-i18n="${lineKey}"></li>
            `).join("")}
            </ul>
        </div>
    `).join("");
}

function renderHobbies() {
    const hobbies = document.querySelector("#hobbies");

    hobbies.innerHTML = hobbiesData.map(hobby => `
        <li data-i18n="${hobby}"></li>
    `).join("");
}

function renderGamesLiked() {
    const gamesLiked = document.querySelector("#games-liked");

    gamesLiked.innerHTML = gamesLikedData.map(gameLiked => `
        <li>${gameLiked}</li>
    `).join("");
}

document.addEventListener('DOMContentLoaded', () => {
    // --- ÉLÉMENTS ---
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');
    const langButtons = document.querySelectorAll('.lang-btn');

    // --- LOGIQUE DE NAVIGATION ---
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSectionId = link.getAttribute('data-section');

            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetSectionId) {
                    section.classList.add('active');
                }
            });

            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // --- GESTION DES CLICS (Placée ICI pour éviter l'erreur null) ---
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            updateLanguage(lang);
        });
    });

    // --- INITIALISATION ---
    renderGamesSelection();
    renderSkills();
    renderSoftSkills();
    renderLanguages();
    renderExperiences();
    renderHobbies();
    renderGamesLiked();

    renderPortfolio();
    initializePortfolio();

    const savedLang = localStorage.getItem('selectedLang') || 'fr';
    updateLanguage(savedLang);
});

function updateLanguage(lang) {
    const langButtons = document.querySelectorAll('.lang-btn');

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.value = translations[lang][key];
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });

    langButtons.forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    localStorage.setItem('selectedLang', lang);
}

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        if (lightbox.classList.contains("active")) {
            closeLightbox();
        }
        else if (overlay.classList.contains("active")) {
            closeDetails();
        }
    }
});