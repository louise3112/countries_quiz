import PopGameItem from "./PopGameItem"
import { useState } from "react"

const PopGameBox = ({countriesData}) => {

    const [countriesAvailable, setCountriesAvailable] = useState([...countriesData])
    const [countriesSelected, setCountriesSelected] = useState([])

    const selectCountriesForGame = () => {
        const selectedCountries = []
        const remainingCountries = [...countriesAvailable]

        for (let i = 0; i < 6; i++) {
            const index = Math.floor(Math.random() * countriesData.length)
            selectedCountries.push(countriesData[index])
            remainingCountries.splice(index, 1)
        }
        
        setCountriesSelected(selectedCountries)
        setCountriesAvailable(remainingCountries)
    }

    const listOfPopGameItems = () => {
        selectCountriesForGame()
        countriesSelected.map(country => )
        return (
            <PopGameItem country={country}/>
        )
    }



    return (
        <div>
            <h2>Play Your Population Right!</h2>
            <p>Decide whether the population for the country revealed is 'Higher' or 'Lower' than the population of the previous country and select the relevant button! Be careful thought, 3 strikes and you're out!!</p>
            {listOfPopGameItems}
        </div>
    )
}

export default PopGameBox