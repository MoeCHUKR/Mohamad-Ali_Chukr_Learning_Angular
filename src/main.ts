import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { App } from './app/app';
import { placeholderGuard } from './app/guards/placeholder-guard';

const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },

  {
    path: 'movies',
    loadComponent: () =>
      import('./app/movie-list/movie-list').then(m => m.MovieList)
  },

  {
    path: 'modify',
    canActivate: [placeholderGuard],
    loadComponent: () =>
      import('./app/modify-list-item/modify-list-item').then(m => m.ModifyListItem)
  },

  {
    path: '**',
    loadComponent: () =>
      import('./app/page-not-found/page-not-found').then(m => m.PageNotFound)
  }
];

bootstrapApplication(App, {
  providers: [provideRouter(routes)]
}).catch(err => console.error(err));
