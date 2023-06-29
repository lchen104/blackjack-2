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
        this.isAlive = true;
        this.hasBlackjack = false;
        this.sum = 0;
        this.cards = [];

        dealer.isAlive = true;
        dealer.hasBlackjack = false;
        dealer.sum = 0;
        dealer.cards = [];
        dealerSumEl.textContent = "Dealer Sum:";

        let firstCard = shuffleCards();
        let secondCard = shuffleCards();
        this.cards = [firstCard, secondCard];

        console.log("> " + this.cards);
        
        // let playerCardsEl = document.getElementById('player-cards-el');
        // playerCardsEl.innerHTML = "";

        let tempCardsEl = "";

       // get the card value
       for (let i = 0; i < this.cards.length; i++) {
        
            tempCardsEl += `<img src='./imgs/${this.cards[i]}.png'>`;
            // this.cards[i].split('-').pop();
            // get cards value before the dash
            // console.log(this.cards[i].split('-').shift());

            let card = this.cards[i].split('-').shift();

            if (card === "A") {
                if (this.sum <= 10) {
                    this.sum += 11;
                } else {
                    this.sum++;
                }
                // console.log(this.cards[i].sum);
            } else if (card === "J" || card === "Q" || card === "K") {
                this.sum += 10;
            } else {
                this.sum += parseInt(card); // converts string to interger
            }

            // console.log("Card: " + this.sum);

            // get cards value after the dash
            // console.log(this.cards[i].split('-').pop());
            // console.log(this.cards.sum);

       }

        // let playerCardsEl = document.getElementById('player-cards-el');
        playerCardsEl.innerHTML = tempCardsEl;

       console.log(tempCardsEl)
        
        if (this.sum < 21) {
            // console.log("less then 21 : " + this.sum);
            playerMessageEl.textContent = "Would you like another card?";
        } else if (this.sum === 21) {
            // console.log("Blackjack" + this.sum);
            playerMessageEl.textContent = "You got BLACKJACK!";
            this.hasBlackjack = true;
        } else {
            // console.log("Greater then 21" + this.sum);
            playerMessageEl.textContent = "Sorry, You BUST!";
            this.isAlive = false;
        }

       playerSumEl.textContent = "Player Sum: " + this.sum;
    }

    hit() {
        // console.log(playerOne);
        // console.log(dealer);

        let currentCard = shuffleCards();

        this.cards.push(currentCard);

        console.log(this);

        let card = currentCard.split('-').shift();

        if (card === "A") {
            if (this.sum <= 10) {
                this.sum += 11;
            } else {
                this.sum++;
            }
            // console.log(this.cards[i].sum);
        } else if (card === "J" || card === "Q" || card === "K") {
            this.sum += 10;
        } else {
            this.sum += parseInt(card); // converts string to interger
        }

        // console.log("Card: " + this.sum);

        if (this.sum < 21) {
            // console.log("less then 21 : " + this.sum);
            playerMessageEl.textContent = "Would you like another card?";
        } else if (this.sum === 21) {
            // console.log("Blackjack" + this.sum);
            playerMessageEl.textContent = "You got BLACKJACK!";
            this.hasBlackjack = true;
        } else {
            // console.log("Greater then 21" + this.sum);
            playerMessageEl.textContent = "Sorry, You BUST!";
            this.isAlive = false;
        }
        
        playerCardsEl = document.getElementById('player-cards-el');
        playerCardsEl.innerHTML += `<img src='./imgs/${currentCard}.png'>`;
        playerSumEl.textContent = "Player Sum: " + this.sum;
    }

    draw() {
        // console.log(dealer);

        let currentCard = shuffleCards();

        this.cards.push(currentCard);

        console.log(this);

        //////////////////////////////////////////////
        // get the card value
        // console.log(currentCard.split('-').pop());
        // console.log(currentCard.split('-').shift());

        // get cards value before the dash
        let card = currentCard.split('-').shift();

        if (card === "A") {
            if (this.sum <= 10) {
                this.sum += 11;
            } else {
                this.sum++;
            }
            // console.log(this.cards[i].sum);
        } else if (card === "J" || card === "Q" || card === "K") {
            this.sum += 10;
        } else {
            this.sum += parseInt(card); // converts string to interger
        }

        // console.log("Card: " + this.sum);

        if (this.sum < 17) {
            // console.log("less then 17 : " + this.sum);
            this.draw();
        } else if (this.sum === 21) {
            // console.log("Blackjack" + this.sum);
            dealerMessageEl.textContent = "Dealer got BLACKJACK!";
            this.hasBlackjack = true;
        } else {
            // console.log("Greater then 21" + this.sum);
            dealerMessageEl.textContent = "Dealer BUST!";
            this.isAlive = false;
        }
        
        // let dealerCardsEl = document.getElementById('dealer-cards-el');
        dealerCardsEl.innerHTML += `<img src='./imgs/${currentCard}.png'>`;
        dealerSumEl.textContent = "Dealer Sum: " + this.sum;
    }

    stand() {
        console.log(playerOne);
        console.log(dealer);
        
    }

    addCredit() {
        console.log(playerOne);
        console.log(dealer);
    }
}


const dealer = new Player('Dealer', 21, 100);
const playerOne = new Player('Leo', 52, 100);

let dealerMessageEl = document.getElementById('dealer-message-el');
// dealerMessageEl.textContent = dealer.name;
// console.log(dealerMessageEl);

let playerMessageEl = document.getElementById('player-message-el');
// playerMessageEl.textContent = "Would you like to play a game?";
// console.log(playerMessageEl);

let newGameBtn = document.querySelector('#new-game')
// newGameBtn.textContent = "New Game";
// console.log(newGameBtn.textContent);

let playerSumEl = document.getElementById('player-sum-el');
// playerSumEl.textContent = "Player Sum:";

let dealerSumEl = document.getElementById('dealer-sum-el');
// dealerSumEl.textContent = "Dealer Sum:";

let dealerCardsEl = document.getElementById('dealer-cards-el');
let playerCardsEl = document.getElementById('player-cards-el');

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
            dealerCardsEl.innerHTML = `<img src='./imgs/BACK.png'>`;
            playerOne.newGame();
            // newGame();
            break;
        case 'Stand':
            console.log('Stand');
            dealerCardsEl.innerHTML = [];
            playerMessageEl.textContent = "";
            dealer.draw();
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
        case 'Reset Game':
            console.log('Add Credit');
            window.location.reload();
            break;      
    }


})

