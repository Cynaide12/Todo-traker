import { FC, useEffect, useRef, useState } from "react"
import cs from "./AddBoard.module.scss"
import { joinClasses } from "../../utils/className"
import TodoStore from "../../stores/todo-store"
import { Board} from "../../types/types"
import { observer } from "mobx-react-lite"

export const AddBoardButton: FC = observer(() => {
    const [isActive, setIsActive] = useState(false)
    const inputRef = useRef<HTMLTextAreaElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    const OpenTodoForm = () => {
        setIsActive(true)
    }

    const AddBoard = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (!inputRef.current) return
        if (inputRef.current.value == '') return setIsActive(false)

        const boardId = TodoStore.getBoardId
        const todo: Board = {
            id: boardId,
            title: inputRef.current.value,
        }
        TodoStore.addBoard(todo)

        inputRef.current.value = ""

        console.log(TodoStore.boards)
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
                <textarea className={cs.AddBoard_input} placeholder="Введите имя доски" ref={inputRef} dir="auto" />
                <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => AddBoard(e)} className={joinClasses(["btn", "hover-default", cs.AddBoard_btn, cs.AddBoard_submit])}>
                    Добавить доску
                    <span className={cs.AddBoard_icon}><img src="public/plus.svg" /></span>
                </button>
            </form>
            :
            <button onClick={OpenTodoForm} className={joinClasses(["btn", cs.AddBoard_btn, cs.AddBoard_openBtn])}>
                <span className={cs.AddBoard_icon}><img src="public/plus.svg" /></span>
                Добавить доску
            </button>
        }
    </div>)
})