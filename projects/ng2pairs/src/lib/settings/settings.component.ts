import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GameMode } from '../gamemode';
import { Difficulty } from '../difficulty';
import { Pairs } from '../pairs';

@Component({
    selector: 'settings',
    standalone: false,
    template: `
        <div class="pairsButton" [class.pairsButtonSelected]="selectedDifficulty === difficulty.EASY" (click)="selectDifficulty(difficulty.EASY)">EASY</div>
        <div class="pairsButton" [class.pairsButtonSelected]="selectedDifficulty === difficulty.NORMAL" (click)="selectDifficulty(difficulty.NORMAL)">NORMAL</div>
        <div class="pairsButton" [class.pairsButtonSelected]="selectedDifficulty === difficulty.HARD" (click)="selectDifficulty(difficulty.HARD)">HARD</div>
        <div *ngIf="mode === modes.MULTI" class="playerInputs">    
            <div class="playerInput" *ngFor="let player of players; let id = index">
                <label>Player {{id + 1}}</label>
                <input (blur)="setPlayerName(id, $event.target)" [ngModel]="players[id]">
            </div>
            <div class="playerButton" alt="Add player" (click)="addPlayer()">+</div>
            <div class="playerButton" alt="Remove player" (click)="removePlayer()">-</div>
        </div>
        <div class="pairsButton" (click)="start()">START</div>
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

        .playerInputs {
            display: table;    
            width: 100%;
            margin-top: 5px;
        }

        .playerInput {
            display: table-row;
            text-align: center;
            vertical-align: middle;
            margin-bottom: 3px;
        }

        input {
            width: 200px;    
        }

        label {
            font-size: smaller;
            font-weight: bolder;
            padding-right: 3px;
        }

        .playerButton {
            margin-top: 2px;
            padding-left: 5px;
            padding-right: 5px;
            color: rgb(255,255,200);
            font-size: large;
            font-weight: bold;
            background: linear-gradient(to left top, rgb(130, 150, 235), rgb(130, 150, 235), rgb(130, 150, 235), white);
            margin-right: 5px;
            border: 2px solid black;
            border-radius: 15px;
            display: inline-block;
            text-align: center;
            cursor: pointer;
            width: 12px;
        }
        .playerButton:hover {
            color: black;
            background: linear-gradient(to left top, white, white, white, rgb(130, 150, 235));
        }`]
})
export class SettingsComponent {

    @Input() mode!: GameMode;

    @Output() game: EventEmitter<Pairs> = new EventEmitter<Pairs>();

    modes = GameMode;

    selectedDifficulty: Difficulty = Difficulty.NORMAL;

    difficulty = Difficulty;

    players: string[] = ['Player 1', 'Player 2'];

    addPlayer() {
        this.players.push('Player ' + (this.players.length + 1));
    }

    removePlayer() {
        if (this.players.length > 1) {
            this.players.pop();
        }
    }

    selectDifficulty(difficulty: Difficulty) {
        this.selectedDifficulty = difficulty;
    }

    setPlayerName(id : number, target: EventTarget | null) {
        this.players[id] = (target as HTMLInputElement).value;
    }

    start() {
        if (this.mode !== GameMode.MULTI || this.players.length > 1) {
            let players = this.mode === GameMode.MULTI ? this.players : [this.players[0]];
            this.game.emit(new Pairs(players, this.selectedDifficulty));
        }
    }
}