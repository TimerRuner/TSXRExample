import React, { useEffect, useState } from "react"
import { ITodo } from "../types/types"
import axios from "axios"
import List from "./List"
import TodoItem from "./TodoItem"

const TodosPage = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        fetchTodos()
    }, [])
    async function fetchTodos() {
        try {
            //! типізуємо отриманий об'єкт із сервера
            const response = await axios.get<ITodo[]>(
                "https://jsonplaceholder.typicode.com/todos",
                { params: { _limit: 10 } }
            )
            setTodos(response.data)
        } catch (error) {
            alert(error)
        }
    }
    return (
        <div>
            <List
                items={todos}
                renderItem={(todo: ITodo) => <TodoItem todo={todo} />}
            />
        </div>
    )
}

export default TodosPage
