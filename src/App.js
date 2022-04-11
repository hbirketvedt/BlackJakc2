import './App.css';
import {useEffect, useRef, useState} from "react";
import HandComponent from "./components/Hand/HandComponent";
import CardDeck from "./gameEngine/CardDeck";
import Hand from "./gameEngine/Hand";
import HiddenHandComponent from "./components/Hand/HiddenHandComponent";

function App() {
    const [deck] = useState(new CardDeck());
    const [playerHand, setPlayerHand] = useState(null);
    const [dealerHand, setDealerHand] = useState(null);
    const [winner, setWinner] = useState("BlackJack");
    const [gameFinished, setGameFinished] = useState(false);
    const [showDealerHand, setShowDealerHand] = useState(false);

    const startNewGame = () => {
        setWinner("BlackJack");
        setGameFinished(false)
        setShowDealerHand(false);
        const playerHand = new Hand([deck.dealCard(), deck.dealCard()])
        setDealerHand(new Hand([deck.dealCard(), deck.dealCard()]));
        if (playerHand.getValue() === 21) {
            stand();
        }
        setPlayerHand(playerHand);
    }

    useEffect(() => {
        startNewGame()
    }, []);


    const hit = () => {
        const newCard = deck.dealCard();
        const cards = playerHand.cards.concat(newCard);
        const newHand = new Hand(cards);
        setPlayerHand(newHand);
        if (newHand.getValue() > 20) {
            finishGame(dealerHand, newHand);
        }
    };

    const stand = (playerHand) => {
        let tempHand = new Hand(dealerHand?.cards);
        while (tempHand.getValue() < 17) {
            tempHand = new Hand(tempHand.cards.concat(deck.dealCard()));
        }
        setDealerHand(tempHand);
        setShowDealerHand(true)
        finishGame(tempHand, playerHand);
    }

    const finishGame = (dealer = dealerHand, player = playerHand) => {
        setWinner(getWinner(dealer, player));
        setGameFinished(true);
    }

    const getWinner = (dealerHand, playerHand) => {
        if (playerHand.getValue() > 21) {
            return "Dealer Wins";
        } else if (dealerHand.getValue() > 21) {
            return "Player Wins";
        } else if (playerHand.getValue() > dealerHand.getValue()) {
            return "Player Wins";
        } else if (playerHand.getValue() < dealerHand.getValue()) {
            return "Dealer Wins";
        } else {
            return "Tie";
        }
    }

    return (
        <div className={"background"}>

            <div className={"header row-title"}> {winner}</div>


            <div className={"row-card"}> {showDealerHand ?
                <div>
                    <HandComponent hand={dealerHand}/>
                </div>
                :
                <div>
                    <HiddenHandComponent hand={dealerHand}/>
                </div>}
            </div>

            <div className={"row-label"}>
                {showDealerHand ? <div className={"label"}>Dealer: {dealerHand?.getValue()}</div> : null}


            </div>

            <div className={"row-label"}>
                <div className={"label"}>Player: {playerHand?.getValue()}</div>
            </div>

            <div className={"row-card"}>
                <HandComponent hand={playerHand}/>
            </div>

            <div>
                {gameFinished ?
                    <div className={"button-container"}>
                        <button className={"btn"} onClick={() => startNewGame()}>Play Again</button>
                    </div>
                    :
                    <div className={"button-container"}>
                        <button onClick={hit}>Hit</button>
                        <button onClick={() => stand(playerHand)}>Stand</button>
                    </div>
                }
            </div>
        </div>
    )
        ;
}

export default App;
