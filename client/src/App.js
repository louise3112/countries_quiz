import './App.css'
import {useState, useEffect} from 'react'

function App() {

    const [countriesData, setCountriesData] = useState([])

    const getCountriesData = () => {
        return fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
    }

    useEffect(() => {
        getCountriesData()
            .then(allCountries => {
                setCountriesData(allCountries)
            })
    }, [])


    return (
        <div className="App">
        </div>
    )
}

export default App
