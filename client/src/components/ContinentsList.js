import ContinentItem from "./ContinentItem"
import Continents from "../containers/ContinentsContainer/Continents"

const ContinentsList = ({Allcountries}) => {
    return (
        <>
            {posts.map((post,index) => {
                return (
                    <PostItem post={post} key={index}/>
                )
            })}
        </>
    )

    
}




export default ContinentsList

// // For (continent in allContinents:
// const countriesContinents = Allcountries.filter(country => country.continents.includes(continent))



// return (
//     <>
//     <h4>Countries in this Continent</h4>
//         <ul>
//             {countriesContinents}
//         </ul>
//     </>
// )