import { Link } from "react-router-dom"
import Country from "./Country"

const ContinentItem = (continent) => {

    return (
        <li><Link to={"/Continents/" + Country.continents}></Link></li>
    )

}


export default ContinentItem