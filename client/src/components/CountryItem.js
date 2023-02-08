import { Link } from "react-router-dom";
import styled from "styled-components";




const CountryItem = ({country}) => { 

    return (
        <ul>
        <li><Link to={"/CountriesFacts/" + country._id}> {country.name}</Link></li>
        </ul>
    )

}

export default CountryItem