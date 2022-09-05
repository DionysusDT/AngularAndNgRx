import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { actions } from 'src/app/providers/todos.action';
import { TodoModel } from 'src/app/providers/todos.state';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo?:TodoModel;
  editTodo: boolean = false;
  completeTodo:boolean = false;
  todoInput: string = '';

  constructor(private store: Store) { }

  ngOnInit(): void {
    // this.editTodo = this.todo!.complete;
    this.completeTodo = this.todo!.complete;
    this.todoInput = this.todo!.title;
  }

  updateToggle(){
    this.editTodo = !this.editTodo;
  }

  updateTodo(){
    this.editTodo = !this.editTodo;
    if(this.todoInput!.trim().length>0)
      this.store.dispatch(actions.updateTodoAction({
        id: this.todo!.id,
        complete: this.todo!.complete,
        title: this.todoInput!.trim()
      }));
  }

  completeToggle(){
    this.completeTodo = !this.completeTodo;
    this.store.dispatch(actions.updateTodoAction({
      id: this.todo!.id,
      complete: this.completeTodo,
      title: this.todo!.title
    }));
  }
  deleteTodo(){
    this.store.dispatch(actions.deleteTodoAction({
      id: this.todo!.id,
      complete: this.todo!.complete,
      title: this.todo!.title
    }));
  }
}
