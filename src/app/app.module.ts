import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from "./app.component"
import { HomeComponent } from './comps/home/home.component'
import { MovieComponent } from './comps/movie/movie.component';
import { MoviesComponent } from './comps/movies/movies.component';
import { WishlistComponent } from './comps/wishlist/wishlist.component';
import { RecommendationsComponent } from './comps/recommendations/recommendations.component';
// import { SearchComponent } from './search/search.component';
<<<<<<< HEAD
import { SearchBarComponent } from './comps/search-bar/search-bar.component';
import { NavBarComponent } from './comps/nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
=======
import { SearchBarComponent } from './search-bar/search-bar.component';
>>>>>>> 5687164e5eeed7796a8a5b7027266311633d0a04


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent,
    MoviesComponent,
    WishlistComponent,
    RecommendationsComponent,
    // SearchComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
