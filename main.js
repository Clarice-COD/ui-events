// // LINK 1 - Changing color
// // Stap 2: Event toevoegen
// function randomColor() {
//   var color = '#' + Math.random().toString(16).substr(2, 6);
//   // Stap 1: selecteer de elementen
//   // Stap 3: Iets doen
//   // Selecteerd de achtergrond kleur van de link
//   document.getElementById("color-btn").style.backgroundColor = color;

//   // Selecteerd de tekst van de link
//   // Stap 3: Iets doen
//   document.getElementById("color-btn").innerHTML = color;
//   console.log(color);
// }


// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
// bibberLink.classList.toggle...

// // LINK 1 - color
// // Stap 1: querySelector
// let colorBtn = document.querySelector("a#color");

// // Stap 2: addEventListener
// colorBtn.addEventListener("click", SwapClr);

// function SwapClr() {
//   // Stap 3: functie geven
//   var colorBtn = '#' + Math.random().toString(16).substr(2, 6);
//   colorBtn.classList.add('color-btn-add')
// }



// LINK 2 - shake
// Stap 1: querySelector
let shakeBtn = document.querySelector('a#shake')
console.log(shake)

// Stap 2: addEventListener
shakeBtn.addEventListener('click', shake)

function shake() {
  // Stap 3: functie geven
  shakeBtn.classList.toggle('shake')
}

// LINK 3 - fill
// Stap 1: querySelector
let fill = document.querySelector("a#fill")

// Stap 2: addEventListener
fill.addEventListener('click', fillButton)

console.log(fill)

function fillButton() {
  // Stap 3: functie geven
  fill.classList.toggle('fill')
}

// LINK 4 - vanish
// Stap 1: querySelector
let vanishBtn = document.querySelector("a#vanish");
console.log(vanishBtn)

// Stap 2: addEventListener
vanishBtn.addEventListener('click',MakeMeDissapear);

function MakeMeDissapear () {
  // Stap 3: functie geven
  vanishBtn.classList.add('fadeOut')
}

// LINK 5 - light
// Stap 1: querySelector
let lightBtn = document.querySelector("a#light");

// Stap 2: addEventListener
lightBtn.addEventListener('mousedown',TurnMeLight);

function TurnMeLight() {
  // Stap 3: functie geven
  var lightBtn = document.body;
  lightBtn.classList.add('light-mode');
}

// LINK 6 - duck
// Stap 1: querySelector
let duckBtn = document.querySelector("a#duck");

// Stap 2: addEventListener
duckBtn.addEventListener('click', MakeDuckSound);

function MakeDuckSound() {
  // Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
  var duckBtn = document.audio;
  duckBtn.play()
}

// LINK 7 - Small
// Stap 1: querySelector
let smallBtn = document.querySelector("a#small");

// Stap 2: addEventListener
smallBtn.addEventListener('click', MakeMeSmaller);

function MakeMeSmaller() {
  // Stap 3: functie geven
  smallBtn.classList.toggle('smaller2')
}

// LINK 8 - rotate
// Stap 1: querySelector
let rotateBtn = document.querySelector("a#rotate");

// Stap 2: addEventListener
rotateBtn.addEventListener('click', MakeMeRotate);

function MakeMeRotate() {
  // Stap 3: functie geven
  rotateBtn.classList.add('rotate')
}

// LINK 9 - float
// Stap 1: querySelector
let floatBtn = document.querySelector("a#float");

// Stap 2: addEventListener
floatBtn.addEventListener('click', MakeMeFloat);

function MakeMeFloat() {
  // Stap 3: functie geven
  floatBtn.classList.toggle('float')
}

// LINK 10 - loading
// Stap 1: querySelector
let loadingBtn = document.querySelector("a#loading");

// Stap 2: addEventListener
loadingBtn.addEventListener('click', MakeMeLoad);

function MakeMeLoad() {
  loadingBtn.classList.toggle('loading')
}




// Stap 1: selecteer het 12e linkje, en sla deze op in een variabele
let interaction = document.querySelector('a#userFlow')

// Stap 2: voeg de (click) event listener toe aan de link, met een callback functie
// In dit geval wordt de jumpHandler functie aangeroepen, zodra je op het linkje klikt
interaction.addEventListener('click', jumpHandler)

// Deze jumpHandler functie staat klaar voor als we 'm aanroepen; deze wordt dus
// _niet_ meteen bij het laden van de pagina aangeroepen
function jumpHandler() {

  // Stap 3: toggle een class op het element (zodra er dus op een link wordt geklikt)
  interaction.classList.toggle('jump')
}

// Extraatje, waardoor de class weer weggehaald wordt zodra de animatie afgelopen is
interaction.addEventListener('animationend', jumpHandler)