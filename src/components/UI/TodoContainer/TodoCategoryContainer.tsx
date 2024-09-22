import { FC } from "react"
import { Todo, TodoStatus } from "../../../types/types"
import MarkdownList, { MarkdownListType } from "../MarkdownList/MarkdownList"
import { TodoItem } from "../TodoItem/TodoItem"
import { Container, ContainerTypes } from "../Container/Container";
import cs from "./TodoCategoryContainer.module.scss"
import { AddTodoButton } from "../../AddTodo/AddTodo";
interface TodoCategoryContainer {
    status: TodoStatus;
    todos: Todo[]
}

export const TodoCategoryContainer: FC<TodoCategoryContainer> = ({ status, todos }) => {
    return (
        <Container containerType={ContainerTypes.flexVertical} className={cs.todoContainer_item}>
            <h2>{status}</h2>
            <MarkdownList listType={MarkdownListType.vertical} items={todos} renderItem={(item) => <TodoItem todo={item} key={item.id} />} />
            <AddTodoButton category={status}/>
        </Container>
    )

}