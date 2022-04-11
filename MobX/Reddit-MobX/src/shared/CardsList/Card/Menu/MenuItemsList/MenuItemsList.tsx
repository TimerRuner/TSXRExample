import React from "react"
import styles from "./menuitemslist.css"
import {
    BlockIcons,
    WarningIcon,
    SaveIcon,
    ShareIcon,
    CommentIcon,
} from "../../../../icons"
import { EColors, Text } from "../../../../Text"
import classNames from "classnames"

interface IMenuItesListProps {
    postId: string
}

export function MenuItemsList({ postId }: IMenuItesListProps) {
    return (
        <ul className={styles.menuItemsList}>
            <li
                onClick={() => console.log(postId)}
                className={`${styles.menuItem} ${styles.desktop}`}
            >
                <CommentIcon />
                <Text
                    size={12}
                    mobileSize={12}
                    tabletSize={14}
                    desktopSize={14}
                    color={EColors.grey99}
                >
                    Комментарии
                </Text>
            </li>
            <div className={`${styles.divider} ${styles.desktop}`}></div>
            <li className={`${styles.menuItem} ${styles.desktop}`}>
                <ShareIcon />
                <Text
                    size={12}
                    mobileSize={12}
                    tabletSize={14}
                    desktopSize={14}
                    color={EColors.grey99}
                >
                    Поделиться
                </Text>
            </li>
            <div className={`${styles.divider} ${styles.desktop}`}></div>
            <li className={styles.menuItem}>
                <BlockIcons />
                <Text
                    size={12}
                    mobileSize={12}
                    tabletSize={14}
                    desktopSize={14}
                    color={EColors.grey99}
                >
                    Скрыть
                </Text>
            </li>
            <div className={styles.divider}></div>
            <li className={`${styles.menuItem} ${styles.desktop}`}>
                <SaveIcon />
                <Text
                    size={12}
                    mobileSize={12}
                    tabletSize={14}
                    desktopSize={14}
                    color={EColors.grey99}
                >
                    Сохранить
                </Text>
            </li>
            <div className={`${styles.divider} ${styles.desktop}`}></div>
            <li className={styles.menuItem}>
                <WarningIcon />
                <Text
                    size={12}
                    mobileSize={12}
                    tabletSize={14}
                    desktopSize={14}
                    color={EColors.grey99}
                >
                    Пожаловаться
                </Text>
            </li>
        </ul>
    )
}
