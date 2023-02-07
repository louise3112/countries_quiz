import { Link } from "react-router-dom";
const CountryItem = ({country}) => { 

    return (
        <li> {country.name}</li>
    )

}

export default CountryItem