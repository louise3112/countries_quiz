import { useState, useEffect } from "react"
import { randomCountries } from "../../helpers/usefulFunctions"
import { getAllCountries } from "../../helpers/countryDataFetches"

import PopGameList from "../../components/PopGameList"


const PopulationQuiz = () => {

    const [countriesToPlay, setCountriesToPlay] = useState([])

    const processAnswer = (country, answer) => {
        if (country.answer === answer) {
            const updatedCountries = countriesToPlay.map(country => {
                return {...country}
            })
            updatedCountries[country.cardPosition].status = "previous"
            updatedCountries[country.cardPosition - 1].status = "played"
            updatedCountries[country.cardPosition + 1].status = "current"

            setCountriesToPlay(updatedCountries)

            // Add any markings to indicate correct answer?
        } else {
            // What do we want to happen if they guess wrongly?!
        }
    }

    const getAnswer = (array, index, keyToCheck) => {
        if (array[index][keyToCheck] >= array[index - 1][keyToCheck]) {
            return "higher"
        } else {
            return "lower"
        }
    }

    const prepCountries = (countriesArray) => {
        const countriesToUse = randomCountries(countriesArray, 6)
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

    useEffect( () => {
        getAllCountries()
            .then(allCountries => {
                const selectedCountries = prepCountries(allCountries)
                setCountriesToPlay(selectedCountries)
            })
    }, [])

    return (
        <div>
            <h2>Play Your Population Right!</h2>
            <p>Decide whether the population for the country revealed is 'Higher' or 'Lower' than the population of the previous country and select the relevant button! </p>
            <PopGameList countries = {countriesToPlay} processAnswer={processAnswer} />
        </div>
    )
}

export default PopulationQuiz
