import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { TvshowDetailsComponent } from './tvshow-details/tvshow-details.component';

const routes: Routes = [
  { path: '', component: TvShowsComponent },
  { path:'tvshowDetails/:id', component: TvshowDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
