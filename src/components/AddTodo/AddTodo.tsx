import { FC, useEffect, useRef, useState } from "react"
import cs from "./AddTodo.module.scss"
import { joinClasses } from "../../utils/className"
import TodoStore from "../../stores/todo-store"
import { Todo, TodoStatus } from "../../types/types"
import { observer } from "mobx-react-lite"
interface AddTodoProps {
    status: TodoStatus
    boardId: number
}

export const AddTodoButton: FC<AddTodoProps> = observer(({ status, boardId }) => {
    const [isActive, setIsActive] = useState(false)
    const inputRef = useRef<HTMLTextAreaElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    const OpenTodoForm = () => {
        setIsActive(true)
    }

    const AddTodo = (e: React.MouseEvent<HTMLButtonElement>, status: TodoStatus) => {
        e.preventDefault()
        if (!inputRef.current) return
        if (inputRef.current.value == '') return setIsActive(false)
        const todo: Todo = {
            id: TodoStore.getTodoId,
            title: inputRef.current.value,
            status: status,
            boardId: boardId
        }
        TodoStore.addTodo(todo)

        inputRef.current.value = ""
    }

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (!inputRef.current || !containerRef.current) return

            if (isActive && !inputRef.current.contains(e.target as Node) && !containerRef.current.contains(e.target as Node)) {
                setIsActive(false)
            }

        }

        document.addEventListener("mousedown", handleClickOutside)

    }, [isActive])

    return (<div ref={containerRef}>
        {isActive ?
            <form>
                <textarea className={cs.addTodo_input} placeholder="Введите имя карточки" ref={inputRef} dir="auto" />
                <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => AddTodo(e, status)} className={joinClasses(["btn", "hover-default", cs.addTodo_btn, cs.addTodo_submit])}>
                    Добавить карточку
                    <span className={cs.addTodo_icon}><img src="public/plus.svg" /></span>
                </button>
            </form>
            :
            <button onClick={OpenTodoForm} className={joinClasses(["btn", cs.addTodo_btn, cs.addTodo_openBtn])}>
                <span className={cs.addTodo_icon}><img src="public/plus.svg" /></span>
                Добавить карточку
            </button>
        }
    </div>)
})