import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Puzzle manager';
  user: string | undefined;
  userInput: string;

  setUsername(): void {
    this.user = this.userInput;
  }

  logout(): void {
    this.user = undefined;
    this.userInput = "";
  }
  

}
