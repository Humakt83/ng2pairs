import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { PairsComponent } from './pairs.component';
import { SettingsComponent } from './settings/settings.component';
import { GameComponent } from './game/game.component';
import { PieceComponent } from './game/pieces/piece.component';
import { SafeStylePipe } from './safestyle.pipe';
import { PairsService } from './pairs.service';

@NgModule({
    declarations: [PairsComponent, SettingsComponent, GameComponent, SafeStylePipe, PieceComponent],
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [PairsService],
    exports: [PairsComponent]
})
export class PairsModule {

    static forRoot(): ModuleWithProviders<PairsModule> {
        return {
            ngModule: PairsModule,
            providers: [PairsService]
        }
    }
}
