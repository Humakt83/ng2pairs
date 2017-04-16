import { Component } from '@angular/core';
import { GameMode } from './gamemode';
import { Pairs } from './pairs';

@Component({
    selector: 'pairs',
    template: `<div class="pairs">
                <div *ngIf="selectGameMode">
                    <div class="pairsButton" (click)="toSettings(${GameMode.SINGLE})">SINGLE</div>
                    <div class="pairsButton" (click)="toSettings(${GameMode.MULTI})">MULTI</div>
                </div>
                <settings *ngIf="!selectGameMode && !gameStarted" [mode]="selectedGameMode" (game)="startGame($event)"></settings>
                <game *ngIf="gameStarted" [pairs]="pairs" (toMain)="selectGameMode = true; gameStarted = false"></game>
            </div>`,
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
        }`]
})
export class PairsComponent {

    selectGameMode : boolean = true;
    selectedGameMode : GameMode;
    gameStarted: boolean = false;
    pairs: Pairs;

    toSettings(mode: GameMode) {
        this.selectGameMode = false;
        this.selectedGameMode = mode;
    }

    startGame(pairs: Pairs) {
        this.pairs = pairs;
        this.gameStarted = true;        
    }
}