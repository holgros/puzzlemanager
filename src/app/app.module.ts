import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PuzzlesComponent } from './puzzles/puzzles.component';

import { FormsModule } from '@angular/forms';
import { PuzzleDetailComponent } from './puzzle-detail/puzzle-detail.component';
import { PreviewComponent } from './preview/preview.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PuzzlesComponent,
    PuzzleDetailComponent,
    PreviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
