import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PairsModule } from 'src/pairs.module';
import { PairsComponent } from 'src/pairs.component';

@NgModule({
    declarations: [],
    imports: [BrowserModule, FormsModule, PairsModule.forRoot()],
    bootstrap: [PairsComponent]
})
export class ExampleModule {}