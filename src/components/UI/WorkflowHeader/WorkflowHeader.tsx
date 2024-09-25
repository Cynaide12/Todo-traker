import { FC } from "react";
import { Container } from "../Container/Container";
import cs from "./WorkflowHeader.module.scss"
export const WorkflowHeader: FC<{ title?: string }> = ({ title }) => {
    return (
        <Container className={cs.workflowHeader_container}>
            <h1 className={"bold"}>{title}</h1>
        </Container>
    )
}