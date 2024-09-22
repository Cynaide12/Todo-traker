import { FC } from "react";
import cs from "./Workflow.module.scss"
import { Container, ContainerTypes } from "../UI/Container/Container";
import { WorkflowColumns } from "../UI/WorkflowColumns/WorkflowColumns";
import { WorkflowHeader } from "../UI/WorkflowHeader/WorkflowHeader";

export const Workflow: FC = () => {
    return <Container className={cs.workflowWrapper} containerType={ContainerTypes.flexVertical}>
        <WorkflowHeader />
        <Container className={cs.workflow_categoryWrapper}>
            <WorkflowColumns />
        </Container>
    </Container>
}