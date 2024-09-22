import { Todo } from "../../../types/types"
import { Container, ContainerTypes } from "../Container/Container"
import { FC } from "react"
import cs from "./TodoItem.module.scss"
interface TodoItemProps {
    todo: Todo,
    setIsDragged: React.Dispatch<React.SetStateAction<boolean>>,
    isDragged: boolean
}

export const TodoItem: FC<TodoItemProps> = ({ todo, setIsDragged, isDragged }) => {
    const handleDragStart = (e: React.DragEvent, todo: Todo) => {
        setIsDragged(true)
        e.dataTransfer.setData("draggedTodo", JSON.stringify(todo))
    }

    const handleDragEnd = (e: React.DragEvent) => {
        setIsDragged(false)
    }

    return (
        <Container containerType={ContainerTypes.flexVertical} className={cs.todoItem}
            draggable
            onDragStart={(e: React.DragEvent<HTMLDivElement>) => handleDragStart(e, todo)}
            onDragEnd={(e: React.DragEvent<HTMLDivElement>) => { handleDragEnd(e) }}>
            <a href="" className={cs.todoOption}>{todo.title}</a>
            <span className={cs.todoPriority}>{todo.priority}</span>
        </Container>
    )
}