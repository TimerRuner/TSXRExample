import React from "react"
import styles from "./userlink.css"

export function UserLink() {
    return (
        <div className={styles.userLink}>
            <img
                src="https://www.ne-prospi.space/pluginfile.php/1/theme_space/teamimage1/1641569635/istockphoto-1131164548-612x612.jpg"
                alt="avatar"
                className={styles.avatar}
            />
            <a href="#user-url" className={styles.username}>
                Дмитрий Гришин
            </a>
        </div>
    )
}
