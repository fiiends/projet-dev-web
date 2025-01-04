document.addEventListener("DOMContentLoaded", () => {
    const player1NameElement = document.getElementById("player1-name");
    const player2NameElement = document.getElementById("player2-name");

    // Récupére les noms depuis le localStorage
    const player1Name = localStorage.getItem("player1Name") || "Joueur 1";
    const player2Name = localStorage.getItem("player2Name") || "Joueur 2";

    // MAJ des noms dans le DOM
    player1NameElement.textContent = player1Name;
    player2NameElement.textContent = player2Name;
    
    const spinBtn = document.getElementById("spin-btn");
    const wheel = document.getElementById("wheel");
    const player1HealthBar = document.getElementById("player1-health");
    const player2HealthBar = document.getElementById("player2-health");
    const player1HpText = document.getElementById("player1-hp");
    const player2HpText = document.getElementById("player2-hp");
    const difficultyChoice = document.getElementById("difficulty-choice");
    const questionArea = document.getElementById("question-area");
    const questionText = document.getElementById("question-text");
    const answersDiv = document.getElementById("answers");
    const currentThemeText = document.getElementById("current-theme");

    let currentPlayer = 1; // 1 pour Joueur 1, 2 pour Joueur 2
    let player1Health = 100;
    let player2Health = 100;
    let selectedTheme = null;

    // Fonction pour afficher un message avec une classe de style (success ou error)
    const displayMessage = (message, type) => {
    const resultDiv = document.getElementById("result");

    // Réinitialiser l'animation (truc CSS pour forcer le redémarrage)
    resultDiv.style.animation = "none";
    void resultDiv.offsetHeight; // Forcer le recalcul de l'animation
    resultDiv.style.animation = null;

    // Configurer le contenu et la classe
    resultDiv.textContent = message;
    resultDiv.className = ""; // Réinitialiser les classes
    resultDiv.classList.add(type); // Ajouter la classe correspondante (success ou error)
    
    // Afficher le message
    resultDiv.style.display = "block";

    // Masquer le message après la durée de l'animation (2s)
    setTimeout(() => {
        resultDiv.style.display = "none";
    }, 2000); // Durée de l'animation (2s)
};
  

    const hideIntro = () => {
        const gameIntro = document.getElementById("game-intro");
        if (gameIntro) {
            setTimeout(() => {
                gameIntro.style.display = "none";
            }, 3000); // Délai correspondant à l'animation (3s)
        }
    };

    hideIntro();

    const themes = {
        "Histoire": {
            "easy": [
                { question: "Quand est tombé le mur de Berlin ?", answers: ["1989", "1991", "1987", "1990"], correct: 0 },
                { question: "En quelle année a commencé la Seconde Guerre mondiale ?", answers: ["1939", "1941", "1945", "1938"], correct: 0 },
                { question: "Qui était Napoléon Bonaparte ?", answers: ["Un empereur", "Un roi", "Un général", "Un philosophe"], correct: 0 }
            ],
            "medium": [
                { question: "Qui a fondé l'Empire romain ?", answers: ["Jules César", "Auguste", "Néron", "Trajan"], correct: 1 },
                { question: "Quelle bataille a marqué la fin de Napoléon ?", answers: ["Waterloo", "Austerlitz", "Borodino", "Leipzig"], correct: 0 },
                { question: "En quelle année a commencé la Première Guerre mondiale ?", answers: ["1914", "1918", "1905", "1920"], correct: 0 }
            ],
            "hard": [
                { question: "Quel roi a été exécuté pendant la Révolution française ?", answers: ["Louis XVI", "Louis XIV", "Louis XV", "Charles X"], correct: 0 },
                { question: "Quelle dynastie a régné en Chine pendant l'âge d'or ?", answers: ["Tang", "Song", "Ming", "Han"], correct: 0 },
                { question: "Qui a dirigé l'Allemagne pendant la Seconde Guerre mondiale ?", answers: ["Adolf Hitler", "Joseph Goebbels", "Hermann Göring", "Heinrich Himmler"], correct: 0 }
            ]
        },
        "Géographie": {
            "easy": [
                { question: "Quel est le plus grand pays du monde ?", answers: ["Russie", "Canada", "Chine", "États-Unis"], correct: 0 },
                { question: "Quel pays est connu comme le pays du Soleil Levant ?", answers: ["Japon", "Corée", "Chine", "Thaïlande"], correct: 0 },
                { question: "Quel continent a le plus de pays ?", answers: ["Afrique", "Asie", "Europe", "Amérique du Sud"], correct: 0 }
            ],
            "medium": [
                { question: "Quel est le fleuve le plus long du monde ?", answers: ["Nil", "Amazone", "Yangzi Jiang", "Mississippi"], correct: 1 },
                { question: "Quel désert est le plus grand du monde ?", answers: ["Sahara", "Gobi", "Arctique", "Atacama"], correct: 0 },
                { question: "Quelle est la capitale de l'Australie ?", answers: ["Canberra", "Sydney", "Melbourne", "Brisbane"], correct: 0 }
            ],
            "hard": [
                { question: "Quelle est la capitale de l'Éthiopie ?", answers: ["Addis-Abeba", "Nairobi", "Kampala", "Mogadiscio"], correct: 0 },
                { question: "Quel est le plus haut sommet du monde ?", answers: ["Everest", "K2", "Kangchenjunga", "Makalu"], correct: 0 },
                { question: "Quelle mer borde la Jordanie ?", answers: ["Mer Morte", "Mer Rouge", "Mer Méditerranée", "Mer Noire"], correct: 0 }
            ]
        },
        "Musique": {
            "easy": [
                { question: "Quel groupe a chanté 'Yesterday' ?", answers: ["The Beatles", "The Rolling Stones", "Queen", "Nirvana"], correct: 0 },
                { question: "Qui a chanté 'Thriller' ?", answers: ["Michael Jackson", "Prince", "Stevie Wonder", "Elvis Presley"], correct: 0 },
                { question: "Quel instrument est principalement utilisé dans le jazz ?", answers: ["Saxophone", "Piano", "Guitare", "Batterie"], correct: 0 }
            ],
            "medium": [
                { question: "Quel est le surnom de Ludwig van Beethoven ?", answers: ["Le Titan", "Le Compositeur", "Le Maître", "Le Génie"], correct: 0 },
                { question: "Qui est le compositeur de 'La Flûte enchantée' ?", answers: ["Mozart", "Beethoven", "Bach", "Schubert"], correct: 0 },
                { question: "Quel artiste est connu pour 'Purple Rain' ?", answers: ["Prince", "Michael Jackson", "David Bowie", "Elton John"], correct: 0 }
            ],
            "hard": [
                { question: "Quel compositeur a écrit 'La chevauchée des Walkyries' ?", answers: ["Wagner", "Mozart", "Bach", "Chopin"], correct: 0 },
                { question: "Quel opéra est l'œuvre de Verdi ?", answers: ["La Traviata", "Don Giovanni", "Carmen", "Fidelio"], correct: 0 },
                { question: "Qui est le compositeur de 'Rhapsody in Blue' ?", answers: ["Gershwin", "Ravel", "Debussy", "Stravinsky"], correct: 0 }
            ]
        },
        "Cinéma": {
            "easy": [
                { question: "Qui a réalisé 'Titanic' ?", answers: ["James Cameron", "Steven Spielberg", "George Lucas", "Ridley Scott"], correct: 0 },
                { question: "Quel personnage dit 'Je suis ton père' ?", answers: ["Dark Vador", "Luke Skywalker", "Han Solo", "Obi-Wan"], correct: 0 },
                { question: "Dans quel film trouve-t-on E.T. ?", answers: ["E.T.", "Jurassic Park", "Jaws", "Indiana Jones"], correct: 0 }
            ],
            "medium": [
                { question: "Dans quel film trouve-t-on le personnage 'Forrest Gump' ?", answers: ["Forrest Gump", "Cast Away", "Rain Man", "Saving Private Ryan"], correct: 0 },
                { question: "Quel réalisateur a fait 'Pulp Fiction' ?", answers: ["Quentin Tarantino", "Christopher Nolan", "Martin Scorsese", "Ridley Scott"], correct: 0 },
                { question: "Quel acteur a joué dans 'Mission Impossible' ?", answers: ["Tom Cruise", "Brad Pitt", "Leonardo DiCaprio", "Matt Damon"], correct: 0 }
            ],
            "hard": [
                { question: "Quel réalisateur est associé à la trilogie du 'Seigneur des Anneaux' ?", answers: ["Peter Jackson", "Christopher Nolan", "Tim Burton", "David Fincher"], correct: 0 },
                { question: "Dans quel film trouve-t-on le personnage Keyser Söze ?", answers: ["Usual Suspects", "Seven", "Memento", "Reservoir Dogs"], correct: 0 },
                { question: "Qui a réalisé 'Les Temps Modernes' ?", answers: ["Charlie Chaplin", "Buster Keaton", "Orson Welles", "Alfred Hitchcock"], correct: 0 }
            ]
        },
        "Littérature": {
            "easy": [
                { question: "Qui a écrit 'Les Misérables' ?", answers: ["Victor Hugo", "Émile Zola", "Charles Dickens", "Balzac"], correct: 0 },
                { question: "Qui a écrit 'Le Petit Prince' ?", answers: ["Saint-Exupéry", "Hugo", "Flaubert", "Maupassant"], correct: 0 },
                { question: "Quel écrivain est célèbre pour '1984' ?", answers: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Isaac Asimov"], correct: 0 }
            ],
            "medium": [
                { question: "Dans quelle langue a été écrit 'Don Quichotte' ?", answers: ["Espagnol", "Anglais", "Français", "Italien"], correct: 0 },
                { question: "Qui a écrit 'La Recherche du temps perdu' ?", answers: ["Marcel Proust", "Albert Camus", "Jean-Paul Sartre", "André Gide"], correct: 0 },
                { question: "Qui est l'auteur de 'Madame Bovary' ?", answers: ["Flaubert", "Zola", "Maupassant", "Balzac"], correct: 0 }
            ],
            "hard": [
                { question: "Quel poète a écrit 'Les Fleurs du mal' ?", answers: ["Baudelaire", "Rimbaud", "Verlaine", "Mallarmé"], correct: 0 },
                { question: "Quel écrivain russe a écrit 'Guerre et Paix' ?", answers: ["Tolstoï", "Dostoïevski", "Pouchkine", "Tchekhov"], correct: 0 },
                { question: "Qui est l'auteur de 'Ulysse' ?", answers: ["James Joyce", "Oscar Wilde", "William Butler Yeats", "George Bernard Shaw"], correct: 0 }
            ]
        },
        "Mythologie": {
            "easy": [
                { question: "Qui est le roi des dieux grecs ?", answers: ["Zeus", "Hadès", "Poséidon", "Apollon"], correct: 0 },
                { question: "Quel dieu est associé à la mer ?", answers: ["Poséidon", "Zeus", "Hermès", "Dionysos"], correct: 0 },
                { question: "Quel héros grec a tué Méduse ?", answers: ["Persée", "Héraclès", "Thésée", "Achille"], correct: 0 }
            ],
            "medium": [
                { question: "Quel dieu nordique est associé au tonnerre ?", answers: ["Thor", "Odin", "Loki", "Baldur"], correct: 0 },
                { question: "Dans la mythologie égyptienne, qui est le dieu des morts ?", answers: ["Osiris", "Anubis", "Rê", "Horus"], correct: 0 },
                { question: "Quelle déesse est associée à la sagesse chez les Grecs ?", answers: ["Athéna", "Héra", "Artemis", "Aphrodite"], correct: 0 }
            ],
            "hard": [
                { question: "Qui est le père de Zeus ?", answers: ["Cronos", "Ouranos", "Gaïa", "Océan"], correct: 0 },
                { question: "Quel monstre a été tué par Thésée ?", answers: ["Minotaure", "Hydre", "Chimère", "Cerbère"], correct: 0 },
                { question: "Quel dieu nordique possède un cheval à huit jambes ?", answers: ["Odin", "Thor", "Loki", "Frey"], correct: 0 }
            ]
        },
        "Drapeaux": {
            "easy": [
                { question: "Quel drapeau a une feuille d'érable rouge ?", answers: ["Canada", "Japon", "Suisse", "Danemark"], correct: 0 },
                { question: "Quel drapeau est vert, blanc et rouge ?", answers: ["Italie", "France", "Allemagne", "Espagne"], correct: 0 },
                { question: "Quel drapeau a un cercle rouge sur fond blanc ?", answers: ["Japon", "Chine", "Corée", "Thaïlande"], correct: 0 }
            ],
            "medium": [
                { question: "Quel pays possède un drapeau avec un dragon ?", answers: ["Bhoutan", "Pays de Galles", "Chine", "Mongolie"], correct: 0 },
                { question: "Quel drapeau est le plus ancien encore en usage ?", answers: ["Danemark", "Angleterre", "Japon", "France"], correct: 0 },
                { question: "Quel drapeau est entièrement vert ?", answers: ["Libye", "Soudan", "Nigeria", "Arabie Saoudite"], correct: 0 }
            ],
            "hard": [
                { question: "Quel est le seul drapeau qui n'est pas rectangulaire ?", answers: ["Népal", "Bhoutan", "Suisse", "Monaco"], correct: 0 },
                { question: "Quel pays a un drapeau avec un soleil et une lune ?", answers: ["Népal", "Bhoutan", "Inde", "Suisse"], correct: 0 },
                { question: "Quel pays a un drapeau avec une étoile et un croissant ?", answers: ["Turquie", "Pakistan", "Indonésie", "Bangladesh"], correct: 0 }
            ]
        },
        "Sport": {
            "easy": [
                { question: "Quel sport utilise une balle orange et un panier ?", answers: ["Basketball", "Tennis", "Baseball", "Football"], correct: 0 },
                { question: "Combien de joueurs sont dans une équipe de football ?", answers: ["11", "10", "12", "9"], correct: 0 },
                { question: "Quel sport est joué à Wimbledon ?", answers: ["Tennis", "Rugby", "Football", "Cricket"], correct: 0 }
            ],
            "medium": [
                { question: "Qui détient le record du 100m en athlétisme ?", answers: ["Usain Bolt", "Carl Lewis", "Tyson Gay", "Justin Gatlin"], correct: 0 },
                { question: "Quel sport utilise un volant ?", answers: ["Badminton", "Tennis", "Squash", "Ping-Pong"], correct: 0 },
                { question: "Quelle ville a accueilli les Jeux Olympiques de 2008 ?", answers: ["Pékin", "Londres", "Athènes", "Tokyo"], correct: 0 }
            ],
            "hard": [
                { question: "Dans quel pays a eu lieu la première Coupe du Monde de football ?", answers: ["Uruguay", "Brésil", "Italie", "Argentine"], correct: 0 },
                { question: "Quelle équipe a remporté le plus de titres NBA ?", answers: ["Boston Celtics", "Los Angeles Lakers", "Chicago Bulls", "Golden State Warriors"], correct: 0 },
                { question: "Quel cycliste a gagné le Tour de France 5 fois ?", answers: ["Eddy Merckx", "Bernard Hinault", "Jacques Anquetil", "Miguel Indurain"], correct: 0 }
            ]
        },
        "Sciences": {
            "easy": [
                { question: "Quel est l'élément chimique représenté par 'H' ?", answers: ["Hydrogène", "Hélium", "Holmium", "Hafnium"], correct: 0 },
                { question: "Quelle est la planète la plus proche du Soleil ?", answers: ["Mercure", "Vénus", "Mars", "Terre"], correct: 0 },
                { question: "Combien y a-t-il de planètes dans le système solaire ?", answers: ["8", "9", "7", "6"], correct: 0 }
            ],
            "medium": [
                { question: "Qui a développé la théorie de la relativité ?", answers: ["Einstein", "Newton", "Galilée", "Bohr"], correct: 0 },
                { question: "Quel est le symbole chimique de l'eau ?", answers: ["H2O", "CO2", "O2", "H2"], correct: 0 },
                { question: "Quelle est l'unité de mesure de la force ?", answers: ["Newton", "Joule", "Watt", "Pascal"], correct: 0 }
            ],
            "hard": [
                { question: "Quelle est la constante de gravité ?", answers: ["9.8 m/s²", "8.9 m/s²", "10.5 m/s²", "9.2 m/s²"], correct: 0 },
                { question: "Quel scientifique a découvert la radioactivité ?", answers: ["Marie Curie", "Albert Einstein", "Isaac Newton", "Niels Bohr"], correct: 0 },
                { question: "Quelle particule subatomique n'a pas de charge électrique ?", answers: ["Neutron", "Proton", "Électron", "Photon"], correct: 0 }
            ]
        }
    };
    

    

    const switchPlayer = () => {
        currentPlayer = currentPlayer === 1 ? 2 : 1;
        if (currentPlayer == 1) {            
            Akiletour(player1Name);
        } else {
            Akiletour(player2Name);
        }        
       
    };

    const applyDamage = (damage) => {
        if (currentPlayer === 1) {
            player2Health = Math.max(0, player2Health - damage);
            player2HealthBar.style.width = `${player2Health}%`;
            player2HpText.textContent = `${player2Health} PV`;
        } else {
            player1Health = Math.max(0, player1Health - damage);
            player1HealthBar.style.width = `${player1Health}%`;
            player1HpText.textContent = `${player1Health} PV`;
        }
    
        if (player1Health === 0 || player2Health === 0) {
            // Déterminer le gagnant
            const winnerName = currentPlayer === 1 ? player1Name : player2Name;
    
            // Afficher le message de fin avec animation
            const gameEnd = document.getElementById("game-end");
            const winnerMessage = document.getElementById("winner-message");
            winnerMessage.textContent = `${winnerName} a gagné !`;
            gameEnd.style.display = "flex";
    
            // Supprimer les noms du localStorage après 3 secondes
            setTimeout(() => {
                localStorage.removeItem("player1Name");
                localStorage.removeItem("player2Name");
    
                // Rediriger vers le setup
                window.location.href = "versus.html";
            }, 3000); // Attendre la fin de l'animation
        } else {
            switchPlayer();
        }
    };
    

      
    function shuffle(array) { //une fonction prise sur stackoverflow pour mélanger un tableau
        let currentIndex = array.length;//utile pour éviter que la première réponse soit toujours la bonne notamment
        while (currentIndex != 0) {
          let randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        };
    };

    const loadQuestion = (difficulty) => {
    const theme=normaliserTheme(`${selectedTheme}`);

    console.log(theme);

    var TableauExtrait = quizData.filter(quiz => quiz.category === theme && quiz.level === difficulty);
    
    console.log(TableauExtrait);    

    const randomIndex = Math.floor(Math.random() * TableauExtrait.length); // Choisir une question aléatoire
    const selectedQuestion = [TableauExtrait[randomIndex].question,TableauExtrait[randomIndex].options]; //on récupère la question et les options la première case du tableau contient la question et la deuxième, un tableau d'options
    
    console.log(selectedQuestion[0]); //on voir bien que la question est là
    console.log(selectedQuestion[1]); //On voit que les options sont ici

    const RéponseJuste = selectedQuestion[1][0];

    console.log(selectedQuestion[1][0]) //On vérifie qu'on sélectionne bien la bonne réponse
    
    shuffle (selectedQuestion[1]);
    
    questionText.textContent = selectedQuestion[0];
    answersDiv.innerHTML = "";
    selectedQuestion[1].forEach((options) => {
        const btn = document.createElement("button");
        btn.textContent = options;
        btn.classList.add("difficulty-btn");
        btn.onclick = () => {
            if (options === RéponseJuste) {
                displayMessage("Bonne réponse !", "success");                               
                setTimeout(() => {
                    applyDamage(difficulty === "facile" ? 5 : difficulty === "moyen" ? 10 : difficulty === "difficile" ? 20 : 30);
                  }, 2000);
            } else {
                displayMessage("Mauvaise réponse...", "error");
                setTimeout(() => {
                    switchPlayer();
                },2000);
            }
            questionArea.style.display = "none";
            spinBtn.disabled = false;
        
            // Effacer le thème après la réponse
            currentThemeText.textContent = "";
        
            // Réafficher le texte "Choisissez un thème"
            currentThemeText.textContent = "Choisissez un thème";
        };
        answersDiv.appendChild(btn);
    });
};


    spinBtn.addEventListener("click", () => {
        const themeNames = Object.keys(themes);
        selectedTheme = themeNames[Math.floor(Math.random() * themeNames.length)];
        currentThemeText.textContent = `Thème sélectionné : ${selectedTheme}`;
        spinBtn.disabled = true;
        difficultyChoice.style.display = "block";
    });

    document.querySelectorAll(".difficulty-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            difficultyChoice.style.display = "none";
            questionArea.style.display = "block";
            loadQuestion(btn.dataset.difficulty);
        });
    });
});

// Fonction pour afficher le message
function Akiletour(playerName) {
    const messageBox = document.getElementById("message-box");
    
    // Mettre à jour le contenu et afficher
    messageBox.innerText = `C'est au tour de ${playerName} !`;
    messageBox.style.display = "block";
  
    // Cacher automatiquement après 3 secondes
    setTimeout(() => {
      messageBox.style.display = "none";
    }, 3000);
  }


  function normaliserTheme(theme) {
    // Convertir le thème en minuscules
    let themeNormalise = theme.toLowerCase();
    
    // Si le thème est "Littérature", corriger la casse
    if (themeNormalise === "littérature") {
      themeNormalise = "litterature";
    } else if (themeNormalise === "géographie"){
        themeNormalise = "geographie";        
    } else if (themeNormalise === "cinéma"){
        themeNormalise = "cinema";
    }
    return themeNormalise;
};
