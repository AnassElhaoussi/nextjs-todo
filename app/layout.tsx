import React from 'react'
import Header from './Header'
import '../styles/globals.css'
import '../styles/index.css'

export default function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <html>
            <head></head>
            <body>
                <Header />
                {children}
            </body>
        </html>
    )
}