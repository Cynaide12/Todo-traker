import { FC, useState } from "react"
import { Todo, TodoStatus } from "../../../types/types"
import { MarkdownList, MarkdownListType } from "../MarkdownList/MarkdownList"
import { TodoItem } from "../TodoItem/TodoItem"
import { Container, ContainerTypes } from "../Container/Container";
import cs from "./TodoStatusContainer.module.scss"
import { AddTodoButton } from "../../AddTodo/AddTodo";
import todoStore from "../../../stores/todo-store";
import { observer } from "mobx-react-lite";
interface TodoStatusContainerProps {
    status: TodoStatus;
    todos: Todo[];
    boardId: number;
}


export const TodoCategoryContainer: FC<TodoStatusContainerProps> = observer(({ status, todos, boardId }) => {
    const [isDragged, setIsDragged] = useState(false)
    //TODO:если для категории буду делать drag and drop - раскомментировать
    // const [todoClasses, setTodoClasses] = useState<string[]>([])
    const handleDrop = ((e: React.DragEvent<HTMLDivElement>) => {
        const data = e.dataTransfer.getData("draggedTodo")
        const todo: Todo = JSON.parse(data)
        todo.status = status
        todoStore.updateTodo(todo)

        e.currentTarget.style.background = "white"

        //TODO: сделать анимку перемещения
        setIsDragged(false)

        e.currentTarget.classList.remove(cs.todoContainer_dragOver)

    })


    const handleDragOver = ((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        e.currentTarget.classList.add(cs.todoContainer_dragOver)
    })

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault
        e.currentTarget.classList.remove(cs.todoContainer_dragOver)
    }

    return (
        <Container containerType={ContainerTypes.flexVertical} className={cs.todoContainer_item}
            onDrop={(e: React.DragEvent<HTMLDivElement>) => { handleDrop(e) }}
            onDragOver={(e: React.DragEvent<HTMLDivElement>) => { handleDragOver(e) }}
            onDragLeave={(e: React.DragEvent<HTMLDivElement>) => { handleDragLeave(e) }}
        >
            <h2>{status}</h2>
            <MarkdownList listType={MarkdownListType.vertical} items={todos}
                renderItem={(item) => <TodoItem todo={item} key={item.id} setIsDragged={setIsDragged} isDragged={isDragged} />} />
            <AddTodoButton status={status} boardId={boardId} />
        </Container >
    )

})