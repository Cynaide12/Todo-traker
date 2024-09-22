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
        let currentTodo = this.todos.find((item) => item.id == todo.id)
        currentTodo = todo
    }
}


export default new TodoStore