import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PuzzlesComponent } from './puzzles/puzzles.component';

import { FormsModule } from '@angular/forms';
import { PuzzleDetailComponent } from './puzzle-detail/puzzle-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PuzzlesComponent,
    PuzzleDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
