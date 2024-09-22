import { FC } from "react"
import cs from "./Filter.module.scss"
import { Container } from "../UI/Container/Container"

export const Filter: FC = () => {
    return (
        <Container className={cs.filterContainer}>
            <p>Рабочее пространство трекера</p>
        </Container>
    )
}