import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './comps/home/home.component';
import { MovieComponent } from './comps/movie/movie.component';
import { MoviesComponent } from './comps/movies/movies.component';
import { WishlistComponent } from './comps/wishlist/wishlist.component';
import { RecommendationsComponent } from './comps/recommendations/recommendations.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent,
    MoviesComponent,
    WishlistComponent,
    RecommendationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
