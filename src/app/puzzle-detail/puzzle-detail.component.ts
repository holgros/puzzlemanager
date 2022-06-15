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

  constructor() { }

  ngOnInit(): void {
  }

}
