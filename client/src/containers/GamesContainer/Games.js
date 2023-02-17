import '../GamesContainer/Games.js'
import styled from "styled-components"
import City from '../images/cityscape.jpg'
import Flags from '../images/flags.jpg'
import Population from '../images/Population.jpeg'
import Languages from '../images/Languages.jpeg'
import { Link } from "react-router-dom";

const GamesGrid = styled.div`
    padding: 0em 8em 0em 8em;
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;
    row-gap: 2.5em;
`
const NavLink = styled(Link)`
    text-decoration: none;
    display: flex;
    justify-content: center;
`
const Box = styled.div`
    width: 20em;
    padding: 45px;
    text-align: center;
    background-color: #5F898A;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 6px 10px #4B5452;
`
const GamesItems = styled.li`
    background-color: #5F898A;
    color: white;
    &:hover {
        color: gold;
    }
    margin-top: 20px;
    list-style: none;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 1.2rem;
`
const Images = styled.img`
    width: 150px;
    height: 100px;
    border-radius: 4px;
`

const Games = () => {

    return (
        <GamesGrid>
            <NavLink to="/FlagQuiz">
                <Box>
                    <Images className='Flags' src={Flags} alt='Flags' />
                    <GamesItems>Whose Flag Is It Anyway?</GamesItems>
                </Box>
            </NavLink>
            <NavLink to="/CapitalsQuiz">
                <Box>
                    <Images className='City' src={City} alt='City' />
                    <GamesItems>A Question of Capitals</GamesItems>
                </Box>
            </NavLink>
            <NavLink to="/PopulationQuiz">
                <Box>
                    <Images className='Population' src={Population} alt='Population' />
                    <GamesItems>Play Your Population Right</GamesItems>
                </Box>
            </NavLink>
            <NavLink to="/LanguageQuiz">
                <Box>
                    <Images className='Languages' src={Languages} alt='Languages' />
                    <GamesItems>Language Challenge</GamesItems>
                </Box>
            </NavLink>
        </GamesGrid>
    )
}

export default Games
