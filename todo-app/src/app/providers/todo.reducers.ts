import { createReducer, createSelector, on,createFeatureSelector } from "@ngrx/store";
import { actions } from "./todos.action";
import { TodoModel, todos } from "./todos.state";

export const todoReducer = createReducer(
  todos,
  on(actions.addTodoAction, (state,todo) =>{
    return [todo,...state]
  }),
  on(actions.updateTodoAction, (state,todo) =>{
    let tempTodoIndex = state.findIndex((t) =>t.id == todo.id )
    var tempState = [...state]
    if(tempTodoIndex != -1){
      tempState[tempTodoIndex] = todo;
    }
    return [...tempState]
  }),
  on(actions.deleteTodoAction, (state,todo) =>{
    let todos = state.filter((t) =>t.id != todo.id )
    return [...todos]
  })
)

export const todoSelector = createSelector(createFeatureSelector("todos"),
 (todos:TodoModel[]) => todos
)
