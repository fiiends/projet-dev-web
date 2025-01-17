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
async function Redirect_Game(){
  sound_button_click.play();
  await delay(150);
  location.href="game.html";
}
async function Redirect_Home(){
  sound_house_click.play()
  await delay(3000);
  location.href="index.html";

}



document.addEventListener("DOMContentLoaded", () => {
    const player1Input = document.getElementById("player1");
    const player2Input = document.getElementById("player2");
    const validate1 = document.getElementById("validate1");
    const validate2 = document.getElementById("validate2");
    const startGame = document.getElementById("startGame");

    let player1Ready = false;
    let player2Ready = false;

    const validatePlayer = (playerInput, playerNumber) => {
        if (playerInput.value.trim() === "") {
            alert(`Le pseudo du joueur ${playerNumber} est vide.`);
        } else {
            
            if (playerNumber === 1) player1Ready = true;
            if (playerNumber === 2) player2Ready = true;
            checkStartGame();
        }
    };

    const checkStartGame = () => {
        if (player1Ready && player2Ready) {
            startGame.classList.add("active");
            startGame.disabled = false;
        }
    };

    validate1.addEventListener("click", () => validatePlayer(player1Input, 1));
    validate2.addEventListener("click", () => validatePlayer(player2Input, 2));

    startGame.addEventListener("click", () => {
        if (player1Ready && player2Ready) {
            // Stocker les noms des joueurs dans le localStorage
            localStorage.setItem("player1Name", player1Input.value.trim());
            localStorage.setItem("player2Name", player2Input.value.trim());

        }
    });
});

window.onbeforeunload = function(){
  localStorage.setItem("volume-son",volume_sounds);
  localStorage.setItem("volume-musique",volume_music);
  console.log("succesfully write volume values")
}