import { randomCountries } from "../../helpers/usefulFunctions"

import PopGameItem from "../../components/PopGameItem"

import styled from "styled-components"

const ListOfCountryCards = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-evenly;
`

const PopulationQuiz = ({countries}) => {

    const listOfPopGameItems = randomCountries(countries, 6).map(country => {
        return <PopGameItem country={country} key={country.name.common}/>
    })


    return (
        <div>
            <h2>Play Your Population Right!</h2>
            <p>Decide whether the population for the country revealed is 'Higher' or 'Lower' than the population of the previous country and select the relevant button! Be careful though, 2 strikes and you're out!!</p>
            <ListOfCountryCards>
                {listOfPopGameItems}
            </ListOfCountryCards>
        </div>
    )
}

export default PopulationQuiz
