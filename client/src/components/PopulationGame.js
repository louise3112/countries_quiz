

const PopulationGame = () => {




    return (
        <div>
            <h2>Play Your Population Right!</h2>
            <p>Decide whether the population for the country revealed is 'Higher' or 'Lower' than the population of the previous country and select the relevant button! Be careful thought, 3 strikes and you're out!!</p>
            <>GAME HERE</>
            <button onClick={handleClick} value="higher">Higher</button>
            <button onClick={handleClick} value="lower">Lower</button>
        </div>
    )
}

export default PopulationGame