import React from "react"
import { ITodo } from "../types/types"

interface TodoItemProps {
    todo: ITodo
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
    return (
        <div key={todo.id} style={{ padding: 15, border: "1px solid grey" }}>
            <input type="checkbox" checked={todo.completed} />
            {todo.id}. {todo.title}
        </div>
    )
}

export default TodoItem
