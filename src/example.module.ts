import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { PairsModule } from './pairs/pairs.module';
import { PairsComponent } from './pairs/pairs.component';

@NgModule({
    declarations: [],
    imports: [BrowserModule, PairsModule.forRoot()],
    providers: [],
    bootstrap: [PairsComponent]
})
export class ExampleModule {}
