import React from "react"
import styles from "./createdat.css"

export function CreatedAt() {
    return (
        <span className={styles.createdAt}>
            <span className={styles.publishedLabel}>опубліковано</span>4 години
            назад
        </span>
    )
}
