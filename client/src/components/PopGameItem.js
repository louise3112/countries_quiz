import { updateAUser } from "../helpers/statsDataFetches"
import styled from "styled-components"

const FlagPic = styled.img`
    align-items: center; 
    border: solid grey 1px;
    position: relative;
`

const Answer = styled.p`
    font-size: 48px;
    font-weight: bolder;
    margin: 0;
`
const Item = styled.div`
    border: groove #ADB5B5;
    border-radius: 20px;
    width: 220px;
    height: 310px;
    position: relative;
    top: 0.5em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 220px;
    min-height: 310px;

    @media only screen and (max-width: 720px) {
        width: 150px;
        height: 250px;
        min-width: 150px;
        min-height: 250px;
    }
`

const HigherButton = styled.button`
    background-color: #5F898A;
    color: black;
    padding: 10px 25px;
    border-radius: 4px;
    position: relative; 
    align-items: center; 
`
const LowerButton = styled.button`
    background-color: #5F898A;
    color: black;
    padding: 10px 25px;
    border-radius: 4px;
`
const CountryName = styled.h4`
    text-align: center; 
`
const Population = styled.p`
    text-align: center; 
`

const PopGameItem = ({country, processAnswer}) => {

    const handleClick = (evt) => {
        processAnswer(country, evt.target.value)
    }

    return (
        <Item>
            {country.status === "current" && <HigherButton onClick={handleClick} value="higher">HIGHER</HigherButton>}
            <div className="country-card">
                <CountryName>{country.name}</CountryName>
                <FlagPic src={country.flag} alt={"Flag for " + country.name} height={"100em"} width={"150em"}/>
                <Population><b>Population:</b> {country.status === "current" ? "????" : country.population.toLocaleString()}</Population>
            </div>
            {country.status === "current" && <LowerButton onClick={handleClick} value="lower">LOWER</LowerButton>}
            {country.guessCorrect && <Answer>&#9989;</Answer>}
            {country.guessCorrect === false && <Answer>&#10060;</Answer>}
        </Item>
    )
}

export default PopGameItem