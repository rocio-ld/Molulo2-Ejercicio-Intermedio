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

const selectGame= document.querySelector ('.js-select');
const btn= document.querySelector ('.js-btn');
const gamerText= document.querySelector ('.js-gamerText');
const computerText= document.querySelector ('.js-textComputer');
const titleText= document.querySelector ('.js-title');


//Hacer funcion del numero Random

function getRandomNumber(max) { 
    return Math.ceil(Math.random() * max); 
  }
const numberRandom= getRandomNumber(9);


//funcion para seleccionar jugada

const changeSelect= (logo)=>{
if (logo === "Piedra" && numberRandom <= 3){
titleText.innerHTML='Empate';
}else if(logo === "Papel" && numberRandom <=3){
titleText.innerHTML="¡Has Ganado!";
}else if(logo === "Tijera" && numberRandom <=3){
    titleText.innerHTML= "¡Has perdido!";
}else if(logo === "Piedra" && numberRandom >=7){
    titleText.innerHTML="¡Has perdido!";
}else if(logo === "Papel" && numberRandom >=7){
    titleText.innerHTML ="Empate";
}else if(logo === "Tijera" && numberRandom >=7){
    titleText.innerHTML="¡Has Ganado!";
}else if(logo === "Piedra" && numberRandom){
    titleText.innerHTML="¡Has Ganado!";
}else if (logo === "Papel" && numberRandom){
    titleText.innerHTML= "¡Has perdido!";
}else{ titleText.innerHTML= "Empate";
}
    
}





const handleclick= (event)=>{
    event.preventDefault();
const selectValue= selectGame.value;
changeSelect (selectValue);
    
}








btn.addEventListener('click', handleclick);