import { LOCATION_INITIALIZED } from '@angular/common';
import { HttpClient, HttpXhrBackend } from '@angular/common/http';
import { Component } from '@angular/core';
import { PuzzleService } from './puzzle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Puzzle manager';
  user: string | undefined;
  passcode: string | undefined;
  userInput: string;
  errorMsg: string;
  http = new HttpClient(new HttpXhrBackend({ 
    build: () => new XMLHttpRequest() 
  }));
  puzzleService = new PuzzleService(this.http);
  token: string;
  newUser: boolean;

  login(): void {
    let input = this.userInput;
    let passcode = this.passcode;
    this.puzzleService.login(input, passcode).subscribe(token => {
      if (typeof(token) != "string") {
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

  setUsername(name: string): void {
    this.user = name;
  }

  register(): void {
    this.newUser = true;
  }

  logout(): void {
    // necessary?
    this.puzzleService.headerDict.authorization = undefined;
    this.token = undefined;
    this.user = undefined;
    this.userInput = "";
    this.passcode = "";
    
    location.reload();
  }

  forgot(): void {
    alert("Sorry, this functionality is not implemented yet. Please contact your administrator.")
  }
  

}
