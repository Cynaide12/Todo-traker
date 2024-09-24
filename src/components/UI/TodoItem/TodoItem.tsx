import { Todo } from "../../../types/types"
import { Container, ContainerTypes } from "../Container/Container"
import { FC, useEffect, useState, useRef } from "react"
import cs from "./TodoItem.module.scss"
import { joinClasses } from "../../../utils/className"
interface TodoItemProps {
    todo: Todo,
    setIsDragged: React.Dispatch<React.SetStateAction<boolean>>,
    isDragged: boolean,
}

//TODO: че нибудь придумать с этим закоментированным высером

export const TodoItem: FC<TodoItemProps> = ({ todo, setIsDragged, isDragged }) => {
    const [todoClasses, setTodoClasses] = useState<string[]>([cs.todoItem])
    // const [currentGhostElem, setCurrentGhostElem] = useState<HTMLElement>()
    const todoRef = useRef<HTMLDivElement>(null)
    const handleDragStart = (e: React.DragEvent, todo: Todo) => {
        setIsDragged(true)
        setTodoClasses([...todoClasses])

        if (todoRef.current) {
            // const { dragImage, nodeRect } = createDragImage(e.currentTarget)
            // setCurrentGhostElem(dragImage)

            e.dataTransfer.setDragImage(e.currentTarget, e.currentTarget.clientLeft, e.currentTarget.clientTop)
        }

        e.dataTransfer.setData("draggedTodo", JSON.stringify(todo))

    }

    // const createDragImage = (currentTarget: EventTarget & Element) => {
    //     const dragImage = currentTarget.cloneNode(true) as HTMLElement
    //     const nodeRect = currentTarget.getBoundingClientRect()

    //     dragImage.style.width = `${nodeRect.width}px`
    //     dragImage.style.height = `${nodeRect.height}px`
    //     dragImage.style.transform = "rotate(10deg)"
    //     dragImage.style.left = `${nodeRect.left}px`
    //     dragImage.style.top = `${nodeRect.top}px`
    //     // dragImage.style.position = "fixed"
    //     dragImage.style.pointerEvents = "auto"
    //     dragImage.style.background = "transparent"
    //     document.body.appendChild(dragImage)

    //     return { dragImage, nodeRect }
    // }

    const handleDragEnd = () => {
        setIsDragged(false)
    }

    // useEffect(() => {
    //     if (isDragged == false && currentGhostElem) {
    //         document.body.removeChild(currentGhostElem)
    //     }
    // }, [isDragged])

    return (
        <Container containerType={ContainerTypes.flexVertical} className={joinClasses(todoClasses)}
            ref={todoRef}
            draggable
            onDragStart={(e: React.DragEvent<HTMLDivElement>) => handleDragStart(e, todo)}
            onDragEnd={handleDragEnd}>
            <a href="" className={cs.todoOption} onClick={(e: React.MouseEvent) => { return e.preventDefault() }}>{todo.title}</a>
            <span className={cs.todoPriority}>{todo.priority}</span>
        </Container>
    )
}