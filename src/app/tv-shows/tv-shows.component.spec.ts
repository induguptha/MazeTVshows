import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TvShowsService } from '../services/tv-shows.service';
import { TvShowsComponent } from './tv-shows.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { By } from '@angular/platform-browser';

describe('TvShowsComponent', () => {
  let component: TvShowsComponent;
  let fixture: ComponentFixture<TvShowsComponent>;
  let mockRouter = {
    navigateByUrl: jasmine.createSpy('navigateByUrl')
  };
  let showRatingArray1 = {  
      id: 2,
      img: "https://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg",
      name: "Person of Interest",
      rating: 8.9,
      summary: "Person of Interset show"
    }
    let showRatingArray3 = {  
      id: 3,
      img: "https://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg",
      name: "Person of Interest",
      rating: 8.9,
      summary: "Person of Interset show"
    }
    let showRatingArray2 = {
      id: 169,
      img: "https://static.tvmaze.com/uploads/images/medium_portrait/0/2400.jpg",
      name: "Breaking Bad",
      rating: 9.2,
      summary: "Breaking Bad show"
    }
  let expectredRes =[
    {"id":1,"url":"https://www.tvmaze.com/shows/1/under-the-dome","name":"Under the Dome","type":"Scripted","language":"English","genres":["Drama","Science-Fiction","Thriller"],"status":"Ended","runtime":60,"averageRuntime":60,"premiered":"2013-06-24","officialSite":"http://www.cbs.com/shows/under-the-dome/","schedule":{"time":"22:00","days":["Thursday"]},"rating":{"average":6.6},"weight":96,"network":{"id":2,"name":"CBS","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"dvdCountry":null,"externals":{"tvrage":25988,"thetvdb":264492,"imdb":"tt1553656"},"image":{"medium":"https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg","original":"https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg"},"summary":"<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>","updated":1621201742,"_links":{"self":{"href":"https://api.tvmaze.com/shows/1"},"previousepisode":{"href":"https://api.tvmaze.com/episodes/185054"}}},
    {"id":2,"url":"https://www.tvmaze.com/shows/2/person-of-interest","name":"Person of Interest","type":"Scripted","language":"English","genres":["Action","Crime","Science-Fiction"],"status":"Ended","runtime":60,"averageRuntime":60,"premiered":"2011-09-22","officialSite":"http://www.cbs.com/shows/person_of_interest/","schedule":{"time":"22:00","days":["Tuesday"]},"rating":{"average":8.9},"weight":98,"network":{"id":2,"name":"CBS","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"dvdCountry":null,"externals":{"tvrage":28376,"thetvdb":248742,"imdb":"tt1839578"},"image":{"medium":"https://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg","original":"https://static.tvmaze.com/uploads/images/original_untouched/163/407679.jpg"},"summary":"<p>You are being watched. The government has a secret system, a machine that spies on you every hour of every day. I know because I built it. I designed the Machine to detect acts of terror but it sees everything. Violent crimes involving ordinary people. People like you. Crimes the government considered \"irrelevant\". They wouldn't act so I decided I would. But I needed a partner. Someone with the skills to intervene. Hunted by the authorities, we work in secret. You'll never find us. But victim or perpetrator, if your number is up, we'll find you.</p>","updated":1624020140,"_links":{"self":{"href":"https://api.tvmaze.com/shows/2"},"previousepisode":{"href":"https://api.tvmaze.com/episodes/659372"}}},
    {"id":3,"url":"https://www.tvmaze.com/shows/3/bitten","name":"Bitten","type":"Scripted","language":"English","genres":["Drama","Horror","Romance"],"status":"Ended","runtime":60,"averageRuntime":60,"premiered":"2014-01-11","officialSite":"http://bitten.space.ca/","schedule":{"time":"22:00","days":["Friday"]},"rating":{"average":7.5},"weight":84,"network":{"id":7,"name":"CTV Sci-Fi Channel","country":{"name":"Canada","code":"CA","timezone":"America/Halifax"}},"webChannel":null,"dvdCountry":null,"externals":{"tvrage":34965,"thetvdb":269550,"imdb":"tt2365946"},"image":{"medium":"https://static.tvmaze.com/uploads/images/medium_portrait/0/15.jpg","original":"https://static.tvmaze.com/uploads/images/original_untouched/0/15.jpg"},"summary":"<p>Based on the critically acclaimed series of novels from Kelley Armstrong. Set in Toronto and upper New York State, <b>Bitten</b> follows the adventures of 28-year-old Elena Michaels, the world's only female werewolf. An orphan, Elena thought she finally found her \"happily ever after\" with her new love Clayton, until her life changed forever. With one small bite, the normal life she craved was taken away and she was left to survive life with the Pack.</p>","updated":1603936716,"_links":{"self":{"href":"https://api.tvmaze.com/shows/3"},"previousepisode":{"href":"https://api.tvmaze.com/episodes/631862"}}}
  ]
  beforeEach(async () => {
    const tvShowServiceMock  = () =>({
      getTVShows:() => ({subscribe: f => f({}) })
    });
    await TestBed.configureTestingModule({
      imports: [FormsModule,
        Ng2SearchPipeModule
      ],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ TvShowsComponent ],
      providers:[
        { provide: TvShowsService, useFactory: tvShowServiceMock },
        { provide: Router, useValue: mockRouter  }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it(`genres has default value`, () => {
    expect(component.genres).toEqual([
      `Drama`,
      `Action`,
      `Thriller`,
      `Science-Fiction`,
      `Crime`,
      `Horror`,
      `Romance`,
      `Adventure`,
      `Espionage`,
      `Mystery`,
      `Supernatural`,
      `Fantasy`,
      `Family`,
      `Anime`,
      `Comedy`,
      `History`,
      `Medical`,
      `Legal`,
      `Music`,
      `Western`,
      `War`,
      `Sports`
    ]);
  });
  it(`should trigger a click event`, () => {
    fixture =  TestBed.createComponent(TvShowsComponent);
    component = fixture.componentInstance;
     component.tvShowsList = expectredRes;
     component.onGenreChange(['Drama','Comedy']);
  });
  it(`should navigate to shows details page`, () => {
    fixture =  TestBed.createComponent(TvShowsComponent);
    component = fixture.componentInstance;
    component.navigateToShowDetail('tvshowDetails');
      expect(mockRouter.navigateByUrl).toHaveBeenCalled();
  });
  it(`should compare two values and return 1`, () => {
    fixture =  TestBed.createComponent(TvShowsComponent);
    component = fixture.componentInstance;
    let sorted = component.compareFunction(showRatingArray1,showRatingArray2);
    expect(sorted).toEqual(1);
  });
  it(`should compare two values and return -1`, () => {
    fixture =  TestBed.createComponent(TvShowsComponent);
    component = fixture.componentInstance;
    let sorted = component.compareFunction(showRatingArray2,showRatingArray1);
    expect(sorted).toEqual(-1);
  });
  it(`should compare two values and return 0`, () => {
    fixture =  TestBed.createComponent(TvShowsComponent);
    component = fixture.componentInstance;
    let sorted = component.compareFunction(showRatingArray3,showRatingArray1);
    expect(sorted).toEqual(0);
  });
});
