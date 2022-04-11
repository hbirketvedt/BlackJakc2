import {useEffect, useState} from "react";
import CardDeck from "./CardDeck";
import Hand from "./Hand";


const Play = () => {

    const [playerHand, setPlayerHand] = useState(null);
    const [dealerHand, setDealerHand] = useState(null);
    const [cardDeck, setCardDeck] = useState(null);

    useEffect(() => {
        const deck = new CardDeck(10);
        deck.shuffle();
        setPlayerHand(new Hand([deck.dealCard(), deck.dealCard()]));
        setDealerHand(new Hand([deck.dealCard(), deck.dealCard()]));
        setCardDeck(deck);
    }, []);


    const hit = () => {
        playerHand.addCard(cardDeck.dealCard());
    }

    const stand = () => {
        while (dealerHand.getValue() < 17) {
            dealerHand.addCard(cardDeck.dealCard());
        }
    }

    const getWinner = () => {
        if (playerHand.getValue() > 21) {
            return "Dealer";
        } else if (dealerHand.getValue() > 21) {
            return "Player";
        } else if (playerHand.getValue() > dealerHand.getValue()) {
            return "Player";
        } else if (playerHand.getValue() < dealerHand.getValue()) {
            return "Dealer";
        } else {
            return "Tie";
        }
    }

}

export default Play;