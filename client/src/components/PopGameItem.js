

const PopGameItem = ({country}) => {

    return (
        <div class="country-item">
            {country.status === current && <button onClick={handleClick} value="higher">HIGHER</button>}
            <div class="country-card">
                <img src={country.flags.svg} alt={"Flag for " + country.name.common} />
                <h4>{country.name.common}</h4>
                <p><b>Population:</b> {country.population}</p>
            </div>
            {country.status === current && <button onClick={handleClick} value="lower">LOWER</button>}
        </div>
    )

}

export default PopGameItem