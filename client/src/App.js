import {useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './containers/NavBar';
import Games from './containers/GamesContainer/Games';
import Countries from './containers/CountriesContainer/Countries';
import FlagsQuiz from './containers/FlagContainer/FlagQuiz';
import LocationQuiz from './containers/LocationContainer/Location';
import PopulationQuiz from './containers/PopulationContainer/Populations';
import CountriesQuiz from './containers/QuizContainer/Quiz';

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
            <Router>
                <header>
                    <NavBar />
                </header>
                <Routes>
                    <Route path="/" element={<Games />} />
                    <Route path="/CountriesFacts" element={<Countries />} />
                    <Route path="/FlagQuiz" element={<FlagsQuiz />} />
                    <Route path="/CountriesQuiz" element={<CountriesQuiz />} />
                    <Route path="/PopulationQuiz" element={<PopulationQuiz />} />
                    <Route path="/LocationQuiz" element={<LocationQuiz />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App
