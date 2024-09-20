import { FC, ReactNode } from "react";
import cs from "./Container.module.scss"

export enum ContainerTypes{
    flex = "flex",
    flexVertical = "flex_vertical"
}

interface ContainerProps {
    children: ReactNode,
    className?: string,
    containerType?: ContainerTypes
}
export const Container: FC<ContainerProps> = ({ children, className, containerType }) => {
    const style = [cs.container, containerType ? cs[containerType] : '', className].filter(Boolean)
    return (
        <div className={style.join(" ")}>
            {children}
        </div>
    )
}