import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { TvShowsService } from '../services/tv-shows.service';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css']
})
export class TvShowsComponent implements OnInit {
  public searchText;
  public tvShowsList = [];
  public genres =['Drama',
  'Action',
  'Thriller',
  'Science-Fiction',
  'Crime',
  'Horror',
  'Romance',
  'Adventure',
  'Espionage',
  'Mystery',
  'Supernatural',
  'Fantasy',
  'Family',
  'Anime',
  'Comedy',
  'History',
  'Medical',
  'Legal',
  'Music',
  'Western',
  'War',
  'Sports'];
  public showsRating = [];
  public defaultSelectedValue: any;

  public compareFunction = function compareFunction(a: { rating: number; }, b: { rating: number; }) {
    if (a.rating < b.rating) {
      return 1;
    }
    if (a.rating > b.rating) {
      return -1;
    }
    return 0;
  }

  constructor(private tvShowsService: TvShowsService,private router: Router) { }

  ngOnInit(): void {
     /* Retreiving TV Shows list by calling Service */
     this.tvShowsService.getTVShows().subscribe((res) => {
        this.tvShowsList = res;
        for (let i = 0; i < this.tvShowsList.length; i++) {
          this.showsRating.push({
            'id': this.tvShowsList[i].id,
            'rating': this.tvShowsList[i].rating.average,
            'name': this.tvShowsList[i].name,
            'img': this.tvShowsList[i].image.medium,
            'summary': this.tvShowsList[i].summary
          })
        }
        this.showsRating.sort(this.compareFunction);
    });
    this.defaultSelectedValue = '';
  }
  /* Data Change on clicking on Genre */
  onGenreChange(genre: any) {
    const selectedGenre = this.tvShowsList.filter(show => show.genres.includes(genre));
    const genreSelectedArray:any[] = []
    for (let i = 0; i < selectedGenre.length; i++) {
      const obj:any = {
        'id': selectedGenre[i].id,
        'rating': selectedGenre[i].rating.average,
        'name': selectedGenre[i].name,
        'img': selectedGenre[i].image.medium,
        'summary': selectedGenre[i].summary
      }
      genreSelectedArray.push(obj)
    }
    this.showsRating = genreSelectedArray;
    this.showsRating.sort(this.compareFunction);
  }
  /* Navigating to TV show details Page */
  navigateToShowDetail(id: any) {
    this.router.navigateByUrl('tvshowDetails/' + id + '');
  }
}

