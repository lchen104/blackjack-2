class Player {
    constructor(name, age, credit) {
        this.name = name;
        this.age = age;
        this.credit = credit;
        this.isAlive = true;
        this.hasBlackjack = false;
        this.sum = 0;
        this.cards = []
    }

    newGame() {
        // console.log(playerOne);
        // console.log(dealer);
        playerOne.isAlive = true;
        playerOne.hasBlackjack = false;
        playerOne.sum = 0;
        playerOne.cards = [];
        
        let firstCard = shuffleCards();
        let secondCard = shuffleCards();
        playerOne.cards = [firstCard, secondCard];

        // console.log("> " + playerOne.cards);
        
        let playerCardsEl = document.getElementById('player-cards-el');
        // playerCardsEl.innerHTML = `<img src='./imgs/${shuffleCards()}.png'>`;

        playerCardsEl.innerHTML = "";

       // get the card value
       for (let i = 0; i < playerOne.cards.length; i++) {
        
            playerCardsEl.innerHTML += `<img src='./imgs/${playerOne.cards[i]}.png'>`;
            // playerOne.cards[i].split('-').pop();
            // get cards value before the dash
            // console.log(playerOne.cards[i].split('-').shift());

            let card = playerOne.cards[i].split('-').shift();

            if (card === "A") {
                if (playerOne.sum <= 10) {
                    playerOne.sum += 11;
                } else {
                    playerOne.sum++;
                }
                // console.log(playerOne.cards[i].sum);
            } else if (card === "J"|| card === "Q" || card === "K") {
                playerOne.sum += 10;
            } else {
                playerOne.sum += parseInt(card); // converts string to interger
            }

            // console.log("Card: " + playerOne.sum);

            // get cards value after the dash
            // console.log(playerOne.cards[i].split('-').pop());
            // console.log(playerOne.cards.sum);

       }
        
        if (playerOne.sum < 21) {
            // console.log("less then 21 : " + playerOne.sum);
            playerMessageEl.textContent = "Would you like another card?";
        } else if (playerOne.sum === 21) {
            // console.log("Blackjack" + playerOne.sum);
            playerMessageEl.textContent = "You got BLACKJACK!";
        } else {
            // console.log("Greater then 21" + playerOne.sum);
            playerMessageEl.textContent = "Sorry, You BUST!";
        }

       playerSumEl.textContent = "Sum: " + playerOne.sum;
    }

    hit() {
        // console.log(playerOne);
        // console.log(dealer);

        let currentCard = shuffleCards();

        playerOne.cards.push(currentCard);

        // console.log(playerOne);

        let playerCardsEl = document.getElementById('player-cards-el');
        // playerCardsEl.innerHTML += `<img src='./imgs/${shuffleCards()}.png'>`;
        /////////////////

        // get the card value

        playerCardsEl.innerHTML += `<img src='./imgs/${currentCard}.png'>`;
        // playerOne.cards[i].split('-').pop();
        // get cards value before the dash
        // console.log(currentCard.split('-').shift());

        let card = currentCard.split('-').shift();

        if (card === "A") {
            if (playerOne.sum <= 10) {
                playerOne.sum += 11;
            } else {
                playerOne.sum++;
            }
            // console.log(playerOne.cards[i].sum);
        } else if (card === "J"|| card === "Q" || card === "K") {
            playerOne.sum += 10;
        } else {
            playerOne.sum += parseInt(card); // converts string to interger
        }

        // console.log("Card: " + playerOne.sum);

        // get cards value after the dash
        // console.log(playerOne.cards[i].split('-').pop());
        // console.log(playerOne.cards.sum)

        if (playerOne.sum < 21) {
            // console.log("less then 21 : " + playerOne.sum);
            playerMessageEl.textContent = "Would you like another card?";
        } else if (playerOne.sum === 21) {
            // console.log("Blackjack" + playerOne.sum);
            playerMessageEl.textContent = "You got BLACKJACK!";
        } else {
            // console.log("Greater then 21" + playerOne.sum);
            playerMessageEl.textContent = "Sorry, You BUST!";
        }

        playerSumEl.textContent = "Sum: " + playerOne.sum;
    }

    stand() {
        console.log(playerOne);
        console.log(dealer);
        dealerDraw();
    }

    addCredit() {
        console.log(playerOne);
        console.log(dealer);
    }
}


const dealer = new Player('Dealer', 21, 100);
const playerOne = new Player('Leo', 52, 100);

let dealerMessageEl = document.getElementById('dealer-message-el');
dealerMessageEl.textContent = dealer.name
// console.log(dealerMessageEl);

let playerMessageEl = document.getElementById('player-message-el');
playerMessageEl.textContent = playerOne.name;
// console.log(playerMessageEl);

let newGameBtn = document.querySelector('#new-game')
newGameBtn.textContent = "New Game";
// console.log(newGameBtn.textContent);

let playerSumEl = document.getElementById('player-sum-el');
playerSumEl.textContent = "Sum:";

let dealerSumEl = document.getElementById('dealer-sum-el');
dealerSumEl.textContent = "Sum:";

const shuffleCards = () => {
    let face = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let suit = ["C", "D", "H", "S"];
    let deck = [];

    for (let i = 0; i < suit.length; i++) {
        for (let j = 0; j < face.length; j++) {
            deck.push(face[j] + "-" + suit[i]);
        }
    }

    let myCard = Math.floor(Math.random() * deck.length);
    // console.log("CardArrayNum: " + myCard);
    // console.log("Card: " + deck[myCard]);
    return deck[myCard];
}



document.addEventListener('click', (e) => {

    switch (e.target.textContent) {
        case 'New Game':
            console.log('New Game');
            playerOne.newGame();
            // newGame();
            break;
        case 'Stand':
            console.log('Stand');
            // stand();
            break;    
        case 'Hit':
            console.log('Hit');
            playerOne.hit();
            // hit();
            break;
        case 'Add Credit':
            console.log('Add Credit');
            // addCredit();
            break;            
    }


})

