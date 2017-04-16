webpackJsonp([1,3],{

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__example_module__ = __webpack_require__(132);


var platform = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])();
platform.bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__example_module__["a" /* ExampleModule */]);
//# sourceMappingURL=boot.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_src_pairs_module__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_src_pairs_component__ = __webpack_require__(81);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExampleModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ExampleModule = (function () {
    function ExampleModule() {
    }
    return ExampleModule;
}());
ExampleModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [],
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3_src_pairs_module__["a" /* PairsModule */].forRoot()],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4_src_pairs_component__["a" /* PairsComponent */]]
    })
], ExampleModule);

//# sourceMappingURL=example.module.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Difficulty; });
var Difficulty;
(function (Difficulty) {
    Difficulty[Difficulty["EASY"] = 0] = "EASY";
    Difficulty[Difficulty["NORMAL"] = 1] = "NORMAL";
    Difficulty[Difficulty["HARD"] = 2] = "HARD";
})(Difficulty || (Difficulty = {}));
//# sourceMappingURL=difficulty.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pairs__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pairs_service__ = __webpack_require__(82);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GameComponent = (function () {
    function GameComponent(pairsService) {
        this.pairsService = pairsService;
        this.pieces = [];
        this.clickedPieces = [];
        this.clicks = 0;
        this.gameOver = false;
        this.players = [];
        this.toMain = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
    }
    GameComponent.prototype.ngOnInit = function () {
        this.generatePieces();
        if (this.pairs.playerNames.length > 1) {
            this.players = this.pairs.playerNames.map(function (n) { return new Player(n); });
            this.activePlayer = this.players[0];
        }
    };
    GameComponent.prototype.click = function (piece) {
        if (piece.found)
            return;
        this.clicks++;
        if (this.clickedPieces.length > 1) {
            this.clickedPieces.forEach(function (p) { return p.turned = false; });
            this.clickedPieces = [];
        }
        piece.turned = true;
        this.clickedPieces.push(piece);
        if (this.clickedPieces.length === 2) {
            if (this.clickedPieces[0].pair === piece) {
                this.clickedPieces.forEach(function (p) { return p.found = true; });
                this.clickedPieces = [];
                if (this.activePlayer) {
                    this.activePlayer.score++;
                }
            }
            else {
                this.setNextActivePlayer();
            }
        }
        this.checkGameStatus();
    };
    GameComponent.prototype.backToMain = function () {
        this.toMain.emit(true);
    };
    GameComponent.prototype.generatePieces = function () {
        var tableModifier = this.pairs.getNumberOfPieces() > 10 && (this.pairs.getNumberOfPieces() * 2) % 10 === 0 ? 10 : 5;
        this.pieces = this.pairsService.generatePieces(this.pairs.getNumberOfPieces());
        this.pieceTable = Array((this.pairs.getNumberOfPieces() * 2) / tableModifier);
        for (var x = 0; x < this.pieceTable.length; x++) {
            this.pieceTable[x] = [];
            for (var y = 0; y < tableModifier; y++) {
                this.pieceTable[x].push(this.pieces[(x * tableModifier) + y]);
            }
        }
    };
    GameComponent.prototype.setNextActivePlayer = function () {
        if (this.activePlayer) {
            var index = this.players.indexOf(this.activePlayer) + 1;
            this.activePlayer = this.players[index >= this.players.length ? 0 : index];
        }
    };
    GameComponent.prototype.checkGameStatus = function () {
        if (this.pieces.filter(function (p) { return !p.found; }).length < 1) {
            this.gameOver = true;
        }
    };
    return GameComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__pairs__["a" /* Pairs */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__pairs__["a" /* Pairs */]) === "function" && _a || Object)
], GameComponent.prototype, "pairs", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Output */])(),
    __metadata("design:type", Object)
], GameComponent.prototype, "toMain", void 0);
GameComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Component */])({
        selector: 'game',
        template: "\n        <div  *ngIf=\"activePlayer\">\n            <div class=\"player\" *ngFor=\"let player of players\" [class.highlightPlayer]=\"activePlayer===player\">\n                {{player.name}} score: {{player.score}}\n            </div>\n        </div>\n\n        <div>\n            <table>\n                <tr *ngFor=\"let row of pieceTable\">\n                    <td *ngFor=\"let column of row\" (click)=\"click(column)\">\n                        <div *ngIf=\"!column.image || !column.turned\" [style.background]=\"(column.turned ? 'linear-gradient(to left, ' + column.color1 + ', ' + column.color2 + ')' : 'linear-gradient(to top, black, gray, black') | safeCSS\"></div>\n                        <div *ngIf=\"column.image && column.turned\">\n                            <img [src]=\"column.image\">\n                        </div>\n                    </td>\n                </tr>\n            </table>\n        </div>\n\n        <div class=\"gameOver\" *ngIf=\"gameOver\">\n            {{activePlayer ? activePlayer.name + ' is victorious!': 'Congratulations! You are victorious.'}}\n            <br>            \n        </div>\n\n        <div class=\"clicks\"> {{clicks}} clicks </div>\n        <div class=\"pairsButton\" (click)=\"backToMain()\">Back to Main</div>\n    ",
        styles: ["\n        .pairsButton {\n            padding: 5px;\n            color: rgb(255,255,200);\n            font-size: x-large;\n            font-weight: bold;\n            background: linear-gradient(to left top, black, black, black, white);\n            margin-right: 5px;\n            border: 3px solid black;\n            border-radius: 15px;\n            display: inline-block;\n            text-align: center;\n            cursor: pointer;\n        }\n\n        .pairsButton:hover {\n            color: black;\n            background: linear-gradient(to left top, white, white, white, black);\n        }\n\n        .pairsButtonSelected {\n            background: linear-gradient(to left top, white, white, white, black);\n            color: black;\n        }\n\n        .pairsButtonSelected:hover {\n            color: rgb(255,255,200);;\n            background: linear-gradient(to left top, black, black, black, white);\n        }\n\n        .pairs {\n            text-align: center;\n        }\n        div {\n            text-align: center;\n            margin-left: auto;\n            margin-right: auto;\n            position: relative;\n            display: table;\n        }\n\n        .player {\n            display: inline-block;\n            background: linear-gradient(to left top, white, white, white, rgb(130, 150, 235));\n            color: black;\n            border: 1px solid black;\n            border-radius: 5px;\n            font-weight: bolder;\n            padding-left: 5px;\n            padding-right: 5px;\n            margin-right: 2px;\n        }\n\n        .highlightPlayer {\n            background: linear-gradient(to left top, rgb(235, 255, 70), rgb(235, 255, 70), rgb(235, 255, 70), rgb(130, 150, 235));\n        }\n\n        table {\n            text-align: center;\n        }\n\n        td {\n            width: 75px;\n            height: 75px;\n            border: 1px solid black;\n            cursor: pointer;\n            padding: 0;\n        }\n\n        td div {\n            width: inherit;\n            height: inherit;\n        }\n\n        img {\n            width: 100%;\n            height: 100%;\n            object-fit: contain;\n        }\n\n        td.found {\n            cursor: default;\n        }\n\n        .clicks,\n        .gameOver {\n            background: linear-gradient(to left top, white, white, white, rgb(130, 150, 235));\n            border: 1px solid black;\n            border-radius: 5px;\n            color: black;\n            font-weight: bolder;\n            padding-left: 8px;\n            padding-right: 8px;\n            margin-top: 5px;\n        }\n\n        .gameOver {\n            font-size: x-large;\n        }\n    "]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__pairs_service__["a" /* PairsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__pairs_service__["a" /* PairsService */]) === "function" && _b || Object])
], GameComponent);

var Player = (function () {
    function Player(name) {
        this.name = name;
        this.score = 0;
    }
    return Player;
}());
var _a, _b;
//# sourceMappingURL=game.component.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pairs_component__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_settings_component__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__game_game_component__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__safestyle_pipe__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pairs_service__ = __webpack_require__(82);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PairsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var PairsModule = PairsModule_1 = (function () {
    function PairsModule() {
    }
    PairsModule.forRoot = function () {
        return {
            ngModule: PairsModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_8__pairs_service__["a" /* PairsService */]]
        };
    };
    return PairsModule;
}());
PairsModule = PairsModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_4__pairs_component__["a" /* PairsComponent */], __WEBPACK_IMPORTED_MODULE_5__settings_settings_component__["a" /* SettingsComponent */], __WEBPACK_IMPORTED_MODULE_6__game_game_component__["a" /* GameComponent */], __WEBPACK_IMPORTED_MODULE_7__safestyle_pipe__["a" /* SafeStylePipe */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__pairs_service__["a" /* PairsService */]],
        exports: [__WEBPACK_IMPORTED_MODULE_4__pairs_component__["a" /* PairsComponent */]]
    })
], PairsModule);

var PairsModule_1;
//# sourceMappingURL=pairs.module.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafeStylePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeStylePipe = (function () {
    function SafeStylePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeStylePipe.prototype.transform = function (style) {
        return this.sanitizer.bypassSecurityTrustStyle(style);
    };
    return SafeStylePipe;
}());
SafeStylePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Pipe */])({ name: 'safeCSS' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _a || Object])
], SafeStylePipe);

var _a;
//# sourceMappingURL=safestyle.pipe.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gamemode__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__difficulty__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pairs__ = __webpack_require__(83);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingsComponent = (function () {
    function SettingsComponent() {
        this.game = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
        this.modes = __WEBPACK_IMPORTED_MODULE_1__gamemode__["a" /* GameMode */];
        this.selectedDifficulty = __WEBPACK_IMPORTED_MODULE_2__difficulty__["a" /* Difficulty */].NORMAL;
        this.difficulty = __WEBPACK_IMPORTED_MODULE_2__difficulty__["a" /* Difficulty */];
        this.players = ['Player 1', 'Player 2'];
    }
    SettingsComponent.prototype.addPlayer = function () {
        this.players.push('Player ' + (this.players.length + 1));
    };
    SettingsComponent.prototype.removePlayer = function () {
        if (this.players.length > 1) {
            this.players.pop();
        }
    };
    SettingsComponent.prototype.selectDifficulty = function (difficulty) {
        this.selectedDifficulty = difficulty;
    };
    SettingsComponent.prototype.start = function () {
        if (this.mode !== __WEBPACK_IMPORTED_MODULE_1__gamemode__["a" /* GameMode */].MULTI || this.players.length > 1) {
            var players = this.mode === __WEBPACK_IMPORTED_MODULE_1__gamemode__["a" /* GameMode */].MULTI ? this.players : [this.players[0]];
            this.game.emit(new __WEBPACK_IMPORTED_MODULE_3__pairs__["a" /* Pairs */](players, this.selectedDifficulty));
        }
    };
    return SettingsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__gamemode__["a" /* GameMode */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__gamemode__["a" /* GameMode */]) === "function" && _a || Object)
], SettingsComponent.prototype, "mode", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]) === "function" && _b || Object)
], SettingsComponent.prototype, "game", void 0);
SettingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Component */])({
        selector: 'settings',
        template: "\n        <div class=\"pairsButton\" [class.pairsButtonSelected]=\"selectedDifficulty === difficulty.EASY\" (click)=\"selectDifficulty(difficulty.EASY)\">EASY</div>\n        <div class=\"pairsButton\" [class.pairsButtonSelected]=\"selectedDifficulty === difficulty.NORMAL\" (click)=\"selectDifficulty(difficulty.NORMAL)\">NORMAL</div>\n        <div class=\"pairsButton\" [class.pairsButtonSelected]=\"selectedDifficulty === difficulty.HARD\" (click)=\"selectDifficulty(difficulty.HARD)\">HARD</div>\n        <div *ngIf=\"mode === modes.MULTI\" class=\"playerInputs\">    \n            <div class=\"playerInput\" *ngFor=\"let player of players; let id = index\">\n                <label>Player {{id + 1}}</label>\n                <input (blur)=\"players[id] = $event.target.value\" [ngModel]=\"players[id]\">\n            </div>\n            <div class=\"playerButton\" alt=\"Add player\" (click)=\"addPlayer()\">+</div>\n            <div class=\"playerButton\" alt=\"Remove player\" (click)=\"removePlayer()\">-</div>\n        </div>\n        <div class=\"pairsButton\" (click)=\"start()\">START</div>\n    ",
        styles: ["\n        .pairsButton {\n            padding: 5px;\n            color: rgb(255,255,200);\n            font-size: x-large;\n            font-weight: bold;\n            background: linear-gradient(to left top, black, black, black, white);\n            margin-right: 5px;\n            border: 3px solid black;\n            border-radius: 15px;\n            display: inline-block;\n            text-align: center;\n            cursor: pointer;\n        }\n\n        .pairsButton:hover {\n            color: black;\n            background: linear-gradient(to left top, white, white, white, black);\n        }\n\n        .pairsButtonSelected {\n            background: linear-gradient(to left top, white, white, white, black);\n            color: black;\n        }\n\n        .pairsButtonSelected:hover {\n            color: rgb(255,255,200);;\n            background: linear-gradient(to left top, black, black, black, white);\n        }\n\n        .pairs {\n            text-align: center;\n        }\n\n        .playerInputs {\n            display: table;    \n            width: 100%;\n            margin-top: 5px;\n        }\n\n        .playerInput {\n            display: table-row;\n            text-align: center;\n            vertical-align: middle;\n            margin-bottom: 3px;\n        }\n\n        input {\n            width: 200px;    \n        }\n\n        label {\n            font-size: smaller;\n            font-weight: bolder;\n            padding-right: 3px;\n        }\n\n        .playerButton {\n            margin-top: 2px;\n            padding-left: 5px;\n            padding-right: 5px;\n            color: rgb(255,255,200);\n            font-size: large;\n            font-weight: bold;\n            background: linear-gradient(to left top, rgb(130, 150, 235), rgb(130, 150, 235), rgb(130, 150, 235), white);\n            margin-right: 5px;\n            border: 2px solid black;\n            border-radius: 15px;\n            display: inline-block;\n            text-align: center;\n            cursor: pointer;\n            width: 12px;\n        }\n        .playerButton:hover {\n            color: black;\n            background: linear-gradient(to left top, white, white, white, rgb(130, 150, 235));\n        }"]
    })
], SettingsComponent);

var _a, _b;
//# sourceMappingURL=settings.component.js.map

/***/ }),

/***/ 463:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(128);


/***/ }),

/***/ 78:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 78;


/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameMode; });
var GameMode;
(function (GameMode) {
    GameMode[GameMode["MULTI"] = 0] = "MULTI";
    GameMode[GameMode["SINGLE"] = 1] = "SINGLE";
})(GameMode || (GameMode = {}));
//# sourceMappingURL=gamemode.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gamemode__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PairsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PairsComponent = (function () {
    function PairsComponent() {
        this.selectGameMode = true;
        this.gameStarted = false;
    }
    PairsComponent.prototype.toSettings = function (mode) {
        this.selectGameMode = false;
        this.selectedGameMode = mode;
    };
    PairsComponent.prototype.startGame = function (pairs) {
        this.pairs = pairs;
        this.gameStarted = true;
    };
    return PairsComponent;
}());
PairsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Component */])({
        selector: 'pairs',
        template: "<div class=\"pairs\">\n                <div *ngIf=\"selectGameMode\">\n                    <div class=\"pairsButton\" (click)=\"toSettings(" + __WEBPACK_IMPORTED_MODULE_1__gamemode__["a" /* GameMode */].SINGLE + ")\">SINGLE</div>\n                    <div class=\"pairsButton\" (click)=\"toSettings(" + __WEBPACK_IMPORTED_MODULE_1__gamemode__["a" /* GameMode */].MULTI + ")\">MULTI</div>\n                </div>\n                <settings *ngIf=\"!selectGameMode && !gameStarted\" [mode]=\"selectedGameMode\" (game)=\"startGame($event)\"></settings>\n                <game *ngIf=\"gameStarted\" [pairs]=\"pairs\" (toMain)=\"selectGameMode = true; gameStarted = false\"></game>\n            </div>",
        styles: ["\n        .pairsButton {\n            padding: 5px;\n            color: rgb(255,255,200);\n            font-size: x-large;\n            font-weight: bold;\n            background: linear-gradient(to left top, black, black, black, white);\n            margin-right: 5px;\n            border: 3px solid black;\n            border-radius: 15px;\n            display: inline-block;\n            text-align: center;\n            cursor: pointer;\n        }\n\n        .pairsButton:hover {\n            color: black;\n            background: linear-gradient(to left top, white, white, white, black);\n        }\n\n        .pairsButtonSelected {\n            background: linear-gradient(to left top, white, white, white, black);\n            color: black;\n        }\n\n        .pairsButtonSelected:hover {\n            color: rgb(255,255,200);;\n            background: linear-gradient(to left top, black, black, black, white);\n        }\n\n        .pairs {\n            text-align: center;\n        }"]
    })
], PairsComponent);

//# sourceMappingURL=pairs.component.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PairsService; });
/* unused harmony export Piece */
/* unused harmony export ImagePiece */
/* unused harmony export ColorPiece */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var COLOR_PREFIX = 'rgb';
var COLORS = ['(0,0,0)', '(50, 50, 50)', '(100, 100, 100)', '(150, 150, 150)', '(200, 200, 200)', '(250, 250, 250)',
    '(0, 50, 50)', '(0, 100, 100)', '(0, 150, 150)', '(0, 200, 200)', '(0, 250, 250)',
    '(50, 50, 0)', '(100, 100, 0)', '(150, 150, 0)', '(200, 200, 0)', '(250, 250, 0)',
    '(50, 0, 50)', '(100, 0, 100)', '(150, 0, 150)', '(200, 0, 200)', '(250, 0, 250)',
    '(0, 0, 50)', '(0, 0, 100)', '(0, 0, 150)', '(0, 0, 200)', '(0, 0, 250)',
    '(0, 50, 0)', '(0, 100, 0)', '(0, 150, 0)', '(0, 200, 0)', '(0, 250, 0)',
    '(50, 0, 0)', '(100, 0, 0)', '(150, 0, 0)', '(200, 0, 0)', '(250, 0, 0)'];
var PairsService = (function () {
    function PairsService() {
        this.pairImages = [];
    }
    PairsService.prototype.setImages = function (images) {
        this.pairImages = images;
    };
    PairsService.prototype.generatePieces = function (piecesAmount) {
        var pieces = [];
        for (var i = 0; i < piecesAmount && this.pairImages.length > i; i++) {
            var piece = new ImagePiece(this.pairImages[i]);
            var pair = new ImagePiece(this.pairImages[i], piece);
            pieces.push(piece);
            pieces.push(pair);
        }
        var amountLeft = pieces.length > 0 ? piecesAmount - (pieces.length / 2) : piecesAmount;
        pieces = pieces.concat(this.generateColorPieces(amountLeft));
        pieces = this.shufflePieces(pieces);
        return pieces;
    };
    PairsService.prototype.generateColorPieces = function (amountLeft) {
        var pieces = [];
        var _loop_1 = function (i) {
            var piece;
            do {
                piece = new ColorPiece(this_1.generateColor(), this_1.generateColor());
            } while (pieces.filter(function (p) { return p.color1 === piece.color1 && p.color2 === piece.color2; }).length > 0);
            var pair = new ColorPiece(piece.color1, piece.color2, piece);
            pieces.push(piece);
            pieces.push(pair);
        };
        var this_1 = this;
        for (var i = 0; i < amountLeft; i++) {
            _loop_1(i);
        }
        return pieces;
    };
    PairsService.prototype.generateColor = function () {
        return COLOR_PREFIX + COLORS[Math.floor(Math.random() * COLORS.length)];
    };
    PairsService.prototype.shufflePieces = function (array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    };
    return PairsService;
}());
PairsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])()
], PairsService);

var Piece = (function () {
    function Piece(pair) {
        if (pair === void 0) { pair = undefined; }
        this.turned = false;
        this.found = false;
        if (pair) {
            this.pair = pair;
            pair.pair = this;
        }
    }
    return Piece;
}());

var ImagePiece = (function (_super) {
    __extends(ImagePiece, _super);
    function ImagePiece(image, pair) {
        if (pair === void 0) { pair = undefined; }
        var _this = _super.call(this, pair) || this;
        _this.image = image;
        return _this;
    }
    return ImagePiece;
}(Piece));

var ColorPiece = (function (_super) {
    __extends(ColorPiece, _super);
    function ColorPiece(color1, color2, pair) {
        if (pair === void 0) { pair = undefined; }
        var _this = _super.call(this, pair) || this;
        _this.color1 = color1;
        _this.color2 = color2;
        return _this;
    }
    return ColorPiece;
}(Piece));

//# sourceMappingURL=pairs.service.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pairs; });
var Pairs = (function () {
    function Pairs(playerNames, difficulty) {
        this.playerNames = playerNames;
        this.difficulty = difficulty;
    }
    Pairs.prototype.getNumberOfPieces = function () {
        var mpModifier = this.playerNames.length > 1 ? 3 : 1;
        return (this.difficulty + 1) * 5 * mpModifier;
    };
    return Pairs;
}());

//# sourceMappingURL=pairs.js.map

/***/ })

},[463]);
//# sourceMappingURL=main.bundle.js.map