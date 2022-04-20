/* Компонент для взаємодії із структурою усього проекту */
import "../styles/main.css"
import NextNProgress from "nextjs-progressbar"

// <style jsx global>
// {`
//     body {
//         font-family: Roboto, sans-serif;
//     }
// `}
// </style>

function MyApp({ Component, pageProps }) {
    return (
        <>
            <NextNProgress
                color="yellow"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
                showOnShallow={true}
            />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
