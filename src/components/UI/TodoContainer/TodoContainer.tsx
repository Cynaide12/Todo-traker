import { FC } from "react"
import { Todo, TodoStatus } from "../../../types/types"
import MarkdownList, { MarkdownListType } from "../MarkdownList/MarkdownList"
import { TodoItem } from "../TodoItem/TodoItem"
import { Container, ContainerTypes } from "../Container/Container";

interface TodoCategoryContainer {
    status: TodoStatus;
    todos: Todo[]
}

export const TodoCategoryContainer: FC<TodoCategoryContainer> = ({ status, todos }) => {
    return (
        <Container containerType={ContainerTypes.flexVertical}>
            <h2>{status}</h2>
            <MarkdownList listType={MarkdownListType.vertical} items={todos} renderItem={(item) => <TodoItem todo={item} key={item.id}/>} />
        </Container>
    )

}