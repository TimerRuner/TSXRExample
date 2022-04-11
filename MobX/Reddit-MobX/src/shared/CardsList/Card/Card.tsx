import React from "react"
import styles from "./card.css"
import { TextContent } from "./TextContent"
import { Preview } from "./Preview"
import { Menu } from "./Menu"
import { Controls } from "./Controls"

interface Props {
    title: string
}

export function Card({ title }: Props) {
    return (
        <li className={styles.card}>
            <TextContent title={title} />
            <Preview />
            <Menu />
            <Controls />
        </li>
    )
}
