import '../GamesContainer/Games.js'
import styled from "styled-components"
import City from '../images/cityscape.jpg'
import Flags from '../images/flags.jpg'
import Population from '../images/Population.jpeg'
import Languages from '../images/Languages.jpeg'
import { Link } from "react-router-dom";

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 15em;
`

const GamesGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 1em;
`
const GamesItems = styled.li`
    background-color: #5F898A;
    text-decoration: none;
    color: white;
    &:hover {
        color: gold;
    }
    margin-top: 20px;
    list-style: none;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    text-decoration: none;
    font-size: 1.2rem;
`
const Images = styled.img`
    width: 150px;
    height: 100px;
    border-radius: 4px;
`
const Box = styled.div`
    width: 16em;
    border: 1px solid #ccc;
    text-align: center;
    padding: 45px;
    background-color: #5F898A;
    border-radius: 10px;
    box-shadow: 0 6px 10px #4B5452;
    position: relative; 
`
const NavLink = styled(Link)`
text-decoration: none;
`

const Games = () => {

    return (
        <>
        <Container>
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
        </Container>
    </>
    )
}

export default Games
