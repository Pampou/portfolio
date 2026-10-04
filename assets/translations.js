const translations = {
    "fr": {
        "nav_home": "Accueil",
        "nav_cv": "CV",
        "nav_portfolio": "Portfolio",
        "nav_contact": "Contact",
        "home_about": "Principalement <span>Développeur</span>, un soupçon d'<span>Artiste 3D</span> et curieux sur plein d'<span>autres choses</span>",
        "aboutme_title": "À propos",
        "aboutme_desc": `Développeur avec plus de 6 années d'expérience professionnelle sur Unity, je suis polyvalent et aime explorer d'autres moteurs de jeux (Godot Engine, Unreal Engine).
            Je possède aussi un bagage en graphisme 3D avec Blender que j'utilise depuis plus de 10 ans et enseigne à l'Université Montpellier 3.
            J'aime aussi réaliser des projets de A à Z et pratique modestement comme FL Studio et FMOD par exemple.
            Friand du travail en équipe, je participe à beaucoup de game jams pour connaître les autres coeurs de métiers du jeu vidéo, tester et repousser mes limites, toujours à la recherche de solution technique pour produire des jeux dans un temps imparti !`,
        "games_selection_title": "Sélection de jeux créés & Récompenses",
        "skills_title": "Compétences",
        "languages_title": "Langues",
        "softSkills_title": "Soft Skills",
        "versatility": "Polyvalence",
        "humility": "Humilité",
        "curiosity": "Curiosité",
        "autonomy": "Autonomie",
        "french": "Français",
        "english": "Anglais",
        "learning_and_experiences_title": "Formation et Expériences",
        "learning_title": "Formation",
        "work_experience_title": "Expériences professionnelles",
        "hobbies_title": "Centre d'intérêts",
        "hobby_indie_dev": "Création amateur de jeux-vidéo",
        "hobby_game_jams": "Participation à diverses jams",
        "hobby_3d_art": "Graph 3D Low-Poly et Stylized",
        "hobby_procedural": "Génération procédurale",
        "hobby_shaders_vfx": "Shaders, VFX",
        "hobby_ui_ux": "UI & UX Design",
        "hobby_kiting": "Cerf-Volant",
        "hobby_music_electro": "Musique : Caravan Palace, Parov Stelar",
        "hobby_music_vexento": "Musique : Vexento",
        "hobby_music_drumspyder": "Musique : DrumSpyder & Desert Dwellers",
        "games_liked_title": "Jeux favoris",
        "portfolio_title": "Portfolio",
        "portfolioAll": "Tout",
        "portfolioGames": "Jeux",
        "portfolioUI": "UI",
        "portfolioArt": "Art",
        "portfolioVFX": "VFX",
        "portfolioOther": "Autres",
        "contact_title": "Contact",
        "socials_title": "Réseaux sociaux",

        // Sélection de jeux (Dream #46)
        "game_dream46_title": "Dream #46 (sorti sur Steam)",
        "game_dream46_type": "Expérience contemplative 3D",
        "game_dream46_jobs": "Développement, Graphisme, Sound Design & Game Design",
        "game_dream46_tech": "Unity",
        "game_dream46_team": "Solo",
        "game_dream46_duration": "v0.4 => ~3-4 mois / v1.0 => 1 an",

        // Sélection de jeux (Ephemeral Canvases)
        "game_ephemeral_title": "Ephemeral Canvases",
        "game_ephemeral_type": "Expérience contemplative 3D collaborative multijoueur",
        "game_ephemeral_jobs": "Développement, Graphisme, Sound Design & Game Design",
        "game_ephemeral_tech": "Unity & Mirror",
        "game_ephemeral_team": "Solo",
        "game_ephemeral_duration": "En pause",

        // Sélection de jeux (Claire)
        "game_claire_title": "Claire",
        "game_claire_type": "Jeu de plateforme 3D",
        "game_claire_context": "PerpiGameJam 2022",
        "game_claire_jobs": "Développement, Graphisme, Sound Design & Game Design",
        "game_claire_tech": "Unity",
        "game_claire_team": "Solo",
        "game_claire_reward": "2nde place",
        "game_claire_duration": "46h",

        // Sélection de jeux (Yllah)
        "game_yllah_title": "Yllah",
        "game_yllah_type": "Jeu d'aventure et exploration 3D",
        "game_yllah_context": "PerpiGameJam 2020",
        "game_yllah_jobs": "Développement et Graphisme Environnement",
        "game_yllah_tech": "Unity",
        "game_yllah_team": "Équipe (4)",
        "game_yllah_reward": "Prix sound design",
        "game_yllah_duration": "48h",

        // Sélection de jeux (Annihilation)
        "game_annihilation_title": "Annihilation",
        "game_annihilation_type": "Runner & Shooter 3D",
        "game_annihilation_context": "Video Game Lab GameJam 2021",
        "game_annihilation_jobs": "Développement, Graphisme & Sound Design",
        "game_annihilation_tech": "Unity",
        "game_annihilation_team": "Duo",
        "game_annihilation_reward": "11ème place sur 266",
        "game_annihilation_duration": "48H",

        // Sélection de jeux (Plant Simulator)
        "game_plant_sim_title": "Plant Simulator",
        "game_plant_sim_type": "Jeu éducatif 2D",
        "game_plant_sim_context": "EduGameJam 2017",
        "game_plant_sim_jobs": "Développement",
        "game_plant_sim_tech": "Unity",
        "game_plant_sim_team": "Équipe (5)",
        "game_plant_sim_reward": "1ère place",
        "game_plant_sim_duration": "48H",

        "edu_master_title": "Master 1 & 2 Jeux Vidéo",
        "edu_master_period": "2015 - 2017",
        "edu_master_school": "Université III Paul Valéry - Montpellier",
        "edu_master_line1": "Game Design : Rhétorique procédurale, Game Design par soustraction (Méthode Ueda : ICO, Shadow of The Colossus & The Last Guardian), GamePlay Systémique",
        "edu_master_line2": "Programmation sur nouvelles technologies (VR, Leap Motion). Application méthodes agiles.",

        "edu_licence_title": "Licence Pro Métiers du Jeu Vidéo",
        "edu_licence_period": "2014 - 2015",
        "edu_licence_school": "Université III Paul Valéry - Montpellier",
        "edu_licence_line1": "Outil de la boussole rhétorique de Claire Siegel. Apprentissage du 7-3-1. Découverte du monde des game-jams. Projets tutorés",
        "edu_licence_line2": "Rational Game Design (paramètres atomiques), Level Design, UX et Affordance",

        "edu_bts_title": "BTS Services Informatiques aux Organisations",
        "edu_bts_period": "2011 - 2013",
        "edu_bts_school": "Lycée Ozenne - Toulouse",
        "edu_bts_line1": "Spécialité Solutions Logicielles et Applications Métiers (SLAM)",
        "edu_bts_line2": "Étude des méthodes agiles, développement d'applications et de sites Web avec SGBD. Virtualisation de machines, Apprentissage de Design Patterns",

        // Expériences professionnelles
        "work_dream46_title": "Développeur jeu vidéo Unity - Projet indépendant : Dream #46",
        "work_dream46_period": "2022 - 2023",
        "work_dream46_role": "Développeur, Artiste 3D, Technical Artist, Sound Designer et Compositeur",
        "work_dream46_line1": "Conception et développement complet d’un jeu vidéo contemplatif sous Unity (C#), publié sur Steam",
        "work_dream46_line2": "Optimisation des performances, tests, débogage et suivi post-publication",
        "work_dream46_line3": "Intégration et gestion des assets visuels et sonores",

        "work_zappiti_title": "Développeur Unity",
        "work_zappiti_period": "2017 - 2025",
        "work_zappiti_company": "Développeur Unity – Zappiti / Rvolution, Castelnau-le-Lez",
        "work_zappiti_line1": "Développement de fonctionnalités et corrections de bugs d’une application Zappiti Video (gestion de collections)",
        "work_zappiti_line2": "Travail en équipe",
        "work_zappiti_line3": "Gestion de projet Git",
        "work_zappiti_line4": "Travail sur l'UI avec Unity",
        "work_zappiti_line5": "Utilisation du Service Cloud Azure pour gérer la partie data",
        "work_zappiti_line6": "R&D pour une application Unity sur hardware à performances (GPU) limitées",
        "work_zappiti_line7": "Réalisation d'une solution Zappiti Server sur Docker pour le Cross-Platform",

        "work_blender_title": "Enseignant Vacataire sur Blender",
        "work_blender_period": "2017 - 2025",
        "work_blender_school": "Université III Paul Valéry - Montpellier",
        "work_blender_desc": "Intervention pour la formation Licence Pro Métiers du Jeu Vidéo pour former sur Blender :",
        "work_blender_line1": "Prise en main du logiciel et introduction à la modélisation simple",
        "work_blender_line2": "Réalisation d'un personnage humanoïde (UV, Texture, Rigging IK et animations)",
        "work_blender_line3": "Introduction à la sculpture sur Blender",
        "work_blender_line4": "Processus de création d'un asset et son intégration sur un moteur de jeu",
        "work_blender_line5": "Gestion et coordination de projet",

        "work_intern_title": "Développeur stagiaire",
        "work_intern_period": "2011 - 2013",
        "work_intern_school": "ISTHIA Toulouse",
        "work_intern_line1": "Élaboration d'une application Web de gestion (étudiants, stages, formations, offres)",

        "download": "Téléchargement",
        "downloadSteam": "Télécharger sur Steam",
        "downloadItchio": "Télécharger sur itch.io",

        "portfolio_dream46_desc": `
            <p>Expérience contemplative où vous voguez avec votre bateau dans un jardin issu d'un rêve.</p>
            <p>Réalisé en solo</p>
            <p>[Unity] - Développement, Graphisme, Sound Design & Game Design</p>
            <p><strong>Date</strong>: Septembre 2023</p>
            <p><strong>Dernière version</strong>: Version 1.4</p>
        `,
        "portfolio_uidemo_desc": `
            <p>Demo technique UI réalisée sur Unreal</p>
            <p>[Unreal] - Développement, Graphisme, UI Design, UX Design</p>
            <p><strong>Date</strong>: Mai/Juin 2026</p>
            <p>L'idée est de proposer une version UI et UX du menu d'équipement pour Clair Obscur : Expedition 33. L'interface in-game n'est pas étudié dans cette démo. La proposition repose plus sur des changements UX que UI. L'interface est différente artistiquement mais ce n'est pas ce qu'il faut retenir.</p>
        `,
        "portfolio_devourer_desc": `
            <p>Jeu réalisé à l'occasion de la <a target="_blank" href="https://itch.io/jam/gmtk-2024">GMTK GameJam 2024</a> sur la thématique : Arcade</p>
            <p>Réalisé en solo</p>
            <p>[Unity] - Développement, Graphisme, Sound Design & Game Design</p>
            <p><strong>Date</strong>: Août 2024</p>
            <p>Shooter 2D où les ennemis vaincus peuvent être assimilés pour augmenter la taille et la puissance du personnage</p>
        `,
        "portfolio_zappiti_desc": `
            <p><em>Développeur Unity – Zappiti (Zappiti AV), Castelnau-le-Lez</em></p>
            <p>
            <ul>
                <li>Développement de fonctionnalités et corrections de bugs d’une application Zappiti Video. Application permettant à un utilisateur de gérer sa collection de films et de séries dématérialisées.</li>
                <li>Travail en équipe</li>
                <li>Gestion de projet Git</li>
                <li>Travail sur l'UI avec Unity</li>
                <li>Utilisation du Service Cloud Azure pour gèrer la partie data de l'application Zappiti Video</li>
                <li>R&D pour produire une application sur Unity déployée sur du hardware où les performances (GPU) sont très limitées.</li>
                <li>Réalisation d'une solution Zappiti Server sur Docker pour palier aux problèmes de Cross-Platform</li>
            </ul>
            </p>
        `,
        "portfolio_annihilation_desc": `
            <p>Jeu réalisé à l'occasion de la <a target="_blank" href="https://itch.io/jam/vgl-game-jam-2021">VIDEO Game Lab GameJam 2021</a> sur la thématique : Arcade</p>
            <p>Réalisé en duo</p>
            <p>[Unity] - Développement, Graphisme, Sound Design & Game Design</p>
            <p><strong>Date</strong>: Novembre 2021</p>
            <p><strong>Statut</strong>: Terminé</p>
            <p><strong>Annihilation a obtenu la onzième place (sur 266) de cette game jam</strong></p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/AYFq-UztisU?si=AjFtNNVuC-m_Vekx&amp;start=9540" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `,
        "portfolio_yllah_desc": `
            <p>Jeu réalisé à l'occasion de la <a href="https://itch.io/jam/pgj-2020">Perpi Game Jam 2020</a> sur la thématique du don.</p>
            <p>Première tentative de réalisation d'un jeu 3D en équipe dans le contexte d'une GameJam</p>
            <p>[Unity] - Développement, Graphisme Environnement</p>
            <p><strong>Date</strong>: Novembre 2020</p>
            <p><strong>Statut</strong>: Terminé / En cours</p>
            <p><strong>Yllah a obtenu le prix du Sound Design de cette game jam</strong></p>
        `,
        "portfolio_plantSimulator_desc": `
            <p>Plant Simulator, un jeu de construction et de gestion des ressources d'un végétal de type Angiosperme. Ce jeu est issu de la game jam <a target="_blank" href="https://www.ac-montpellier.fr/edugame-jam-124376">EduGameJam</a> où créateurs de contenu vidéo-ludique et enseignants se regroupent pour créer des jeux.</p>
            <p>Réalisé en équipe</p>
            <p>[Unity] - Développement</p>
            <p><strong>Date</strong>: Mars 2017</p>
            <p><strong>Statut</strong>: Terminé</p>
            <p><strong>Plant Simulator a obtenu la première place de cette game jam</strong></p>
        `,
        "portfolio_claire_desc": `
            <p>Jeu réalisé à l'occasion de la <a href="https://itch.io/jam/pgj-2022">Perpi Game Jam 2022</a> sur la thématique des mondes parallèles. Et ce fut une occasion pour moi d'offrir un cadeau d'anniversaire spécial à une amie chère.</p>
            <p>Réalisé en solo</p>
            <p>[Unity] - Développement, Graphisme, Sound Design & Game Design</p>
            <p>Première tentative de réalisation d'un jeu 3D en solo dans le contexte d'une GameJam</p>
            <p><strong>Date</strong>: Avril 2022</p>
            <p><strong>Statut</strong>: Terminé</p>
            <p><strong>Claire a obtenu la seconde place officielle (selon délibération du jury, troisième place sur itch.io) de cette game jam</strong></p>
        `,
        "portfolio_ephemeralCanvases_desc": `
            <p>Expérience contemplative multijoueur</p>
            <p>Réalisé en solo</p>
            <p>[Unity] - Développement, Graphisme, Sound Design & Game Design</p>
            <p><strong>Date</strong>: Juin 2022</p>
            <p><strong>Statut</strong>: En pause</p>
            <p>Récupérez des orbres de pouvoirs disséminés aléatoirement sur le terrain et créez avec d'autres personnes un petit monde.</p>
        `,
        "portfolio_prototypeGodot_desc": `
            <p>Premiers pas sur Godot Engine.</p>
            <p>Démo disponible <a target="_blank" href="https://drive.google.com/file/d/158aKwIdLljSvM9mPlV2jTFpeK1vlrTPa/view">ici</a>.</p>
            <p>Basé sur la série de tutoriels <a target="_blank" href="https://www.youtube.com/playlist?list=PL9FzW-m48fn2SlrW0KoLT4n5egNdX-W9a">ici</a>.</p>
        `,
        "portfolio_prototypeUnreal_desc": `
            <p>Premier prototype sur Unreal Engine.</p>
            <p><strong>Il s'agit d'un résultat d'une production en un week-end après avoir ouvert Unreal Engine pour la première fois et en faisant appel au C++ sans passer par du BluePrint.</strong></p>
        `,
        "portfolio_walkTheLine_desc": `
            <p>Expérience contemplative accompagnant mon mémoire pour mon M1/M2 Jeux Vidéo</p>
            <p>Réalisé en solo</p>
            <p>[Unity] - Développement, Graphisme, Sound Design & Game Design</p>
            <p><strong>Date</strong>: Juillet 2016</p>
        `,
    },
    "en": {
        "nav_home": "Home",
        "nav_cv": "Resume",
        "nav_portfolio": "Portfolio",
        "nav_contact": "Contact",
        "home_about": "Primarily a <span>Developer</span>, with a hint of <span>3D artisty</span>, and curious about many <span>other things</span>",
        "aboutme_title": "About",
        "aboutme_desc": `Developer with over 6 years of professional experience in Unity, I am versatile and enjoy exploring other game engines (Godot Engine, Unreal Engine).
            I also have a background in 3D graphics with Blender, which I have been using for over 10 years and teaching at the University of Montpellier 3.
            I also enjoy creating projects from A to Z and modestly practice tools like FL Studio and FMOD, for example.
            A fan of teamwork, I participate in many game jams to learn about other roles in game development, test and push my limits, always looking for technical solutions to produce games within a given timeframe!`,
        "games_selection_title": "Game Selection and Awards",
        "skills_title": "Skills",
        "languages_title": "Languages",
        "softSkills_title": "Soft Skills",
        "versatility": "Versatility",
        "humility": "Humility",
        "curiosity": "Curiosity",
        "autonomy": "Autonomy",
        "french": "French",
        "english": "English",
        "learning_and_experiences_title": "Education & Work Experience",
        "learning_title": "Education",
        "work_experience_title": "Work Experience",
        "hobbies_title": "Interests",
        "hobby_indie_dev": "Amateur game development",
        "hobby_game_jams": "Participating in various game jams",
        "hobby_3d_art": "Low-Poly & Stylized 3D Art",
        "hobby_procedural": "Procedural Generation",
        "hobby_shaders_vfx": "Shaders, VFX",
        "hobby_ui_ux": "UI & UX Design",
        "hobby_kiting": "Kite flying",
        "hobby_music_electro": "Music: Caravan Palace, Parov Stelar",
        "hobby_music_vexento": "Music: Vexento",
        "hobby_music_drumspyder": "Music: DrumSpyder & Desert Dwellers",
        "games_liked_title": "Favorite Games",
        "portfolio_title": "Portfolio",
        "portfolioAll": "All",
        "portfolioGames": "Games",
        "portfolioUI": "UI",
        "portfolioArt": "Art",
        "portfolioVFX": "VFX",
        "portfolioOther": "Other",
        "contact_title": "Contact",
        "socials_title": "Social Media",

        // Selection of games (Dream #46)
        "game_dream46_title": "Dream #46 (released on Steam)",
        "game_dream46_type": "3D contemplative experience",
        "game_dream46_jobs": "Development, Graphics, Sound Design & Game Design",
        "game_dream46_tech": "Unity",
        "game_dream46_team": "Solo",
        "game_dream46_duration": "v0.4 => ~3-4 months / v1.0 => 1 year",

        // Selection of games (Ephemeral Canvases)
        "game_ephemeral_title": "Ephemeral Canvases",
        "game_ephemeral_type": "Collaborative multiplayer 3D contemplative experience",
        "game_ephemeral_jobs": "Development, Graphics, Sound Design & Game Design",
        "game_ephemeral_tech": "Unity & Mirror",
        "game_ephemeral_team": "Solo",
        "game_ephemeral_duration": "On hold",

        // Selection of games (Claire)
        "game_claire_title": "Claire",
        "game_claire_type": "3D platformer",
        "game_claire_context": "PerpiGameJam 2022",
        "game_claire_jobs": "Development, Graphics, Sound Design & Game Design",
        "game_claire_tech": "Unity",
        "game_claire_team": "Solo",
        "game_claire_reward": "2nd place",
        "game_claire_duration": "46h",

        // Selection of games (Yllah)
        "game_yllah_title": "Yllah",
        "game_yllah_type": "3D adventure and exploration game",
        "game_yllah_context": "PerpiGameJam 2020",
        "game_yllah_jobs": "Development and Environment Graphics",
        "game_yllah_tech": "Unity",
        "game_yllah_team": "Team (4)",
        "game_yllah_reward": "Sound design award",
        "game_yllah_duration": "48h",

        // Selection of games (Annihilation)
        "game_annihilation_title": "Annihilation",
        "game_annihilation_type": "3D Runner & Shooter",
        "game_annihilation_context": "Video Game Lab GameJam 2021",
        "game_annihilation_jobs": "Development, Graphics & Sound Design",
        "game_annihilation_tech": "Unity",
        "game_annihilation_team": "Duo",
        "game_annihilation_reward": "11th place out of 266",
        "game_annihilation_duration": "48H",

        // Selection of games (Plant Simulator)
        "game_plant_sim_title": "Plant Simulator",
        "game_plant_sim_type": "2D educational game",
        "game_plant_sim_context": "EduGameJam 2017",
        "game_plant_sim_jobs": "Development",
        "game_plant_sim_tech": "Unity",
        "game_plant_sim_team": "Team (5)",
        "game_plant_sim_reward": "1st place",
        "game_plant_sim_duration": "48H",

        "edu_master_title": "Master’s Degree in Video Game Development",
        "edu_master_period": "2015 - 2017",
        "edu_master_school": "Paul Valéry III University - Montpellier",
        "edu_master_line1": "Game Design: Procedural rhetoric, Subtractive Game Design (Ueda method: ICO, Shadow of the Colossus & The Last Guardian), Systemic Gameplay",
        "edu_master_line2": "Programming on new technologies (VR, Leap Motion). Application of agile methods.",

        "edu_licence_title": "Bachelor’s Degree in Video Game Development",
        "edu_licence_period": "2014 - 2015",
        "edu_licence_school": "Paul Valéry III University - Montpellier",
        "edu_licence_line1": "Claire Siegel's Rhetorical Compass tool. Learning the 7-3-1. Discovery of the game jam world. Tutored projects",
        "edu_licence_line2": "Rational Game Design (atomic parameters), Level Design, UX and Affordance",

        "edu_bts_title": "Associate’s Degree in Software Development & IT Services",
        "edu_bts_period": "2011 - 2013",
        "edu_bts_school": "Lycée Ozenne - Toulouse",
        "edu_bts_line1": "Specialty in Software Solutions and Business Applications (SLAM)",
        "edu_bts_line2": "Study of agile methods, application and website development with DBMS. Machine virtualization, learning Design Patterns",

        // Work Experience
        "work_dream46_title": "Unity Video Game Developer - Independent Project: Dream #46",
        "work_dream46_period": "2022 - 2023",
        "work_dream46_role": "Developer, 3D Artist, Technical Artist, Sound Designer and Composer",
        "work_dream46_line1": "Full design and development of a contemplative game under Unity (C#), released on Steam",
        "work_dream46_line2": "Performance optimization, testing, debugging and post-release follow-up",
        "work_dream46_line3": "Integration and management of visual and audio assets",

        "work_zappiti_title": "Unity Developer",
        "work_zappiti_period": "2017 - 2025",
        "work_zappiti_company": "Unity Developer – Zappiti / Rvolution, Castelnau-le-Lez",
        "work_zappiti_line1": "Feature development and bug fixing for the Zappiti Video app (collection management)",
        "work_zappiti_line2": "Teamwork",
        "work_zappiti_line3": "Git project management",
        "work_zappiti_line4": "UI work with Unity",
        "work_zappiti_line5": "Using Azure Cloud Service for application data management",
        "work_zappiti_line6": "R&D for a Unity app deployed on hardware with limited GPU performance",
        "work_zappiti_line7": "Developed a Zappiti Server solution on Docker for Cross-Platform compatibility",

        "work_blender_title": "Part-time Teacher on Blender",
        "work_blender_period": "2017 - 2025",
        "work_blender_school": "Paul Valéry III University - Montpellier",
        "work_blender_desc": "Teaching for the Professional License in Video Game Industries, covering Blender:",
        "work_blender_line1": "Software basics and introduction to simple modeling",
        "work_blender_line2": "Humanoid character creation (UV, Texture, Rigging IK and animations)",
        "work_blender_line3": "Introduction to sculpting in Blender",
        "work_blender_line4": "Asset creation process and engine integration",
        "work_blender_line5": "Project management and coordination",

        "work_intern_title": "Intern Developer",
        "work_intern_period": "2011 - 2013",
        "work_intern_school": "ISTHIA Toulouse",
        "work_intern_line1": "Developed a web application for managing students, internships, and training offers",

        "download": "Download",
        "downloadSteam": "Download on Steam",
        "downloadItchio": "Download on itch.io",

        "portfolio_dream46_desc": `
            <p>Contemplative game with a boat where you chill in a "garden from a dream"</p>
            <p>Made solo</p>
            <p>[Unity] - Development, Graphics, Sound Design and Game Design</p>
            <p><strong>Date</strong>: August - September 2023</p>
            <p><strong>Last version</strong>: Version 1.4</p>
        `,
        "portfolio_uidemo_desc": `
            <p>Technical UI Demo made in Unreal</p>
            <p>[Unreal] - Development, Graphics, UI Design, UX Design</p>
            <p><strong>Date</strong>: May/June 2026</p>
            <p>The idea is to give a UI and UX proposal of the equip menu in the game Clair Obscur : Expedition 33. The interface ingame (combat) is not covered in this demo. Even there is a custom art for the UI, the main focus is UX rework.</p>
        `,
        "portfolio_devourer_desc": `
            <p>Game made for the <a target="_blank" href="https://itch.io/jam/gmtk-2024">GMTK GameJam 2024</a> with the theme : Built to scale</p>
            <p>Made solo</p>
            <p>[Unity] - Development, Graphics, Sound Design and Game Design</p>
            <p><strong>Date</strong>: August 2024</p>
            <p>Shooter 2D where vanquished enemies can be assimilated to grow bigger and stronger</p>
        `,
        "portfolio_zappiti_desc": `
            <p><em>Unity Developer – Zappiti (Zappiti AV), Castelnau-le-Lez - France</em></p>
            <p>
            <ul>
                <li>Development of features and bug fixes for the Zappiti Video application that allows users to manage their collection of dematerialized movies and tv-shows.</li>
                <li>Teamwork</li>
                <li>Git Project Management</li>
                <li>Work on UI with Unity</li>
                <li>Using Azure Cloud Service for Zappiti Video's data managment</li>
                <li>Research and Development to produce an application with Unity deployed on limited GPU hardware</li>
                <li>Development of a Docker solution to overcome Cross-Platform issues</li>
            </ul>
            </p>
        `,
        "portfolio_annihilation_desc": `
            <p>Game made for the <a target="_blank" href="https://itch.io/jam/vgl-game-jam-2021">VIDEO Game Lab GameJam 2021</a>. The theme was: Arcade</p>
            <p>Made with a friend</p>
            <p>[Unity] - Development, Graphics, Sound Design and Game Design</p>
            <p><strong>Date</strong>: November 2021</p>
            <p><strong>Status</strong>: Completed</p>
            <p><strong>Annihilation gained the 11th place of 266</strong></p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/AYFq-UztisU?si=AjFtNNVuC-m_Vekx&amp;start=9540" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `,
        "portfolio_yllah_desc": `
            <p>Game made for the <a target="_blank" href="https://itch.io/jam/pgj-2020">Perpi Game Jam 2020</a>. The theme was : Gift/Donation</p>
            <p>First attempt to make a 3D game with a team in a gamejam</p>
            <p>[Unity] - Development, Env Graphics</p>
            <p><strong>Date</strong>: Novembre 2020</p>
            <p><strong>Status</strong>: Completed</p>
            <p><strong>Yllah won the Sound Design award for this game jam</strong></p>
        `,
        "portfolio_plantSimulator_desc": `
            <p>Plant Simulator, a educational game made for the <a target="_blank" href="https://www.ac-montpellier.fr/edugame-jam-124376">EduGameJam</a> where gamedevs and teachers meet to create</p>
            <p>Made with a team</p>
            <p>[Unity] - Development</p>
            <p><strong>Date</strong>: March 2017</p>
            <p><strong>Status</strong>: Completed</p>
            <p><strong>Plant Simulator gained the first place</strong></p>
        `,
        "portfolio_claire_desc": `
            <p>Game made for the <a target="_blank" href="https://itch.io/jam/pgj-2022">Perpi Game Jam 2022</a>. The theme was "Parallel Worlds". It also a birthday gift for a dear friend I love and admire.</p>
            <p>Made solo</p>
            <p>[Unity] - Development, Graphics, Sound Design and Game Design</p>
            <p>Fist attempt to make a 3D game alone in a gamejam</p>
            <p><strong>Date</strong>: April 2022</p>
            <p><strong>Status</strong>: Terminé</p>
            <p><strong>Claire gained 2nd place (and third place on itch.io)</strong></p>
        `,
        "portfolio_ephemeralCanvases_desc": `
            <p>3D multiplayer contemplative experience</p>
            <p>Made solo</p>
            <p>[Unity & Mirror] - Développement, Graphisme, Sound Design & Game Design</p>
            <p><strong>Date</strong>: June 2022</p>
            <p><strong>Status</strong>: Paused</p>
            <p>Ephemeral Canvases is a cooperative multiplayer game where you create a small world with other people by gathering power orbs and spreading life around you. The idea is to create something with your friends or people together. Create a world, a "canvas" although temporary because the multiplayer sessions are short (around twenty minutes)</p>
        `,
        "portfolio_prototypeGodot_desc": `
            <p>First steps on Godot Engine.</p>
            <p>Based on these tutorials <a target="_blank" href="https://www.youtube.com/playlist?list=PL9FzW-m48fn2SlrW0KoLT4n5egNdX-W9a">available here</a>.</p>
        `,
        "portfolio_prototypeUnreal_desc": `
            <p>First prototype on Unreal Engine.</p>
            <p><strong>First attempt of a week dev challenge where I discovered Unreal Engine for the first time and made something with C++ and no Blueprints</strong></p>
        `,
        "portfolio_walkTheLine_desc": `
            <p>Contemplative experience made for my thesis for my Master’s Degree in Video Game Development</p>
            <p>Made solo</p>
            <p>[Unity] - Development, Graphics, Sound Design & Game Design</p>
            <p><strong>Date</strong>: July 2016</p>
            <p><strong>Status</strong>: Completed</p>
        `,
    }
};