import {forwardRef, ReactNode } from "react";
import cs from "./Container.module.scss"
import { joinClasses } from "../../../utils/className";
export enum ContainerTypes {
    flex = "flex",
    flexVertical = "flex_vertical"
}

interface ContainerProps extends React.HtmlHTMLAttributes<HTMLDivElement>, React.RefAttributes<HTMLDivElement> {
    children: ReactNode,
    className?: string,
    containerType?: ContainerTypes
}
export const Container = forwardRef<HTMLDivElement, ContainerProps>(({ children, className, containerType, ...rest }, ref) => {
    const css = className ? className : ''
    const type = containerType ? cs[containerType] : ''
    const style = [cs.container, type, css]
    return (
        <div className={joinClasses(style)} ref={ref} {...rest}>
            {children}
        </div>
    )
})