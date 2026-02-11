import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-movie-list-item',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './movie-list-item.html',
  styleUrl: './movie-list-item.css'
})
export class MovieListItemComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() category = '';
  @Input() imageUrl = '';
}
