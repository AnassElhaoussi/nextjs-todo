import { TodoList } from "./TodoList";
import React from 'react'

export default function RootLayout({children}: {
    children: React.ReactNode
}){
    return (
        <html>
            <head></head>
            <body>
                <div className="flex">
                    {/* @ts-ignore */}
                    <TodoList />
                    {children}
                </div>
            </body>
        </html>
    )
}
