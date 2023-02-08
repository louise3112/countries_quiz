import CountriesList from "./CountriesList"

const ContinentsList = ({allContinents, allCountries}) => {
    const countriesByContinent = allContinents.map(continent => {
        const countriesForContinent = allCountries.filter(country => country.continents.includes(continent))
        return (<>
        <h2>{continent}</h2>
        <CountriesList allCountries= {countriesForContinent}/>
        </>)
    })
    

    return (
        <>
        <h4>Countries in this Continent</h4>
            <ul>
                {countriesByContinent}
            </ul>
        </>
    )
}


export default ContinentsList