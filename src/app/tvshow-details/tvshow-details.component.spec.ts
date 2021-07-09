import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs/internal/observable/of';
import { tvShows } from '../models/tvshows.model';
import { TvShowsService } from '../services/tv-shows.service';
import { TvshowDetailsComponent } from './tvshow-details.component';

describe('TvshowDetailsComponent', () => {
  let component: TvshowDetailsComponent;
  let fixture: ComponentFixture<TvshowDetailsComponent>;
  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };
  const mockShowService = jasmine.createSpyObj("TvShowsService", ["getTVShows"]);
  let expectredRes:tvShows[]=[
    {
      "id": 1,
      "url": "https://www.tvmaze.com/shows/1/under-the-dome",
      "name": "Under the Dome",
      "type": "Scripted",
      "language": "English",
      "status": "Ended",
      "runtime": 60,
      "premiered": "2013-06-24",
      "officialsite": "http://www.cbs.com/shows/under-the-dome/",
      "schedule": {"time":"22:00","days":["Thursday"]},
      "rating": {"average":6.6},
      "weight": 96,
      "network": {"id":2,"name":"CBS","country":{"name":"United States","code":"US","timezone":"America/New_York"}},
      "webchannel": null,
      "externals": {"tvrage":25988,"thetvdb":264492,"imdb":"tt1553656"},
      "image": {"medium":"https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg","original":"https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg"},
      "summary": "test",
      "updated": 1621201742,
      "genres": ["Drama","Science-Fiction","Thriller"],
      "_links": {"self":{"href":"https://api.tvmaze.com/shows/1"},"previousepisode":{"href":"https://api.tvmaze.com/episodes/185054"}}
  },
  {
    "id": 2,
    "url": "https://www.tvmaze.com/shows/1/under-the-dome",
    "name": "Under",
    "type": "Scripted",
    "language": "English",
    "status": "Ended",
    "runtime": 60,
    "premiered": "2013-06-24",
    "officialsite": "http://www.cbs.com/shows/under-the-dome/",
    "schedule": {"time":"22:00","days":["Thursday"]},
    "rating": {"average":6.6},
    "weight": 96,
    "network": {"id":2,"name":"CBS","country":{"name":"United States","code":"US","timezone":"America/New_York"}},
    "webchannel": null,
    "externals": {"tvrage":25988,"thetvdb":264492,"imdb":"tt1553656"},
    "image": {"medium":"https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg","original":"https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg"},
    "summary": "test",
    "updated": 1621201742,
    "genres": ["Drama","Science-Fiction","Thriller"],
    "_links": {"self":{"href":"https://api.tvmaze.com/shows/1"},"previousepisode":{"href":"https://api.tvmaze.com/episodes/185054"}}
}
  ]
  let selectedShow =[{
    "id": 1,
    "url": "https://www.tvmaze.com/shows/1/under-the-dome",
    "name": "Under the Dome",
    "type": "Scripted",
    "language": "English",
    "status": "Ended",
    "runtime": 60,
    "premiered": "2013-06-24",
    "officialsite": "http://www.cbs.com/shows/under-the-dome/",
    "schedule": {"time":"22:00","days":["Thursday"]},
    "rating": {"average":6.6},
    "weight": 96,
    "network": {"id":2,"name":"CBS","country":{"name":"United States","code":"US","timezone":"America/New_York"}},
    "webchannel": null,
    "externals": {"tvrage":25988,"thetvdb":264492,"imdb":"tt1553656"},
    "image": {"medium":"https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg","original":"https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg"},
    "summary": "test",
    "updated": 1621201742,
    "genres": ["Drama","Science-Fiction","Thriller"],
    "_links": {"self":{"href":"https://api.tvmaze.com/shows/1"},"previousepisode":{"href":"https://api.tvmaze.com/episodes/185054"}}
}
    
  ]
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
        } }
      ]
    });
    fixture = TestBed.createComponent(TvshowDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   fixture = TestBed.createComponent(TvshowDetailsComponent);
  //   component = fixture.componentInstance;
  //   expect(component).toBeTruthy();
  // });
  // it('should filter the selected show', () => {
  //   component.tvshowsList = expectredRes;
  //   const showId = 1;
  //   component.selectedShow = component.tvshowsList.filter(e => e.id === showId);
  //   expect(component.selectedShow).toEqual(selectedShow);
  // });
  it('should set some values using service',()=>{
    mockShowService.getTVShows.and.returnValue(
       of({ data: expectredRes})
     );
    expect(expectredRes).toEqual(selectedShow);
  })
  it('should open url', function() {
    let url = "https://www.abnamro.com";
    component.navigateToOfficialSite(url);
    expect(mockRouter.navigate).toHaveBeenCalledWith(url);
 });
});
