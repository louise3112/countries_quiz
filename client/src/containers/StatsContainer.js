import PopStats from "../components/StatsComponents/PopStats"

const StatsContainer = ({user}) => {



    return (
        <div>
            {user.popGame && <PopStats user={user}/>}
        </div>
    )

}

export default StatsContainer