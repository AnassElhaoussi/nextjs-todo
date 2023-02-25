import React from 'react'

type searchParams = {
    params: {
        searchTerm: string
    }
}

export const search = async (searchTerm: string) => {
    const res = await fetch(`https://serpapi.com/search.json?q=${searchTerm}`)
    const searchResults = await res.json()
    return searchResults
}

const SearchTerm = async ({params: {searchTerm}}: searchParams) => {
    const searchResults = await search(searchTerm)
    return (
        // Adding the search result will be here
        <></>
    )
}
export default SearchTerm