document.addEventListener("DOMContentLoaded", () => {
    const switcher = document.getElementById("language-switcher");
    
    // Charger la langue sauvegardée ou par défaut "fr"
    const savedLang = localStorage.getItem("lang") || "fr";
    switcher.value = savedLang;
    loadLanguage(savedLang);

    // Changer de langue quand l'utilisateur sélectionne une autre option
    switcher.addEventListener("change", (event) => {
        const selectedLang = event.target.value;
        localStorage.setItem("lang", selectedLang);
        loadLanguage(selectedLang);
    });
});

function loadLanguage(lang) {
    fetch("lang.json")
        .then(response => response.json())
        .then(data => {
            document.querySelectorAll("[data-lang]").forEach(element => {
                const key = element.getAttribute("data-lang");
                element.textContent = data[lang][key];
            });
        })
        .catch(error => console.error("Erreur de chargement des langues :", error));
}
