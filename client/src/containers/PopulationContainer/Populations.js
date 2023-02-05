import { useState } from "react"
import { randomCountries } from "../../helpers/usefulFunctions"

import PopGameList from "../../components/PopGameList"


const PopulationQuiz = ({countries}) => {

    const getAnswer = (array, index, keyToCheck) => {
        if (array[index][keyToCheck] >= array[index - 1][keyToCheck]) {
            return "higher"
        } else {
            return "lower"
        }
    }

    const prepCountries = () => {
        const countriesToUse = randomCountries(countries, 6)
        const countriesReadyToPlay = countriesToUse.map((country, index) => {
            return {...country, status: "none", answer: "", cardPosition: index}
        })
        countriesReadyToPlay[0].status = "previous"
        countriesReadyToPlay[1].status = "current"

        for (let i = 1; i < countriesReadyToPlay.length; i++) {
            countriesReadyToPlay[i].answer = getAnswer(countriesReadyToPlay, i, "population")
        }
        console.log(countriesReadyToPlay)
        return countriesReadyToPlay
    }

    return (
        <div>
            <h2>Play Your Population Right!</h2>
            <p>Decide whether the population for the country revealed is 'Higher' or 'Lower' than the population of the previous country and select the relevant button! </p>
            <PopGameList countries = {prepCountries()} />
        </div>
    )
}

export default PopulationQuiz
