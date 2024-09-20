import { FC } from "react";
import { Container } from "../Container/Container";
import cs from "./WorkflowColumns.module.scss"
import { Todo, TodoStatus } from "../../../types/types";
import { MarkdownListType } from "../MarkdownList/MarkdownList";
import MarkdownList from "../MarkdownList/MarkdownList";
import { TodoCategoryContainer } from "../TodoContainer/TodoContainer";
export const WorkflowColumns: FC = () => {
    const columnNames = Object.values(TodoStatus)
    const todos: Todo[] = [{
        id: "0",
        title: "тестовая карточка",
        category: "тест",
        priority: "срочно",
        status: TodoStatus.new
    }]


    const getCategoryTodos = (status: TodoStatus) => {
        return todos.filter((todo) => todo.status === status)
    }

    return (
        <Container className={cs.header}>
            <MarkdownList listType={MarkdownListType.horizontal} items={columnNames} renderItem={(item) => { return <TodoCategoryContainer status={item} todos={getCategoryTodos(item)} key={item}/> }} />
        </Container>
    )
}