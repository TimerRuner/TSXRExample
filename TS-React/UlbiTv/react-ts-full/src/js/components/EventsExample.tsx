import React, { useRef, useState } from "react"

const EventsExample: React.FC = () => {
    const [value, setValue] = useState<string>("")
    const [isDrag, setIsDrag] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)

    //? тепер в e - знаходяться властивості що відносяться до роботи із полями і в часності інпутами
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setValue(e.target.value)
    }

    //? отримаємо всі доступні для мишки властивості
    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value)
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log("Drag")
    }

    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
    }
    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
        console.log("drop")
    }
    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
    }

    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={changeHandler}
                placeholder="control"
            />
            <input
                type="text"
                value={value}
                onChange={changeHandler}
                placeholder="uncontrol"
                ref={inputRef}
            />
            <button onClick={clickHandler}>Click</button>
            <div
                draggable
                onDrag={dragHandler}
                style={{ width: 200, height: 200, background: "red" }}
            ></div>
            <div
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={dragWithPreventHandler}
                style={{
                    width: 200,
                    height: 200,
                    background: isDrag ? "blue" : "red",
                    marginTop: 10,
                }}
            ></div>
        </div>
    )
}

export default EventsExample
