import Link from "next/link"
import Head from "next/head"

export function MainLayout({ children, title = "Next App" }) {
    return (
        <>
            {/* SEO and META at next js*/}

            <Head>
                <title>{title} | Next Course</title>
                <meta charSet="utf-8" />
            </Head>
            <nav>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/about">
                    <a>About</a>
                </Link>
                <Link href="/posts">
                    <a>Posts</a>
                </Link>
                <Link href="/about/author">
                    <a>Author</a>
                </Link>
            </nav>
            <main>{children}</main>
            {/* для глобалізації стилів використовуємо global*/}
            <style jsx>
                {`
                    nav {
                        position: fixed;
                        height: 60px;
                        left: 0;
                        right: 0;
                        background: darkblue;
                        top: 0;
                        display: flex;
                        justify-content: space-around;
                        align-items: center;
                    }
                    nav a {
                        color: #fff;
                        text-decoration: none;
                    }
                    main {
                        margin-top: 60px;
                        padding: 1rem;
                    }
                `}
            </style>
        </>
    )
}
