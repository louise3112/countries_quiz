import CountryItem from "./CountryItem"

const CountriesList = ({allCountries}) => {

        const countryItems = allCountries.map((country) => {
            return <CountryItem country={country} key={country._id}/> 
        })

    return (
        <>
        <h4>Countries:</h4>
                <ul> 
                    {countryItems}
                </ul>
        </>
    )

}

export default CountriesList