import React from 'react'
import { TodoList } from './TodoList'

const Todos = () => {
    return (
        <div>
            <span>Todos : </span>
            {/* @ts-ignore */}
            <TodoList />
        </div>
    )
}

export default Todos