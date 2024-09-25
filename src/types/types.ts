import { ComponentType } from "react"

export enum TodoStatus{
    new = "В планах",
    processed = "В процессе",
    completed = "Выполненные"
}

export interface Todo{
    id: number
	title: string
    body?: string
    category?: string
    priority?: string
    status: TodoStatus
    boardId: number
}

export interface Board{
    id: number,
    title: string,
}