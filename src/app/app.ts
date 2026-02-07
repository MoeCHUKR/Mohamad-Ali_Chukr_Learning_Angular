import { Component, OnInit } from '@angular/core';
import { MovieList } from './movie-list/movie-list';
import { MovieListItemComponent } from './movie-list-item/movie-list-item';
import { IContent } from './models/content';
import { MovieService } from './services/movie';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MovieListItemComponent, MovieList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  featured?: IContent;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.read(2).subscribe({
      next: (data) => (this.featured = data),
      error: (err) => console.error(err)
    });
  }
}
