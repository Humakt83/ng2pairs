import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Pairs } from '../pairs';
import { PairsService } from '../pairs.service';
import { Piece } from './pieces/piece';

@Component({
    selector: 'game',
    template: `
        <div  *ngIf="activePlayer">
            <div class="player" *ngFor="let player of players" [class.highlightPlayer]="activePlayer===player">
                {{player.name}} score: {{player.score}}
            </div>
        </div>

        <div>
            <table>
                <tr *ngFor="let row of pieceTable">
                    <td *ngFor="let column of row" (click)="click(column)">
                        <piece [piece]="column"></piece>
                    </td>
                </tr>
            </table>
        </div>

        <div class="gameOver" *ngIf="gameOver">
            {{gameOverText()}}
            <br>            
        </div>

        <div class="clicks"> {{clicks}} clicks </div>
        <div class="pairsButton" (click)="backToMain()">Back to Main</div>
        <div class="pairsButton" (click)="restart()">Restart</div>
    `,
    styles: [`
        .pairsButton {
            padding: 5px;
            color: rgb(255,255,200);
            font-size: x-large;
            font-weight: bold;
            background: linear-gradient(to left top, black, black, black, white);
            margin-right: 5px;
            border: 3px solid black;
            border-radius: 15px;
            display: inline-block;
            text-align: center;
            cursor: pointer;
        }

        .piece--default {
            background: linear-gradient(to top, black, gray, black);
        }

        .pairsButton:hover {
            color: black;
            background: linear-gradient(to left top, white, white, white, black);
        }

        .pairsButtonSelected {
            background: linear-gradient(to left top, white, white, white, black);
            color: black;
        }

        .pairsButtonSelected:hover {
            color: rgb(255,255,200);;
            background: linear-gradient(to left top, black, black, black, white);
        }

        .pairs {
            text-align: center;
        }
        div {
            text-align: center;
            margin-left: auto;
            margin-right: auto;
            position: relative;
            display: table;
        }

        .player {
            display: inline-block;
            background: linear-gradient(to left top, white, white, white, rgb(130, 150, 235));
            color: black;
            border: 1px solid black;
            border-radius: 5px;
            font-weight: bolder;
            padding-left: 5px;
            padding-right: 5px;
            margin-right: 2px;
        }

        .highlightPlayer {
            background: linear-gradient(to left top, rgb(235, 255, 70), rgb(235, 255, 70), rgb(235, 255, 70), rgb(130, 150, 235));
        }

        table {
            text-align: center;
        }

        td {
            width: 75px;
            height: 75px;
            border: 1px solid black;
            cursor: pointer;
            padding: 0;
        }

        td div {
            width: inherit;
            height: inherit;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }

        td.found {
            cursor: default;
        }

        .clicks,
        .gameOver {
            background: linear-gradient(to left top, white, white, white, rgb(130, 150, 235));
            border: 1px solid black;
            border-radius: 5px;
            color: black;
            font-weight: bolder;
            padding-left: 8px;
            padding-right: 8px;
            margin-top: 5px;
        }

        .gameOver {
            font-size: x-large;
        }
    `]
})
export class GameComponent implements OnInit {

    @Input() pairs: Pairs | undefined;
    pieces: Piece[] = [];
    pieceTable: Piece[][] | undefined;
    clickedPieces: Piece[] = [];
    clicks: number = 0;
    gameOver: boolean = false;
    activePlayer: Player | undefined;
    players: Player[] = [];

    @Output() toMain = new EventEmitter();

    constructor(private pairsService: PairsService) {}

    ngOnInit() {        
        this.generatePieces();
        if (this.pairs && this.pairs.playerNames.length > 1) {
            this.players = this.pairs.playerNames.map(n => new Player(n));
            this.activePlayer = this.players[0];
        }
    }

    click(piece: Piece) {
        if (piece.found || piece.turned) return;
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

    restart() {
        this.ngOnInit();
        this.clicks = 0;
        this.clickedPieces = [];
        this.gameOver = false;
    }

    backToMain() {
        this.toMain.emit(true);
    }

    gameOverText() {
        if (this.players.length < 2) {
            return 'Congratulations! You are victorious.'
        }
        let gameOverText;
        let highestScore = 0;
        for (let player of this.players) {
            if (player.score > highestScore) {
                gameOverText = player.name + ' is victorious!';
                highestScore = player.score;
            } else if (player.score === highestScore) {
                gameOverText = 'Draw Game';
            }
        }
        return gameOverText;
    }

    private generatePieces() {
        if (this.pairs) {
            const tableModifier: number = this.pairs.getNumberOfPieces() > 10 && (this.pairs.getNumberOfPieces() * 2) % 10 === 0 ? 10 : 5;
            this.pieces = this.pairsService.generatePieces(this.pairs.getNumberOfPieces());
            let pieceTable2 = Array((this.pairs.getNumberOfPieces() * 2) / tableModifier);
            for (let x = 0; x < pieceTable2.length; x++) {
                pieceTable2[x] = [];
                for (let y = 0; y < tableModifier; y++) {
                    pieceTable2[x].push(this.pieces[(x*tableModifier)+y])
                }
            }
            this.pieceTable = pieceTable2;
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
