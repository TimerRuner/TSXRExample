import { MainLayout } from "../components/MainLayout"
import { useState, useEffect } from "react"
import Link from "next/link"
import { MyPost } from "../interfaces/post"
import { NextPageContext } from "next"

interface PostsPageProps {
    posts: MyPost[]
}

export default function Posts({ posts: serverPosts }: PostsPageProps) {
    const [posts, setPosts] = useState(serverPosts)

    useEffect(() => {
        async function load() {
            const response = await fetch(`${process.env.API_URL}/posts`)
            const json = await response.json()
            setPosts(json)
        }

        if (!serverPosts) {
            load()
        }
    }, [])

    if (!posts) {
        return <MainLayout>Loading ....</MainLayout>
    }

    return (
        <MainLayout title="Post Next.js">
            <h1>Post Page</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link href={`/post/[id]`} as={`/post/${post.id}`}>
                            <a>{post.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </MainLayout>
    )
}
/* Рендер даних для сео на сервері*/
Posts.getInitialProps = async ({ req }: NextPageContext) => {
    //! Відпрацьовує на фронтенді і на бекенді ( не можна робити запити на базу данних)
    if (!req) {
        return {
            posts: null,
        }
    }
    const response = await fetch("http://localhost:4200/posts")
    const posts: MyPost[] = await response.json()

    return {
        posts,
    }
}
