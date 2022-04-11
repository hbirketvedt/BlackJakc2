import Card from './Card';


class CardDeck {
    constructor(numberOfDecks = 7) {
        this.cards = this.createDeck(numberOfDecks);
    }


    createDeck(numberOfDecks = 7) {
        let deck = [];
        const suits = ['S', 'H', 'D', 'C'];
        for (let i = 0; i < numberOfDecks; i++) {
            for (const suit of suits) {
                for (let face = 1; face < 14; face++) {
                    deck.push(new Card(suit, face));
                }
            }
        }
        for (let i = 0; i < 10; i++) {
            this.shuffle(deck);
        }
        return deck;
    }

    getCardCount() {
        return this.cards.length;
    }

    dealCard() {
        if (this.cards.length < 1) {
            this.cards = this.createDeck();
            console.log('Deck is empty, new deck created');
        }
        return this.cards?.pop();
    }

    // shuffle the deck of cards
    shuffle(deck) {
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
    }

    toString() {
        return this.cards.join(', ');
    }
}

export default CardDeck;