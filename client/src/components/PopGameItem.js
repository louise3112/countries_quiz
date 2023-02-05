import styled from "styled-components"

const FlagPic = styled.img`
    border: solid grey 1px;
`

const PopGameItem = ({country, processAnswer}) => {

    const handleClick = (evt) => {
        processAnswer(country, evt.target.value)
    }

    return (
        <div className="country-item">
            {country.status === "current" && <button onClick={handleClick} value="higher">HIGHER</button>}
            <div className="country-card">
                <h4>{country.name}</h4>
                <FlagPic src={country.flag} alt={"Flag for " + country.name} height={"100em"} width={"150em"}/>
                <p><b>Population:</b> {country.status === "current" ? "????" : country.population}</p>
            </div>
            {country.status === "current" && <button onClick={handleClick} value="lower">LOWER</button>}
        </div>
    )

}

export default PopGameItem