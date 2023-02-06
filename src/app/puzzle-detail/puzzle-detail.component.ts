import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Puzzle } from '../puzzle';

import { Piece } from '../piece';
import { PuzzleService } from '../puzzle.service';

import { HttpClient, HttpXhrBackend } from '@angular/common/http';

@Component({
  selector: 'app-puzzle-detail',
  templateUrl: './puzzle-detail.component.html',
  styleUrls: ['./puzzle-detail.component.css']
})
export class PuzzleDetailComponent implements OnInit {

  http = new HttpClient(new HttpXhrBackend({ 
    build: () => new XMLHttpRequest() 
  }));

  @Input() puzzle: Puzzle;
  @Input() puzzleService: PuzzleService;
  @Output() puzzleDelete = new EventEmitter<string>();

  previousTitle: string;

  tempTitle: string;

  hovering: number;

  restore: Piece;

  letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  constructor() { }

  ngOnInit(): void {
    //this.previousTitle = this.puzzle.title;
    this.tempTitle = this.puzzle.title;
  }

  selectedPiece: Piece;

  copyLink(): void {
    navigator.clipboard.writeText(`https://avateknik.se/puzzle/sign-in.php?teacher=${this.puzzle.creator}&puzzle=${this.puzzle._id}`);
    alert("Copied to clipboard!");
  }
  
  onMouseenter(piece: Piece): void {
    if (!this.selectedPiece) this.hovering = this.puzzle.data.indexOf(piece);
  }

  onMouseleave() {
    if (!this.selectedPiece) this.hovering = null;
  }


  onSelect(piece: Piece): void {
    this.restore = {angles: [piece.angles[0], piece.angles[1], piece.angles[2]], terms: [piece.terms[0], piece.terms[1], piece.terms[2]]};
    if (!this.selectedPiece) this.selectedPiece = piece;
  }

  updateLetter(index: number): void {
    this.selectedPiece.angles[index-1] = (<HTMLInputElement>document.getElementById("letter"+index)).value;
  }

  closeEditor(): void {
    this.selectedPiece = null;
    this.hovering = null;
  }

  abortChanges(): void {
    this.selectedPiece.angles = this.restore.angles;
    this.selectedPiece.terms = this.restore.terms;
    this.closeEditor();
  }

  async saveChanges(): Promise<void> {
    this.puzzleService.updatePiece(this.puzzle, this.puzzle.data.indexOf(this.selectedPiece)).subscribe(pieces => this.puzzle.data = pieces.data);
    this.closeEditor();
  }

  saveTitle(): void {
    this.puzzle.title = this.tempTitle;
    this.puzzleService.updateTitle(this.puzzle).subscribe(pieces => {
      this.puzzle.data = pieces.data;
      //this.puzzleChanges.emit(true);
    });
    //this.previousTitle = this.puzzle.title;
  }

  restoreTitle(): void {
    //this.puzzle.title = this.previousTitle;
    this.tempTitle = this.puzzle.title;
  }

  delete(): void {
    let ok = confirm("Do you really want to delete " + this.puzzle.title + "?\nThis operation cannot be undone.");
    if (ok) {
      this.puzzleService.deletePuzzle(this.puzzle._id).subscribe(result => {
        //console.log = result;
        this.puzzleDelete.emit(this.puzzle._id);
        //this.puzzle = undefined;
      });
    }
  }

}
