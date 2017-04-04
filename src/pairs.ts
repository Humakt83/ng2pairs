import { Difficulty } from './difficulty';


export class Pairs {

    constructor(public playerNames: string[], public difficulty: Difficulty) {}

    getNumberOfPieces(): number {
        const mpModifier = this.playerNames.length > 1 ? 3 : 1;
        return (this.difficulty + 1) * 5 * mpModifier;
    }

}