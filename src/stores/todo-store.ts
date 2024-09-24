import { makeAutoObservable } from "mobx";
import { Todo } from "../types/types";

class TodoStore{
    todos: Todo[] = []
    lastId: number = 0

    constructor(){
        makeAutoObservable(this)
    }

    addTodo(todo: Todo){
        this.todos = [...this.todos, todo]
    }

    get getId(){
        return this.lastId++
    }

    updateTodo(todo: Todo){
        let index = this.todos.findIndex((item) => item.id == todo.id)
        this.todos[index] = todo
    }
}


export default new TodoStore