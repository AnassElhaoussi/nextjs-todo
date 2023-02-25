import { type } from "os";
import React from "react";
import { ITodo } from "@/typings";
import NotFound from "./not-found";

type pageProps = {
    params: {
        todoId: number
    }
}

const fetchTodo = async (todoId: number) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {cache: 'force-cache'})
    const todo = await res.json()
    return todo
}

const Todo = async ({params: { todoId }}: pageProps) => {
    const todo = await fetchTodo(todoId)
    if(!todo.id) return <NotFound />
    else return (
        <div className="flex flex-col gap-3 p-2 bg-gray-100 rounded-md">
            <span>Todo {todoId} : {todo.title}</span>
            <span>{todo.completed ? 'Completed' : 'Not completed'}</span>
        </div>
    )

}

export async function generateStaticParams() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos")
    const todos: ITodo[] = await res.json()

    return todos.map((todo) => {
        return {
            todoId: todo.id.toString()
        }
    })

}

export default Todo