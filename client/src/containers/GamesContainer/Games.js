import '../GamesContainer/Games.js'
import styled from "styled-components"
import Globe from '../images/Globe.jpg'
import City from '../images/cityscape.jpg'
import Flags from '../images/flags.jpg'
import Population from '../images/Population.jpeg'
import Compass from '../images/Compass.jpeg'

const GamesGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    position: relative;
    top: 5rem;
    margin-left: 10px;
    margin-right: 10px;
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
const Box = styled.div`
    width: 30%;
    margin-bottom: 6px;
    border: 1px solid #ccc;
    text-align: center;
    padding: 20px;
    background-color: #5F898A;
    border-radius: 10px;
    box-shadow: 0 6px 10px #4B5452;
`

const Games = () => {

    return (
        <div className="Games-container">
        <GamesGrid className="Games-list">
            <Box>
            <Images className='Globe' src={Globe} alt='Globe'/> 
            <GamesItems >Countries Facts</GamesItems>
            </Box>
            <Box>
            <Images className='Flags' src={Flags} alt='Flags'/>
            <GamesItems>Flag Quiz</GamesItems>
            </Box>
            <Box>
            <Images className='City' src={City} alt='City'/> 
            <GamesItems>Countries Quiz</GamesItems>
            </Box> 
            <Box>
            <Images className='Population' src={Population} alt='Population'/> 
            <GamesItems>Population Quiz</GamesItems>
            </Box>  
            <Box>  
            <Images className='Compass' src={Compass} alt='Compass'/> 
            <GamesItems>Country Location Quiz</GamesItems>
            </Box>  
            <Box />  
        </GamesGrid>
        <footer>
        </footer>
        </div>
    )
}

export default Games
