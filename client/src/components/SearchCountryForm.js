import styled from "styled-components"

const SearchForm = styled.form`
    display: flex;
    column-gap: 0.8em;
    align-items: center;
`
const SearchLabel = styled.label`
    font-size: 1.2em;
    font-weight: bold;
`
const SearchInput = styled.input`
    width: 40em;
    height: 1.5em;
    font-size: 1.2em;
`

const SearchCountryForm = ({searchText, handleChange}) => {

    return (
        <SearchForm>
            <SearchLabel>Search countries:</SearchLabel>
            <SearchInput label="Search" value={searchText} onChange={handleChange}/>
        </SearchForm>
    )
}

export default SearchCountryForm