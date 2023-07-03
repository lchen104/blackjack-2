# Blackjack 2
** Features **

1. New Game button - Starts a new game
2. HI or Stand button
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

- I've used the DOM to add an even listener to listen for the e.target.textContent fot he button pressed.

- ShuffleCards function - I've created 3 arrays:
1. Face values (A, 2, 3, 4, 5, 6, 7, 8, 9)
2. Suit value (Clubs, Diamonds, Hearts, Spades)
3. Decks array to hold the 52 cards made using Face/Suit array
4. A FOR loop within a FOR loop to build the 52 card deck and loaded into the Decks array
5. Math.random() and Math.floor to return a random card from the ShuffleCards function
6. After drawing the cards, a function will read the value of the card image name before the dash and compute

---

Current problem:
- Cant start game until you set the credits and lifetimeCredits to value 0 for each in chrome inspector tool.  Currently displays Player Credits: NaN and credits and lifetimeCredits values is null in chrome inspector tools in localStorage.

---

- Bug FIXED: when player gets 5 cards and BUSTS at 5th card, winner still wins 7/2/2023

[title](https://fabulous-rugelach-81c20d.netlify.app)

Created by: Leo Chen
Cards image credit to Kenny Yip

