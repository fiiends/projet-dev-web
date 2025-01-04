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

function Setup() { //rempli la variable questions_selectionnees que vont utiliser les autres fonctions et setup l'affichage général de la page
  const theme_choisi = localStorage.getItem("theme"); //on récupère le thème et la difficulté choisis par l'utilisateur
  const diff_choisie = localStorage.getItem("difficulte");
  var TabExtract = getQuestions(quizData,theme_choisi,diff_choisie); //on récupère les questions correspondantes
  
  for (let i = 0; i < TabExtract.length; i++){ //on parcourt toutes les questions extraites   
      questions_selectionnees.push( [TabExtract[i].question,TabExtract[i].options] ) //on récupère la question et les options
    }
  
 
  nombre_questions_total = questions_selectionnees.length;
  shuffle(questions_selectionnees); //mélange important si plusieurs difficultées/thèmes présents

  //Affichage des éléments persistants 
  //création de la maison
  const maison = document.createElement('a');
  maison.innerHTML = "<a href='index.html'><img src='house.png'alt='house' class='house-image'></a>";
  //affichage nombre de questions 
  const nbq = document.createElement('p');
  nbq.innerHTML = `<p class='info'>Nous disposons de ${nombre_questions_total} questions dans notre base qui corresponde à votre recherche.</p>`;
  //création de la flèche de retour aux choix
  const fleche = document.createElement('a');
  fleche.innerHTML = "<a href = 'entrainement_setup.html'><img src='arrow-back.png' alt='arrow to get back' class='arrow-image'></a>";
  fleche.addEventListener('click', () => PrintTheme());
  document.body.append(maison,fleche,nbq)//On rajoute tout ça 

  Print_Question(); //démarre l'entrainement et s'arrête
}

window.onload = Setup();//On lance la fonction Setup au démarrage

function shuffle(array) { //une fonction prise sur stackoverflow pour mélanger un tableau
  let currentIndex = array.length;//utile pour éviter que la première réponse soit toujours la bonne notamment
  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

function Print_Question(){//Affiche la question au joueur 
  if (nombre_questions_posees == nombre_questions_total){
    document.body.replaceChildren();
    const header = document.createElement('h1');
    header.innerHTML = `<h1>Entraînement terminé !</h1>`;
    const paragraphe = document.createElement('p');
    paragraphe.innerHTML = `<p>Vous avez terminé cette séance d'entraînement avec un total de ${100*nombre_bonnes_reponses/nombre_questions_posees}% de bonnes réponses.\n Vous pouvez dès à présent affronter un de vos amis dans le mode Versus ou bien continuer à vous entraîner en choisissant d'autres thèmes ou difficultés. </p>`;
    const bouton_home = document.createElement('a');
    bouton_home.innerHTML = "<a href='index.html'><img src='house.png'alt='bouton_retour' class='button'></a>"
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
    displayMessage("Bonne réponse !", "success");
    nombre_bonnes_reponses++;
  }else{
    displayMessage("Mauvaise réponse...", "error");
  };
  jeton_blocage++;
  nombre_questions_posees ++;
  const bouton_next = document.createElement('a');
  bouton_next.innerHTML = `<a class='button3' ><img src='arrow-next.png' alt='question suivante' class='fleche_next'></a>`; //Création du bouton next
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