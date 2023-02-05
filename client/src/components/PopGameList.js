import PopGameItem from "./PopGameItem"
import styled from "styled-components"

const ListOfCountryCards = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-evenly;
`

const MysteryCard = styled.p`
    font-size: 48px;
    font-weight: bolder;
`

const PopGameList = ({countries, processAnswer}) => {

    const listOfPopGameItems = countries.map(country => {
        if (country.status === "none") {
            return <MysteryCard key={country._id}>?</ MysteryCard>
        } else {
            return <PopGameItem key={country._id} country={country} processAnswer={processAnswer}/>
        }
    })

    return (
        <ListOfCountryCards>
            {listOfPopGameItems}
        </ListOfCountryCards>
    )
}

export default PopGameList
