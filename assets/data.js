const selectedGamesData = [
    {
        link: "https://store.steampowered.com/app/2563300/Dream_46/",
        gameTitle: "game_dream46_title",
        gameType: "game_dream46_type",
        jobs: "game_dream46_jobs",
        technology: "game_dream46_tech",
        team: "game_dream46_team",
        duration: "game_dream46_duration"
    },
    {
        link: "https://pampou.itch.io/ephemeral-canvases",
        gameTitle: "game_ephemeral_title",
        gameType: "game_ephemeral_type",
        jobs: "game_ephemeral_jobs",
        technology: "game_ephemeral_tech",
        team: "game_ephemeral_team",
        duration: "game_ephemeral_duration"
    },
    {
        link: "https://pampou.itch.io/claire",
        gameTitle: "game_claire_title",
        gameType: "game_claire_type",
        context: "game_claire_context",
        jobs: "game_claire_jobs",
        technology: "game_claire_tech",
        team: "game_claire_team",
        reward: "game_claire_reward",
        duration: "game_claire_duration"
    },
    {
        link: "https://pampou.itch.io/yllah",
        gameTitle: "game_yllah_title",
        gameType: "game_yllah_type",
        context: "game_yllah_context",
        jobs: "game_yllah_jobs",
        technology: "game_yllah_tech",
        team: "game_yllah_team",
        reward: "game_yllah_reward",
        duration: "game_yllah_duration"
    },
    {
        link: "https://pampou.itch.io/annihilation",
        gameTitle: "game_annihilation_title",
        gameType: "game_annihilation_type",
        context: "game_annihilation_context",
        jobs: "game_annihilation_jobs",
        technology: "game_annihilation_tech",
        team: "game_annihilation_team",
        reward: "game_annihilation_reward",
        duration: "game_annihilation_duration"
    },
    {
        link: "https://pampou.itch.io/plant-simulator",
        gameTitle: "game_plant_sim_title",
        gameType: "game_plant_sim_type",
        context: "game_plant_sim_context",
        jobs: "game_plant_sim_jobs",
        technology: "game_plant_sim_tech",
        team: "game_plant_sim_team",
        reward: "game_plant_sim_reward",
        duration: "game_plant_sim_duration"
    }
];

const skillsData = [
    "Unity",
    "C#",
    "PHP",
    "HTML",
    "CSS",
    "Blender",
    "The GIMP",
    "FL Studio",
    "FMOD",
    "Godot Engine",
    "Unreal Engine",
    "Git",
    "Linux",
    "Docker",
    "Java",
    "JavaScript",
    "C++"
];

const softSkillsData = [
    "versatility",
    "humility",
    "curiosity",
    "autonomy"
];

const languagesData = [
    "french",
    "english"
];

const learningExperiencesData = [
    {
        titleKey: "edu_master_title",
        periodKey: "edu_master_period",
        companyKey: "edu_master_school",
        lines: [
            "edu_master_line1",
            "edu_master_line2"
        ]
    },
    {
        titleKey: "edu_licence_title",
        periodKey: "edu_licence_period",
        companyKey: "edu_licence_school",
        lines: [
            "edu_licence_line1",
            "edu_licence_line2"
        ]
    },
    {
        titleKey: "edu_bts_title",
        periodKey: "edu_bts_period",
        companyKey: "edu_bts_school",
        lines: [
            "edu_bts_line1",
            "edu_bts_line2"
        ]
    }
];

const workExperiencesData = [
    {
        titleKey: "work_dream46_title",
        periodKey: "work_dream46_period",
        companyKey: "work_dream46_role",
        lines: ["work_dream46_line1", "work_dream46_line2", "work_dream46_line3"]
    },
    {
        titleKey: "work_zappiti_title",
        periodKey: "work_zappiti_period",
        companyKey: "work_zappiti_company",
        lines: [
            "work_zappiti_line1",
            "work_zappiti_line2",
            "work_zappiti_line3",
            "work_zappiti_line4",
            "work_zappiti_line5",
            "work_zappiti_line6",
            "work_zappiti_line7"
        ]
    },
    {
        titleKey: "work_blender_title",
        periodKey: "work_blender_period",
        companyKey: "work_blender_school",
        lines: [
            "work_blender_desc",
            "work_blender_line1",
            "work_blender_line2",
            "work_blender_line3",
            "work_blender_line4",
            "work_blender_line5"
        ]
    },
    {
        titleKey: "work_intern_title",
        periodKey: "work_intern_period",
        companyKey: "work_intern_school",
        lines: ["work_intern_line1"]
    }
];

const hobbiesData = [
    "hobby_indie_dev",
    "hobby_game_jams",
    "hobby_3d_art",
    "hobby_procedural",
    "hobby_shaders_vfx",
    "hobby_ui_ux",
    "hobby_kiting",
    "hobby_music_electro",
    "hobby_music_vexento",
    "hobby_music_drumspyder"
];

const gamesLikedData = [
    "Celeste",
    "Terraria",
    "Valheim",
    "The Binding Of Isaac",
    "Fez",
    "Dark Souls I, II & III",
    "Thumper",
    "Tetris Effect",
    "The Witness",
    "Blasphemous 1 & 2",
    "Tunic",
    "Trackmania",
    "Mortal Shell 1 & 2",
    "Humanity",
    "Elden Ring",
    "Elden Ring : Nightreign",
    "Overwatch",
    "Hades 1 & 2",
    "Sekiro: Shadows Die Twice",
    "Shadow of The Colossus",
    "The Last Guardian",
];

const portfolioData = [
    {
        name: "dream46",
        title: "Dream #46",
        category: "games",
        thumbnail: "assets/img/dream46/title.jpg",
        description: "portfolio_dream46_desc",
        steam: "https://store.steampowered.com/app/2563300/Dream_46/",
        itchio: "https://pampou.itch.io/dream-46"
    },
    {
        name: "dream46-ui",
        title: "Dream #46 - UI",
        category: "ui",
        thumbnail: "assets/img/dream46-ui/dream46-mainmenu.jpg",
        description: "portfolio_dream46_desc",
        steam: "https://store.steampowered.com/app/2563300/Dream_46/",
        itchio: "https://pampou.itch.io/dream-46"
    },
    {
        name: "uidemo-CO33",
        title: "UI Demo - Clair Obscur : Expedition 33",
        category: "ui",
        thumbnail: "assets/img/uidemo-CO33/uidemo-CO33 (1).png",
        description: "portfolio_uidemo_desc",
        steam: "",
        itchio: ""
    },
    {
        name: "devourer",
        title: "Devourer",
        category: "games",
        thumbnail: "assets/img/devourer/title.gif",
        description: "portfolio_devourer_desc",
        steam: "",
        itchio: "https://pampou.itch.io/devourer"
    },
    {
        name: "zappiti",
        title: "Zappiti / Rvolution",
        category: "ui",
        thumbnail: "assets/img/zappiti/zappiti-video-2.jpg",
        description: "portfolio_zappiti_desc",
        steam: "",
        itchio: ""
    },
    {
        name: "composition_stylized_2",
        title: "Comp Stylized Unreal",
        category: "art",
        thumbnail: "assets/img/compStylized2/pampou-highresscreenshot00000.jpg",
        description: "",
        steam: "",
        itchio: ""
    },
    {
        name: "annihilation",
        title: "Annihilation",
        category: "games",
        thumbnail: "assets/img/annihilation/annihilation.gif",
        description: "portfolio_annihilation_desc",
        steam: "",
        itchio: "https://pampou.itch.io/annihilation"
    },
    {
        name: "yllah",
        title: "Yllah",
        category: "games",
        thumbnail: "assets/img/yllah/yllah.jpg",
        description: "portfolio_yllah_desc",
        steam: "",
        itchio: "https://pampou.itch.io/yllah"
    },
    {
        name: "plant_simulator",
        title: "Plant Simulator",
        category: "games",
        thumbnail: "assets/img/plantSimulator/SKKUXH.jpg",
        description: "portfolio_plantSimulator_desc",
        steam: "",
        itchio: "https://pampou.itch.io/plant-simulator"
    },
    {
        name: "claire",
        title: "Claire",
        category: "games",
        thumbnail: "assets/img/claire/claireCover.png",
        description: "portfolio_claire_desc",
        steam: "",
        itchio: "https://pampou.itch.io/claire"
    },
    {
        name: "ephemeral_canvases",
        title: "Ephemeral Canvases",
        category: "games",
        thumbnail: "assets/img/ephemeralCanvases/ephemeralCanvases.gif",
        description: "portfolio_ephemeralCanvases_desc",
        steam: "",
        itchio: "https://pampou.itch.io/ephemeral-canvases"
    },
    {
        name: "prototype_godot",
        title: "Prototype Godot",
        category: "other",
        thumbnail: "assets/img/prototypeGodot/godotActionRPG.gif",
        description: "portfolio_prototypeGodot_desc",
        steam: "",
        itchio: ""
    },
    {
        name: "prototype_unreal",
        title: "Prototype Unreal C++",
        category: "other",
        thumbnail: "assets/img/prototypeUnreal/navion1.jpg",
        description: "portfolio_prototypeUnreal_desc",
        steam: "",
        itchio: ""
    },
    {
        name: "composition_lowpoly_1",
        title: "Comp LowPoly",
        category: "art",
        thumbnail: "assets/img/compLowPoly1/screenshot1.jpg",
        description: "",
        steam: "",
        itchio: ""
    },
    {
        name: "composition_stylized_1",
        title: "Comp Stylized",
        category: "art",
        thumbnail: "assets/img/compStylized1/compo1.jpg",
        description: "",
        steam: "",
        itchio: ""
    },
    {
        name: "walk_the_line",
        title: "Walk The Line",
        category: "games",
        thumbnail: "assets/img/walkTheLine/rD8Ogm.jpg",
        description: "portfolio_walkTheLine_desc",
        steam: "",
        itchio: "https://pampou.itch.io/walk-the-line"
    },
    {
        name: "geometry_nodes",
        title: "Geometry Nodes",
        category: "art",
        thumbnail: "assets/img/geometryNodes/geometryNodesFlowers.gif",
        description: "",
        steam: "",
        itchio: ""
    },
    {
        name: "vfx_tornado",
        title: "VFX Tornado",
        category: "vfx",
        thumbnail: "assets/img/vfx/tornadoPreview.gif",
        description: "",
        steam: "",
        itchio: ""
    },
    {
        name: "vfx_portal",
        title: "VFX Portal",
        category: "vfx",
        thumbnail: "assets/img/vfx/portalVFXPreview.gif",
        description: "",
        steam: "",
        itchio: ""
    },
    {
        name: "vfx_jellyfish",
        title: "VFX Jellyfish",
        category: "vfx",
        thumbnail: "assets/img/vfx/dream46JellyfishPreview.gif",
        description: "",
        steam: "",
        itchio: ""
    },
];

const portfolioImagesData = {
    "dream46": [
        "assets/img/dream46/dream46 (1).jpg",
        "assets/img/dream46/dream46 (2).jpg",
        "assets/img/dream46/dream46 (3).jpg",
        "assets/img/dream46/dream46 (4).jpg",
        "assets/img/dream46/dream46 (5).jpg",
        "assets/img/dream46/dream46 (6).jpg",
    ],
    "dream46-ui": [
        "assets/img/dream46-ui/dream46-mainmenu.jpg",
        "assets/img/dream46-ui/dream46-graphical-options.jpg",
        "assets/img/dream46-ui/dream46-sound.jpg",
        "assets/img/dream46-ui/dream46-controls.jpg",
        "assets/img/dream46-ui/dream46-inputs.jpg",
        "assets/img/dream46-ui/dream46-inputs-config.jpg",
    ],
    "uidemo-CO33": [
        "assets/img/uidemo-CO33/uidemo-CO33 (1).png",
        "assets/img/uidemo-CO33/uidemo-CO33 (2).png",
        "assets/img/uidemo-CO33/uidemo-CO33 (3).png",
        "assets/img/uidemo-CO33/uidemo-CO33 (4).png",
        "assets/img/uidemo-CO33/uidemo-CO33 (5).png",
        "assets/img/uidemo-CO33/uidemo-CO33 (6).png",
        "assets/img/uidemo-CO33/uidemo-CO33 (7).png",
    ],
    "zappiti": [
        "assets/img/zappiti/zappiti-video-1.jpg",
        "assets/img/zappiti/zappiti-video-2.jpg",
        "assets/img/zappiti/zappiti-video-3.jpg",
        "assets/img/zappiti/zappiti-video-4.jpg",
        "assets/img/zappiti/zappiti-video-5.jpg",
        "assets/img/zappiti/zappiti-video-6.jpg",
        "assets/img/zappiti/zappiti-video-7.jpg",
        "assets/img/zappiti/zappiti-video-8.jpg",
    ],
    "annihilation": [
        "assets/img/annihilation/annihilation1.jpg",
        "assets/img/annihilation/annihilation2.jpg",
        "assets/img/annihilation/annihilation3.jpg",
        "assets/img/annihilation/annihilation4.jpg",
    ],
    "plant_simulator": [
        "assets/img/plantSimulator/ubu1m.jpg",
        "assets/img/plantSimulator/wzjsnr.jpg",
    ],
    "claire": [
        "assets/img/claire/1400.jpg",
        "assets/img/claire/2112.jpg",
        "assets/img/claire/2152.jpg",
        "assets/img/claire/4795.jpg",
        "assets/img/claire/6726.jpg",
    ],
    "yllah": [
        "assets/img/yllah/yllah.jpg",
        "assets/img/yllah/yllah (1).jpg",
        "assets/img/yllah/yllah (2).jpg",
        "assets/img/yllah/yllah (3).jpg",
        "assets/img/yllah/yllah (4).jpg",
        "assets/img/yllah/yllah (5).jpg",
        "assets/img/yllah/yllah (6).jpg",
    ],
    "ephemeral_canvases": [
        "assets/img/ephemeralCanvases/ephemeralCanvases1.jpg",
        "assets/img/ephemeralCanvases/ephemeralCanvases2.jpg",
        "assets/img/ephemeralCanvases/ephemeralCanvases3.jpg",
        "assets/img/ephemeralCanvases/ephemeralCanvases4.jpg",
        "assets/img/ephemeralCanvases/ephemeralCanvases5.jpg",
        "assets/img/ephemeralCanvases/ephemeralCanvases6.jpg",
    ],
    "devourer": [
        "assets/img/devourer/devourer (1).png",
        "assets/img/devourer/devourer (2).png",
        "assets/img/devourer/devourer (3).png",
        "assets/img/devourer/devourer (4).png",
    ],
    "composition_lowpoly_1": [
        "assets/img/compLowPoly1/screenshot1.jpg",
        "assets/img/compLowPoly1/screenshot2.jpg",
        "assets/img/compLowPoly1/screenshot3.jpg",
        "assets/img/compLowPoly1/screenshot4.jpg",
        "assets/img/compLowPoly1/screenshot5.jpg",
        "assets/img/compLowPoly1/screenshot6.jpg",
    ],
    "composition_stylized_1": [
        "assets/img/compStylized1/compo1.jpg",
        "assets/img/compStylized1/compo3.jpg",
    ],
    "composition_stylized_2": [
        "assets/img/compStylized2/pampou-highresscreenshot00000.jpg",
        "assets/img/compStylized2/pampou-highresscreenshot00001.jpg",
        "assets/img/compStylized2/pampou-highresscreenshot00002.jpg",
        "assets/img/compStylized2/pampou-highresscreenshot00003.jpg",
        "assets/img/compStylized2/pampou-highresscreenshot00004.jpg",
    ],
    "prototype_godot": [
        "assets/img/prototypeGodot/godotActionRPG.gif",
        "assets/img/prototypeGodot/actionrpgdemo.jpg",
    ],
    "prototype_unreal": [
        "assets/img/prototypeUnreal/navion1.jpg",
        "assets/img/prototypeUnreal/navion2.jpg",
    ],
    "geometry_nodes": [
        "assets/img/geometryNodes/geometryNodesFlowers.gif",
        "assets/img/geometryNodes/geometryNodesFlower.gif",
        "assets/img/geometryNodes/islandAndTreesGN.gif",
    ],
    "vfx_tornado": [
        "assets/img/vfx/tornado.gif",
    ],
    "vfx_portal": [
        "assets/img/vfx/portalVFX.gif",
    ],
    "vfx_jellyfish": [
        "assets/img/vfx/dream46Jellyfish.gif",
    ],
    "walk_the_line": [
        "assets/img/walkTheLine/rD8Ogm.jpg",
        "assets/img/walkTheLine/1b_4KL.jpg",
    ],
};