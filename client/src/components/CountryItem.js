
const CountryItem = ({country}) => { 

    return (
        <li><Link to={"/CountriesFacts/" + country._id}> {country.name}</Link></li>
    )

}

export default CountryItem