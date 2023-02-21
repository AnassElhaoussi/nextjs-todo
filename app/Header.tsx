import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <header className='flex gap-7 p-4 bg-blue-500'>
            <button className='bg-white p-2 rounded-md'>
                <Link href='/'>Link to home</Link>
            </button>
        </header>
    )
}

export default Header