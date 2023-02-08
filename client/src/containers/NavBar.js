import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from './images/Logo.png'
import { useState } from "react";
import './NavBar/Navbar.css'


const NavBarStyle = styled.ul`
    width: 100%;
    list-style: none;
    padding: 1em;
    margin: 0;
    background-color: #3c7f61;
    height: 6em;
    font-weight: bold;
    text-decoration: none;
    color: #3c7f61;
`

const NavLink = styled(Link)`
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 1.3rem;
    text-decoration: none;
    color: white; 
    padding-bottom: 10px;
    &:hover {
    color: gold;
}
`

const NavBarLayout = styled.li`
    background-color: #3c7f61;
    &:hover {
    color: #BECE3A;
}
    left: 10%; 
    width: 40%;
    display: inline;
    top: 2rem;
    padding: 1.8em;
    text-decoration: none;
    text-align: center;
    justify-content: space-between;
    position: relative;
`

const QuizzesDropDown = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #3c7f61;
    color: #fff;
    position: absolute;
    top: 60px;
    left: 0;
    z-index: 1;
`

const NavBar = () => {

    const [showQuizzes, setShowQuizzes] = useState(false);

    return (
        <>
        <NavLink to="/"><img className='Logo' src={Logo} alt='Logo'/></NavLink> 
        <NavBarStyle>
        <header>
            <NavBarLayout>
                <NavLink to="/" style={{ textAlign: "center", padding: "0 2.5em" }} onMouseEnter={() => setShowQuizzes(!showQuizzes)}>
                Games
                </NavLink>
                {showQuizzes && (
                <QuizzesDropDown>
                    <NavLink to="/FlagQuiz">Whose Flag Is It Anyway?</NavLink>
                    <NavLink to="/LanguageQuiz">Language Quiz</NavLink>
                    <NavLink to="/CapitalsQuiz">A Question of Capitals</NavLink>
                    <NavLink to="/PopulationQuiz">Play Your Population Right</NavLink>
                    {/* <NavLink to="/LocationQuiz">Location Quiz</NavLink> */}
                </QuizzesDropDown>
            )}
            </NavBarLayout>
            <NavBarLayout>
                <NavLink to="/CountriesFacts">Countries Facts</NavLink>
            </NavBarLayout>
        </header>
        </NavBarStyle>
        </>
    )
    
    }
    
    export default NavBar