import React from "react"
import styles from "./text.css"
import classNames from "classnames"

export enum EColors {
    black = "black",
    orange = "orange",
    green = "green",
    white = "white",
    greyF4 = "greyF4",
    greyF3 = "greyF3",
    greyD9 = "greyD9",
    greyC4 = "greyC4",
    grey99 = "grey99",
    grey66 = "grey66",
    greyEC = "greyEC",
}

type TSizes = 28 | 20 | 16 | 14 | 12 | 10

interface ItextProps {
    As?: "span" | "h2" | "h2" | "h3" | "h4" | "p" | "div"
    children?: React.ReactNode
    size: TSizes
    mobileSize?: TSizes
    tabletSize?: TSizes
    desktopSize?: TSizes
    color?: EColors
    bold?: boolean
}

export function Text(props: ItextProps) {
    const {
        As = "span",
        children,
        size,
        mobileSize,
        desktopSize,
        tabletSize,
        color = EColors.black,
        bold = false,
    } = props
    const classes = classNames(
        styles[`s${size}`],
        styles[color],
        { [styles.bold]: bold },
        { [styles[`m${mobileSize}`]]: mobileSize }, //?  якщо mobilsize не переданий - конструкція не виконається
        { [styles[`t${tabletSize}`]]: tabletSize },
        { [styles[`d${desktopSize}`]]: desktopSize }
    )

    return <As className={classes}>{children}</As>
}
