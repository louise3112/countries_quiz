import { useState } from "react"
import styled from "styled-components"

const searchInput = styled.input`
    width: 60%;
`

const SearchCountryForm = ({searchText, handleChange}) => {

    return (
        <>
            <label>Search:</label>
            <input label="Search" value={searchText} onChange={handleChange}/>
        </>
    )
}

export default SearchCountryForm