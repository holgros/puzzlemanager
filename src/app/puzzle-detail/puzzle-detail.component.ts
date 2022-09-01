import { Component, OnInit, Input } from '@angular/core';

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
    if (this.selectedPiece == piece) {  // toggle
      this.selectedPiece = null;
      return;
    }
    this.selectedPiece = piece;
  }

}
