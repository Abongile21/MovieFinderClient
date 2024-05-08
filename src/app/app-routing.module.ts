import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './comps/home/home.component';
import { MoviesComponent } from './comps/movies/movies.component';
import { WishlistComponent } from './comps/wishlist/wishlist.component';
import { RecommendationsComponent } from './comps/recommendations/recommendations.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'recommendation', component: RecommendationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
