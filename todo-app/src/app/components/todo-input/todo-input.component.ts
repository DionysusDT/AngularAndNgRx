import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { todoSelector } from 'src/app/providers/todo.reducers';
import { actions } from 'src/app/providers/todos.action';
import { TodoModel } from 'src/app/providers/todos.state';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent implements OnInit {

  todoInput?: string
  todos?: TodoModel[];
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.select(todoSelector).subscribe(state => this.todos = state)
  }
  addTodo(){
    if(this.todoInput!.trim().length > 0){
      this.store.dispatch(actions.addTodoAction({
        id:this.todos!.length,
        complete:false,
        title:this.todoInput!.trim()
      }))
    }
    this.todoInput =""
  }

}
