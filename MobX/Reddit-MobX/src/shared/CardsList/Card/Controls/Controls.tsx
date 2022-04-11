import React from "react"
import styles from "./controls.css"
import { CarmaCounter } from "./CarmaCounter"
import { CommentsButton } from "./CommentsButton"
import { ShareButton } from "./ShareButton"
import { SaveButton } from "./SaveButton"

export function Controls() {
    return (
        <div className={styles.controls}>
            <CarmaCounter />
            <CommentsButton />
            <div className={styles.actions}>
                <ShareButton />
                <SaveButton />
            </div>
        </div>
    )
}
