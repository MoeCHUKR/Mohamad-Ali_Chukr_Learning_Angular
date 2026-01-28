import { Component } from '@angular/core';
import { IContent } from '../models/content';
import {MovieListItemComponent} from '../movie-list-item/movie-list-item';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [
    MovieListItemComponent
  ],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css'
})
export class MovieList {
  contentList: IContent[] = [
    { id: 1, title: 'Inception', description: 'Dream heist.', category: 'SciFi'},
    { id: 2, title: 'Whiplash', description: 'Drummer vs mentor.', category: 'Drama' },
    { id: 'A3', title: 'Hot Fuzz', description: 'Small town mystery.', category: 'Comedy' },
    { id: 4, title: 'Mad Max', description: 'Wasteland chase.', category: 'Action' }
  ];
}
