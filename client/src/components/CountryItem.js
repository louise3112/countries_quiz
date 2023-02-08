import { Link } from "react-router-dom";
import styled from "styled-components";

const Links = styled.li`
    margin: 0.5em 0em 0em 0em;
    list-style: none; 
`
const CountryLink = styled(Link)`
    color: rgb(90, 90, 90);
    cursor: pointer;
    &:hover {color: gold;}
`

const CountryItem = ({country}) => { 

    return (
        <Links><CountryLink to={"/CountriesFacts/" + country._id}> {country.name}</CountryLink></Links>
    )
}

export default CountryItem