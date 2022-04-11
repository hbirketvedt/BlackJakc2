import CardComponent from "./CardComponent";
import React, {useEffect, useState} from "react";


const HandComponent = (props) => {
    // take in hand and render all cards as CardComponents
    const [cards, setCards] = useState([]);


    useEffect(() => {
        setCards(props.hand?.cards);
    }, [props.hand]);


    return (
        <div className="hand">
            {cards?.map((card, index) => {
                return <CardComponent key={index} card={card}/>
            })}
        </div>
    )
}

export default HandComponent;