import { Component, OnInit } from '@angular/core';
import { Author, authors } from '../author.model';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss']
})
export class AuthorListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  authors = authors;
  currentAuthor = authors[0]

  onSelected(selectAuthor: Author){
    this.currentAuthor = selectAuthor
  }

}
