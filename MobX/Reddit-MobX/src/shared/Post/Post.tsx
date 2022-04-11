import React, { useEffect, useRef } from "react"
import * as ReactDOM from "react-dom"
import styles from "./post.css"
import { CommentFormContainer } from "../CommentFormContainer"
import { useNavigate } from "react-router"
interface IPost {
    onClose?: () => void
}

export function Post(props: IPost) {
    const ref = useRef<HTMLDivElement>(null)
    const history = useNavigate()
    useEffect(() => {
        function handleClick(event: MouseEvent) {
            if (
                event.target instanceof Node && //? перевірка, що event.target - node
                !ref.current?.contains(event.target)
            ) {
                // props.onClose?.()
                history("/")
            }
        }

        document.addEventListener("click", handleClick)
        return () => {
            document.removeEventListener("click", handleClick)
        }
    }, [])

    const node = document.querySelector("#modal_root")

    if (!node) return null

    return ReactDOM.createPortal(
        <div className={styles.modal} ref={ref}>
            <h2>
                Следует отметить, что новая модель организационной деятельности
                поможет
            </h2>
            <div className={styles.content}>
                <p>
                    Есть над чем задуматься: тщательные исследования конкурентов
                    представляют собой не что иное, как квинтэссенцию победы
                    маркетинга над разумом и должны быть ассоциативно
                    распределены по отраслям.
                </p>
                <p>
                    Есть над чем задуматься: тщательные исследования конкурентов
                    представляют собой не что иное, как квинтэссенцию победы
                    маркетинга над разумом и должны быть ассоциативно
                    распределены по отраслям.
                </p>
                <p>
                    Есть над чем задуматься: тщательные исследования конкурентов
                    представляют собой не что иное, как квинтэссенцию победы
                    маркетинга над разумом и должны быть ассоциативно
                    распределены по отраслям.
                </p>
            </div>
            <CommentFormContainer />
        </div>,
        node
    )
}
