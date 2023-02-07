import styled from "styled-components"

const FlagPic = styled.img`
    border: solid grey 1px;
`

const Answer = styled.p`
    font-size: 48px;
    font-weight: bolder;
    margin: 0;
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
        <div className="country-item">
            {country.status === "current" && <AnswerButton onClick={handleClick} value="higher">HIGHER</AnswerButton>}
            <div className="country-card">
                <h4>{country.name}</h4>
                <FlagPic src={country.flag} alt={"Flag for " + country.name} height={"100em"} width={"150em"}/>
                <p><b>Population:</b> {country.status === "current" ? "????" : country.population.toLocaleString()}</p>
            </div>
            {country.status === "current" && <AnswerButton onClick={handleClick} value="lower">LOWER</AnswerButton>}
            {country.guessCorrect && <Answer>&#9989;</Answer>}
            {country.guessCorrect === false && <Answer>&#10060;</Answer>}
        </div>
    )
}

export default PopGameItem