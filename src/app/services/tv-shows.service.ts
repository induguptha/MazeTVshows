import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import Constants from 'src/constants';
import { tvShows } from '../models/tvshows.model';

@Injectable({
  providedIn: 'root'
})
export class TvShowsService {
   
  constructor(private http: HttpClient) { }
  
  getTVShows(): Observable<any> {
    return this.http.get<tvShows>(Constants.SHOWS_API);
  }
}
