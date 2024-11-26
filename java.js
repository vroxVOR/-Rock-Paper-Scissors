function getComputerChoice() {
    let moznost = Math.floor(Math.random() * 3);
    if (moznost === 0) {
        return "Kamen"
    }   else if (moznost === 1) {
        return "Papier"
    }   else if (moznost === 2){
        return "Noznice"
    }
}


let computerChoice = getComputerChoice;



function getHumanChoice() {
    let moznost_human = prompt("Kamen, Papier, Noznice ?")
    moznost_human = moznost_human.toLowerCase();
    if (moznost_human === "kamen") {
        return "Kamen"
    }   else if (moznost_human === "papier") {
        return "Papier"
    }   else if (moznost_human === "noznice") {
        return "Noznice"
    }   else {
        return "ZLA VOLBA, ESTE RAZ"
        getHumanChoice();
    }
}

 
let humanChoice = getHumanChoice;


let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice, humanChoice) {
    let H = humanChoice;
    let C = computerChoice;
    if (H === "Kamen")  {
        if (C === "Papier") {
            computerScore = computerScore + 1;
            return "You lose! Paper beats Rock."
        }   else if (C === "Noznice") {
            humanScore = humanScore + 1;
            return "You Win! Rock beats Scissors."
        }   else if (C === "Kamen") {
            return "Draw!"
        }
    }   else if (H === "Papier") {
        if (C === "Kamen") {
            humanScore = humanScore + 1;
            return "You Win! Paper beats Rock."
        }   else if (C === "Papier") {
            return "Draw!"
        }   else if (C === "Noznice") {
            computerScore = computerScore + 1
            return "You lose! Scissors beats Paper."
        }
    }   else if (H === "Noznice") {
        if (C === "Kamen") {
            computerScore = computerScore + 1
            return "You lose! Rock beats Scissors."
        }   else if (C === "Papier") {
            humanScore = humanScore + 1;
            return "You Win! Scissors beats Paper."
        }   else if (C === "Noznice") {
            return "Draw!"
        }
    }
}

function playGame() {
    let rounds = 5;
    for (i = 1; i <= rounds; i++) {
        let humanChoice = getHumanChoice();
        console.log(humanChoice);
        let computerChoice = getComputerChoice();
        console.log(computerChoice);
        let vysledok = playRound(computerChoice, humanChoice);
        console.log(vysledok);
        console.log(" ");
        console.log(" ");
        console.log("--------SKORE-------");
        console.log("Human: " + humanScore);
        console.log("PC: " + computerScore);
        console.log("---------------------");
        console.log(" ");
        console.log(" ");
    }
    if (humanScore > computerScore) {
        console.log("Vyhral Clovek")
    } else if (humanScore < computerScore ) { 
        console.log("Vyhral PC")
    }   else if (humanScore === humanScore ) { 
        console.log("REMIZA")
    }
}


playGame();