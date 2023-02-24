import React from "react";
import { ITodo } from "@/typings";
import Link from "next/link";

const fetchTodos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
    const todos: ITodo[] = await response.json()
    return todos
}

export const TodoList = async () => {
    const todos = await fetchTodos()
    return (
        <div className="flex flex-col gap-3">
            {todos.map((todo, id) => (
                <Link key={id} href={`/todos/${todo.id}`} >
                    <span>Todo {todo.id}</span>
                </Link>
            ))}
        </div>
    )
}
