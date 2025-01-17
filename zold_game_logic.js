var sound_button_click = new Audio("sounds/button.mp3");
var sound_correct_answer = new Audio("sounds/RIGHT.mp3");
var sound_wrong_answer = new Audio("sounds/WRONG.mp3");
var sound_house_click = new Audio("sounds/house-transition.mp3");
var sound_ding = new Audio("sounds/bellding.mp3");
var sound_music = new Audio("sounds/FIGHT.mp3");
var volume_music = localStorage.getItem("volume-musique");
var volume_sounds = localStorage.getItem("volume-son");
var previous_volume_music = 0;
var previous_volume_sounds = 0;


function ControlSon() {

  const curseur_musique = document.getElementById("music");
  const curseur_sons = document.getElementById("sounds");
  const icone_musique = document.getElementById("imgmusique");
  const icone_sons = document.getElementById("imgsons");
  const bouton_play = document.getElementById("button_play_music");
  const icone_play = document.getElementById("imgplaymusique");
  var jeton = 0;

  curseur_musique.value = volume_music;
  curseur_sons.value = volume_sounds;


  sound_music.volume = volume_music;
  sound_button_click.volume = volume_sounds;
  sound_correct_answer.volume = volume_sounds;
  sound_wrong_answer.volume = volume_sounds;
  sound_house_click.volume = volume_sounds;

  bouton_play.addEventListener('click', function(){
    if (jeton == 0){
      sound_music.play();
      icone_play.src = "icons/pause.png";
      jeton++;
    }else{
      sound_music.pause();
      icone_play.src = "icons/play.png";
      jeton--;
    }

  })

  icone_musique.addEventListener('click', function() {
    if (sound_music.volume != 0){
      previous_volume_music = sound_music.volume ; 
      sound_music.volume = 0 ;
      curseur_musique.value=0;
      icone_musique.src = "icons/music-icon-disabled.png";
    }else{
      sound_music.volume = previous_volume_music ; 
      curseur_musique.value = previous_volume_music
      icone_musique.src = "icons/music-icon.png";
    }
  })

  icone_sons.addEventListener('click', function() {
    if (sound_button_click.volume != 0){
      previous_volume_sounds = sound_button_click.volume ; 
      sound_button_click.volume = 0;
      sound_correct_answer.volume = 0;
      sound_wrong_answer.volume = 0;
      sound_house_click.volume = 0;
      sound_ding.volume = 0;
      curseur_sons.value=0;
      icone_sons.src = "icons/speaker-disabled.png";
    }else{
      sound_button_click.volume = previous_volume_sounds;
      sound_correct_answer.volume = previous_volume_sounds;
      sound_wrong_answer.volume = previous_volume_sounds;
      sound_house_click.volume = volume_sounds;
      sound_ding.volume = previous_volume_sounds;
      curseur_sons.value = previous_volume_sounds;
      icone_sons.src = "icons/speaker.png";
    }
  })

  curseur_musique.addEventListener('input', function() {
    console.log("Volume de la musique de fond = ",volume_music*100,"%");
    sound_music.volume = volume_music;
    if (curseur_musique.value == 0){
      icone_musique.src = "icons/music-icon-disabled.png";
    }else{
      icone_musique.src = "icons/music-icon.png";
    }
  })

  curseur_sons.addEventListener('input', function() {
    console.log("Volume des effets sonores = ",volume_sounds*100,"%");
    sound_button_click.volume = volume_sounds;
    sound_correct_answer.volume = volume_sounds;
    sound_wrong_answer.volume = volume_sounds;
    sound_house_click.volume = volume_sounds;
    sound_ding.volume = volume_sounds;
    if (curseur_sons.value == 0){
        icone_sons.src = "icons/speaker-disabled.png";
      }else{
        icone_sons.src = "icons/speaker.png";
      }
  })
};
window.onload = ControlSon()

const delay = ms => new Promise(res => setTimeout(res, ms));
async function Redirect_Home(){
  sound_house_click.play()
  await delay(3000);
  location.href="index.html";

}
async function Redirect_VS(){
  sound_button_click.play()
  await delay(150);
  location.href="versus.html";
}

document.addEventListener("DOMContentLoaded", () => {
    const player1NameElement = document.getElementById("player1-name");
    const player2NameElement = document.getElementById("player2-name");

    // Récupération des noms des joueurs depuis le localStorage
    const player1Name = localStorage.getItem("player1Name") || "Joueur 1";
    const player2Name = localStorage.getItem("player2Name") || "Joueur 2";

    // Mise à jour des noms dans le DOM
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
    const player1BonusBtn = document.getElementById("player1-bonus");
    const player2BonusBtn = document.getElementById("player2-bonus");
    const doubleDamageBanner = document.createElement("div");
    doubleDamageBanner.id = "double-damage-banner";
    doubleDamageBanner.textContent = "DOUBLE DÉGÂTS";
    document.body.appendChild(doubleDamageBanner);

    let currentPlayer = 1; // 1 pour Joueur 1, 2 pour Joueur 2
    let player1Health = 100;
    let player2Health = 100;
    let selectedTheme = null;
    let isDoubleDamage = false;
    let player1BonusUsed = false;
    let player2BonusUsed = false;

    // Afficher un message temporaire
    const displayMessage = (message, type) => {
        const resultDiv = document.getElementById("result");
        resultDiv.textContent = message;
        resultDiv.className = ""; // Réinitialiser les classes
        resultDiv.classList.add(type); // Ajouter la classe (success ou error)
        resultDiv.style.display = "block";

        setTimeout(() => {
            resultDiv.style.display = "none";
        }, 2000);
    };

    // Masquer l'intro après l'animation
    const hideIntro = () => {
        const gameIntro = document.getElementById("game-intro");
        if (gameIntro) {
            setTimeout(() => {
                gameIntro.style.display = "none";
            }, 3000);
        }
    };
    hideIntro();

    // Passer au joueur suivant
    const switchPlayer = () => {
        currentPlayer = currentPlayer === 1 ? 2 : 1;
        Akiletour(currentPlayer === 1 ? player1Name : player2Name);
        updateBonusButtons();
    };

    // Appliquer les dégâts
    const applyDamage = (damage) => {
        if (isDoubleDamage) {
            damage *= 2; // Appliquer le bonus x2
            isDoubleDamage = false; // Désactiver après utilisation
        }

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
            const winnerName = currentPlayer === 1 ? player1Name : player2Name;

            // Afficher le message de fin
            const gameEnd = document.getElementById("game-end");
            const winnerMessage = document.getElementById("winner-message");
            winnerMessage.textContent = `${winnerName} a gagné !`;
            gameEnd.style.display = "flex";

            setTimeout(() => {
                localStorage.removeItem("player1Name");
                localStorage.removeItem("player2Name");
                window.location.href = "versus.html";
            }, 3000);
        } else {
            switchPlayer();
        }
    };

    // Activer le bonus "DOUBLE DÉGÂTS"
    const activateDoubleDamage = (player) => {
        isDoubleDamage = true;
        doubleDamageBanner.style.display = "flex";
        setTimeout(() => {
            doubleDamageBanner.style.display = "none";
        }, 3000);

        if (player === 1) player1BonusUsed = true;
        if (player === 2) player2BonusUsed = true;

        updateBonusButtons();
    };

    // Met à jour l'état des boutons de bonus
    const updateBonusButtons = () => {
        player1BonusBtn.disabled = player1BonusUsed || currentPlayer !== 1 || spinBtn.disabled;
        player2BonusBtn.disabled = player2BonusUsed || currentPlayer !== 2 || spinBtn.disabled;
    };

    // Charger une question
    const loadQuestion = (difficulty) => {
        const theme = normaliserTheme(`${selectedTheme}`);
        const filteredQuestions = quizData.filter(
            (quiz) => quiz.category === theme && quiz.level === difficulty
        );

        const randomIndex = Math.floor(Math.random() * filteredQuestions.length);
        const selectedQuestion = filteredQuestions[randomIndex];

        const correctAnswer = selectedQuestion.options[0];
        shuffle(selectedQuestion.options);

        questionText.textContent = selectedQuestion.question;
        answersDiv.innerHTML = "";

        selectedQuestion.options.forEach((option) => {
            const btn = document.createElement("button");
            btn.textContent = option;
            btn.classList.add("difficulty-btn");
            btn.onclick = () => {
                if (option === correctAnswer) {
                    sound_correct_answer.play();
                    displayMessage("Bonne réponse !", "success");
                    setTimeout(() => {
                        applyDamage(difficulty === "facile" ? 5 : difficulty === "moyen" ? 10 : difficulty === "difficile" ? 20 : 30);
                    }, 2000);
                } else {
                    sound_wrong_answer.play();
                    displayMessage("Mauvaise réponse...", "error");
                    setTimeout(() => {
                        switchPlayer();
                    }, 2000);
                }
                questionArea.style.display = "none";
                spinBtn.disabled = false;
                currentThemeText.textContent = "Choisissez un thème";
            };
            answersDiv.appendChild(btn);
        });
    };

    // Boutons de bonus
    player1BonusBtn.addEventListener("click", () => activateDoubleDamage(1));
    player2BonusBtn.addEventListener("click", () => activateDoubleDamage(2));

    // Spinner
    spinBtn.addEventListener("click", () => {
        sound_ding.play();
        const themeNames = ["Géographie", "Drapeaux", "Sport", "Musique", "Cinéma", "Sciences", "Histoire", "Littérature", "Mythologie"];
        selectedTheme = themeNames[Math.floor(Math.random() * themeNames.length)];
        currentThemeText.textContent = `Thème sélectionné : ${selectedTheme}`;
        spinBtn.disabled = true;
        difficultyChoice.style.display = "block";
        updateBonusButtons();
    });

    document.querySelectorAll(".difficulty-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            difficultyChoice.style.display = "none";
            questionArea.style.display = "block";
            loadQuestion(btn.dataset.difficulty);
        });
    });

    // Message "C'est au tour de..."
    function Akiletour(playerName) {
        const messageBox = document.getElementById("message-box");
        messageBox.innerText = `C'est au tour de ${playerName} !`;
        messageBox.style.display = "block";

        setTimeout(() => {
            messageBox.style.display = "none";
        }, 3000);
    }

    // Normaliser les thèmes
    function normaliserTheme(theme) {
        return theme.toLowerCase().replace("géographie", "geographie").replace("cinéma", "cinema").replace("littérature", "litterature");
    }

    // Mélanger un tableau
    function shuffle(array) {
        let currentIndex = array.length;
        while (currentIndex != 0) {
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
    }

    // Initialiser l'état des boutons au chargement
    updateBonusButtons();
});

window.onbeforeunload = function(){
    localStorage.setItem("volume-son",volume_sounds);
    localStorage.setItem("volume-musique",volume_music);
    console.log("succesfully write volume values")
  }