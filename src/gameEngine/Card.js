class Card {

    constructor(suit, face) {
        if (face < 1 || face > 13) {
            throw new Error("Face must be between 1 and 13");
        }
        this.face = face;
        this.suit = suit;
    }

    toString() {
        return this.face + this.suit;
    }

    getValue() {
        if (this.face > 10) {
            return 10;
        }
        return this.face;
    }


}

export default Card;


