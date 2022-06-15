import { Component, Input, OnInit } from '@angular/core';

import { Puzzle } from '../puzzle';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  @Input() puzzle: Puzzle;

  constructor() { }

  ngOnInit(): void {
  }

}
