import { FC, ReactNode } from "react";
import cs from "./Container.module.scss"
import { joinClasses } from "../../../utils/className";
export enum ContainerTypes {
    flex = "flex",
    flexVertical = "flex_vertical"
}

interface ContainerProps {
    children: ReactNode,
    className?: string,
    containerType?: ContainerTypes
}
export const Container: FC<ContainerProps> = ({ children, className, containerType }) => {
    const css = className ? className : ''
    const type = containerType ? cs[containerType] : ''
    const style = [cs.container, type, css]
    return (
        <div className={joinClasses(style)}>
            {children}
        </div>
    )
}