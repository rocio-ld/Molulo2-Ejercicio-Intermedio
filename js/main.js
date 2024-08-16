'use strict';

/* 1- Crear las clases
2.- Traer los elementos de HTML con querySelector
3.- Crear evento al botón
4.- Realizar función
5.- Sacar los valores
6. Comparar si la usuaria ha ganado, empatado o perdido
7.- Contabilizar el número de puntos del jugador y el ordenador
8.- Juego se acaba cuando se realice 10 movimientos
*/

const selectGame = document.querySelector('.js-select');
const btn = document.querySelector('.js-btn');
const gamerText = document.querySelector('.js-gamerText');
const computerText = document.querySelector('.js-textComputer');
const titleText = document.querySelector('.js-title');
let containgamer=0;
let containcomputer=0;




//Hacer funcion del numero Random

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}





//funcion para seleccionar jugada

const changeSelect = (logo) => {

    const numberRandom = getRandomNumber(9);
    console.log(numberRandom);

    if (logo === "Piedra" && numberRandom <= 3) {
        titleText.innerHTML = 'Empate';
    } else if (logo === "Papel" && numberRandom <= 3) {
        titleText.innerHTML = "¡Has Ganado!";
    } else if (logo === "Tijera" && numberRandom <= 3) {
        titleText.innerHTML = "¡Has perdido!";
    } else if (logo === "Piedra" && numberRandom >= 7) {
        titleText.innerHTML = "¡Has perdido!";
    } else if (logo === "Papel" && numberRandom >= 7) {
        titleText.innerHTML = "Empate";
    } else if (logo === "Tijera" && numberRandom >= 7) {
        titleText.innerHTML = "¡Has Ganado!";
    } else if (logo === "Piedra" && numberRandom) {
        titleText.innerHTML = "¡Has Ganado!";
    } else if (logo === "Papel" && numberRandom) {
        titleText.innerHTML = "¡Has perdido!";
    } else {
        titleText.innerHTML = "Empate";
    }
}
//hacer función para que finalice la partida a la Decima jugada

const pointGame =()=>{
if (titleText.textContent === "¡Has Ganado!"){
    containgamer= containgamer + 1;
    gamerText.innerHTML= `Usuario: ${containgamer}`;
}else if (titleText.textContent === "¡Has perdido!"){
    containcomputer= containcomputer +1;
    computerText.innerHTML= `Computadora: ${containcomputer}`;
}

    
}



// para contabilizar el número de veces que le damos al botón creamos un let y luego lo traemos a nuestra funcion click

const handleclick = (event) => {
    event.preventDefault();
    const selectValue = selectGame.value;
    //const btnValue= parseInt(btn.value);
    changeSelect(selectValue);
    pointGame();
   
   



}








btn.addEventListener('click', handleclick);