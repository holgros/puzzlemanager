import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PuzzlesComponent } from './puzzles/puzzles.component';

import { FormsModule } from '@angular/forms';
import { PuzzleDetailComponent } from './puzzle-detail/puzzle-detail.component';
import { PreviewComponent } from './preview/preview.component';

@NgModule({
  declarations: [
    AppComponent,
    PuzzlesComponent,
    PuzzleDetailComponent,
    PreviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
