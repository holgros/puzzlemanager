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
  
  apiUrl = "https://peaceful-sands-97012.herokuapp.com/puzzles/";

  constructor(private http: HttpClient) { 
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getPuzzles(): Observable<Puzzle[]> {
    // TODO: skicka meddelande _efter_ att puzzles har hämtats
    return this.http.get<Puzzle[]>(this.apiUrl).pipe(
      tap(_ => console.log('fetched puzzles from API')),
      catchError(this.handleError<Puzzle[]>('getPuzzles', []))
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
      tap(_ => console.log('PATCH request successful!')),
      catchError(this.handleError<Puzzle[]>('updateTitle', []))
    );
  }

  private handleError<T>(operation = 'operation', result?:T) {
    //console.log("An error occurred!");
    //console.log(result);
    return (error: any): Observable<T> => {
      // TODO: skicka felet och skriva till serverns loggfil
      console.error(error); // logga till konsolen istället

      // TODO: skriv användarvänlig felinformation
      console.log(`${operation} failed: ${error.message}`);

      // returnera tomt resultat och låt appen fortsätta köras
      return of(result as T);
    }
  }

}
