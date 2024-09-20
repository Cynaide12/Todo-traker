import { Todo } from "../../../types/types"
import { Container, ContainerTypes } from "../Container/Container"
import { FC } from "react"
interface TodoItemProps {
    todo: Todo
}

export const TodoItem: FC<TodoItemProps> = ({ todo }) => {
    return (
        <Container containerType={ContainerTypes.flexVertical}>
            <a href="">{todo.title}</a>
            <span>{todo.priority}</span>
        </Container>
    )
}