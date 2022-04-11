import React, {useEffect, useState} from "react";
import CardComponent from "./CardComponent";


const HiddenHandComponent = (props) => {

    // take in hand and render all cards as CardComponents
    const [cards, setCards] = useState([]);


    useEffect(() => {
        setCards(props.hand?.cards);
    }, [props.hand]);


    return (
        <div className="hand">
            <CardComponent key={0} card={props.hand?.cards[0]}/>
            <img src={`/images/red_back.png`} alt={"Blank card"} className={"card"}/>
        </div>
    )

}

export default HiddenHandComponent;