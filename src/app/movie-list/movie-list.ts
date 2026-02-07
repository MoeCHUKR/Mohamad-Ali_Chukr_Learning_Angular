import { Component, OnInit } from '@angular/core';
import { MovieListItemComponent } from '../movie-list-item/movie-list-item';
import { IContent } from '../models/content';
import { MovieService } from '../services/movie';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MovieListItemComponent],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css'
})
export class MovieList implements OnInit {
  contentList: IContent[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getAll().subscribe({
      next: (data) => (this.contentList = data),
      error: (err) => console.error(err)
    });
  }
}
