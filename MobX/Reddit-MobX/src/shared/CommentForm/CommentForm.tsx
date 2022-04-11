import React, { ChangeEvent, FormEvent } from "react"
import styles from "./commentform.css"

type Props = {
    value: string
    onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
    onSubmit: (event: FormEvent) => void
    error: string
    touched: boolean
    blur: () => void
}

export function CommentForm({
    value,
    onChange,
    onSubmit,
    error,
    touched,
    blur,
}: Props) {
    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <textarea
                className={styles.input}
                value={value}
                onChange={onChange}
                aria-invalid={error ? "true" : undefined}
                onBlur={blur}
            ></textarea>
            {touched && error && <div>{error}</div>}
            <button type="submit" className={styles.button}>
                Коментувати
            </button>
        </form>
    )
}
