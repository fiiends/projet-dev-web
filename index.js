var sound_button_click = new Audio("sounds/button.mp3");
var sound_music = new Audio("sounds/MAIN_THEME.mp3");

if (localStorage.getItem("volume-musique")!=null){
  var volume_music = localStorage.getItem("volume-musique");
  console.log("ok")
}else{
  var volume_music = 0;
}

if (localStorage.getItem("volume-son")!=null){
  var volume_sounds = localStorage.getItem("volume-son");
  console.log("ok")
}else{
  var volume_sounds = 0;
}

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
      curseur_sons.value=0;
      icone_sons.src = "icons/speaker-disabled.png";
    }else{
      sound_button_click.volume = previous_volume_sounds;
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
    if (curseur_sons.value == 0){
      icone_sons.src = "icons/speaker-disabled.png";
    }else{
      icone_sons.src = "icons/speaker.png";
    }
  })
};
window.onload = ControlSon()

const delay = ms => new Promise(res => setTimeout(res, ms));

async function Redirect_Entrainement(){
  sound_button_click.play();
  await delay(150);
  location.href = "entrainement.html";
}

async function Redirect_Versus(){
  sound_button_click.play();
  await delay(150);
  location.href = "versus.html";
}

window.onbeforeunload = function(){
  localStorage.setItem("volume-son",volume_sounds);
  localStorage.setItem("volume-musique",volume_music);
  console.log("succesfully write volume values")
}
