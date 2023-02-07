import { useState } from "react"


const SearchCountryForm = ({searchText, handleChange}) => {

    return (
        <>
            <label>Search:</label>
            <input label="Search" value={searchText} onChange={handleChange}/>
        </>
    )
}

export default SearchCountryForm