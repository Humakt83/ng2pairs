import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PairsModule } from 'ng2pairs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PairsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
