import { MoviesComponent } from './blank-layout/movies/movies.component';
import { TopRatedComponent } from './blank-layout/top-rated/top-rated.component';
import { MostPopularComponent } from './blank-layout/most-popular/most-popular.component';
import { HomeComponent } from './blank-layout/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AuthLayoutComponent, AdminLayoutComponent, UserLayoutComponent, HomeComponent, MostPopularComponent, MoviesComponent, TopRatedComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }
