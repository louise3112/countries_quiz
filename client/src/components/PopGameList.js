import PopGameItem from "./PopGameItem"
import styled from "styled-components"
import PlayingCard from '../containers/images/PlayingCard.png'

const ListOfCountryCards = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    column-gap: 0.5em;
`
const GameResult = styled.p`
    font-size: 1.5em;
    font-weight: bold;
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
    padding: 0;
    border-radius: 4px;
    position: relative; 
    align-items: center; 
    width: 16em; 
    height: 3em; 
    font-size: 1.25em;
    font-weight: bold; 
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
            {gameOver && <GameResult>{gameWon ? "You win! Well done!" : "You lose... Better luck next time!" }</GameResult> }
            {gameOver && <PlayAgainButton onClick={handleClick}>Play again?</PlayAgainButton>}
            <ListOfCountryCards>
                {listOfPopGameItems}
            </ListOfCountryCards>
        </Container>
    )
}

export default PopGameList
