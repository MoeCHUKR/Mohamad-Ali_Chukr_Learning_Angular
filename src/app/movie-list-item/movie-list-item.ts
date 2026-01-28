import { Component, Input } from '@angular/core';
import { NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-movie-list-item',
  templateUrl: './movie-list-item.html',
  imports: [

  ],
  styleUrls: ['./movie-list-item.css']
})
export class MovieListItemComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() category: string = '';
}

export class MovieListItem {
}
