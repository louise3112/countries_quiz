import {useState, useEffect} from 'react'
import { getAllUsers } from './helpers/statsDataFetches';
import Continents from './containers/ContinentsContainer/Continents';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './containers/NavBar';
import Games from './containers/GamesContainer/Games';
import Quiz from './containers/FlagContainer/Quiz';
import LocationQuiz from './containers/LocationContainer/Location';
import PopulationQuiz from './containers/PopulationContainer/Population';
import CapitalsQuiz from './containers/QuizContainer/Quiz';
import Country from './components/Country';
import Footer from './components/Footer'
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: column;
min-height:100vh;
`
const Contents = styled.div`
    flex: 1;
`


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
            <Container>
            <Contents>
            <Router>
                <header>
                    <NavBar />
                </header>
                <div className="main-content">
                <Routes>
                    <Route path="/" element={<Games />} />
                    <Route path="/CountriesFacts" element={<Continents />} />
                    <Route path="/CountriesFacts/:id" element={<Country />} />
                    <Route path="/FlagQuiz" element={<Quiz gameType="Flag" user={user} updateScores={updateScores}/>} />
                    <Route path="/LanguageQuiz" element={<Quiz gameType="Language" user={user} updateScores={updateScores}/>} />
                    <Route path="/CapitalsQuiz" element={<CapitalsQuiz user={user} updateScores={updateScores}/>} />
                    <Route path="/PopulationQuiz" element={<PopulationQuiz user={user} updateScores={updateScores}/>} />
                    <Route path="/LocationQuiz" element={<LocationQuiz />} />                    

                </Routes>
                </div>
            </Router>
            <Footer />
            </Contents>
            </Container>
    )
}

export default App
