import React from 'react'
import Search from './Search'

export default function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <html>
            <head>
                <title>Search</title>
            </head>
            <main className='flex space-x-10 p-4'>
                <h1>Search : </h1>
                <div>
                    <Search />
                    {children}
                </div>
            </main>
        </html>
    )
}