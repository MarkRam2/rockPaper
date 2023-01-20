let rock = document.getElementById("rock")
something();
let paper = document.getElementById("paper")
let scissor = document.getElementById("scissor")
let lizard = document.getElementById("lizard")
let spock = document.getElementById("spock")
let winOrLose = document.getElementById("winOrLose")
let leftCounter = document.getElementById("leftCounter")
let rightCounter = document.getElementById("rightCounter")
let outOf5btn = document.getElementById("outOf5btn")
let outOf7btn = document.getElementById("outOf7btn")
let outOf1btn = document.getElementById("outOf1btn")
let appear = document.getElementById("appear")
let endlessbtn = document.getElementById("endlessbtn")
let playerModebtn = document.getElementById("playerModebtn")

let rock2 = document.getElementById("rock2")
let paper2 = document.getElementById("paper2")
let scissor2 = document.getElementById("scissor2")
let lizard2 = document.getElementById("lizard2")
let spock2 = document.getElementById("spock2")

let appear2 = document.getElementById("appear2")
let input
let outPut
let robotChoice
let leftCounterNum = 0
let rightCounterNum = 0
let outOf7 = null
let outOf5 = null
let outOf1 = null
let endless = null
let playerMode = null
let player1ClickedB = null
let player2ClickedB = null
let player1Clicked = ""
let player2Clicked = ""
// https://scottsrpsls.azurewebsites.net/api/RockPaperScissors/GetRandomOption

outOf5btn.addEventListener('click', () => {
    outOf5 = true
    outOf7 = false
    outOf1 = false
    playerMode = false
    endless = false
    winOrLose.textContent = ""
    rightCounterNum = 0
    leftCounterNum = 0
    rightCounter.textContent = rightCounterNum
    leftCounter.textContent = leftCounterNum
    appear.classList.remove("content")
    appear2.classList.add("content2")
})
outOf7btn.addEventListener('click', () => {
    outOf7 = true
    outOf5 = false
    outOf1 = false
    endless = false
    playerMode = false
    winOrLose.textContent = ""
    rightCounterNum = 0
    leftCounterNum = 0
    rightCounter.textContent = rightCounterNum
    leftCounter.textContent = leftCounterNum
    appear.classList.remove("content")
    appear2.classList.add("content2")
})
outOf1btn.addEventListener('click', () => {
    outOf5 = false
    outOf7 = false
    outOf1 = true
    endless = false
    playerMode = false
    winOrLose.textContent = ""
    rightCounterNum = 0
    leftCounterNum = 0
    rightCounter.textContent = rightCounterNum
    leftCounter.textContent = leftCounterNum
    appear.classList.remove("content")
    appear2.classList.add("content2")
})
endlessbtn.addEventListener('click', () => {
    outOf5 = false
    outOf7 = false
    outOf1 = false
    endless = true
    winOrLose.textContent = ""
    rightCounterNum = 0
    leftCounterNum = 0
    rightCounter.textContent = rightCounterNum
    leftCounter.textContent = leftCounterNum
    appear.classList.remove("content")
    appear2.classList.add("content2")
})
playerModebtn.addEventListener('click', () => {
    outOf5 = false
    outOf7 = false
    outOf1 = false
    endless = false
    playerMode = true
    winOrLose.textContent = ""
    rightCounterNum = 0
    leftCounterNum = 0
    rightCounter.textContent = rightCounterNum
    leftCounter.textContent = leftCounterNum
    appear.classList.remove("content")
    appear2.classList.remove("content2")
})


rock.addEventListener('click', () => {
    player1Clicked = "Rock"
    player1ClickedB = true
    player1()
    after()
    if (playerMode == false) {
        console.log(outPut)
        robotChoice = outPut
        something()
        if (robotChoice == "Rock") {
            console.log("tie")
            winOrLose.textContent = "tie"
        } else if ((robotChoice == "Paper") || (robotChoice == "Spock")) {
            winOrLose.textContent = "rock losses to " + robotChoice
            rightCounterNum++
            rightCounter.textContent = rightCounterNum
            if (rightCounterNum == 3 && outOf5 == true) {
                winOrLose.textContent = "you lost"
                rightCounterNum = 0
                leftCounterNum = 0
                rightCounter.textContent = rightCounterNum
                leftCounter.textContent = leftCounterNum
            }
            if (rightCounterNum == 4 && outOf7 == true) {
                winOrLose.textContent = "you lost"
                rightCounterNum = 0
                leftCounterNum = 0
                rightCounter.textContent = rightCounterNum
                leftCounter.textContent = leftCounterNum
            }
            if (rightCounterNum == 1 && outOf1 == true) {
                winOrLose.textContent = "you lost"
                rightCounterNum = 0
                leftCounterNum = 0
                rightCounter.textContent = rightCounterNum
                leftCounter.textContent = leftCounterNum
            }
        } else if ((robotChoice == "Scissors") || (robotChoice = "Lizard")) {
            winOrLose.textContent = "rock beats " + robotChoice
            leftCounterNum++
            leftCounter.textContent = leftCounterNum
            if (leftCounterNum == 3 && outOf5 == true) {
                winOrLose.textContent = "you win"
                rightCounterNum = 0
                leftCounterNum = 0
                rightCounter.textContent = rightCounterNum
                leftCounter.textContent = leftCounterNum
            }
            if (leftCounterNum == 4 && outOf7 == true) {
                winOrLose.textContent = "you win"
                rightCounterNum = 0
                leftCounterNum = 0
                rightCounter.textContent = rightCounterNum
                leftCounter.textContent = leftCounterNum
            }
            if (leftCounterNum == 1 && outOf1 == true) {
                winOrLose.textContent = "you win"
                rightCounterNum = 0
                leftCounterNum = 0
                rightCounter.textContent = rightCounterNum
                leftCounter.textContent = leftCounterNum
            }
        }
    }
})

paper.addEventListener('click', () => {
player1Clicked = "Paper"
    player1ClickedB = true
    player1()
    after()
    if (playerMode == false) {
        console.log(outPut)
        robotChoice = outPut
        something()
        if (robotChoice == "Paper") {
            console.log("tie")
            winOrLose.textContent = "tie"
        } else if ((robotChoice == "Lizard") || (robotChoice == "Scissors")) {
            winOrLose.textContent = "paper losses to " + robotChoice
            rightCounterNum++
            rightCounter.textContent = rightCounterNum
            if (rightCounterNum == 3 && outOf5 == true) {
                winOrLose.textContent = "you lost"
                rightCounterNum = 0
                leftCounterNum = 0
                rightCounter.textContent = rightCounterNum
                leftCounter.textContent = leftCounterNum
            }
            if (rightCounterNum == 4 && outOf7 == true) {
                winOrLose.textContent = "you lost"
                rightCounterNum = 0
                leftCounterNum = 0
                rightCounter.textContent = rightCounterNum
                leftCounter.textContent = leftCounterNum
            }
            if (rightCounterNum == 1 && outOf1 == true) {
                winOrLose.textContent = "you lost"
                rightCounterNum = 0
                leftCounterNum = 0
                rightCounter.textContent = rightCounterNum
                leftCounter.textContent = leftCounterNum
            }
        } else if ((robotChoice == "Spock") || (robotChoice = "Rock")) {
            winOrLose.textContent = "paper beats " + robotChoice
            leftCounterNum++
            leftCounter.textContent = leftCounterNum
            if (leftCounterNum == 3 && outOf5 == true) {
                winOrLose.textContent = "you win"
                rightCounterNum = 0
                leftCounterNum = 0
                rightCounter.textContent = rightCounterNum
                leftCounter.textContent = leftCounterNum
            }
            if (leftCounterNum == 4 && outOf7 == true) {
                winOrLose.textContent = "you win"
                rightCounterNum = 0
                leftCounterNum = 0
                rightCounter.textContent = rightCounterNum
                leftCounter.textContent = leftCounterNum
            }
            if (leftCounterNum == 1 && outOf1 == true) {
                winOrLose.textContent = "you win"
                rightCounterNum = 0
                leftCounterNum = 0
                rightCounter.textContent = rightCounterNum
                leftCounter.textContent = leftCounterNum
            }
        }

    }
})

scissor.addEventListener('click', () => {
    player1Clicked = "Scissor"
    player1ClickedB = true
    player1()
after()

    if (playerMode == false) {
        console.log(outPut)
        robotChoice = outPut
        something()
        if (robotChoice == "Scissor") {
            console.log("tie")
            winOrLose.textContent = "tie"
        } else if ((robotChoice == "Spock") || (robotChoice == "Rock")) {
            winOrLose.textContent = "scissor losses to " + robotChoice
            rightCounterNum++
            rightCounter.textContent = rightCounterNum
            if (rightCounterNum == 3 && outOf5 == true) {
                winOrLose.textContent = "you lost"
                rightCounterNum = 0
                leftCounterNum = 0
                rightCounter.textContent = rightCounterNum
                leftCounter.textContent = leftCounterNum
            }
            if (rightCounterNum == 4 && outOf7 == true) {
                winOrLose.textContent = "you lost"
                rightCounterNum = 0
                leftCounterNum = 0
                rightCounter.textContent = rightCounterNum
                leftCounter.textContent = leftCounterNum
            }
            if (rightCounterNum == 1 && outOf1 == true) {
                winOrLose.textContent = "you lost"
                rightCounterNum = 0
                leftCounterNum = 0
                rightCounter.textContent = rightCounterNum
                leftCounter.textContent = leftCounterNum
            }
        } else if ((robotChoice == "Lizard") || (robotChoice = "Paper")) {
            winOrLose.textContent = "scissor beats " + robotChoice
            leftCounterNum++
            leftCounter.textContent = leftCounterNum
            if (leftCounterNum == 3 && outOf5 == true) {
                winOrLose.textContent = "you win"
                rightCounterNum = 0
                leftCounterNum = 0
                rightCounter.textContent = rightCounterNum
                leftCounter.textContent = leftCounterNum
            }
            if (leftCounterNum == 4 && outOf7 == true) {
                winOrLose.textContent = "you win"
                rightCounterNum = 0
                leftCounterNum = 0
                rightCounter.textContent = rightCounterNum
                leftCounter.textContent = leftCounterNum
            }
            if (leftCounterNum == 1 && outOf1 == true) {
                winOrLose.textContent = "you win"
                rightCounterNum = 0
                leftCounterNum = 0
                rightCounter.textContent = rightCounterNum
                leftCounter.textContent = leftCounterNum
            }
        }
    }
})

lizard.addEventListener('click', () => {
    player1Clicked = "Lizard"
    player1ClickedB = true
    player1()
after()

    if (playerMode == false) {
        console.log(outPut)
        robotChoice = outPut
        something()
        if (robotChoice == "Lizard") {
            console.log("tie")
            winOrLose.textContent = "tie"
        } else if ((robotChoice == "Rock") || (robotChoice == "Scissor")) {
            winOrLose.textContent = "lizard losses to " + robotChoice
            rightCounterNum++
            rightCounter.textContent = rightCounterNum
            if (rightCounterNum == 3 && outOf5 == true) {
                winOrLose.textContent = "you lost"
                rightCounterNum = 0
                leftCounterNum = 0
                rightCounter.textContent = rightCounterNum
                leftCounter.textContent = leftCounterNum
            }
            if (rightCounterNum == 4 && outOf7 == true) {
                winOrLose.textContent = "you lost"
                rightCounterNum = 0
                leftCounterNum = 0
                rightCounter.textContent = rightCounterNum
                leftCounter.textContent = leftCounterNum
            }
            if (rightCounterNum == 1 && outOf1 == true) {
                winOrLose.textContent = "you lost"
                rightCounterNum = 0
                leftCounterNum = 0
                rightCounter.textContent = rightCounterNum
                leftCounter.textContent = leftCounterNum
            }
        } else if ((robotChoice == "Paper") || (robotChoice = "Spock")) {
            winOrLose.textContent = "rock beats " + robotChoice
            leftCounterNum++
            leftCounter.textContent = leftCounterNum
            if (leftCounterNum == 3 && outOf5 == true) {
                winOrLose.textContent = "you win"
                rightCounterNum = 0
                leftCounterNum = 0
                rightCounter.textContent = rightCounterNum
                leftCounter.textContent = leftCounterNum
            }
            if (leftCounterNum == 4 && outOf7 == true) {
                winOrLose.textContent = "you win"
                rightCounterNum = 0
                leftCounterNum = 0
                rightCounter.textContent = rightCounterNum
                leftCounter.textContent = leftCounterNum
            }
            if (leftCounterNum == 1 && outOf1 == true) {
                winOrLose.textContent = "you win"
                rightCounterNum = 0
                leftCounterNum = 0
                rightCounter.textContent = rightCounterNum
                leftCounter.textContent = leftCounterNum
            }
        }
    }
})

spock.addEventListener('click', () => {
    player1Clicked = "Spock"
    player1ClickedB = true
    player1()
after()

    if (playerMode == false) {
        console.log(outPut)
        robotChoice = outPut
        something()
        if (robotChoice == "Spock") {
            console.log("tie")
            winOrLose.textContent = "tie"
        } else if ((robotChoice == "Paper") || (robotChoice == "Lizard")) {
            winOrLose.textContent = "Spock losses to " + robotChoice
            rightCounterNum++
            rightCounter.textContent = rightCounterNum
            if (rightCounterNum == 3 && outOf5 == true) {
                winOrLose.textContent = "you lost"
                rightCounterNum = 0
                leftCounterNum = 0
                rightCounter.textContent = rightCounterNum
                leftCounter.textContent = leftCounterNum
            }
            if (rightCounterNum == 4 && outOf7 == true) {
                winOrLose.textContent = "you lost"
                rightCounterNum = 0
                leftCounterNum = 0
                rightCounter.textContent = rightCounterNum
                leftCounter.textContent = leftCounterNum
            }
            if (rightCounterNum == 1 && outOf1 == true) {
                winOrLose.textContent = "you lost"
                rightCounterNum = 0
                leftCounterNum = 0
                rightCounter.textContent = rightCounterNum
                leftCounter.textContent = leftCounterNum
            }
        } else if ((robotChoice == "Scissors") || (robotChoice = "Rock")) {
            winOrLose.textContent = "spock beats " + robotChoice
            leftCounterNum++
            leftCounter.textContent = leftCounterNum
            if (leftCounterNum == 3 && outOf5 == true) {
                winOrLose.textContent = "you win"
                rightCounterNum = 0
                leftCounterNum = 0
                rightCounter.textContent = rightCounterNum
                leftCounter.textContent = leftCounterNum
            }
            if (leftCounterNum == 4 && outOf7 == true) {
                winOrLose.textContent = "you win"
                rightCounterNum = 0
                leftCounterNum = 0
                rightCounter.textContent = rightCounterNum
                leftCounter.textContent = leftCounterNum
            }
            if (leftCounterNum == 1 && outOf1 == true) {
                winOrLose.textContent = "you win"
                rightCounterNum = 0
                leftCounterNum = 0
                rightCounter.textContent = rightCounterNum
                leftCounter.textContent = leftCounterNum
            }
        }
    }
})

function something() {
    fetch('https://scottsrpsls.azurewebsites.net/api/RockPaperScissors/GetRandomOption').then(
        responce => responce.text()
    ).then(
        data => outPut = data
    )
}

function player1() {
    if (playerMode == true) {
        player1Input = player1Clicked
        player2Input = player2Clicked
        if (player2ClickedB == true) {
            if (player1Input == player2Input) {
                winOrLose.textContent = "tie"
            } else if (player1Input == "Rock" && (player2Input == "Paper" || player2Input == "Spock")) {
                winOrLose.textContent = player1Input + " losses to " + player2Input
                rightCounterNum++
                rightCounter.textContent = rightCounterNum
                leftCounter.textContent = leftCounterNum
            } else if (player1Input == "Rock" && (player2Input == "Scissor" || player2Input == "Lizard")) {
                winOrLose.textContent = player1Input + " beats " + player2Input
                leftCounterNum++
                rightCounter.textContent = rightCounterNum
                leftCounter.textContent = leftCounterNum
            } else if (player1Input == "Paper" && (player2Input == "Scissor" || player2Input == "Lizard")) {
                winOrLose.textContent = player1Input + " losses to " + player2Input
                rightCounterNum++
                rightCounter.textContent = rightCounterNum
                leftCounter.textContent = leftCounterNum
            } else if (player1Input == "Paper" && (player2Input == "Spock" || player2Input == "Rock")) {
                winOrLose.textContent = player1Input + " beats " + player2Input
                leftCounterNum++
                rightCounter.textContent = rightCounterNum
                leftCounter.textContent = leftCounterNum
            } else if (player1Input == "Scissor" && (player2Input == "Spock" || player2Input == "Rock")) {
                winOrLose.textContent = player1Input + " losses to " + player2Input
                rightCounterNum++
                rightCounter.textContent = rightCounterNum
                leftCounter.textContent = leftCounterNum
            } else if (player1Input == "Scissor" && (player2Input == "Lizard" || player2Input == "Paper")) {
                winOrLose.textContent = player1Input + " beats " + player2Input
                leftCounterNum++
                rightCounter.textContent = rightCounterNum
                leftCounter.textContent = leftCounterNum
            } else if (player1Input == "Lizard" && (player2Input == "Scissor" || player2Input == "Rock")) {
                winOrLose.textContent = player1Input + " losses to " + player2Input
                rightCounterNum++
                rightCounter.textContent = rightCounterNum
                leftCounter.textContent = leftCounterNum
            } else if (player1Input == "Lizard" && (player2Input == "Paper" || player2Input == "Spock")) {
                winOrLose.textContent = player1Input + " beats " + player2Input
                leftCounterNum++
                rightCounter.textContent = rightCounterNum
                leftCounter.textContent = leftCounterNum
            } else if (player1Input == "Spock" && (player2Input == "Paper" || player2Input == "Lizard")) {
                winOrLose.textContent = player1Input + " losses to " + player2Input
                rightCounterNum++
                rightCounter.textContent = rightCounterNum
                leftCounter.textContent = leftCounterNum
            } else if (player1Input == "Spock" && (player2Input == "Rock" || player2Input == "Scissor")) {
                winOrLose.textContent = player1Input + " beats " + player2Input
                leftCounterNum++
                rightCounter.textContent = rightCounterNum
                leftCounter.textContent = leftCounterNum
            }
        }
    }
}


function after() {
    if (player1ClickedB ==true && player2ClickedB == true) {
        player1Clicked = ""
        player2Clicked = ""
        player1ClickedB = false
        player2ClickedB = false
    }
}

rock2.addEventListener('click', () => {
    player2Clicked = "Rock"
    player2ClickedB = true
 //   player2()
 player1()
    after()
})
paper2.addEventListener('click', () => {
    player2Clicked = "Paper"
    player2ClickedB = true
 //   player2()
 player1()
    after()
})
scissor2.addEventListener('click', () => {
    player2Clicked = "Scissor"
    player2ClickedB = true
  //  player2()
  player1()
    after()
})
lizard2.addEventListener('click', () => {
    player2Clicked = "Lizard"
    player2ClickedB = true
 //   player2()
 player1()
    after()
})
spock2.addEventListener('click', () => {
    player2Clicked = "Spock"
    player2ClickedB = true
 //   player2()
 player1()
    after()
})