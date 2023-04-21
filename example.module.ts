import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PairsModule } from 'src/pairs/pairs.module';
import { PairsComponent } from 'src/pairs/pairs.component';

@NgModule({
    declarations: [],
    imports: [BrowserModule, FormsModule, PairsModule.forRoot()],
    bootstrap: [PairsComponent]
})
export class ExampleModule {}