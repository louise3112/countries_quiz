import '../GamesContainer/Games.js'
import styled from "styled-components"
import City from '../images/cityscape.jpg'
import Flags from '../images/flags.jpg'
import Population from '../images/Population.jpeg'
import Languages from '../images/Languages.jpeg'
import { Link } from "react-router-dom";

const Container = styled.div`
    margin: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh; 
`

const GamesGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;
    position: relative;
    top: 5rem;
    margin-left: 10px;
    margin-right: 10px;
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
            <GamesGrid className="Games-list">
                <NavLink to="/FlagQuiz">
                    <Box>
                        <Images className='Flags' src={Flags} alt='Flags' />
                        <GamesItems>Whose Flag Is It Anyway?</GamesItems>
                    </Box>
                </NavLink>
                <NavLink to="/CountriesQuiz">
                    <Box>
                        <Images className='City' src={City} alt='City' />
                        <GamesItems>Countries Quiz</GamesItems>
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
                        <GamesItems>Language Quiz</GamesItems>
                    </Box>
                </NavLink>
            </GamesGrid>
        </Container>
    {/* <div>
    <Footer />
    </div> */}
    </>
    )
}

export default Games
