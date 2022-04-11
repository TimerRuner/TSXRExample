import React from "react"
import styles from "./preview.css"

export function Preview() {
    return (
        <div className={styles.preview}>
            <img
                src="https://cdn.dribbble.com/users/535817/screenshots/17929359/intro_v6_10_still.gif?compress=1&resize=400x300&vertical=top"
                alt="preview"
                className={styles.previewImg}
            />
        </div>
    )
}
