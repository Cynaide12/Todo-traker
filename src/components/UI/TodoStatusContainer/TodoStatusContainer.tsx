import { FC, useEffect, useState } from "react"
import { Todo, TodoStatus } from "../../../types/types"
import { MarkdownList, MarkdownListType } from "../MarkdownList/MarkdownList"
import { TodoItem } from "../TodoItem/TodoItem"
import { Container, ContainerTypes } from "../Container/Container";
import cs from "./TodoStatusContainer.module.scss"
import { AddTodoButton } from "../../AddTodo/AddTodo";
import todoStore from "../../../stores/todo-store";
interface TodoStatusContainerProps {
    status: TodoStatus;
    todos: Todo[]
}


export const TodoCategoryContainer: FC<TodoStatusContainerProps> = ({ status, todos }) => {
    const [isDragged, setIsDragged] = useState(false)


    const handleDrop = ((e: React.DragEvent<HTMLDivElement>) => {
        const data = e.dataTransfer.getData("draggedTodo")
        const todo: Todo = JSON.parse(data)
        //TODO:реализовать коорректное добавление(и удаление(и изменение))
        todo.status = status
        todo.id = todoStore.getId
        todoStore.addTodo(todo)
        //TODO: сделать анимку перемещения
        setIsDragged(false)
    })


    const handleDragOver = ((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        // console.log("DRAG OVER")
    })


    return (
        <Container containerType={ContainerTypes.flexVertical} className={cs.todoContainer_item}
            onDrop={(e: React.DragEvent<HTMLDivElement>) => { handleDrop(e) }}
            onDragOver={(e: React.DragEvent<HTMLDivElement>) => { handleDragOver(e) }}
        >
            <h2>{status}</h2>
            <MarkdownList listType={MarkdownListType.vertical} items={todos} renderItem={(item) => <TodoItem todo={item} key={item.id} setIsDragged={setIsDragged} isDragged={isDragged} />} />
            <AddTodoButton category={status} />
        </Container >
    )

}