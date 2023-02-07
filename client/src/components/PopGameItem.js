import styled from "styled-components"
import './PopulationGame.css'

const FlagPic = styled.img`
    border: solid grey 1px;
    position: relative;
    left: 1em; 
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
    height:310px;
    position: relative;
    top: 0.5em;
`

const AnswerButton = styled.button`
    margin-left: 2em;
    background-color: rgb(155, 162, 31);
    color: black;
    padding: 10px 25px;
    border-radius: 4px;
`

const PopGameItem = ({country, processAnswer}) => {

    const handleClick = (evt) => {
        processAnswer(country, evt.target.value)
    }

    return (
        <Item>
            {country.status === "current" && <AnswerButton onClick={handleClick} value="higher">HIGHER</AnswerButton>}
            {country.status === "current" && <button onClick={handleClick} value="higher">HIGHER</button>}
            <div className="country-card">
                <h4>{country.name}</h4>
                <FlagPic src={country.flag} alt={"Flag for " + country.name} height={"100em"} width={"150em"}/>
                <p><b>Population:</b> {country.status === "current" ? "????" : country.population.toLocaleString()}</p>
            </div>
            {country.status === "current" && <AnswerButton onClick={handleClick} value="lower">LOWER</AnswerButton>}
            {country.guessCorrect && <Answer>&#9989;</Answer>}
            {country.guessCorrect === false && <Answer>&#10060;</Answer>}
        </Item>
    )
}

export default PopGameItem