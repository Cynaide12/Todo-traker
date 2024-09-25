import { FC } from "react"
import cs from "./Navbar.module.scss"
import { Container } from "../UI/Container/Container"
import { AddBoardButton } from "../AddBoard/AddBoard"
import { observer } from "mobx-react-lite"
import { Link, Outlet } from "react-router-dom"
import todoStore from "../../stores/todo-store"
import { MarkdownList, MarkdownListType } from "../UI/MarkdownList/MarkdownList"
import { Board } from "../../types/types"
// import routes
export const Navbar: FC = observer(() => {
    const boards = todoStore.boards
    return (
        <>
            <Container className={cs.navbarContainer}>
                <p>Рабочее пространство трекера</p>
                <MarkdownList items={boards} listType={MarkdownListType.vertical} renderItem={(board: Board) => <Link to={`boards/${board.id}`} key={board.id}>{board.title}</Link>} />
                <AddBoardButton />
            </Container>
        </>
    )
})