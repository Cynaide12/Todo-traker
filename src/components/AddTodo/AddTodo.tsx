import { FC, useEffect, useRef, useState } from "react"
import cs from "./AddTodo.module.scss"
interface AddTodoProps {
    category: string
}

export const AddTodoButton: FC<AddTodoProps> = ({ category }) => {
    const [isActive, setIsActive] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)
    const AddTodo = () => {
        setIsActive(true)
    }
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (!inputRef.current) return

            if (isActive && !inputRef.current.contains(e.target as Node)) {
                setIsActive(false)
            }

        }

        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            document.addEventListener("mousedown", handleClickOutside)
        }
    }, [isActive])

    return (<>
        {isActive ? <input placeholder="Введите имя карточки" ref={inputRef} /> :
            <button onClick={AddTodo} className={cs.addTodo_btn}><span><img src="public/plus.svg" /></span>Добавить карточку</button>
        }
    </>)
}