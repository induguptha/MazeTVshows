import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, Pipe } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TvShowsService } from './services/tv-shows.service';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { TvshowDetailsComponent } from './tvshow-details/tvshow-details.component';
// import { MatRadioModule } from '@angular/material/radio';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TvShowsComponent,
    TvshowDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule,
    // MatRadioModule,
    // ReactiveFormsModule,
    // BrowserAnimationsModule
  ],
  providers: [TvShowsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
