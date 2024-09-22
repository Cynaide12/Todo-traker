import { FC } from "react";
import { Container } from "../Container/Container";
import cs from "./WorkflowHeader.module.scss"
export const WorkflowHeader: FC = () => {
    return (
        <Container className={cs.workflowHeader_container}>
            <h1 className={"bold"}>Название доски</h1>
        </Container>
    )
}