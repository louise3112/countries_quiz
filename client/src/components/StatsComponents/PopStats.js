import PieChart from "./PieChart"

const PopStats = ({user}) => {

    const pieData = {
        keyLabels: ["Games Won", "Games Lost"],
        userData: [user.popGame.won, user.popGame.played-user.popGame.won],
    }

    return (
        <div>
            <PieChart pieData={pieData}/>
        </div>

    )
}

export default PopStats