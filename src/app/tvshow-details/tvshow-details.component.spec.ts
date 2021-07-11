import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs/internal/observable/of';
import { filter } from 'rxjs/operators';
import { tvShows } from '../models/tvshows.model';
import { TvShowsService } from '../services/tv-shows.service';
import { TvshowDetailsComponent } from './tvshow-details.component';

describe('TvshowDetailsComponent', () => {
  let component: TvshowDetailsComponent;
  let fixture: ComponentFixture<TvshowDetailsComponent>;
  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };
  let mockFilter = function(e) {
    return e.id === showId;
  };
  const showId = 2;
  const mockShowService = jasmine.createSpyObj("TvShowsService", ["getTVShows"]);
  let showRatingArray = [{  
    id: 2,
    img: "https://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg",
    name: "Person of Interest",
    rating: 8.9,
    summary: "Person of Interset show"
  },{ 
    id: 3,
    img: "https://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg",
    name: "Person of Interest",
    rating: 8.9,
    summary: "Person of Interset show"
  },{
    id: 169,
    img: "https://static.tvmaze.com/uploads/images/medium_portrait/0/2400.jpg",
    name: "Breaking Bad",
    rating: 9.2,
    summary: "Breaking Bad show"
  }]
  let selectedShowdetails = {  
    id: 2,
    img: "https://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg",
    name: "Person of Interest",
    rating: 8.9,
    summary: "Person of Interset show"
  }
  let service;
  beforeEach(() => {
    const tvShowServiceMock  = () =>({
      getTVShows:() => ({subscribe: f => f({}) })
    });
    TestBed.configureTestingModule({
      schemas:[NO_ERRORS_SCHEMA],
      declarations:[TvshowDetailsComponent],
      providers:[
        { provide : TvShowsService, useFactory: tvShowServiceMock },
        { provide: ActivatedRoute, useValue: {
          snapshot: { params: { id:{} } }
        } },
        { provide: filter, useValue: mockFilter}
      ]
    });
    service = TestBed.inject(TvShowsService);
    fixture = TestBed.createComponent(TvshowDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should filter the selected show', () => {
    spyOn(service,'getTVShows').and.returnValue(of(showRatingArray));
    let func = function() {
      for (var i = 0; i < showRatingArray.length; i++) {
        if(showRatingArray[i].id == showId){
          selectedShowdetails = showRatingArray[i];
          expect(selectedShowdetails).toBeGreaterThan(0);
        }
      }
    }
  });
});
