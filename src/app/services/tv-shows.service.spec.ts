import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Injector } from '@angular/core';
import { TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import Constants from 'src/constants';
import { tvShows } from '../models/tvshows.model';

import { TvShowsService } from './tv-shows.service';

describe('TvShowsService', () => {
  let service: TvShowsService;
  let injector: Injector;
  let showService: TvShowsService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    injector = TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[TvShowsService]
    });
    showService = injector.get(TvShowsService);
    httpMock = injector.get(HttpTestingController);
  });
  it('should make a GET request', (() => {
    showService.getTVShows().subscribe((data)=>{
      expect(data.length).toBeGreaterThan(0);
    });
}));
});
