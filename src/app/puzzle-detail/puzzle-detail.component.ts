import { Component, OnInit, Input, Output } from '@angular/core';

import { Puzzle } from '../puzzle';

import { Piece } from '../piece';

@Component({
  selector: 'app-puzzle-detail',
  templateUrl: './puzzle-detail.component.html',
  styleUrls: ['./puzzle-detail.component.css']
})
export class PuzzleDetailComponent implements OnInit {
  
  @Input() puzzle: Puzzle;
  //@Input() piece: Piece;

  hovering: number;

  restore: Piece;

  letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  constructor() { }

  ngOnInit(): void {
  }

  selectedPiece: Piece;
  
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

}
