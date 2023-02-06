import CountryItem from "./CountryItem"

const CountriesList = ({allCountries}) => {

        const countryItems = allCountries.map((country) => {
            return <CountryItem country={country} key={country._id}/> 
        })

    return (
                <ul>
                {countryItems}
                </ul>
    )

}

export default CountriesList