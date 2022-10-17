'use strict'
/*
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora 
    di azzurro ed emetto un messaggio in console con il numero della 
    cella cliccata.

--- Bonus ---      
Aggiungere una select accanto al bottone di generazione,
    che fornisca una scelta tra tre diversi livelli di difficoltà:
    - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100,
         divise in 10 caselle per 10 righe;
    - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81,
         divise in 9 caselle per 9 righe;
    - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49,
         divise in 7 caselle per 7 righe;
*/

const playingField = document.querySelector('main');
const playBtn = document.getElementById('play');
const difficulty = document.getElementById('difficulty');

const playingSquare = document.createElement('div');


function play(){
    playingSquare.setAttribute('id', 'big-square')
    playingSquare.className = `m-auto d-flex flex-wrap`;
    playingField.appendChild(playingSquare);
    playingSquare.innerHTML = '';
    let numCells;
    if (difficulty.value == '3'){
        numCells = 49;
    } else if (difficulty.value == '2'){
        numCells = 81;
    } else {
        numCells = 100;
    }
    for (let i = 0; i<numCells; i++){
        const cell = document.createElement('div')
        cell.className = `cell-${i + 1} w-${Math.sqrt(numCells)} d-flex fw-bold justify-content-center align-items-center`;
        const subCell = document.createElement('span');
        subCell.innerText = `${i + 1}`;
        cell.append(subCell);
        playingSquare.appendChild(cell);
        cell.addEventListener('click', function(){
            cell.classList.toggle('green');
        })
    }
    
}









playBtn.addEventListener('click', play );