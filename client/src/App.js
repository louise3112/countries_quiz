import {useState, useEffect} from 'react'
import { getAllUsers } from './helpers/statsDataFetches';
import Continents from './containers/ContinentsContainer/Continents';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './containers/NavBar';
import Games from './containers/GamesContainer/Games';
import Quiz from './containers/FlagContainer/Quiz';
import LocationQuiz from './containers/LocationContainer/Location';
import PopulationQuiz from './containers/PopulationContainer/Population';
import CountriesQuiz from './containers/QuizContainer/Quiz';
import Country from './components/Country';


function App() {

    const [user, setUser] = useState({})

    const updateScores = (updatedUser) => {
        setUser(updatedUser)
    }

    useEffect(() => {
        getAllUsers()
            .then(allUsers => {
                const requiredUser = allUsers.find(singleUser => singleUser.username === "testUser")
                setUser(requiredUser)
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
                    <Route path="/CountriesFacts" element={<Continents />} />
                    <Route path="/CountriesFacts/:id" element={<Country />} />
                    <Route path="/FlagQuiz" element={<Quiz gameType="Flag"/>} />
                    <Route path="/LanguageQuiz" element={<Quiz gameType="Language" />} />
                    <Route path="/CountriesQuiz" element={<CountriesQuiz />} />
                    <Route path="/PopulationQuiz" element={<PopulationQuiz user={user} updateScores={updateScores}/>} />
                    <Route path="/LocationQuiz" element={<LocationQuiz />} />                    

                </Routes>
            </Router>
        </div>
    )
}

export default App
