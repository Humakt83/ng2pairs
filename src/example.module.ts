import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { PairsComponent, PairsModule } from 'ng2pairs';

@NgModule({
    declarations: [],
    imports: [BrowserModule, PairsModule.forRoot()],
    providers: [],
    bootstrap: [PairsComponent]
})
export class ExampleModule {}
