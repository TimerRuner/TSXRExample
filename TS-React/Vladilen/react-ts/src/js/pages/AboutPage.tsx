import React from "react"
import { useNavigate } from "react-router-dom"

export const AboutPage: React.FC = () => {
    const history = useNavigate()
    return (
        <>
            <h1>Page Info</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
                doloribus maiores, eos porro possimus eveniet excepturi ea
                molestias id. Molestiae numquam cumque nam, quidem molestias
                fuga necessitatibus! Facilis, cumque dignissimos?
            </p>
            <button className="btn" onClick={() => history("/")}>
                Return Todo
            </button>
        </>
    )
}
