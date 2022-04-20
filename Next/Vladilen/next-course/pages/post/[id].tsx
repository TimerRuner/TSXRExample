import { useRouter } from "next/router"
import { MainLayout } from "../../components/MainLayout"
import Link from "next/link"
import { useEffect, useState } from "react"
import { NextPageContext } from "next"
import { MyPost } from "../../interfaces/post"

interface PostPageProps {
    post: MyPost
}

export default function Post({ post: serverPost }: PostPageProps) {
    //! Параметр query збігається із назвою файлу
    const router = useRouter()
    const id = router.query.id
    const [post, setPost] = useState(serverPost)

    useEffect(() => {
        async function load() {
            const response = await fetch(`${process.env.API_URL}/posts/${id}`)
            const post = await response.json()

            setPost(post)
        }

        //! якщо з сервера прилетів null, значить ми на клієнті і можемо виконувати загрузку вже тут окремо від сервера
        if (!serverPost) {
            load()
        }
    }, [])

    if (!post) {
        return <MainLayout>Loading....</MainLayout>
    }

    return (
        <MainLayout>
            <h1>{post.title}</h1>
            <hr />
            <p>{post.body}</p>
            <Link href={"/posts"}>
                <a>Back to posts</a>
            </Link>
        </MainLayout>
    )
}

//! Дописуємо query параметр id, який не єде з коробки типізації, а залежить він назви сторінки
interface PostNextPageContext extends NextPageContext {
    query: {
        id: string
    }
}

Post.getInitialProps = async ({ query, req }: PostNextPageContext) => {
    /* Якщо ми на фронті, то req поля не існує і можна відображати ui loader*/
    if (!req) {
        return {
            post: null,
        }
    }
    const id = query.id

    const response = await fetch(`http://localhost:4200/posts/${id}`)
    const post: MyPost = await response.json()

    return {
        post,
    }
}

// export async function getServerSideProps({ query }) {
//     //! Відпрацьовує виключно на бекенді (можна робити запити на базу данних)

//     const id = query.id

//     const response = await fetch(`http://localhost:4200/posts/${id}`)
//     const post = await response.json()

//     return { props: { post } }
// }
