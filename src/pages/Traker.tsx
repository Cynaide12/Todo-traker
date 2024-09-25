import { FC } from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { Workflow } from "../components/Workflow/Workflow";
import { Container } from "../components/UI/Container/Container";
import cs from "./Traker.module.scss"
export const TrakerPage: FC = () => {
    return (
        <Container className={cs.trakerWrapper}>
            <Navbar />
            <Workflow />
        </Container>
    )
}