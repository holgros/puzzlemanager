import { Component, OnInit } from '@angular/core';
import { Puzzle } from '../puzzle';
import { PUZZLES } from '../mock-puzzles';
import { PuzzleService } from '../puzzle.service';
import { HttpClient, HttpXhrBackend } from '@angular/common/http';

@Component({
  selector: 'app-puzzles',
  templateUrl: './puzzles.component.html',
  styleUrls: ['./puzzles.component.css']
})
export class PuzzlesComponent implements OnInit {

  puzzles: Puzzle[] | undefined;

  //puzzles = PUZZLES;
  http = new HttpClient(new HttpXhrBackend({ 
    build: () => new XMLHttpRequest() 
  }));
  puzzleService = new PuzzleService(this.http);

  getPuzzles(): void {
    this.puzzleService.getPuzzles().subscribe(puzzles => this.puzzles = puzzles);
  }
  /*
  convertDates(): void {
    for (let i = 0; i < this.puzzles.length; i++) {
      this.puzzles[i].created = new Date(this.puzzles[i].created);
    }
  }
  */

  /*
  puzzle: Puzzle = {
    id: "626a93d8bfa77bba3be3b7c3",
    title: "Biology puzzle",
    created: new Date(),
    data: [
      {
        "angles": ["Y", "I", "F"],
        "terms": ["SA:Vol ratio", "Unipotent", "Interacting with the environment"]
      },
      {
        "angles": ["R", "A", "B"],
        "terms": ["Response", "Metabolism", "Removal of waste products"]
      },
      {
        "angles": ["Q", "V", "H"],
        "terms": ["Making energy", "Multicellar", "Reproduction"]
      },
      {
        "angles": ["J", "K", "G"],
        "terms": ["Bone marrow", "Excretion", "Changing size/shape"]
      },
      {
        "angles": ["L", "P", "C"],
        "terms": ["Growth", "Nutrition", "Differentiation"]
      },
      {
        "angles": ["S", "N", "X"],
        "terms": ["Paracemium", "Expression", "Compartmentalization"]
      },
      {
        "angles": ["T", "D", "V"],
        "terms": ["Exchange gas and materials", "Homeostasis", "Magnification"]
      },
      {
        "angles": ["E", "M", "Z"],
        "terms": ["Produce offspring", "Stem cell", "Constant inner environment"]
      },
      {
        "angles": ["A", "O", "W"],
        "terms": ["Unspecialized cell", "Smallest unit of life", "Cell theory"]
      }
    ]
  }
  */

  constructor(private heroService: PuzzleService) { }

  ngOnInit(): void {
    this.getPuzzles();
  }

  selectedPuzzle: Puzzle;
  onSelect(puzzle: Puzzle): void {
    
    if (this.selectedPuzzle == puzzle) {  // toggle
      this.selectedPuzzle = null;
      return;
    }
    this.selectedPuzzle = puzzle;
  }

}
