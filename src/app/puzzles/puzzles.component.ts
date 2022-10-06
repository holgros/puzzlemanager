import { Component, OnInit, Input } from '@angular/core';
import { Puzzle } from '../puzzle';
import { PuzzleService } from '../puzzle.service';
import { HttpClient, HttpXhrBackend } from '@angular/common/http';

@Component({
  selector: 'app-puzzles',
  templateUrl: './puzzles.component.html',
  styleUrls: ['./puzzles.component.css']
})
export class PuzzlesComponent implements OnInit {

  //message: string;

  @Input() user: string;
  @Input() puzzleService: PuzzleService;

  newPuzzleTitle: string | undefined;
  newPuzzleObject: Puzzle;

  puzzles: Puzzle[] | undefined;

  /*
  http = new HttpClient(new HttpXhrBackend({ 
    build: () => new XMLHttpRequest() 
  }));
  puzzleService = new PuzzleService(this.http);
  */

  handleDelete(data): void {
    //this.message = data;
    /*
    for (let i = 0; i < this.puzzles.length; i++) {
      if (this.puzzles[i]._id == data) {
        this.puzzles.splice(i, 1);
      }
    }
    */
    this.ngOnInit();
  }

  getPuzzles(): void {
    this.puzzleService.getPuzzles(this.user).subscribe(puzzles => this.puzzles = puzzles.reverse());
  }

  newPuzzle(): void {
    this.selectedPuzzle = null;
    this.newPuzzleTitle = "New puzzle";
    this.newPuzzleObject = {
      _id: null, 
      title: this.newPuzzleTitle, 
      creator: this.user, 
      created: new Date(), 
      data: [] 
    };
    for (let i = 0; i < 9; i++) {
      this.newPuzzleObject.data.push({
        angles: ["A", "B", "C"],
        terms: ["text1", "text2", "text3"]
      });
    }
  }

  createPuzzle(): void {
    /*
    let trimmedTitle = this.newPuzzleTitle.replace(" ", "+");
    trimmedTitle = trimmedTitle.replace(/[^a-zA-Z0-9-_]/g, "");
    if (!trimmedTitle) {
      alert("Title must not be empty!");
      return;
    }
    this.newPuzzleObject.title = trimmedTitle;
    */
    this.newPuzzleObject.title = this.newPuzzleTitle;
    this.puzzleService.newPuzzle(this.newPuzzleObject).subscribe(puzzle => {
      //this.getPuzzles();
      this.ngOnInit();
      /*
      this.newPuzzleObject.created = this.newPuzzleObject.created.toISOString();
      this.puzzles.unshift(this.newPuzzleObject);
      */
    });
    this.newPuzzleTitle = undefined;
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

  constructor() { }

  ngOnInit(): void {
    this.getPuzzles();
  }

  selectedPuzzle: Puzzle;
  onSelect(puzzle: Puzzle): void {
    this.newPuzzleTitle = undefined;
    if (this.selectedPuzzle == puzzle) {  // toggle
      this.selectedPuzzle = null;
      return;
    }
    this.selectedPuzzle = puzzle;
  }

}
