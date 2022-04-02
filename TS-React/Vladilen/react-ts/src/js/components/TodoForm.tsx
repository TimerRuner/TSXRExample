import React, { useState, useRef } from "react"

//! { onAdd(title: string): void } - описуємо props, що передаються в даний компонент
interface TodoFormProps {
    onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
    //? Автоматично розуміє, що стейт строчний (залежить від дефолтного значення)
    const [title, setTitle] = useState<string>("")
    // const ref = useRef<HTMLInputElement>(null)

    //? вказуємо що подія працює з подією change і міститиме interface для роботи із полями
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    //? вказуємо, що event - сутність, що працює із keypressevent -
    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            //? Точно вказуємо, що ref.current.value !== null
            // props.onAdd(ref.current.value)
            props.onAdd(title)
            setTitle("")
        }
    }

    return (
        <div className="input-field mt2">
            <input
                type="text"
                id="title"
                placeholder="Enter action name"
                value={title}
                onChange={changeHandler}
                onKeyPress={keyPressHandler}
                // ref={ref}
            />
            <label htmlFor="title" className="active">
                Enter action name
            </label>
        </div>
    )
}
