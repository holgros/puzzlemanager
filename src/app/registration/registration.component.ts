import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PuzzleService } from '../puzzle.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  @Input() newUser: boolean;
  @Output() exitNewUserDialog = new EventEmitter<boolean>();

  @Input() userInput: string;
  @Input() passcode: string;

  @Input() puzzleService: PuzzleService;

  //@Input() msg!: string;
  @Output() msgChange = new EventEmitter<string>();

  //completed: boolean;

  repeatPasscode: string;
  email: string;

  wrongUserName: boolean;
  wrongPasscode: boolean;
  wrongEmail: boolean;

  constructor() {
  }

  cancel(): void {
    this.msgChange.emit("");
    this.exitNewUserDialog.emit(false);
  }

  create(): void {
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

  ngOnInit(): void {
  }

}
