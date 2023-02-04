import '../GamesContainer/Games.js'
import styled from "styled-components";
import Globe from '../images/globe.jpeg'

const Games = () => {

    const GamesGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    position: relative;
    top: 5rem;
    margin-left: 10px;
    margin-right: 10px;
`;

    const GamesItems = styled.li`
    background-color: #96bcb4;
    &:hover {
    color: #BECE3A;
    }
    margin-top: 20px;
    list-style: none;
`
    const Images = styled.img`
    height: 100px;
    `
const Box = styled.div`
    width: 30%;
    margin-bottom: 6px;
    border: 1px solid #ccc;
    text-align: center;
    padding: 20px;
    background-color: #96bcb4;
`;




    return (
        <div className="Games-container">
        <GamesGrid className="Games-list">
            <Box>
            <Images className='Globe' src={Globe} alt='Globe'/> 
            <GamesItems >Countries Facts</GamesItems>
            </Box>
            <Box>
            <Images className='Globe' src={Globe} alt='Globe'/>
            <GamesItems>Flag Quiz</GamesItems>
            </Box>
            <Box>
            <Images className='Globe' src={Globe} alt='Globe'/> 
            <GamesItems>Countries Quiz</GamesItems>
            </Box> 
            <Box>
            <Images className='Globe' src={Globe} alt='Globe'/> 
            <GamesItems>Population Quiz</GamesItems>
            </Box>  
            <Box>  
            <Images className='Globe' src={Globe} alt='Globe'/> 
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
