import { useState } from "react"
import ContinentsList from "../../components/ContinentsList"

const Continents = () => {

    const [allContinents, setAllContinents] = useState([])

    
    
    useEffect(() => {
        getAllCountries()
        .then(allCountries => {
            const allContinentsNamesWithDuplicates = allCountries.map(country => country.continent)
            const uniqueContinentNames = new Set([...allContinentsNamesWithDuplicates])
            setAllContinents(uniqueContinentNames)
        })
        
    }, [])

    return (
        <ContinentsList allContinents={allContinents}/>
    )

}



export default Continents