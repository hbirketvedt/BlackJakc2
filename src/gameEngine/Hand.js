


class Hand {

    constructor(cards) {
        this.cards = cards;
    }

    toString () {
        return this.cards.join(' ');
    }

    componentDidUpdate () {
        console.log("hand updated");
    }

    getCards () {
        return this.cards;
    }

    // get value according to blackjack rules
    getValue () {
        let value = 0;
        let hasAce = false;
        for (let i = 0; i < this.cards.length; i++) {
            let card = this.cards[i];
            if (card.getValue() === 1) {
                hasAce = true;
            }
            value += card.getValue();
        }
        if (hasAce && value + 10 <= 21) {
            value += 10;
        }
        return value;
    }

}

export default Hand;