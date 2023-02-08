import { Link } from "react-router-dom";
import styled from "styled-components";

const Links = styled.li`
    margin-left: 0;
    list-style: none; 
    list-style-type: none;
`


const CountryItem = ({country}) => { 

    return (
        <ul>
        <Links><Link to={"/CountriesFacts/" + country._id}> {country.name}</Link></Links>
        </ul>
    )

}

export default CountryItem