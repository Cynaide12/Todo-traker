import {ReactNode } from "react";
import cs from "./Markdown.module.scss"
import { observer } from "mobx-react-lite";

interface MarkdownListProps<T> {
    className?: string;
    items: T[];
    listType?: MarkdownListType;
    renderItem: (item: T) => ReactNode
}

export enum MarkdownListType {
    vertical = "vertical",
    horizontal = "horizontal"
}

export const  MarkdownList = observer(<T, >({listType, className, renderItem, items}: MarkdownListProps<T>) =>  {
    const style = [cs.markdown_list, listType === MarkdownListType.vertical ? cs.vertical : "", className]
    return (
        <ul className={style.join(" ")}>{items.map(renderItem)}</ul>
    )
})