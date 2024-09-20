import { FC } from "react";
import cs from "./Workflow.module.scss"
import { Container } from "../UI/Container/Container";
import { WorkflowColumns } from "../UI/WorkflowColumns/WorkflowColumns";

export const Workflow: FC = () => {
    return <Container className={cs.workflowWrapper}>
        <WorkflowColumns />
    </Container>
}