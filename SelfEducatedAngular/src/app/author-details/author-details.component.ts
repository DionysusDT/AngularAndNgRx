import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Author } from '../author.model';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.scss']
})
export class AuthorDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() author = new Author(0,"");

  @Output() select = new EventEmitter<Author>();

  
}
