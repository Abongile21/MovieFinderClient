import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './comps/home/home.component';
import { WishlistComponent } from './comps/wishlist/wishlist.component';
import { RecommendationsComponent } from './comps/recommendations/recommendations.component';

const routes: Routes = [
  {path : "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "wishlist", component: WishlistComponent},
  {path: "recommendation", component: RecommendationsComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
