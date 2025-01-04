//fonctions pour mettre à jour le theme choisi dans le localhost

function TwriteRDM(){
    window.localStorage.setItem("theme", "aleatoire");
    console.log("Current theme:", window.localStorage.getItem("theme"))
}

function TwriteMSQ(){
    window.localStorage.setItem("theme", "musique");
    console.log("Current theme:", window.localStorage.getItem("theme"))
}

function TwriteCIN(){
    window.localStorage.setItem("theme", "cinema");
    console.log("Current theme:", window.localStorage.getItem("theme"))
}

function TwriteSPO(){
    window.localStorage.setItem("theme", "sport");
    console.log("Current theme:", window.localStorage.getItem("theme"))
}

function TwriteSCN(){
    window.localStorage.setItem("theme", "sciences");
    console.log("Current theme:", window.localStorage.getItem("theme"))
}

function TwriteGEO(){
    window.localStorage.setItem("theme", "geographie");
    console.log("Current theme:", window.localStorage.getItem("theme"))
}

function TwriteHST(){
    window.localStorage.setItem("theme", "histoire");
    console.log("Current theme:", window.localStorage.getItem("theme"))
}

function TwriteLTR(){
    window.localStorage.setItem("theme", "litterature");
    console.log("Current theme:", window.localStorage.getItem("theme"))
}

function TwriteMYT(){
    window.localStorage.setItem("theme", "mythologie");
    console.log("Current theme:", window.localStorage.getItem("theme"))
}

function TwriteDRP(){
    window.localStorage.setItem("theme", "drapeaux");
    console.log("Current theme:", window.localStorage.getItem("theme"))
}

//fonctions pour mettre à jour la difficulté choisie dans le localhost

function DwriteA(){
    window.localStorage.setItem("difficulte", "aleatoire");
    console.log("Current difficulty:", window.localStorage.getItem("difficulte"))
}
function DwriteF(){
    window.localStorage.setItem("difficulte", "facile");
    console.log("Current difficulty:", window.localStorage.getItem("difficulte"))
}
function DwriteM(){
    window.localStorage.setItem("difficulte", "moyen");
    console.log("Current difficulty:", window.localStorage.getItem("difficulte"))
}
function DwriteD(){
    window.localStorage.setItem("difficulte", "difficile");
    console.log("Current difficulty:", window.localStorage.getItem("difficulte"))
}
function DwriteE(){
    window.localStorage.setItem("difficulte", "extreme");
    console.log("Current difficulty:", window.localStorage.getItem("difficulte"))
}


function PrintDiff() {
    const div = document.getElementById("bouttons");
    div.replaceChildren();//On vide le contenu précédent
    const elements = [
        { name: "Aleatoire",    func: DwriteA },
        { name: "Facile",       func: DwriteF },
        { name: "Moyen",        func: DwriteM },
        { name: "Difficile",    func: DwriteD },
        { name: "Extreme",      func: DwriteE }
    ];
    const buttonElements = [];//Array qui va contenir les bouttons
    //On crée les boutons et on les insère dans buttonElements
    for (let i = 0; i < elements.length; i++) {
        const bouton = document.createElement('a');
        bouton.innerHTML = `<a class='button2' href='entrainement_loop.html'>${elements[i].name}</a>`; //On met pas le onclick ici car mal géré dans la création dynamique des boutons
        bouton.addEventListener('click', () => elements[i].func()); //à la place on rajoute un EventListener qui a le même rôle
        buttonElements.push(bouton);
    }
    //création du titre
    const titre = document.createElement('h1');
    titre.innerHTML = "<h1> CHOISISSEZ VOTRE DIFFICULTÉ</h1>";
    //création de la flèche de retour au choix du thème
    const fleche = document.createElement('a');
    fleche.innerHTML = "<a><img src='arrow-back.png' alt='arrow to get back' class='arrow-image'></a>";
    fleche.addEventListener('click', () => PrintTheme());
    //Affichage de tout
    div.append(fleche,titre,...buttonElements);
}


function PrintTheme(){
    const div = document.getElementById("bouttons");
    div.replaceChildren();
    //Array qui vont contenir les bouttons
    const elements = [
        { name: "Thème aléatoire",  func: TwriteRDM },
        { name: "Musique",          func: TwriteMSQ },
        { name: "Cinéma",           func: TwriteCIN },
        { name: "Sport",            func: TwriteSPO },
        { name: "Sciences",         func: TwriteSCN },
        { name: "Géographie",       func: TwriteGEO },
        { name: "Histoire",         func: TwriteHST },
        { name: "Littérature",      func: TwriteLTR },
        { name: "Mythologie",       func: TwriteMYT },
        { name: "Drapeaux",         func: TwriteDRP }
    ];
    const buttonElements = [];
    //On crée les boutons et on les insère dans buttonElements
    for (let i = 0; i < elements.length; i++) {
        const bouton = document.createElement('a');
        bouton.innerHTML = `<a class='button2'>${elements[i].name}</a>`; //On met pas le onclick ici car mal géré dans la création dynamique des boutons
        bouton.addEventListener('click', () => elements[i].func()); //à la place on rajoute un EventListener qui a le même rôle
        bouton.addEventListener('click', () => PrintDiff());
        buttonElements.push(bouton);
    }
    //création du titre
    const titre = document.createElement('h1');
    titre.innerHTML = "<h1> CHOISISSEZ LE THEME D'ENTRAINEMENT</h1>";
    //Affichage de tout
    div.append(titre,...buttonElements);
}
window.onload = PrintTheme();