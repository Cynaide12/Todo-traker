export enum TodoStatus{
    new = "В планах",
    processed = "В процессе",
    completed = "Выполненные"
}

export interface Todo{
    id: string
	title: string
    body?: string
    category: string
    priority: string
    status: TodoStatus
}