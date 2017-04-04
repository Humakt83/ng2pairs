import { Component, Input, OnInit } from '@angular/core';
import { Pairs } from '../pairs';
import { Piece, PairsService } from '../pairs.service';

@Component({
    moduleId: __moduleName,
    selector: 'game',
    templateUrl: 'game.html',
    styleUrls: ['../pairs.component.css', 'game.css']
})
export class GameComponent implements OnInit {

    @Input() pairs: Pairs;
    pieces: Piece[] = [];
    pieceTable: Piece[][];
    clickedPieces: Piece[] = [];
    clicks: number = 0;
    gameOver: boolean = false;
    activePlayer: Player;
    players: Player[] = [];

    constructor(private pairsService: PairsService) {}

    ngOnInit() {        
        this.generatePieces();
        if (this.pairs.playerNames.length > 1) {
            this.players = this.pairs.playerNames.map(n => new Player(n));
            this.activePlayer = this.players[0];
        }
    }

    click(piece: Piece) {
        if (piece.found) return;
        this.clicks++;
        if (this.clickedPieces.length > 1) {
            this.clickedPieces.forEach(p => p.turned = false);
            this.clickedPieces = [];
        }
        piece.turned = true;
        this.clickedPieces.push(piece);
        if (this.clickedPieces.length === 2) {
            if (this.clickedPieces[0].pair === piece) {
                this.clickedPieces.forEach(p => p.found = true);
                this.clickedPieces = [];
                if (this.activePlayer) {
                    this.activePlayer.score++;
                }
            } else {
                this.setNextActivePlayer();
            }
        }
        this.checkGameStatus();
    }

    private generatePieces() {
        this.pieces = this.pairsService.generatePieces(this.pairs.getNumberOfPieces());
        this.pieceTable = Array((this.pairs.getNumberOfPieces() * 2) / 5);
        for (let x = 0; x < this.pieceTable.length; x++) {
            this.pieceTable[x] = [];
            for (let y = 0; y < 5; y++) {
                this.pieceTable[x].push(this.pieces[(x*5)+y])
            }
        }
    }

    private setNextActivePlayer() {
        if (this.activePlayer) {
            let index = this.players.indexOf(this.activePlayer) + 1;            
            this.activePlayer = this.players[index >= this.players.length ? 0 : index];
        }
    }

    private checkGameStatus() {
        if (this.pieces.filter(p => !p.found).length < 1) {
            this.gameOver  = true;
        }
    }
}

class Player {

    score: number = 0;

    constructor(public name: string) {
    }
}
