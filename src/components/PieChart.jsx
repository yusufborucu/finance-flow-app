import { Pie } from "react-chartjs-2"
import { Chart, registerables } from "chart.js"

Chart.register(...registerables)

const PieChart = ({ data }) => {
  const chartData = {
    labels: ["Income", "Expense", "Savings"],
    datasets: [
      {
        data: data,
        backgroundColor: ["#36A2EB", "#FF6384", "#4BC0C0"],
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true },
    },
  }

  return <Pie data={chartData} options={options} />
}

export default PieChart
