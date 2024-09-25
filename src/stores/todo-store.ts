import { makeAutoObservable } from "mobx";
import { Board, Todo } from "../types/types";

class TodoStore{
    todos: Todo[] = []
    boards: Board[] = [{
        id: 0,
        title: "Первая доска"
    }]

    lastTodoId: number = 0
    lastBoardId: number = 1

    constructor(){
        makeAutoObservable(this)
    }

    addTodo(todo: Todo){
        this.todos = [...this.todos, todo]
    }

    addBoard(board: Board){
        this.boards = [...this.boards, board]
    }

    get getTodoId(){
        return this.lastTodoId++
    }

    get getBoardId(){
        return this.lastBoardId++
    }

    updateTodo(todo: Todo){
        let index = this.todos.findIndex((item) => item.id == todo.id)
        this.todos[index] = todo
    }
}


export default new TodoStore