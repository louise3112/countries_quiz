import { useState } from "react"
import styled from "styled-components"

const Label = styled.label`
    margin-left: 7.5em;
`
const SearchFieldContainer = styled.div`
    margin-top: 2em;
`

const SearchCountryForm = ({searchText, handleChange}) => {

    return (
        <SearchFieldContainer>
            <Label>Search:</Label>
            <input label="Search" value={searchText} onChange={handleChange} style={{ width: "600px", marginLeft: "10px"}}/>
        </SearchFieldContainer>
    )
}

export default SearchCountryForm