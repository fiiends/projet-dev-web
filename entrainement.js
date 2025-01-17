var sound_button_click = new Audio("sounds/button.mp3");
var sound_correct_answer = new Audio("sounds/RIGHT.mp3");
var sound_wrong_answer = new Audio("sounds/WRONG.mp3");
var sound_house_click = new Audio("sounds/house-transition.mp3");
//var sound_ding = new Audio("sounds/bellding.mp3");
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
    console.log("ox")
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
      //sound_ding.volume = 0;
      curseur_sons.value=0;
      icone_sons.src = "icons/speaker-disabled.png";
    }else{
      sound_button_click.volume = previous_volume_sounds;
      sound_correct_answer.volume = previous_volume_sounds;
      sound_wrong_answer.volume = previous_volume_sounds;
      sound_house_click.volume = volume_sounds;
      //sound_ding.volume = previous_volume_sounds;
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
    //sound_ding.volume = volume_sounds;
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


document.getElementById("arrow-image").addEventListener('click', () => PrintTheme());
//################################################ Mise en place des options ################################################

var theme_choisi ="";
var diff_choisie ="";

function SetTheme(theme){theme_choisi = theme;}
function SetDiff(diff){diff_choisie = diff;}

function PrintTheme(){
  
    document.getElementById("quiz-container").replaceChildren();
    document.getElementById("nbquestions").replaceChildren();
    document.getElementById("arrow-image").classList.add("hidden");
    const div = document.getElementById("bouttons");
    div.replaceChildren();//On vide le contenu précédent
    //Array pour associer le thème à la valeur à inscrire dans la variable
    const tab_themes = [
        {aff:"Thème aléatoire",var:"aleatoire"},
        {aff:"Musique",var:"musique"},
        {aff:"Cinéma",var:"cinema"},
        {aff:"Sport",var:"sport"},
        {aff:"Sciences",var:"sciences"},
        {aff:"Géographie",var:"geographie"},
        {aff:"Histoire",var:"histoire"},
        {aff:"Littérature",var:"litterature"},
        {aff:"Mythologie",var:"mythologie"},
        {aff:"Drapeaux",var:"drapeaux"}
    ];
    const buttonElements = []; //Array qui va contenir les bouttons qui indiquent les thèmes
    //On crée les boutons et on les insère dans buttonElements
    for (let i = 0; i < tab_themes.length; i++) {
        const bouton_i = document.createElement('a');
        bouton_i.innerHTML = `<a onclick="sound_button_click.play()" class='button2'>${tab_themes[i].aff}</a>`; //dès qu'on clique sur un des boutons :
        bouton_i.addEventListener('click', () => SetTheme(`${tab_themes[i].var}`)); //on appelle la fonction SetTheme pour retenir le thème choisi
        bouton_i.addEventListener('click', () => PrintDiff()); //on appelle la fonction PrintDiff pour choisir la difficulté
        buttonElements.push(bouton_i);
    }
    //création du titre
    const titre = document.createElement('h1');
    titre.innerHTML = "<h1> CHOISISSEZ LE THEME D'ENTRAINEMENT</h1>";
    //Affichage de tout
    div.append(titre,...buttonElements);
}

function PrintDiff() {
  document.getElementById("arrow-image").classList.remove("hidden"); //on affiche la flèche de retour au choix du thème
  const div = document.getElementById("bouttons");
  div.replaceChildren();//On vide le contenu précédent
  const tab_diffs = [
      {aff:"Aleatoire",var:"aleatoire"},
      {aff:"Facile",var:"facile"},
      {aff:"Moyen",var:"moyen"},
      {aff:"Difficile",var:"difficile"},
      {aff:"Extreme",var:"extreme"}
  ];
  const buttonElements = []; //Array qui va contenir les bouttons qui indiquent les difficultés
  //On crée les boutons et on les insère dans buttonElements
  for (let i = 0; i < tab_diffs.length; i++) {
      const bouton_i = document.createElement('a');
      bouton_i.innerHTML = `<a onclick="sound_button_click.play()" class='button2'>${tab_diffs[i].aff}</a>`; //dès qu'on clique sur un des boutons : 
      bouton_i.addEventListener('click', () => SetDiff(`${tab_diffs[i].var}`)); //on appelle la fonction SetDiff pour retenir la difficulté choisie
      bouton_i.addEventListener('click', () => Setup()); //on appelle la fonction PrintDiff pour démarrer l'entraînement
      buttonElements.push(bouton_i);
  }
  //création du titre
  const titre = document.createElement('h1');
  titre.innerHTML = "<h1> CHOISISSEZ VOTRE DIFFICULTÉ</h1>";
  //Affichage du titre + des boutons
  div.append(titre,...buttonElements);
}
window.onload = PrintTheme();


//################################################ Début de l'entraînement ################################################

var questions_selectionnees = []; //le tableau qui va contenir toutes les questions qui correspondent aux critères
var nombre_questions_total = 0;
var nombre_questions_posees = 0; //sert pour le ratio
var nombre_bonnes_reponses = 0;  //sert pour le ratio
var jeton_blocage = 0; //sert à bloquer l'application une fois que l'utilisateur a donné une réponse

//Fonction pour récupérer uniquement les questions et options de QuizData en fonction des thèmes/difficultés
function getQuestions(data,category, level) {
  if (category=="aleatoire" && level=="aleatoire"){
    return data;  
  } else if (category=="aleatoire" && level !== "aleatoire"){
    return data.filter(quiz => quiz.level===level);    
  } else if (category!=="aleatoire" && level == "aleatoire"){
    return data.filter(quiz => quiz.category===category);
  } else {
    return data.filter(quiz => quiz.category === category && quiz.level === level);
  }
}

function shuffle(array) { //une fonction pour mélanger un tableau
  let currentIndex = array.length;//utile pour éviter que la première réponse soit toujours la bonne notamment
  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

function Setup() { //rempli la variable questions_selectionnees que vont utiliser les autres fonctions et setup l'affichage général de la page
    //reset les variables dans le cas où on effectue plusieurs entraînements non finis 
    questions_selectionnees = [];
    nombre_questions_total = 0;
    nombre_questions_posees = 0;
    nombre_bonnes_reponses = 0;
    jeton_blocage = 0;

    var TabExtract = getQuestions(quizData,theme_choisi,diff_choisie); //on récupère les questions correspondantes
    for (let i = 0; i < TabExtract.length; i++){ //on parcourt toutes les questions extraites   
      questions_selectionnees.push( [TabExtract[i].question,TabExtract[i].options])} //on récupère la question et les options
    shuffle(questions_selectionnees); //mélange important si plusieurs difficultées/thèmes présents
    nombre_questions_total = questions_selectionnees.length;

    document.getElementById("bouttons").replaceChildren();
    //affichage nombre de questions 
    const div = document.getElementById("nbquestions");
    const nbq = document.createElement('p');
    nbq.innerHTML = `<p>Nous disposons de ${nombre_questions_total} questions dans notre base qui corresponde à votre recherche.</p>`;
    div.append(nbq)
    Print_Question(); //démarre l'entrainement et s'arrête
}

function Print_Question(){//Affiche la question au joueur 
  if (nombre_questions_posees == nombre_questions_total){
    document.body.replaceChildren();
    const header = document.createElement('h1');
    header.innerHTML = `<h1>Entraînement terminé !</h1>`;
    const paragraphe = document.createElement('p');
    paragraphe.innerHTML = `<p>Vous avez terminé cette séance d'entraînement avec un total de ${100*nombre_bonnes_reponses/nombre_questions_posees}% de bonnes réponses.\n Vous pouvez dès à présent affronter un de vos amis dans le mode Versus ou bien continuer à vous entraîner en choisissant d'autres thèmes ou difficultés. </p>`;
    const bouton_home = document.createElement('a');
    bouton_home.innerHTML = "<a><img src='icons/house.png'alt='bouton_retour' class='button' onclick='Redirect_Home()'></a>"
    document.body.append(header,paragraphe,bouton_home)
  }else{
    
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.replaceChildren(); // Vide uniquement la zone du quiz
    const question = questions_selectionnees[questions_selectionnees.length-1][0]; //on récupère la dernière question de toutes les questions séléctionnées
    const options = questions_selectionnees[questions_selectionnees.length-1][1]; //ainsi que ses réponses
    const reponse = options[0]; //on mémorise la bonne réponse (toujours la première dans notre implémentation)
    shuffle(options); //on mélange les options possibles pour que la première ne soit pas toujours la bonne

    //création du titre qui contient la question
    const titre = document.createElement('h1');
    titre.innerHTML = `<h1>${question}</h1>`;

    //création des boutons de réponse
    const buttonElements = [];
    for (let i = 0; i < options.length; i++) {
      const bouton = document.createElement('a');
      bouton.innerHTML = `<a class='button2'>${options[i]}</a>`; //Création du bouton avec une des options pour nom
      bouton.addEventListener('click', () => Verification(`${options[i]}`,`${reponse}`)); //Appelle la fct vérification avec la réponse de l'utilisateur et la bonne réponse
      buttonElements.push(bouton);
    }
    quizContainer.append(titre);//On affiche le titre en premier
    if (nombre_questions_posees >= 1){ //Si on a de quoi, on affiche le ratio bonnes réponses juste après
      let ratio = 100*nombre_bonnes_reponses/nombre_questions_posees ;
      const txt_ratio = document.createElement('a');
      txt_ratio.innerHTML = `<a>${Math.round(ratio)}% de bonnes réponses !</a>`;
      quizContainer.append(txt_ratio);
    } 
    quizContainer.append(...buttonElements);//A la suite on rajoute le nombre de questions en bas de page ainsi que les boutons
    questions_selectionnees.pop();//on retire des questions à poser celle qu'on vient d'afficher
  }
}

function Verification(reponse_utilisateur,bonne_reponse){//fonction appelée sur clic d'un bouton réponse
  const quizContainer = document.getElementById("quiz-container");
  if (jeton_blocage == 1){ //on vérifie que l'utilisateur n'a appuyé qu'une fois sur un bouton réponse, sinon on le bloque et on attend qu'il passe à la q suivante
    return;
  }
  else{if (reponse_utilisateur == bonne_reponse){
    sound_correct_answer.play();
    displayMessage("Bonne réponse !", "success");
    nombre_bonnes_reponses++;
  }else{
    sound_wrong_answer.play();
    displayMessage("Mauvaise réponse...", "error");
  };
  jeton_blocage++;
  nombre_questions_posees ++;
  const bouton_next = document.createElement('a');
  bouton_next.innerHTML = `<a onclick="sound_button_click.play()" class='button3' ><img src='icons/arrow-next.png' alt='question suivante' class='fleche_next'></a>`; //Création du bouton next
  bouton_next.addEventListener('click', () => Print_Question());
  bouton_next.addEventListener('click', () => jeton_blocage--);
  quizContainer.append(bouton_next);
  }
}

function displayMessage(message, type) {
  const resultElement = document.getElementById("result");
  resultElement.textContent = message;
  resultElement.className = ""; // Réinitialise les classes
  resultElement.classList.add(type); // Ajoute la classe "success" ou "error"
  resultElement.classList.remove("hidden");
  // Masquer le message après un délai
  setTimeout(() => {
      resultElement.classList.add("hidden");
  }, 2000); // Masque après 2 secondes
}

window.onbeforeunload = function(){
  localStorage.setItem("volume-son",volume_sounds);
  localStorage.setItem("volume-musique",volume_music);
  console.log("succesfully write volume values")
}