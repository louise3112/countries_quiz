import PopGameItem from "./PopGameItem"
import styled from "styled-components"
import PlayingCard from '../containers/images/PlayingCard.png'

const ListOfCountryCards = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-evenly;
`
const GameResult = styled.p`
    font-size: 3em;
    font-weight: bolder;
    text-align: center;
    margin-top: 0; 
`
const CardsBack = styled.img`
    width:220px;
`
const PlayAgainButton = styled.button`
    cursor: pointer; 
    justify-content: center; 
    align-items: center; 
    background-color: #F3DC65;
    color: black;
    padding: 10px;
    border-radius: 4px;
    position: relative; 
    align-items: center; 
    width: 16em; 
    height: 4em; 
    font-size: 14px;
    font-weight: bold; 
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 4px; 
`

const PopGameList = ({countries, processAnswer, gameOver, gameWon, newGame}) => {

    const handleClick = () => {
        newGame()
    }

    const listOfPopGameItems = countries.map(country => {
        if (country.status === "none") {
            return <CardsBack className='PlayingCard' src={PlayingCard} alt='Playing Card' key={country._id}></CardsBack> 
        } else {
            return <PopGameItem key={country._id} country={country} processAnswer={processAnswer}/>
        }
    })

    return (
        <Container>
            {gameOver && <GameResult>{gameWon ? "\u2705 You Win!! \u2705" : "\u274C You lose... \u274C" }</GameResult> }
            {gameOver && <PlayAgainButton onClick={handleClick}>Play again?</PlayAgainButton>}
            <ListOfCountryCards>
                {listOfPopGameItems}
            </ListOfCountryCards>
        </Container>
    )
}

export default PopGameList
