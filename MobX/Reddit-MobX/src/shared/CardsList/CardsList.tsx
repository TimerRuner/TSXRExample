import React, { useContext, useEffect, useRef, useState } from "react"
import styles from "./cardslist.css"
import { Card } from "./Card/Card"
import axios from "axios"
import { tokenContext } from "../context/tokenContext"

export function CardsList() {
    const token = useContext(tokenContext)
    const [posts, setPosts] = useState<any[]>([])
    const [loading, setLoading] = useState(false)
    const [errorLoading, setErrorLoading] = useState("")
    const [nextAfter, setNextAfter] = useState("")
    const bottomOfList = useRef<HTMLDivElement>(null)

    useEffect(() => {
        async function load() {
            setLoading(true)
            setErrorLoading("")
            try {
                const {
                    data: {
                        data: { children, after },
                    },
                } = await axios.get("https://oauth.reddit.com/best/", {
                    headers: { Authorization: `bearer ${token}` },
                    params: { limit: 10, after: nextAfter },
                })
                setNextAfter(after)
                setPosts((prevChildren: any[]) =>
                    prevChildren.concat(...children)
                )
            } catch (error) {
                setErrorLoading(String(error))
            }
            setLoading(false)
        }

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    //? спрацює лише,коли елемент видимий
                    load()
                }
            },
            { rootMargin: "100px" }
        )

        if (bottomOfList.current) {
            observer.observe(bottomOfList.current)
        }

        return () => {
            if (bottomOfList.current) {
                observer.unobserve(bottomOfList.current)
            }
        }
    }, [bottomOfList.current, nextAfter, token])

    return (
        <ul className={styles.cardsList}>
            {posts.length === 0 && !loading && !errorLoading && (
                <div style={{ textAlign: "center" }}>
                    {"Немає жодного поста"}
                </div>
            )}
            {posts.map((post) => (
                <Card key={post.data.id} title={post.data.title} />
            ))}

            <div ref={bottomOfList} />

            {loading && (
                <div style={{ textAlign: "center" }}>{"Загрузка..."}</div>
            )}
            {errorLoading && (
                <div role="alert" style={{ textAlign: "center" }}>
                    {errorLoading}
                </div>
            )}
        </ul>
    )
}
