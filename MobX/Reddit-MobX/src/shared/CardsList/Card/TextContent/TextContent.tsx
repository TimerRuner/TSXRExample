import React from "react"
import styles from "./textcontent.css"
import { UserLink } from "./UserLink"
import { Title } from "./Title"
import { CreatedAt } from "./CreatedAt"

interface Props {
    title: string
}

export function TextContent({ title }: Props) {
    return (
        <div className={styles.textContent}>
            <div className={styles.metaData}>
                <UserLink />
                <CreatedAt />
            </div>
            <Title title={title} />
        </div>
    )
}
