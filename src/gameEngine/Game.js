import CardDeck from "./CardDeck";
import Hand from "./Hand";


class Game {

    constructor() {
        this.cardDeck = new CardDeck();
    }

    start() {
        this.cardDeck.shuffle();
        this.playerHand = new Hand([this.cardDeck.dealCard(), this.cardDeck.dealCard()]);
        this.dealerHand = new Hand([this.cardDeck.dealCard(), this.cardDeck.dealCard()]);
    }

    getPlayerHand() {
        return this.playerHand;
    }

    getDealerHand() {
        return this.dealerHand;
    }


    hit() {
        this.playerHand.addCard(this.cardDeck.dealCard());
    }

    // play dealerhand according to blackjack rules
    stand() {
        while (this.dealerHand.getValue() < 17) {
            this.dealerHand.addCard(this.cardDeck.dealCard());
        }
    }

    // return 1 if dealer wins, 0 if tie, -1 if player wins
    getWinner() {
        if (this.playerHand.getValue() > 21) {
            return -1;
        } else if (this.dealerHand.getValue() > 21) {
            return 1;
        } else if (this.playerHand.getValue() > this.dealerHand.getValue()) {
            return 1;
        } else if (this.playerHand.getValue() < this.dealerHand.getValue()) {
            return -1;
        } else {
            return 0;
        }
    }



}

export default Game;
