import {ReactNode } from "react";
import cs from "./Markdown.module.scss"

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

export default function MarkdownList<T>(props: MarkdownListProps<T>) {
    const style = [cs.markdown_list, props.listType === MarkdownListType.vertical ? cs.vertical : "", props.className]
    return (
        <ul className={style.join(" ")}>{props.items.map(props.renderItem)}</ul>
    )
}