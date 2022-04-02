import React, { Children } from "react"

export enum CardVariant {
    outline = "outline",
    primary = "primary",
}

//? props interface
interface CardProps {
    width?: string
    height?: string
    children?: React.ReactChild | React.ReactNode //? типізація дочірніх елементів
    variant: CardVariant
    // onClick: () => void
}

const Card: React.FC<CardProps> = ({
    width,
    height,
    children,
    variant,
    // onClick,
}) => {
    return (
        <div
            style={{
                width,
                height,
                border:
                    variant === CardVariant.outline ? "1px solid gray" : "none",
                background: variant === CardVariant.primary ? "lightgray" : "",
            }}
            // onClick={onClick}
        >
            {children}
        </div>
    )
}
export default Card
