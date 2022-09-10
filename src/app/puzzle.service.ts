import { Injectable } from '@angular/core';

import { Puzzle } from './puzzle';
import { PUZZLES } from './mock-puzzles';

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

  /*
  getPuzzles(): Puzzle[] {
  //getPuzzles(): Puzzle[] {
    
    
    
    fetch(this.apiUrl)
    .then(response=>response.json())
    .then(data=>{ console.log(data); });
    
    return PUZZLES;
  }
  */

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getPuzzles(): Observable<Puzzle[]> {
    // TODO: skicka meddelande _efter_ att heroes har hämtats
    //this.messageService.add('HeroService: fetched heroes');
    //return of(HEROES);
    return this.http.get<Puzzle[]>(this.apiUrl).pipe(
      tap(_ => console.log('fetched puzzles from API')),
      catchError(this.handleError<Puzzle[]>('getPuzzles', []))
    );
  }

  private handleError<T>(operation = 'operation', result?:T) {
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
