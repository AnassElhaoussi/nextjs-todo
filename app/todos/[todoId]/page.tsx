import { type } from "os";
import React from "react";

type pageProps = {
    params: {
        todoId: number
    }
}

const fetchTodo = async (todoId) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
    const todo = await res.json()
    return todo
}

const Todo = async ({params: { todoId }}: pageProps) => {
    const todo = await fetchTodo(todoId)
    return (
        <div>{todo.title} </div>
    )
}

export default Todo