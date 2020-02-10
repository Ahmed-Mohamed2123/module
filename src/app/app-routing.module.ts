import { MoviesComponent } from './shared/layout/blank-layout/movies/movies.component';
import { AuthLayoutComponent } from './shared/layout/auth-layout/auth-layout.component';
import { UserLayoutComponent } from './shared/layout/user-layout/user-layout.component';
import { AdminLayoutComponent } from './shared/layout/admin-layout/admin-layout.component';
import { HomeComponent } from './shared/layout/blank-layout/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'movies', component: MoviesComponent, children: [
    {path: 'movie', loadChildren: () => import('./views/pages/pages.module').then(m => m.PagesModule)}
  ]},
  {path: 'admin', component: AdminLayoutComponent},
  {path: 'user', component: UserLayoutComponent},
  {path: 'auth', component: AuthLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
