import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tvShows } from '../models/tvshows.model';
import { TvShowsService } from '../services/tv-shows.service';

@Component({
  selector: 'app-tvshow-details',
  templateUrl: './tvshow-details.component.html',
  styleUrls: ['./tvshow-details.component.css']
})
export class TvshowDetailsComponent implements OnInit {
  public tvshowsList= [];
  public id;
    public name;
    public summary;
    public img;
    public rating;
    public language;
    public webchannel;
    public officialSite;
    public genres;
    public selectedShow;
  constructor(private route: ActivatedRoute, private showService: TvShowsService) { }
  ngOnInit() {
      this.showService.getTVShows().subscribe((response) => {
        /*Retreiving the response */
          this.tvshowsList = response;
          /*Getting the show Id using route snapshot */
          const showId = parseInt(this.route.snapshot.params.id, 10);
          for (let i = 0; i < this.tvshowsList.length; i++) {
            if(this.tvshowsList[i].id == showId){
              this.selectedShow = this.tvshowsList[i];
              this.id = this.selectedShow.id;
              this.name = this.selectedShow.name;
              this.summary = this.selectedShow.summary.replace(/(<([^>]+)>)/ig, '');
              this.img = this.selectedShow.image.medium;
              this.rating = this.selectedShow.rating.average;
              this.language = this.selectedShow.language;
              this.genres = this.selectedShow.genres;  
            }
          }
         
      })
  }
}
