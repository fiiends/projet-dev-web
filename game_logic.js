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
        const themeNames = ["Géographie","Drapeaux","Sport","Musique","Cinéma","Sciences","Histoire","Littérature","Mythologie"];
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
