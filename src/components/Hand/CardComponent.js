import "./CardComponent.css";


const CardComponent = (props) => {
    // takes in a card object and returns a card component
    const cardString = props.card?.toString();

    return (
        <img src={`/images/${cardString}.png`} alt={"Card"} className={"card"}/>
    );


};

export default CardComponent;