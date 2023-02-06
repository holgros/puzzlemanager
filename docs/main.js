(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Elev\Desktop\div\buzz\angular\puzzle-manager\src\main.ts */"zUnb");


/***/ }),

/***/ "3CGV":
/*!**********************************************!*\
  !*** ./src/app/puzzles/puzzles.component.ts ***!
  \**********************************************/
/*! exports provided: PuzzlesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PuzzlesComponent", function() { return PuzzlesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _puzzle_detail_puzzle_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../puzzle-detail/puzzle-detail.component */ "vds2");





function PuzzlesComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PuzzlesComponent_button_0_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.newPuzzle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Create new puzzle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PuzzlesComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Create new puzzle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Title:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PuzzlesComponent_div_1_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.newPuzzleTitle = $event; })("focus", function PuzzlesComponent_div_1_Template_input_focus_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.newPuzzleTitle = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PuzzlesComponent_div_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.newPuzzleTitle = undefined; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PuzzlesComponent_div_1_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.createPuzzle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Create");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.newPuzzleTitle);
} }
function PuzzlesComponent_h2_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Fetching puzzles...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PuzzlesComponent_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("User ", ctx_r3.user, " does not have any puzzles on the server.");
} }
function PuzzlesComponent_h2_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "My puzzles");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PuzzlesComponent_li_6_app_puzzle_detail_6_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-puzzle-detail", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("puzzleDelete", function PuzzlesComponent_li_6_app_puzzle_detail_6_Template_app_puzzle_detail_puzzleDelete_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.handleDelete($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("puzzle", ctx_r14.selectedPuzzle)("puzzleService", ctx_r14.puzzleService);
} }
function PuzzlesComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PuzzlesComponent_li_6_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const puzzle_r13 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.onSelect(puzzle_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PuzzlesComponent_li_6_app_puzzle_detail_6_Template, 1, 2, "app-puzzle-detail", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const puzzle_r13 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", puzzle_r13 === ctx_r5.selectedPuzzle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](puzzle_r13.created.slice(0, -5).replace("T", ", "));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](puzzle_r13.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.selectedPuzzle == puzzle_r13);
} }
class PuzzlesComponent {
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
    /*
    http = new HttpClient(new HttpXhrBackend({
      build: () => new XMLHttpRequest()
    }));
    puzzleService = new PuzzleService(this.http);
    */
    handleDelete(data) {
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
    getPuzzles() {
        this.puzzleService.getPuzzles(this.user).subscribe(puzzles => this.puzzles = puzzles.reverse());
    }
    newPuzzle() {
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
    createPuzzle() {
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
    ngOnInit() {
        this.getPuzzles();
    }
    onSelect(puzzle) {
        this.newPuzzleTitle = undefined;
        if (this.selectedPuzzle == puzzle) { // toggle
            this.selectedPuzzle = null;
            return;
        }
        this.selectedPuzzle = puzzle;
    }
}
PuzzlesComponent.ɵfac = function PuzzlesComponent_Factory(t) { return new (t || PuzzlesComponent)(); };
PuzzlesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PuzzlesComponent, selectors: [["app-puzzles"]], inputs: { user: "user", puzzleService: "puzzleService" }, decls: 7, vars: 6, consts: [[3, "click", 4, "ngIf"], [4, "ngIf"], [1, "puzzles"], [4, "ngFor", "ngForOf"], [3, "click"], ["name", "newPuzzleTitle", 3, "ngModel", "ngModelChange", "focus"], ["type", "button", 3, "click"], [1, "badge"], [1, "title"], [3, "puzzle", "puzzleService", "puzzleDelete", 4, "ngIf"], [3, "puzzle", "puzzleService", "puzzleDelete"]], template: function PuzzlesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PuzzlesComponent_button_0_Template, 2, 0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PuzzlesComponent_div_1_Template, 11, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PuzzlesComponent_h2_2_Template, 2, 0, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PuzzlesComponent_p_3_Template, 2, 1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PuzzlesComponent_h2_4_Template, 2, 0, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PuzzlesComponent_li_6_Template, 7, 5, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newPuzzleTitle == undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newPuzzleTitle != undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user && ctx.puzzles == undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user && ctx.puzzles != undefined && ctx.puzzles.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user && ctx.puzzles != undefined && ctx.puzzles.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.puzzles);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _puzzle_detail_puzzle_detail_component__WEBPACK_IMPORTED_MODULE_3__["PuzzleDetailComponent"]], styles: ["input[_ngcontent-%COMP%] {\r\n  margin-left: 1em;\r\n}\r\n.puzzles[_ngcontent-%COMP%] {\r\n  margin: 0 0 2em 0;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  \r\n}\r\n\r\nform.button[_ngcontent-%COMP%] {\r\n  margin-left: 1em;\r\n}\r\n.puzzles[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n  cursor: pointer;\r\n  position: relative;\r\n  left: 0;\r\n  background-color: #EEE;\r\n  margin: .5em;\r\n  padding: 0;\r\n  border-radius: 4px;\r\n  display: flex;\r\n  align-items: stretch;\r\n  height: 1.8em;\r\n}\r\n.puzzles[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  color: #2c3a41;\r\n  background-color: #e6e6e6;\r\n  left: .1em;\r\n}\r\n.puzzles[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\r\n  background-color: #525252;\r\n  color: #fafafa;\r\n}\r\n.puzzles[_ngcontent-%COMP%]   button.selected[_ngcontent-%COMP%] {\r\n  background-color: black;\r\n  color: white;\r\n}\r\n.puzzles[_ngcontent-%COMP%]   button.selected[_ngcontent-%COMP%]:hover {\r\n  background-color: #505050;\r\n  color: white;\r\n}\r\n.puzzles[_ngcontent-%COMP%]   button.selected[_ngcontent-%COMP%]:active {\r\n  background-color: black;\r\n  color: white;\r\n}\r\n.puzzles[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  font-size: small;\r\n  width: 10em;\r\n  color: white;\r\n  padding: 0.7em;\r\n  background-color: #405061;\r\n  line-height: 1em;\r\n  margin-right: .8em;\r\n  border-radius: 4px 0 0 4px;\r\n}\r\n.puzzles[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n  align-self: center;\r\n  font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1enpsZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwQ0FBMEM7QUFDMUM7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGVBQWU7QUFDakI7QUFFQTs7OztDQUlDO0FBRUQ7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLE9BQU87RUFDUCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixhQUFhO0FBQ2Y7QUFFQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsVUFBVTtBQUNaO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztBQUNoQjtBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDtBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQiwwQkFBMEI7QUFDNUI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkIiLCJmaWxlIjoicHV6emxlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogUHV6emxlc0NvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xyXG5pbnB1dCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcclxufVxyXG5cclxuLnB1enpsZXMge1xyXG4gIG1hcmdpbjogMCAwIDJlbSAwO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIC8qd2lkdGg6IDUwZW07Ki9cclxufVxyXG5cclxuLypcclxuLnB1enpsZXMgbGkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuKi9cclxuXHJcbmZvcm0uYnV0dG9uIHtcclxuICBtYXJnaW4tbGVmdDogMWVtO1xyXG59XHJcblxyXG4ucHV6emxlcyBidXR0b24ge1xyXG4gIGZsZXg6IDE7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XHJcbiAgbWFyZ2luOiAuNWVtO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgaGVpZ2h0OiAxLjhlbTtcclxufVxyXG5cclxuLnB1enpsZXMgYnV0dG9uOmhvdmVyIHtcclxuICBjb2xvcjogIzJjM2E0MTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xyXG4gIGxlZnQ6IC4xZW07XHJcbn1cclxuXHJcbi5wdXp6bGVzIGJ1dHRvbjphY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MjUyNTI7XHJcbiAgY29sb3I6ICNmYWZhZmE7XHJcbn1cclxuXHJcbi5wdXp6bGVzIGJ1dHRvbi5zZWxlY3RlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ucHV6emxlcyBidXR0b24uc2VsZWN0ZWQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MDUwNTA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ucHV6emxlcyBidXR0b24uc2VsZWN0ZWQ6YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5wdXp6bGVzIC5iYWRnZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgd2lkdGg6IDEwZW07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDAuN2VtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MDUwNjE7XHJcbiAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICBtYXJnaW4tcmlnaHQ6IC44ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XHJcbn1cclxuXHJcbi5wdXp6bGVzIC50aXRsZSB7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PuzzlesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-puzzles',
                templateUrl: './puzzles.component.html',
                styleUrls: ['./puzzles.component.css']
            }]
    }], function () { return []; }, { user: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], puzzleService: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "4K/k":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




const _c0 = function (a0) { return { "color": a0 }; };
class RegistrationComponent {
    constructor() {
        this.exitNewUserDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //@Input() msg!: string;
        this.msgChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    cancel() {
        this.msgChange.emit("");
        this.exitNewUserDialog.emit(false);
    }
    create() {
        let message = "";
        this.wrongUserName = false;
        this.wrongPasscode = false;
        this.wrongEmail = false;
        if (!this.userInput || !/^[A-Za-z0-9\-]*$/.test(this.userInput)) {
            this.wrongUserName = true;
            message += "An alphanumerical username (using English letters) is required. ";
        }
        if (!this.passcode) {
            this.wrongPasscode = true;
            message += "Passcode is required. ";
        }
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email))) {
            this.wrongEmail = true;
            message += "A valid email address is required. ";
        }
        if (this.passcode != this.repeatPasscode) {
            this.wrongPasscode = true;
            message += "Passcodes must match. ";
        }
        this.msgChange.emit(message);
        if (!message) {
            this.puzzleService.newUser(this.userInput, this.passcode, this.email).subscribe(data => {
                if (data.err) {
                    message = data.err;
                    this.msgChange.emit(message);
                }
                else {
                    alert(data.result);
                    this.cancel();
                }
            });
        }
    }
    ngOnInit() {
    }
}
RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) { return new (t || RegistrationComponent)(); };
RegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegistrationComponent, selectors: [["app-registration"]], inputs: { newUser: "newUser", userInput: "userInput", passcode: "passcode", puzzleService: "puzzleService" }, outputs: { exitNewUserDialog: "exitNewUserDialog", msgChange: "msgChange" }, decls: 47, vars: 16, consts: [[1, "tooltip", 3, "ngStyle"], [1, "tooltiptext"], ["name", "userInput", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "passcode", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "repeatPasscode", 3, "ngModel", "ngModelChange"], ["type", "email", "name", "email", 3, "ngModel", "ngModelChange"], ["type", "button", 3, "click"]], template: function RegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New user");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Complete registration details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Username:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Username must be alphanumerical and not occupied.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_12_listener($event) { return ctx.userInput = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Passcode:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Choose a password!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_20_listener($event) { return ctx.passcode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Repeat passcode:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Must match the previous input field.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_29_listener($event) { return ctx.repeatPasscode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Only used for restoring passwords.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_38_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationComponent_Template_button_click_42_listener() { return ctx.create(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationComponent_Template_button_click_45_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.wrongUserName ? "red" : "black"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.wrongPasscode ? "red" : "black"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.passcode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.wrongPasscode ? "red" : "black"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.repeatPasscode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.wrongEmail ? "red" : "black"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: [".tooltip[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: inline-block;\r\n    border-bottom: 1px dotted black; \r\n  }\r\n\r\n.tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%] {\r\n    visibility: hidden;\r\n    width: 120px;\r\n    background-color: black;\r\n    color: #fff;\r\n    text-align: center;\r\n    padding: 5px 0;\r\n    border-radius: 6px;\r\n   \r\n    \r\n    position: absolute;\r\n    z-index: 1;\r\n  }\r\n\r\n.tooltip[_ngcontent-%COMP%]:hover   .tooltiptext[_ngcontent-%COMP%] {\r\n    visibility: visible;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNCQUFzQjtBQUN0QjtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsK0JBQStCLEVBQUUsOENBQThDO0VBQ2pGO0FBRUEsaUJBQWlCO0FBQ2pCO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2Qsa0JBQWtCOztJQUVsQixvREFBb0Q7SUFDcEQsa0JBQWtCO0lBQ2xCLFVBQVU7RUFDWjtBQUVBLG9FQUFvRTtBQUNwRTtJQUNFLG1CQUFtQjtFQUNyQiIsImZpbGUiOiJyZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFRvb2x0aXAgY29udGFpbmVyICovXHJcbi50b29sdGlwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgYmxhY2s7IC8qIElmIHlvdSB3YW50IGRvdHMgdW5kZXIgdGhlIGhvdmVyYWJsZSB0ZXh0ICovXHJcbiAgfVxyXG4gIFxyXG4gIC8qIFRvb2x0aXAgdGV4dCAqL1xyXG4gIC50b29sdGlwIC50b29sdGlwdGV4dCB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgIFxyXG4gICAgLyogUG9zaXRpb24gdGhlIHRvb2x0aXAgdGV4dCAtIHNlZSBleGFtcGxlcyBiZWxvdyEgKi9cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFNob3cgdGhlIHRvb2x0aXAgdGV4dCB3aGVuIHlvdSBtb3VzZSBvdmVyIHRoZSB0b29sdGlwIGNvbnRhaW5lciAqL1xyXG4gIC50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-registration',
                templateUrl: './registration.component.html',
                styleUrls: ['./registration.component.css']
            }]
    }], function () { return []; }, { newUser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], exitNewUserDialog: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], userInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], passcode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], puzzleService: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], msgChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _puzzle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./puzzle.service */ "uTbV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registration/registration.component */ "4K/k");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _puzzles_puzzles_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./puzzles/puzzles.component */ "3CGV");








function AppComponent_app_registration_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-registration", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("msgChange", function AppComponent_app_registration_2_Template_app_registration_msgChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.errorMsg = $event; })("exitNewUserDialog", function AppComponent_app_registration_2_Template_app_registration_exitNewUserDialog_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.newUser = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("userInput", ctx_r0.userInput)("passcode", ctx_r0.passcode)("newUser", ctx_r0.newUser)("puzzleService", ctx_r0.puzzleService);
} }
function AppComponent_table_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup.enter", function AppComponent_table_3_Template_table_keyup_enter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Username:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_table_3_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.userInput = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Passcode:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_table_3_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.passcode = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_table_3_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Log in");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_table_3_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.register(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_table_3_Template_a_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.forgot(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Forgot username?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.userInput);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.passcode);
} }
function AppComponent_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.errorMsg);
} }
function AppComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_div_5_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Log out");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" user: ", ctx_r3.user, " ");
} }
function AppComponent_app_puzzles_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-puzzles", 13);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("user", ctx_r4.user)("puzzleService", ctx_r4.puzzleService);
} }
class AppComponent {
    constructor() {
        this.title = 'Puzzle manager';
        this.http = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"](new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpXhrBackend"]({
            build: () => new XMLHttpRequest()
        }));
        this.puzzleService = new _puzzle_service__WEBPACK_IMPORTED_MODULE_2__["PuzzleService"](this.http);
    }
    login() {
        let input = this.userInput;
        let passcode = this.passcode;
        this.puzzleService.login(input, passcode).subscribe(token => {
            if (typeof (token) != "string") {
                this.errorMsg = "Login failed. Please try again!";
                this.userInput = "";
                this.passcode = "";
                return;
            }
            this.errorMsg = "";
            this.token = token;
            this.puzzleService.headerDict.authorization = token;
            this.setUsername(input);
        });
    }
    setUsername(name) {
        this.user = name;
    }
    register() {
        this.newUser = true;
    }
    logout() {
        // necessary?
        this.puzzleService.headerDict.authorization = undefined;
        this.token = undefined;
        this.user = undefined;
        this.userInput = "";
        this.passcode = "";
        location.reload();
    }
    forgot() {
        alert("Sorry, this functionality is not implemented yet. Please contact your administrator.");
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 6, consts: [[3, "userInput", "passcode", "newUser", "puzzleService", "msgChange", "exitNewUserDialog", 4, "ngIf"], [3, "keyup.enter", 4, "ngIf"], ["class", "errorMsg", 4, "ngIf"], ["class", "userDiv", 4, "ngIf"], [3, "user", "puzzleService", 4, "ngIf"], [3, "userInput", "passcode", "newUser", "puzzleService", "msgChange", "exitNewUserDialog"], [3, "keyup.enter"], ["name", "userInput", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "passcode", 3, "ngModel", "ngModelChange"], [1, "loginButton", 3, "click"], ["href", "", 3, "click"], [1, "errorMsg"], [1, "userDiv"], [3, "user", "puzzleService"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AppComponent_app_registration_2_Template, 1, 4, "app-registration", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AppComponent_table_3_Template, 26, 2, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AppComponent_p_4_Template, 2, 1, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AppComponent_div_5_Template, 4, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AppComponent_app_puzzles_6_Template, 1, 2, "app-puzzles", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.newUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.user && !ctx.newUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _puzzles_puzzles_component__WEBPACK_IMPORTED_MODULE_6__["PuzzlesComponent"]], styles: ["input[_ngcontent-%COMP%] {\r\n    margin-left: 1em;\r\n}\r\n\r\n.loginButton[_ngcontent-%COMP%] {\r\n    margin-left: 1em;\r\n    padding-top: 0;\r\n    padding-bottom: 0;\r\n}\r\n\r\n.userDiv[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n}\r\n\r\n.errorMsg[_ngcontent-%COMP%] {\r\n    color: red;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE1BQU07QUFDVjs7QUFFQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XHJcbn1cclxuXHJcbi5sb2dpbkJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxufVxyXG5cclxuLnVzZXJEaXYge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbn1cclxuXHJcbi5lcnJvck1zZyB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _puzzles_puzzles_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./puzzles/puzzles.component */ "3CGV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _puzzle_detail_puzzle_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./puzzle-detail/puzzle-detail.component */ "vds2");
/* harmony import */ var _preview_preview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./preview/preview.component */ "oFMy");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./registration/registration.component */ "4K/k");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _puzzles_puzzles_component__WEBPACK_IMPORTED_MODULE_3__["PuzzlesComponent"],
        _puzzle_detail_puzzle_detail_component__WEBPACK_IMPORTED_MODULE_5__["PuzzleDetailComponent"],
        _preview_preview_component__WEBPACK_IMPORTED_MODULE_6__["PreviewComponent"],
        _registration_registration_component__WEBPACK_IMPORTED_MODULE_8__["RegistrationComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _puzzles_puzzles_component__WEBPACK_IMPORTED_MODULE_3__["PuzzlesComponent"],
                    _puzzle_detail_puzzle_detail_component__WEBPACK_IMPORTED_MODULE_5__["PuzzleDetailComponent"],
                    _preview_preview_component__WEBPACK_IMPORTED_MODULE_6__["PreviewComponent"],
                    _registration_registration_component__WEBPACK_IMPORTED_MODULE_8__["RegistrationComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_puzzle_detail_puzzle_detail_component__WEBPACK_IMPORTED_MODULE_5__["PuzzleDetailComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _preview_preview_component__WEBPACK_IMPORTED_MODULE_6__["PreviewComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"]], [_angular_common__WEBPACK_IMPORTED_MODULE_9__["UpperCasePipe"]]);


/***/ }),

/***/ "oFMy":
/*!**********************************************!*\
  !*** ./src/app/preview/preview.component.ts ***!
  \**********************************************/
/*! exports provided: PreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewComponent", function() { return PreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function PreviewComponent__svg_polygon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "polygon");
} if (rf & 2) {
    const i_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r0.lineStyle[i_r3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("points", ctx_r0.polygonStrings[i_r3]);
} }
function PreviewComponent__svg_text_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "text", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", ctx_r1.points.x[i_r4] + ctx_r1.letterDisplacement[i_r4].x)("y", ctx_r1.points.y[i_r4] + ctx_r1.letterDisplacement[i_r4].y)("transform", ctx_r1.transformStringLetters[i_r4])("style", ctx_r1.styleStringLetters, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeStyle"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.puzzle.data[ctx_r1.Math.floor(i_r4 / 3)].angles[i_r4 % 3]);
} }
function PreviewComponent__svg_text_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", ctx_r2.points.x[i_r5] + ctx_r2.textDisplacement[i_r5].x)("y", ctx_r2.points.y[i_r5] + ctx_r2.textDisplacement[i_r5].y)("transform", ctx_r2.transformStringText[i_r5])("style", ctx_r2.getStyleStringText(ctx_r2.puzzle.data[ctx_r2.Math.floor(i_r5 / 3)].terms[i_r5 % 3]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeStyle"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.puzzle.data[ctx_r2.Math.floor(i_r5 / 3)].terms[i_r5 % 3]);
} }
class PreviewComponent {
    constructor() {
        this.lineStyle = [];
        this.polygonIndices = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        this.scale = Math.floor(window.innerWidth / 12);
        this.polygonStrings = [];
        this.points = generatePoints(this.scale);
        this.indices = getIndices(27);
        this.styleStringLetters = `font: ${Math.round(this.scale / 5)}px sans-serif; text-anchor: middle;`;
        this.letterDisplacement = [
            { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }
        ];
        this.transformStringLetters = generateTransformationStringsLetters(this);
        //styleStringText: string = `font: ${Math.round(this.scale/5)}px sans-serif; text-anchor: middle;`;
        this.textDisplacement = [
            { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }
        ];
        this.transformStringText = generateTransformationStringsText(this);
        this.Math = Math;
        this.getStyleStringText = function (text) {
            if (text.length < 12)
                return `font: ${Math.round(this.scale / 5)}px sans-serif; text-anchor: middle;`;
            if (text.length < 24)
                return `font: ${Math.round(this.scale / 7)}px sans-serif; text-anchor: middle;`;
            if (text.length < 36)
                return `font: ${Math.round(this.scale / 10)}px sans-serif; text-anchor: middle;`;
            else
                return `font: ${Math.round(3.6 * this.scale / text.length)}px sans-serif; text-anchor: middle;`;
        };
        for (let i = 0; i < 27; i += 3) {
            this.lineStyle.push("fill:white;stroke:black;stroke-width:1");
            this.polygonStrings.push(`${this.points.x[i]},${this.points.y[i]} ${this.points.x[i + 1]},${this.points.y[i + 1]} ${this.points.x[i + 2]},${this.points.y[i + 2]}`);
        }
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        // Extract changes to the input property by its name
        let change = changes["hovering"];
        // Whenever the data in the parent changes, this method gets triggered
        this.lineStyle[change.currentValue] = "fill:yellow;stroke:red;stroke-width:3";
        this.lineStyle[change.previousValue] = "fill:white;stroke:black;stroke-width:1";
    }
}
PreviewComponent.ɵfac = function PreviewComponent_Factory(t) { return new (t || PreviewComponent)(); };
PreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PreviewComponent, selectors: [["app-preview"]], inputs: { puzzle: "puzzle", hovering: "hovering" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 5, consts: [["id", "previewSvg"], [3, "style", 4, "ngFor", "ngForOf"], ["fill", "red", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["fill", "red"]], template: function PreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PreviewComponent__svg_polygon_1_Template, 1, 3, "polygon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PreviewComponent__svg_text_2_Template, 2, 5, "text", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PreviewComponent__svg_text_3_Template, 2, 5, "text", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("width", ctx.scale * 6)("height", ctx.scale * 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.polygonIndices);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.indices);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.indices);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmV2aWV3LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-preview',
                templateUrl: './preview.component.html',
                styleUrls: ['./preview.component.css']
            }]
    }], function () { return []; }, { puzzle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hovering: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
function generatePoints(scale) {
    let output = { x: [], y: [] };
    let midpoint = scale * 3;
    let trigon = Math.sqrt(3);
    // triangle1
    output.x.push(Math.floor(midpoint));
    output.x.push(Math.floor(midpoint + scale));
    output.x.push(Math.floor(midpoint - scale));
    output.y.push(0);
    output.y.push(Math.floor(trigon * scale));
    output.y.push(Math.floor(trigon * scale));
    // triangle2
    output.x.push(Math.floor(midpoint - scale));
    output.x.push(Math.floor(midpoint));
    output.x.push(Math.floor(midpoint - 2 * scale));
    output.y.push(Math.floor(trigon * scale));
    output.y.push(Math.floor(trigon * 2 * scale));
    output.y.push(Math.floor(trigon * 2 * scale));
    // triangle3
    output.x.push(Math.floor(midpoint - scale));
    output.x.push(Math.floor(midpoint + scale));
    output.x.push(Math.floor(midpoint));
    output.y.push(Math.floor(trigon * scale));
    output.y.push(Math.floor(trigon * scale));
    output.y.push(Math.floor(trigon * 2 * scale));
    // triangle4
    output.x.push(Math.floor(midpoint + scale));
    output.x.push(Math.floor(midpoint + 2 * scale));
    output.x.push(Math.floor(midpoint));
    output.y.push(Math.floor(trigon * scale));
    output.y.push(Math.floor(trigon * 2 * scale));
    output.y.push(Math.floor(trigon * 2 * scale));
    // triangle5
    output.x.push(Math.floor(midpoint - 2 * scale));
    output.x.push(Math.floor(midpoint - scale));
    output.x.push(Math.floor(midpoint - 3 * scale));
    output.y.push(Math.floor(trigon * 2 * scale));
    output.y.push(Math.floor(trigon * 3 * scale));
    output.y.push(Math.floor(trigon * 3 * scale));
    // triangle6
    output.x.push(Math.floor(midpoint - 2 * scale));
    output.x.push(Math.floor(midpoint));
    output.x.push(Math.floor(midpoint - scale));
    output.y.push(Math.floor(trigon * 2 * scale));
    output.y.push(Math.floor(trigon * 2 * scale));
    output.y.push(Math.floor(trigon * 3 * scale));
    // triangle7
    output.x.push(Math.floor(midpoint));
    output.x.push(Math.floor(midpoint + scale));
    output.x.push(Math.floor(midpoint - scale));
    output.y.push(Math.floor(trigon * 2 * scale));
    output.y.push(Math.floor(trigon * 3 * scale));
    output.y.push(Math.floor(trigon * 3 * scale));
    // triangle8
    output.x.push(Math.floor(midpoint));
    output.x.push(Math.floor(midpoint + 2 * scale));
    output.x.push(Math.floor(midpoint + scale));
    output.y.push(Math.floor(trigon * 2 * scale));
    output.y.push(Math.floor(trigon * 2 * scale));
    output.y.push(Math.floor(trigon * 3 * scale));
    // triangle9
    output.x.push(Math.floor(midpoint + 2 * scale));
    output.x.push(Math.floor(midpoint + 3 * scale));
    output.x.push(Math.floor(midpoint + scale));
    output.y.push(Math.floor(trigon * 2 * scale));
    output.y.push(Math.floor(trigon * 3 * scale));
    output.y.push(Math.floor(trigon * 3 * scale));
    // return
    return output;
}
function getIndices(qty) {
    let output = [];
    for (let i = 0; i < qty; i++) {
        output.push(i);
    }
    return output;
}
function generateTransformationStringsLetters(obj) {
    let points = obj.points;
    let scale = obj.scale;
    let output = [];
    let degrees = [
        180, -60, 60,
        180, -60, 60,
        120, -120, 0,
        180, -60, 60,
        180, -60, 60,
        120, -120, 0,
        180, -60, 60,
        120, -120, 0,
        180, -60, 60
    ];
    for (let i = 0; i < 27; i++) {
        obj.letterDisplacement[i].x = Math.ceil(Math.sin(degrees[i] * Math.PI / 180) * scale / 12);
        obj.letterDisplacement[i].y = -Math.ceil(Math.cos(degrees[i] * Math.PI / 180) * scale / 12);
        output.push(`rotate(${degrees[i]}, ${points.x[i] + obj.letterDisplacement[i].x}, ${points.y[i] + obj.letterDisplacement[i].y})`);
    }
    return output;
}
function generateTransformationStringsText(obj) {
    let points = obj.points;
    let scale = obj.scale;
    let output = [];
    let degrees = [
        60, 180, -60,
        60, 180, -60,
        0, 120, -120,
        60, 180, -60,
        60, 180, -60,
        0, 120, -120,
        60, 180, -60,
        0, 120, -120,
        60, 180, -60
    ];
    for (let i = 0; i < 27; i++) {
        if (i % 3 != 2) {
            obj.textDisplacement[i].x = Math.floor((points.x[i + 1] - points.x[i]) / 2);
            obj.textDisplacement[i].y = Math.floor((points.y[i + 1] - points.y[i]) / 2);
        }
        else {
            obj.textDisplacement[i].x = Math.floor((points.x[i - 2] - points.x[i]) / 2);
            obj.textDisplacement[i].y = Math.floor((points.y[i - 2] - points.y[i]) / 2);
        }
        obj.textDisplacement[i].x -= Math.ceil(Math.sin(degrees[i] * Math.PI / 180) * scale / 6);
        obj.textDisplacement[i].y += Math.ceil(Math.cos(degrees[i] * Math.PI / 180) * scale / 6);
        output.push(`rotate(${degrees[i]}, ${points.x[i] + obj.textDisplacement[i].x}, ${points.y[i] + obj.textDisplacement[i].y})`);
    }
    return output;
}


/***/ }),

/***/ "uTbV":
/*!***********************************!*\
  !*** ./src/app/puzzle.service.ts ***!
  \***********************************/
/*! exports provided: PuzzleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PuzzleService", function() { return PuzzleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");


//import { MessageService } from './message.service';




class PuzzleService {
    constructor(http) {
        this.http = http;
        //apiUrl = "localhost:3000/puzzles/";
        this.apiUrl = "https://holgros-puzzle-api.herokuapp.com/puzzles/";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        this.headerDict = {
            "Accept": "application/json",
            "authorization": "" // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MzI4MjliZDdkNmIxOTNhZTczZGNlYTQiLCJuYW1lIjoiSG9sZ2VyIiwiZXhwaXJlcyI6IjIwMjItMDktMjBUMTc6MDY6MDAuOTM5WiIsImlhdCI6MTY2MzY5MTc2MH0.Q0cDmqDACFtBqKGRsPqT8PU2V5olZVCQx5b8A5rdp_s"
        };
    }
    // GET: obtain puzzles from server
    getPuzzles(user) {
        let trimmedUsername = user.replace(/[^a-zA-Z0-9-_]/g, "");
        const requestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](this.headerDict),
        };
        //return this.http.get<Puzzle[]>(`${this.apiUrl}?user=${trimmedUsername}`).pipe(
        return this.http.get(`${this.apiUrl}?user=${trimmedUsername}`, requestOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(_ => console.log('fetched puzzles from API')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getPuzzles', [])) // TODO: refresh page to prompt login
        );
    }
    // POST: login with credentials and receive token
    login(input, passcode) {
        return this.http.post(`${this.apiUrl}login`, { name: input, passcode: passcode }, this.httpOptions).pipe(data => { /*console.log('POST request successful!');*/ return data; }, error => { /*console.log('POST request failed!', error);*/ return error; });
        //return null;
    }
    // POST: create new user
    newUser(userInput, passcode, email) {
        let url = `${this.apiUrl}users`;
        return this.http.post(url, { name: userInput, passcode: passcode, email: email }, this.httpOptions).pipe(data => { /*console.log('POST request successful!'); console.log(url);*/ return data; }, error => { /*console.log('POST request failed!', error);*/ return error; });
    }
    // POST: create new puzzle
    newPuzzle(puzzle) {
        let url = `${this.apiUrl}`;
        return this.http.post(url, puzzle, this.httpOptions).pipe(data => { /*console.log('POST request successful!'); console.log(url);*/ return data; }, error => { /*console.log('POST request failed!', error);*/ return error; });
    }
    // PUT: uppdatera ett pussel på servern
    updatePuzzle(puzzle) {
        this.http.put(`${this.apiUrl}${puzzle._id}`, puzzle.data, this.httpOptions).subscribe(data => console.log('PUT request successful!', data), error => console.log('PUT request failed!', error));
        return null; // ???
    }
    // PATCH: uppdatera en pusselbit på servern
    updatePiece(puzzle, pieceNbr) {
        return this.http.patch(`${this.apiUrl}${puzzle._id}/${pieceNbr}`, puzzle.data[pieceNbr], this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(_ => console.log('PATCH request successful!')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updatePiece', [])));
    }
    // PATCH: uppdatera titeln på servern
    updateTitle(puzzle) {
        return this.http.patch(`${this.apiUrl}${puzzle._id}`, { title: puzzle.title }, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(_ => console.log("PATCH request successful!")), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updateTitle', [])));
    }
    // DELETE: ta bort ett pussel från servern
    deletePuzzle(id) {
        const requestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](this.headerDict),
        };
        return this.http.delete(`${this.apiUrl}${id}`, requestOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(_ => console.log("DELETE request successful!")), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deletePuzzle', [])));
    }
    handleError(operation = 'operation', result) {
        //console.log("An error occurred!");
        //console.log(result);
        //console.log(`${operation} failed`);
        return (error) => {
            // TODO: skicka felet och skriva till serverns loggfil
            //console.error(error); // logga till konsolen istället
            // TODO: skriv användarvänlig felinformation
            //console.log(`${operation} failed: ${error.message}`);
            // returnera tomt resultat och låt appen fortsätta köras
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    }
}
PuzzleService.ɵfac = function PuzzleService_Factory(t) { return new (t || PuzzleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
PuzzleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PuzzleService, factory: PuzzleService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PuzzleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "vds2":
/*!**********************************************************!*\
  !*** ./src/app/puzzle-detail/puzzle-detail.component.ts ***!
  \**********************************************************/
/*! exports provided: PuzzleDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PuzzleDetailComponent", function() { return PuzzleDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




function PuzzleDetailComponent_div_0_span_17_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PuzzleDetailComponent_div_0_span_17_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r5.restoreTitle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PuzzleDetailComponent_div_0_span_17_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r7.saveTitle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PuzzleDetailComponent_div_0_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PuzzleDetailComponent_div_0_button_18_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r8.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Delete puzzle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PuzzleDetailComponent_div_0_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PuzzleDetailComponent_div_0_div_20_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const piece_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r11.onSelect(piece_r10); })("mouseenter", function PuzzleDetailComponent_div_0_div_20_Template_button_mouseenter_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const piece_r10 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r13.onMouseenter(piece_r10); })("mouseleave", function PuzzleDetailComponent_div_0_div_20_Template_button_mouseleave_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r14.onMouseleave(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const piece_r10 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("selected", piece_r10 === ctx_r3.selectedPiece);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", piece_r10.angles[0] + piece_r10.angles[1] + piece_r10.angles[2], " ");
} }
function PuzzleDetailComponent_div_0_div_22_div_3_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const letter_r19 = ctx.$implicit;
    const i_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", letter_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("selected", letter_r19 == ctx_r18.selectedPiece.angles[i_r17 - 1] ? "selected" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](letter_r19);
} }
function PuzzleDetailComponent_div_0_div_22_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function PuzzleDetailComponent_div_0_div_22_div_3_Template_select_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const i_r17 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r21.updateLetter(i_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, PuzzleDetailComponent_div_0_div_22_div_3_option_4_Template, 2, 3, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r17 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("for", "letter", i_r17, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Letter ", i_r17, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "letter", i_r17, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("name", "letter", i_r17, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r15.letters);
} }
function PuzzleDetailComponent_div_0_div_22_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function PuzzleDetailComponent_div_0_div_22_div_4_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const i_r23 = ctx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return (ctx_r24.selectedPiece.terms[i_r23 - 1] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r23 = ctx.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("for", "text", i_r23, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Text ", i_r23, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "text", i_r23, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r16.selectedPiece.terms[i_r23 - 1]);
} }
const _c0 = function () { return [1, 2, 3]; };
function PuzzleDetailComponent_div_0_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Edit selected piece");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PuzzleDetailComponent_div_0_div_22_div_3_Template, 5, 5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, PuzzleDetailComponent_div_0_div_22_div_4_Template, 4, 4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PuzzleDetailComponent_div_0_div_22_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r26.abortChanges(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PuzzleDetailComponent_div_0_div_22_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r28.saveChanges(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Close and save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0));
} }
function PuzzleDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Link to puzzle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PuzzleDetailComponent_div_0_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r29.copyLink(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Copy link");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "created: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Puzzle title: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function PuzzleDetailComponent_div_0_Template_input_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r31.tempTitle = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, PuzzleDetailComponent_div_0_span_17_Template, 5, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, PuzzleDetailComponent_div_0_button_18_Template, 2, 0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, PuzzleDetailComponent_div_0_div_20_Template, 3, 3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "app-preview", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, PuzzleDetailComponent_div_0_div_22_Template, 9, 4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 11, ctx_r0.puzzle.title), " Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("href", "https://avateknik.se/puzzle/sign-in.php?teacher=", ctx_r0.puzzle.creator, "&puzzle=", ctx_r0.puzzle._id, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r0.puzzle.created.slice(0, -5).replace("T", ", "), " (UTC)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.tempTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.tempTitle != ctx_r0.puzzle.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.selectedPiece);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.puzzle.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hovering", ctx_r0.hovering)("puzzle", ctx_r0.puzzle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.selectedPiece);
} }
class PuzzleDetailComponent {
    constructor() {
        this.http = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"](new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpXhrBackend"]({
            build: () => new XMLHttpRequest()
        }));
        this.puzzleDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    }
    ngOnInit() {
        //this.previousTitle = this.puzzle.title;
        this.tempTitle = this.puzzle.title;
    }
    copyLink() {
        navigator.clipboard.writeText(`https://avateknik.se/puzzle/sign-in.php?teacher=${this.puzzle.creator}&puzzle=${this.puzzle._id}`);
        alert("Copied to clipboard!");
    }
    onMouseenter(piece) {
        if (!this.selectedPiece)
            this.hovering = this.puzzle.data.indexOf(piece);
    }
    onMouseleave() {
        if (!this.selectedPiece)
            this.hovering = null;
    }
    onSelect(piece) {
        this.restore = { angles: [piece.angles[0], piece.angles[1], piece.angles[2]], terms: [piece.terms[0], piece.terms[1], piece.terms[2]] };
        if (!this.selectedPiece)
            this.selectedPiece = piece;
    }
    updateLetter(index) {
        this.selectedPiece.angles[index - 1] = document.getElementById("letter" + index).value;
    }
    closeEditor() {
        this.selectedPiece = null;
        this.hovering = null;
    }
    abortChanges() {
        this.selectedPiece.angles = this.restore.angles;
        this.selectedPiece.terms = this.restore.terms;
        this.closeEditor();
    }
    saveChanges() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.puzzleService.updatePiece(this.puzzle, this.puzzle.data.indexOf(this.selectedPiece)).subscribe(pieces => this.puzzle.data = pieces.data);
            this.closeEditor();
        });
    }
    saveTitle() {
        this.puzzle.title = this.tempTitle;
        this.puzzleService.updateTitle(this.puzzle).subscribe(pieces => {
            this.puzzle.data = pieces.data;
            //this.puzzleChanges.emit(true);
        });
        //this.previousTitle = this.puzzle.title;
    }
    restoreTitle() {
        //this.puzzle.title = this.previousTitle;
        this.tempTitle = this.puzzle.title;
    }
    delete() {
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
PuzzleDetailComponent.ɵfac = function PuzzleDetailComponent_Factory(t) { return new (t || PuzzleDetailComponent)(); };
PuzzleDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PuzzleDetailComponent, selectors: [["app-puzzle-detail"]], inputs: { puzzle: "puzzle", puzzleService: "puzzleService" }, outputs: { puzzleDelete: "puzzleDelete" }, decls: 1, vars: 1, consts: [["class", "details", 4, "ngIf"], [1, "details"], [3, "href"], ["id", "linkCopy", 3, "click"], ["for", "title"], ["id", "title", "placeholder", "name", 3, "ngModel", "ngModelChange"], [4, "ngIf"], ["class", "delete", 3, "click", 4, "ngIf"], [1, "pieces"], [4, "ngFor", "ngForOf"], [3, "hovering", "puzzle"], ["id", "editor", 4, "ngIf"], [1, "titleButton", 3, "click"], [1, "delete", 3, "click"], ["type", "button", 3, "click", "mouseenter", "mouseleave"], ["id", "editor"], [1, "leftbutton", 3, "click"], [1, "rightbutton", 3, "click"], [3, "for"], [3, "id", "name", "change"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["placeholder", "text", 3, "id", "ngModel", "ngModelChange"]], template: function PuzzleDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, PuzzleDetailComponent_div_0_Template, 23, 13, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.puzzle);
    } }, styles: [".details[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n\r\napp-preview[_ngcontent-%COMP%] {\r\n    float: right;\r\n    position: absolute;\r\n    top: 0px;\r\n    right: 0px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    padding: 0rem;\r\n    margin-right: 0rem;\r\n    margin-bottom: 0rem;\r\n    margin-top: 0rem;\r\n    width: 10rem;\r\n}\r\n\r\n.delete[_ngcontent-%COMP%] {\r\n    color: white;\r\n    background-color: #f44336;\r\n    margin-top: 1rem;\r\n}\r\n\r\n.titleButton[_ngcontent-%COMP%] {\r\n    width: auto;\r\n    margin-right: 1rem;\r\n    margin-left: 1rem;\r\n}\r\n\r\n#editor[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    bottom: 25%;\r\n    left: 30%;\r\n    transform: translate(-50%, 0);\r\n    width: 50%;\r\n    height: 50%;\r\n    background-color: white;\r\n    border: 3px solid #73AD21;\r\n    z-index: 2;\r\n}\r\n\r\n#editor[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: 0%;\r\n}\r\n\r\n#editor[_ngcontent-%COMP%]   .rightbutton[_ngcontent-%COMP%] {\r\n    right: 0%;\r\n}\r\n\r\n#editor[_ngcontent-%COMP%]   .leftbutton[_ngcontent-%COMP%] {\r\n    left: 0%;\r\n}\r\n\r\n.pieces[_ngcontent-%COMP%] {\r\n    margin-top: 1rem;\r\n}\r\n\r\n#linkCopy[_ngcontent-%COMP%] {\r\n    width: 5rem;\r\n    margin-left: 1rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1enpsZS1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsU0FBUztJQUNULDZCQUE2QjtJQUM3QixVQUFVO0lBQ1YsV0FBVztJQUNYLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7QUFDckIiLCJmaWxlIjoicHV6emxlLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRldGFpbHMge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5hcHAtcHJldmlldyB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAwcmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHJlbTtcclxuICAgIG1hcmdpbi10b3A6IDByZW07XHJcbiAgICB3aWR0aDogMTByZW07XHJcbn1cclxuXHJcbi5kZWxldGUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuXHJcbi50aXRsZUJ1dHRvbiB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG59XHJcblxyXG4jZWRpdG9yIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMjUlO1xyXG4gICAgbGVmdDogMzAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICM3M0FEMjE7XHJcbiAgICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4jZWRpdG9yIGJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDAlO1xyXG59XHJcblxyXG4jZWRpdG9yIC5yaWdodGJ1dHRvbiB7XHJcbiAgICByaWdodDogMCU7XHJcbn1cclxuXHJcbiNlZGl0b3IgLmxlZnRidXR0b24ge1xyXG4gICAgbGVmdDogMCU7XHJcbn1cclxuXHJcbi5waWVjZXMge1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG5cclxuI2xpbmtDb3B5IHtcclxuICAgIHdpZHRoOiA1cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PuzzleDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-puzzle-detail',
                templateUrl: './puzzle-detail.component.html',
                styleUrls: ['./puzzle-detail.component.css']
            }]
    }], function () { return []; }, { puzzle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], puzzleService: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], puzzleDelete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map