let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let msg = " "
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

// let player = {
//     playerName: "Akshit",
//     playerChips: 200
// }

// let playerEl = document.getElementById("player-el")
// playerEl.textContent= player.playerName + ": $" + player.playerChips


function getRandomCard(){
    let num =  ((Math.floor(Math.random()*13))+ 1)
    if (num>10){
        return 10
    }else if (num===1){
        return 11
    }else{
        return num
    }
}


function startGame(){
    isAlive = true
    hasBlackJack = false
    let first = getRandomCard()
    let second = getRandomCard()
    cards = [first, second]
    sum = first + second
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i=0; i<cards.length; i+=1){
        cardsEl.textContent += cards[i] + " "
    }
    let sum_txt = "Sum: " + sum
    sumEl.textContent = sum_txt
    if (sum<=20){
        msg = "Do you want to draw another card?"
        console.log("Do you want to draw another card?");
    }else if (sum===21){
        console.log("YAY! You won blackjack");
        msg = "YAY! You won blackjack"
        hasBlackJack = true
    }else{
        msg = "You lost your money :(" 
        console.log("You lost your money :( ");
        isAlive = false
    }
    messageEl.textContent = msg
}

function newCard(){
    console.log("New Card");
    if (isAlive === true && hasBlackJack !== true){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        console.log(cards);
        renderGame()
    }
}
