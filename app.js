function computerPlay() {
    const options = ["rock", "papper", "scissor"]
    let choice = Math.floor(Math.random() * 3)
    console.log(options[choice])
    return options[choice]
}

function playerSelection() {
    let choice = prompt("Please enter your choice")
    return choice.toLowerCase()
}


function play() {
    
    let computer = computerPlay()
    let player = playerSelection()

    if (computer === player) {
        return "draw"
    }
    else if (computer === "rock" && player === "scissor") {
        return "computer wins"
    }
    else if (computer === "rock" && player === "papper") {
        return "player wins"
    }
    else if (computer === "scissor" && player === "rock") {
        return "player wins"
    }
    else if (computer === "scissor" && player === "papper") {
        return "computer wins"
    }
    else if (computer === "papper" && player === "scissor") {
        return "player wins"
    }
    else if (computer === "papper" && player === "rock") {
        return "computer wins"
    }
}


function game(n_plays = 5) {
    computer_w = 0
    player_w = 0

    for (let i = 0; i < n_plays; i++){
        let result = play()
        if (result === "computer wins") {
            computer_w++
        } else {
            player_w++
        }
    }

    if (computer_w > player_w) {
        console.log(`the computer wins ${computer_w} - ${player_w} over you`)
    } else {
        console.log(`you wins ${player_w} - ${computer_w} over the computer`)
    }

}

