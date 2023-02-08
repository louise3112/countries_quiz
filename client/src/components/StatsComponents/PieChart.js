import 'chart.js/auto'
import { Pie } from "react-chartjs-2";

const PieChart = ({pieData}) => {

    const chartData = {
        labels: pieData.keyLabels, 
        datasets: [{
            label: "Games played",
            data: pieData.userData,
            backgroundColor: [
                "rgba(75,192,192,1)",
                "#ecf0f1",
            ],
            borderColor: "black",
            borderWidth: 1
        }]
    }

    return (
        <div className="chart-container">
        <h2 style={{ textAlign: "center" }}>Pie Chart</h2>
        <Pie
            data={chartData}

            // options={{
            // plugins: {
            //     title: {
            //     display: true,
            //     text: "Title?"
            //     }
            // }
            // }}
        />
        </div>
    )
}

export default PieChart
