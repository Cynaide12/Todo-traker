import { FC } from "react";
import { Container } from "../Container/Container";
import cs from "./WorkflowColumns.module.scss"
import { TodoStatus } from "../../../types/types";
import { MarkdownList, MarkdownListType } from "../MarkdownList/MarkdownList"

import { TodoCategoryContainer } from "../TodoStatusContainer/TodoStatusContainer";
import todoStore from "../../../stores/todo-store";
import { observer } from "mobx-react-lite";
export const WorkflowColumns: FC<{ boardId: number }> = observer(({ boardId }) => {
    const columnNames = Object.values(TodoStatus)
    // const todos: Todo[] = [{
    //     id: 0,
    //     title: "тестовая карточка",
    //     category: "тест",
    //     priority: "срочно",
    //     status: TodoStatus.new
    // }]

    const todos = todoStore.todos

    const getStatusTodos = (status: TodoStatus) => {
        return todos.filter((todo) => todo.status === status)
    }


    return (
        <Container className={cs.header}>
            <MarkdownList listType={MarkdownListType.horizontal} items={columnNames} renderItem={(item) => { return <TodoCategoryContainer status={item} boardId={boardId} todos={getStatusTodos(item)} key={item} /> }} />
        </Container>
    )
})