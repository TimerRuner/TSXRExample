import React, { useEffect, useState } from "react"
import styles from "./dropdown.css"

interface IDropdownProps {
    button: React.ReactNode
    children: React.ReactNode
    isOpen?: boolean
    onOpen?: () => void
    onClose?: () => void
}

const NOOP = () => {}

export function Dropdown({
    button,
    children,
    isOpen,
    onOpen = NOOP,
    onClose = NOOP,
}: IDropdownProps) {
    const [isDeopdownOpen, setIsDropdownOpen] = useState(isOpen)

    useEffect(() => setIsDropdownOpen(isOpen), [isOpen])
    useEffect(() => (isDeopdownOpen ? onOpen() : onClose()), [isDeopdownOpen])

    const handleOpen = () => {
        if (isOpen === undefined) {
            setIsDropdownOpen(!isDeopdownOpen)
        }
    }

    const cls = isDeopdownOpen ? `${styles.active}` : ``

    return (
        <div className={styles.container}>
            <div onClick={handleOpen} className={cls}>
                {button}
            </div>
            {isDeopdownOpen && (
                <div className={styles.listContainer}>
                    <div
                        className={styles.list}
                        onClick={() => setIsDropdownOpen(false)}
                    >
                        {children}
                    </div>
                </div>
            )}
        </div>
    )
}
