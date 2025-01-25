// LINK 1 - Changing color
// Stap 2: Event toevoegen
function randomColor() {
  var color = '#' + Math.random().toString(16).substr(2, 6);
  // Stap 1: selecteer de elementen
  // Stap 3: Iets doen
  // Selecteerd de achtergrond kleur van de link
  document.getElementById("color-btn").style.backgroundColor = color;

  // Selecteerd de tekst van de link
  // Stap 3: Iets doen
  document.getElementById("color-btn").innerHTML = color;
  console.log(color);
}


// Stap 1: querySelector
// var button = document.getElementById("shake");
// let interaction = document.querySelector('a:nth-of-type(2)')

// Stap 2: addEventListener
// interaction2.addEventListener('click', jumpHandler)

  // function jumpHandler() {
    // Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
    // interaction2.classList.toggle('shake');
  // }


// Stap 1: querySelector
// let interaction3 = document.querySelector('a:nth-of-type(3)')


let shakeBtn = document.querySelector('a#shake')
console.log(shake)

shakeBtn.addEventListener('click', shake)

function shake() {
  shakeBtn.classList.toggle('shake')
}


let fill = document.querySelector('a#fill')
fill.addEventListener('click', fillButton)

console.log(fill)

function fillButton() {
  fill.classList.toggle('fill')
}

// Stap 1: querySelector
let vanishBtn = document.querySelector("a#vanish");
console.log(vanishBtn)

vanishBtn.addEventListener('click',MakeMeDissapear);

function MakeMeDissapear () {
  vanishBtn.classList.add('fadeOut')
}

// fadeBtn.addEventListener('click' fadeOut)

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




// pink

// Stap 1: querySelector
let pinkBtn = document.querySelector("a#pink");

// Stap 2: addEventListener
pinkBtn.addEventListener('click',TurnMepink);

function TurnMepink() {
  pinkBtn.classList.add('pink-color');
}


// Small
// Stap 1: querySelector
let smallBtn = document.querySelector("a#small");

// Stap 2: addEventListener
smallBtn.addEventListener('click', MakeMeSmaller);
console.log(smaller)

function MakeMeSmaller() {
  smallBtn.classList.toggle('smaller1')
}

smallBtn.addEventListener('click', MakeMeSmaller);
console.log(smaller)

function MakeMeSmaller() {
  smallBtn.classList.toggle('smaller2')
}



// bibberLink.addEventListener...

// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
// bibberLink.classList.toggle...






// Stap 1: querySelector
// let bibberLink = document.querySelector...

// Stap 2: addEventListener
// bibberLink.addEventListener...

// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
// bibberLink.classList.toggle...