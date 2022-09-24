let scoreA = document.getElementById("Score-a")
let scoreB = document.getElementById("Score-b")
let pointsA = 0
let pointsB = 0

/* Scoreboard A */
function addOne(){
    pointsA += 1
    scoreA.textContent = pointsA
}

function addTwo(){
    pointsA += 2
    scoreA.textContent = pointsA
}

function addThree(){
    pointsA += 3
    scoreA.textContent = pointsA
}

/* Scoreboard B */

function addOneb(){
    pointsB +=1
    scoreB.textContent = pointsB
}

function addTwob(){
    pointsB +=2
    scoreB.textContent = pointsB
}

function addThreeb(){
    pointsB +=3
    scoreB.textContent = pointsB
}

/* RESET */
function resetscore(){
    pointsA -= pointsA
    pointsB -= pointsB
    scoreA.textContent = pointsA
    scoreB.textContent = pointsB
}
