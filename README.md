# Blackjack 2 
** Features **

1. New Game button - Starts a new game
2. HIT or Stand button
3. Add Credit button - Game wont start until credit is added
4. Reset button - WIll reset the game similar to resfreshing the browser
5. Added a Lifetime Credits variable to store a players lifetime credits spent in the browsers localStorage
6. Added the available credits to localStorage so a use's credit is still available with browser is refreshed
7. Added a ShuffleCards() function to build a deck of (52) cards and load into an array and returns a random card into a players cards array. And than extrack the cards value from the image name it previously created into a players cards array.
8. Player automatically wins when they draw 5 cards without going over 21
9. If the player and deal gets a tie, its a PUSH.
10. Dealer MUST draw another card when dealer total is less than 17
11. When player first draws an ace card, if player current cards total less than or equal to 10, player's ace card value will be set to 11. If current card value is over 10, player card value will be set to 1
12. All Jack, Queen and King card values are set to 10

---

- Add an even listener to listen for the e.target.textContent for the button pressed.

## ShuffleCards Function - Created 3 arrays:

1. Face values (A, 2, 3, 4, 5, 6, 7, 8, 9)
2. Suit value (Clubs, Diamonds, Hearts, Spades)
3. Decks array to hold the 52 cards made using Face/Suit array
4. A FOR loop within a FOR loop to build the 52 card deck and loaded into the Decks array
5. Math.random() and Math.floor to return a random card from the ShuffleCards function
6. After drawing the cards, a function will read the value of the card image name before the dash and compute

---

**Current problem:

- Bug FIXED: localStorage values LifetimeCredits and Credits were getting reset when reset button or browser page was refreshed. - 07/05/2023 

- Bug FIXED: Cant start game until you set the credits and lifetimeCredits to value 0 for each in chrome inspector tool.  Currently displays Player Credits: NaN and credits and lifetimeCredits values is null in chrome inspector tools in localStorage. 7/3/2023

- Bug FIXED: when player gets 5 cards and BUSTS at 5th card, winner still wins 7/2/2023

URL: [Blackjack 2](https://fabulous-rugelach-81c20d.netlify.app)

--

Load game will create 2 new key/value pair (lifetimeCredit and credits) in localStorage
1. lifetimeCredits to store the total amount of funds the user has deposited
2. credits to store the new funds added AND will retrieve unused funds when use continues play at a later time
3. Player must add funds initially to play by clicking on Add Crdeit button which adds $20 each time Add Credit button is clicked
4. New Game button initializes the player and dealer initial variables
5. newGame() function will build a new deck and return two random cards into the players cards array using shuffleCards() function.
6. Read the player cards array for the first two cards to extract the face value of each card and display the card images and compute the values to add the total card value to the sum variable
7. Do a comparison if the sum is less than 21 or equal to 21
8. Display the player info and store lifetimeCredits and credits to localStorage
9. Player can choose to HIT or Stand

** Added 2 additional checks initially:

1. Check if lifetimeCredit greater than 500 (To remind the user how much they have added funds)
2. Check if the player has any funds to play


Created by: Leo Chen
Cards image credit to Kenny Yip

