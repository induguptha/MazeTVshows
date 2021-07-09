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
  public tvshowsList:any[] = [];
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
          this.tvshowsList = response;
          const showId = parseInt(this.route.snapshot.params.id, 10);
           this.selectedShow = this.tvshowsList.filter(e => e.id === showId);
          this.id = this.selectedShow[0].id;
          this.name = this.selectedShow[0].name;
          this.summary = this.selectedShow[0].summary.replace(/(<([^>]+)>)/ig, '');
          this.img = this.selectedShow[0].image.medium;
          this.rating = this.selectedShow[0].rating.average;
          this.language = this.selectedShow[0].language;
          this.genres = this.selectedShow[0].genres;
          // if(this.selectedShow[0].webChannel){
          //   this.webchannel = this.selectedShow[0].webChannel.name;
          // }
          // if(this.selectedShow[0].officialSite){
          //   this.officialSite = this.selectedShow[0].officialSite;
          // }
      })
  }
  navigateToOfficialSite(url: string){
        window.open(url,"\blank");
  }
}
