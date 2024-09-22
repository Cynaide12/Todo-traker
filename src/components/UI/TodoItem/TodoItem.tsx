import { Todo } from "../../../types/types"
import { Container, ContainerTypes } from "../Container/Container"
import { FC } from "react"
import cs from "./TodoItem.module.scss"
interface TodoItemProps {
    todo: Todo
}

export const TodoItem: FC<TodoItemProps> = ({ todo }) => {
    return (
        <Container containerType={ContainerTypes.flexVertical} className={cs.todoItem}>
            <a href="">{todo.title}</a>
            <span>{todo.priority}</span>
        </Container>
    )
}