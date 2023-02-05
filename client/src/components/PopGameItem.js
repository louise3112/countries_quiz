import styled from "styled-components"

const FlagPic = styled.img`
    border: solid grey 1px;
`

const PopGameItem = ({country}) => {

    const handleClick = () => {

    }

    return (
        <div className="country-item">
            {/* {country.status === current && <button onClick={handleClick} value="higher">HIGHER</button>} */}
            <div className="country-card">
                <h4>{country.name.common}</h4>
                <FlagPic src={country.flags.svg} alt={"Flag for " + country.name.common} height={"100em"} width={"150em"}/>
                <p><b>Population:</b> {country.population}</p>
            </div>
            {/* {country.status === current && <button onClick={handleClick} value="lower">LOWER</button>} */}
        </div>
    )

}

export default PopGameItem