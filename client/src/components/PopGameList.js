import PopGameItem from "./PopGameItem"
import styled from "styled-components"
import PlayingCard from '../containers/images/PlayingCard.png'

const ListOfCountryCards = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-evenly;
`

// const MysteryCard = styled.p`
//     font-size: 48px;
//     font-weight: bolder;
//     border: solid grey;
// `

const GameResult = styled.p`
    font-size: 48px;
    font-weight: bolder;
    text-align: center;
`
const CardsBack = styled.img`
    width:220px;
`



const PopGameList = ({countries, processAnswer, gameOver, gameWon}) => {

    const listOfPopGameItems = countries.map(country => {
        if (country.status === "none") {
            return <CardsBack className='PlayingCard' src={PlayingCard} alt='Playing Card'></CardsBack> 
            // return <MysteryCard key={country._id}>?</ MysteryCard>
        } else {
            return <PopGameItem key={country._id} country={country} processAnswer={processAnswer}/>
        }
    })

    return (
        <>
            {gameOver && <GameResult>{gameWon ? "\u2705 You Win!! \u2705" : "\u274C You lose... \u274C" }</GameResult> }
            <ListOfCountryCards>
                {listOfPopGameItems}
            </ListOfCountryCards>
        </>
    )
}

export default PopGameList
