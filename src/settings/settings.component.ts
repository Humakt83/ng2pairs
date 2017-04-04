import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GameMode } from '../gamemode';
import { Difficulty } from '../difficulty';
import { Pairs } from '../pairs';

@Component({
    moduleId: __moduleName,
    selector: 'settings',
    templateUrl: 'settings.html',
    styleUrls: ['../pairs.component.css', 'settings.css']
})
export class SettingsComponent {

    @Input() mode: GameMode;

    @Output() game: EventEmitter<Pairs> = new EventEmitter<Pairs>();

    modes = GameMode;

    selectedDifficulty: Difficulty = Difficulty.NORMAL;

    difficulty = Difficulty;

    players: string[] = ['Player 1', 'Player 2'];

    addPlayer() {
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

    start() {
        if (this.mode !== GameMode.MULTI || this.players.length > 1) {
            let players = this.mode === GameMode.MULTI ? this.players : [this.players[0]];
            this.game.emit(new Pairs(players, this.selectedDifficulty));
        }
    }
}