class Player {
    constructor(name, age, credits) {
        this.name = name;
        this.age = age;
        this.credits = credits;
        this.isAlive = true;
        this.hasBlackjack = false;
        this.sum = 0;
        this.cards = []
    }

    newGame() {
        if (this.credits > 0) {

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
            dealerMessageEl.textContent = dealer.name;
            dealerCardsEl.innerHTML = `<img id="dealer-cards-img" src="./imgs/BACK.png">`;

            let firstCard = shuffleCards();
            let secondCard = shuffleCards();
            this.cards = [firstCard, secondCard];

            console.log("> " + this.cards);
            
            // let playerCardsEl = document.getElementById('player-cards-el');
            playerCardsEl.innerHTML = "";

            // let tempCardsEl = "";

        // get the card value
        for (let i = 0; i < this.cards.length; i++) {
            
                playerCardsEl.innerHTML += `<img src='./imgs/${this.cards[i]}.png'>`;
                // console.log(this.cards[i].split('-').pop());
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

                console.log("Card: " + this.sum);
                // console.log(this.card);

        }

            // let playerCardsEl = document.getElementById('player-cards-el');
            // playerCardsEl.innerHTML = tempCardsEl;

        //    console.log(tempCardsEl)
            
            if (this.sum < 21) {
                // console.log("less than 21 : " + this.sum);
                playerMessageEl.textContent = "Would you like another card?";
            } else if (this.sum === 21) {
                // console.log("Blackjack" + this.sum);
                playerMessageEl.textContent = "You got BLACKJACK!";
                this.hasBlackjack = true;
            // } else {
            //     // This code below never gets run
            //     // console.log("Greater than 21" + this.sum);
            //     playerMessageEl.textContent = "> Sorry, You BUST!";
            //     this.isAlive = false;
            //     this.credit -= 20;
            }

        playerSumEl.textContent = "Player Sum: " + this.sum;
        playerCreditsEl.textContent = "Player Credits: " + playerOne.credits

        } else {
            playerMessageEl.textContent = "You are OUT of credits! Please add additional Funds to play."
        }
        
    }

    hit() {
        if (this.cards.length >= 5 && this.isAlive === true) {
            playerMessageEl.textContent = "Player WINS!";  
            playerOne.credits += 20;
            playerCreditsEl.textContent = "Player Credits: " + playerOne.credits;  
            this.isAlive = false;
        } else {
            if (this.sum > 0 && this.isAlive === true) {
                // console.log(playerOne);
                // console.log(dealer);

                let currentCard = shuffleCards();

                this.cards.push(currentCard);

                console.log(this);

                // this.cards.split('-').pop();
                // get cards value before the dash
                // console.log(this.cards.split('-').shift());

                playerCardsEl.innerHTML += `<img src='./imgs/${currentCard}.png'>`;

                // get cards value before the dash
                let card = currentCard.split('-').shift();

                if (card === "A") {
                    if (this.sum <= 10) {
                        this.sum += 11;
                    } else {
                        this.sum++;
                    }
                    // console.log(this.cards.sum);
                } else if (card === "J" || card === "Q" || card === "K") {
                    this.sum += 10;
                } else {
                    this.sum += parseInt(card); // converts string to interger
                }

                console.log("Card: " + this.sum);
                console.log(this.card);

                if (this.sum < 21) {
                    // console.log("less than 21 : " + this.sum);
                    playerMessageEl.textContent = "Would you like another card?";
                } else if (this.sum === 21) {
                    // console.log("Blackjack" + this.sum);
                    playerMessageEl.textContent = "You got BLACKJACK!";
                    this.hasBlackjack = true;
                } else {
                    // console.log("Greater than 21" + this.sum);
                    playerMessageEl.textContent = "Sorry, You BUST!";
                    this.isAlive = false;
                    this.credits -= 20;
                    playerCreditsEl.textContent = "Player Credits: " + playerOne.credits;

                    dealer.credits += 20;
                    dealerCreditsEl.textContent = "Dealer Credits: " + dealer.credits;
                }
                
                // playerCardsEl = document.getElementById('player-cards-el');
                // playerCardsEl.innerHTML += `<img src='./imgs/${currentCard}.png'>`;
                playerSumEl.textContent = "Player Sum: " + this.sum;
                playerCreditsEl.textContent = "Player Credits: " + playerOne.credits
            }
        }
    }

    draw() {
        // console.log(dealer);

        let currentCard = shuffleCards();

        // unshift to display the correct order of cards delt from the cards array
        // this.cards.unshift(currentCard);
        this.cards.push(currentCard);
        // console.log(this);

        //////////////////////////////////////////////
        // get the card value
        // console.log(currentCard.split('-').pop());
        // console.log(currentCard.split('-').shift());

        dealerCardsEl.innerHTML += `<img src='./imgs/${currentCard}.png'>`;

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

        console.log("Card: " + this.sum);
        console.log(this.card);

        if (this.sum < 17) {
            // console.log("less than 17 : " + this.sum);
            dealer.draw();
        } else if (this.sum < 21 && this.sum >= 17) {
            dealerMessageEl.textContent = "Dealer Stands!";
        } else if (this.sum === 21) {
            // console.log("Blackjack" + this.sum);
            dealerMessageEl.textContent = "Dealer has BLACKJACK!";
            this.hasBlackjack = true;
        } else {
            // console.log("Greater than 21:" + this.sum);
            dealerMessageEl.textContent = "Dealer BUST!";
            playerMessageEl.textContent = "Player WINS!";
            console.log(dealer);
            this.isAlive = false;
            playerOne.credits += 20;
            dealer.credits -= 20;
            playerCreditsEl.textContent = "Player Credits: " + playerOne.credits;
            dealerCreditsEl.textContent = "Dealer Credits: " + dealer.credits;
        }
        
        // let dealerCardsEl = document.getElementById('dealer-cards-el');
        // dealerCardsEl.innerHTML += `<img src='./imgs/${currentCard}.png'>`;
        dealerSumEl.textContent = "Dealer Sum: " + this.sum;
        dealerCreditsEl.textContent = "Dealer Credits: " + this.credits
    }

    stand() {
        // console.log(playerOne);
        if (this.sum > 0 && this.isAlive === true) {
            console.log(dealer);
            dealerCardsEl.innerHTML = "";
            playerMessageEl.textContent = "Player Stands!";
            dealer.draw();
            if (dealer.isAlive && playerOne.isAlive) {
                if (dealer.sum === playerOne.sum) {
                    dealerMessageEl.textContent = "It's a PUSH!";
                    playerMessageEl.textContent = "It's a PUSH";
                } else if (dealer.sum > playerOne.sum) {
                    dealerMessageEl.textContent = "Dealer WINS!";
                    dealer.credits += 20;
                    dealerCreditsEl.textContent = "Dealer Credits: " + dealer.credits;

                    playerMessageEl.textContent = "Sorry, YOU LOSE!";
                    playerOne.credits -= 20;
                    playerCreditsEl.textContent = "Player Credits: " + playerOne.credits;
                } else {
                    dealerMessageEl.textContent = "Dealer LOST!!";
                    dealer.credits -= 20;
                    dealerCreditsEl.textContent = "Dealer Credits: " + dealer.credits;

                    playerMessageEl.textContent = "Player WINS!";  
                    playerOne.credits += 20;
                    playerCreditsEl.textContent = "Player Credits: " + playerOne.credits;   
                }
            }
            this.isAlive = false;
            dealer.isAlive = false;
        }
    }

    addCredit() {
        console.log(playerOne);
        this.credits += 20;
        playerCreditsEl.textContent = "Player Credits: " + this.credits
        console.log(this.credits);
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

let dealerSumEl = document.getElementById('dealer-sum-el');
// dealerSumEl.textContent = "Dealer Sum:";

let playerSumEl = document.getElementById('player-sum-el');
// playerSumEl.textContent = "Player Sum:";

let dealerCardsEl = document.getElementById('dealer-cards-el');
let playerCardsEl = document.getElementById('player-cards-el');

let playerCreditsEl = document.getElementById('player-credits-el');
playerCreditsEl.textContent = "Player Credits: " + playerOne.credits

let dealerCreditsEl = document.getElementById('dealer-credits-el');
dealerCreditsEl.textContent = "Dealer Credits: " + dealer.credits


// Builds an array of 52 cards and loads it into a new array and returns a random card out of the new array
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
            // newGame();
            console.log('New Game');
            dealerCardsEl.innerHTML = `<img src='./imgs/BACK.png'>`;
            playerOne.newGame();
            break;
        case 'Stand':
            // stand();
            console.log('Stand');
            playerOne.stand();
            break;    
        case 'Hit':
            // hit();
            console.log('Hit');
            playerOne.hit();
            break;
        case 'Add Credit':
            // addCredit();
            console.log('Add Credit Button');
            playerOne.addCredit();
            break;        
        case 'Reset Game':
            // resets game to initial values
            console.log('Add Credit');
            window.location.reload();
            break;      
    }


})

