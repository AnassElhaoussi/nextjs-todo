'use client'

import React ,{useState, FormEvent} from 'react'
import { useRouter } from 'next/navigation'
const Search = () => {
    const [search, setSearch] = useState("")
    const router = useRouter()

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSearch("")
        router.push(`/search/${search}`)
    }   
    return (
        <form className='flex flex-col gap-3'
        onSubmit={handleSearch}>
            <input 
            type="text"
            className='bg-gray-50 p-1'
            placeholder='Search..'
            value={search}
            onChange={(e) => setSearch(e.target.value)} />

            <button 
            type='submit'
            className='bg-blue-500 text-white p-1 rounded-md'
            >Submit</button>
        </form>
    )
}

export default Search