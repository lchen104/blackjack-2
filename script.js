class Player {
    constructor(name, age, credits) {
        this.name = name;
        this.age = age;
        this.credits = 0;
        this.isAlive = true;
        this.hasBlackjack = false;
        this.sum = 0;
        this.cards = [];
        this.lifetimeCredits = 0;
    }

    newGame() {
        if (this.lifetimeCredits > 500) {
            alert('Are you sure you want to play? You lost $' + this.lifetimeCredits + " already!")
        }
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
                // gets card value after the dash
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

        //    console.log(tempCardsEl)
            
            if (this.sum < 21) {
                // console.log("less than 21 : " + this.sum);
                playerMessageEl.textContent = "Would you like another card?";
            } else if (this.sum === 21) {
                // console.log("Blackjack" + this.sum);
                playerMessageEl.textContent = "You got BLACKJACK!";
                this.hasBlackjack = true;
            }

        playerSumEl.textContent = "Player Sum: " + this.sum;
        playerCreditsEl.textContent = "Player Credits: " + playerOne.credits

        } else {
            playerMessageEl.textContent = `You have ${this.credits} credit remaining. Please add additional CREDIT to play.`;
        }
        // stores remaining credit to local storage
        // localStorage.setItem('credits', this.credits);
        localStorage.setItem('credits', JSON.stringify(this.credits));

        // localStorage.setItem('lifetimeCredits', this.lifetimeCredits);
        localStorage.setItem('lifetimeCredits', JSON.stringify(this.lifetimeCredits));

    }

    hit() {
            if (this.sum > 0 && this.isAlive === true) {
                // console.log(playerOne);

                let currentCard = shuffleCards();

                this.cards.push(currentCard);

                console.log(this);

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
                console.log(this.cards);

                if (this.cards.length > 4 && this.sum <= 21 && this.isAlive === true) {
                    console.log("Card Length: " + this.cards.length)
                    playerMessageEl.textContent = "You got 5 CARDS! Player WINS!";  
                    playerOne.credits += 20;
                    playerCreditsEl.textContent = "Player Credits: " + playerOne.credits;  
                    this.isAlive = false;
                } else if (this.sum < 21) {
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
                
                playerSumEl.textContent = "Player Sum: " + this.sum;
                playerCreditsEl.textContent = "Player Credits: " + playerOne.credits
            }

    }

    draw() {
        // console.log(dealer);

        let currentCard = shuffleCards();

        this.cards.push(currentCard);

        // console.log(this);

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
        console.log(this.cards);

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
        // console.log("LTC:" + parseInt(localStorage.getItem('lifetimeCredits')));
        this.lifetimeCredits = parseInt(localStorage.getItem('lifetimeCredits'));
        this.credits = parseInt(localStorage.getItem('credits'));
        this.credits += 20;
        playerCreditsEl.textContent = "Player Credits: " + this.credits
        console.log(this.credits);
        this.lifetimeCredits += 20;
        // localStorage.setItem('lifetimeCredits', this.lifetimeCredits);
        localStorage.setItem('lifetimeCredits', JSON.stringify(this.lifetimeCredits));
        // localStorage.setItem('credits', this.credits);
        localStorage.setItem('credits', JSON.stringify(this.credits));
    }
}


const dealer = new Player('Dealer', 21, 100);
const playerOne = new Player('Leo', 52);

// localStorage.setItem('lifetimeCredits', this.lifetimeCredits);
localStorage.setItem('lifetimeCredits', JSON.stringify(playerOne.lifetimeCredits));

// localStorage.setItem('credits', this.credits);
localStorage.setItem('credits', JSON.stringify(playerOne.credits));

// loads items in localStorage into object variables
playerOne.lifetimeCredits = parseInt(localStorage.getItem('lifetimeCredits'));
// console.log(typeof playerOne.lifetimeCredits);

playerOne.credits = parseInt(localStorage.getItem('credits'));
// console.log(typeof playerOne.credits);

console.log("Player Lifetime Credit: $" + playerOne.lifetimeCredits);

let dealerMessageEl = document.getElementById('dealer-message-el');
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


// Builds an array of 52 cards and load it into a new array and returns a random card out of the new array
const shuffleCards = () => {
    // Create the FACE value cards array
    let face = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

    // Create the SUIT cards array
    let suit = ["C", "D", "H", "S"];

    // Create a new DECK array for the 52 cards created 
    let deck = [];

    // Outter loop will append each suit array [C, D, H, S] value to the end of the card image name
    for (let i = 0; i < suit.length; i++) {
        // Inner loop will append each face array [A, 2, 3...etc] value tot he beginning of the card image name
        for (let j = 0; j < face.length; j++) {
            deck.push(face[j] + "-" + suit[i]);
        }
    }

    // Create a new variable myCard to store a random number between 0-51 so we can return a 
    let myCard = Math.floor(Math.random() * deck.length);
    // console.log("CardArrayNum: " + myCard);
    // console.log("Card: " + deck[myCard]);

    // Returns a random card from the DECK array. Example: [2-C] for 2 of clubs, or [A-S] for Ace of Spades
    return deck[myCard];
}


// Listen for click event
document.addEventListener('click', (e) => {
    console.log(e.target)
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

