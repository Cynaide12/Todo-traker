import { Children, FC, ReactNode } from "react";
import cs from "./Layout.module.scss"

interface LayoutProps {
    children: ReactNode
}
export const Layout: FC<LayoutProps> = ({ children }) => {
    return <div className={cs.layout}>
        {children}
    </div>
}