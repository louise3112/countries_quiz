import PopGameItem from "./PopGameItem"
import { useState, useEffect } from "react"

const PopGameBox = ({countries}) => {

    const listOfPopGameItems = countries.map(country => {
        return <PopGameItem country={country} key={country.name.common}/>
    })

    return (
        <div>
            <h2>Play Your Population Right!</h2>
            <p>Decide whether the population for the country revealed is 'Higher' or 'Lower' than the population of the previous country and select the relevant button! Be careful though, 2 strikes and you're out!!</p>
            {listOfPopGameItems}
        </div>
    )
}

export default PopGameBox
