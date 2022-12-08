import { Injectable } from '@angular/core';

import { Puzzle } from './puzzle';

import { Observable, of } from 'rxjs';
//import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PuzzleService {

  //apiUrl = "localhost:3000/puzzles/";
  apiUrl = "https://holgros-puzzle-api.herokuapp.com/puzzles/";

  constructor(private http: HttpClient) { 
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  headerDict = {
    "Accept": "application/json",
    "authorization": ""// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MzI4MjliZDdkNmIxOTNhZTczZGNlYTQiLCJuYW1lIjoiSG9sZ2VyIiwiZXhwaXJlcyI6IjIwMjItMDktMjBUMTc6MDY6MDAuOTM5WiIsImlhdCI6MTY2MzY5MTc2MH0.Q0cDmqDACFtBqKGRsPqT8PU2V5olZVCQx5b8A5rdp_s"
  }

  // GET: obtain puzzles from server
  getPuzzles(user: string): Observable<Puzzle[]> {
    let trimmedUsername = user.replace(/[^a-zA-Z0-9-_]/g, "");
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(this.headerDict), 
    };

    //return this.http.get<Puzzle[]>(`${this.apiUrl}?user=${trimmedUsername}`).pipe(
    return this.http.get<Puzzle[]>(`${this.apiUrl}?user=${trimmedUsername}`, requestOptions).pipe(
        tap(_ => console.log('fetched puzzles from API')),
      catchError(this.handleError<Puzzle[]>('getPuzzles', []))  // TODO: refresh page to prompt login
    );
  }

  // POST: login with credentials and receive token
  login(input: string, passcode: string): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}login`, {name: input, passcode: passcode}, this.httpOptions).pipe(
      data => {/*console.log('POST request successful!');*/ return data;},
      error => {/*console.log('POST request failed!', error);*/ return error;}
    );
    //return null;
  }

  // POST: create new user
  newUser(userInput: string, passcode: string, email: string): Observable<any> {
    let url = `${this.apiUrl}users`;
    return this.http.post<any>(url, {name: userInput, passcode: passcode, email: email}, this.httpOptions).pipe(
      data => {/*console.log('POST request successful!'); console.log(url);*/ return data;},
      error => {/*console.log('POST request failed!', error);*/ return error;}
    );
  }

  // POST: create new puzzle
  newPuzzle(puzzle: Puzzle): Observable<any> {
    let url = `${this.apiUrl}`;
    return this.http.post<any>(url, puzzle, this.httpOptions).pipe(
      data => {/*console.log('POST request successful!'); console.log(url);*/ return data;},
      error => {/*console.log('POST request failed!', error);*/ return error;}
    );
  }

  // PUT: uppdatera ett pussel på servern
  updatePuzzle(puzzle: Puzzle): Observable<any> {
    this.http.put<any>(`${this.apiUrl}${puzzle._id}`, puzzle.data, this.httpOptions).subscribe(
      data => console.log('PUT request successful!', data),
      error => console.log('PUT request failed!', error)
    );
    return null;  // ???
  }

  // PATCH: uppdatera en pusselbit på servern
  updatePiece(puzzle: Puzzle, pieceNbr: number): Observable<Puzzle> {
    return this.http.patch<any>(`${this.apiUrl}${puzzle._id}/${pieceNbr}`, puzzle.data[pieceNbr], this.httpOptions).pipe(
      tap(_ => console.log('PATCH request successful!')),
      catchError(this.handleError<Puzzle[]>('updatePiece', []))
    );
  }
  
  // PATCH: uppdatera titeln på servern
  updateTitle(puzzle: Puzzle): Observable<Puzzle> {
    return this.http.patch<any>(`${this.apiUrl}${puzzle._id}`, {title: puzzle.title}, this.httpOptions).pipe(
      tap(_ => console.log("PATCH request successful!")),
      catchError(this.handleError<Puzzle[]>('updateTitle', []))
    );
  }

  // DELETE: ta bort ett pussel från servern
  deletePuzzle(id: string): Observable<any> {
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(this.headerDict), 
    };
    return this.http.delete<any>(`${this.apiUrl}${id}`, requestOptions).pipe(
      tap(_ => console.log("DELETE request successful!")),
      catchError(this.handleError<Puzzle[]>('deletePuzzle', []))
    );
  }

  private handleError<T>(operation = 'operation', result?:T) {
    //console.log("An error occurred!");
    //console.log(result);
    //console.log(`${operation} failed`);
    return (error: any): Observable<T> => {
      // TODO: skicka felet och skriva till serverns loggfil
      //console.error(error); // logga till konsolen istället

      // TODO: skriv användarvänlig felinformation
      //console.log(`${operation} failed: ${error.message}`);

      // returnera tomt resultat och låt appen fortsätta köras
      return of(result as T);
    }
  }

}
