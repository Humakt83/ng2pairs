import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PairsModule } from '../pairs/pairs.module';

import { AppComponent } from './app.component';

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
