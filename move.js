const character = document.querySelector('.character');
const character_fire = document.querySelector('.character_fire');
const character2 = document.querySelector('.character2').style;
const penguin = document.querySelector('.penguin-container').style;
let ch_top = 472;
let ch_left = 469;

character.style.top = `${ch_top}px`;
character.style.left =  `${ch_left}px`;

const TOP_MAX = 510;
const TOP_MIN = 404;
const LEFT_MAX = 885;
const LEFT_MIN = 129;

const amount = 6;

penguin.transform = "scaleX(-1)";

let audio = document.querySelector("audio");
audio.volume = 0.11;

document.addEventListener('keydown', characterMove);

function characterMove(e){
  // audio.play();
  
  // else {
  //   character.classList.remove('disappear');
  //   character.classList.add('appear');
  //   character_fire.classList.add('disappear');
  //   character_fire.classList.remove('appear');
  // }
  if(e.key === 'ArrowDown'){
    e.preventDefault();
    ch_top += amount;
    if(ch_top >= TOP_MAX){ ch_top = TOP_MAX; }
    if(ch_top <= TOP_MIN){ ch_top = TOP_MIN; }
    character.style.top = `${ch_top}px`;
  } 
  
  else if (e.key === 'ArrowUp'){
    e.preventDefault();
    ch_top -= amount;
    if(ch_top >= TOP_MAX){ ch_top = TOP_MAX; }
    if(ch_top <= TOP_MIN){ ch_top = TOP_MIN; }
    character.style.top = `${ch_top}px`;
  } 
  
  else if(e.key === 'ArrowLeft'){
    e.preventDefault();
    if(character.style.left === "129px"){
      character.classList.add('disappear');

      character_fire.classList.remove('none');
      character_fire.classList.remove('disappear');
      character_fire.classList.add('appear');
    } 
    ch_left -= amount;
    if(ch_left >= LEFT_MAX){ ch_left = LEFT_MAX; }
    if(ch_left <= LEFT_MIN){ ch_left = LEFT_MIN; }
    character.style.left = `${ch_left}px`;
    character.style.transform = "scaleX(-1)";
  } 
  
  else if(e.key === 'ArrowRight'){
    e.preventDefault();
    if(character.style.left === "135px"){
      character.classList.remove('disappear');
      character.classList.add('appear');

      character_fire.classList.remove('appear');
      character_fire.classList.add('disappear');
    } 
    ch_left += amount;
    if(ch_left >= LEFT_MAX){ ch_left = LEFT_MAX;} 
    if(ch_left <= LEFT_MIN){ ch_left = LEFT_MIN; }
    character.style.left = `${ch_left}px`;
    character.style.transform = "scaleX(1)";
  }
}

