import { Bar } from "react-chartjs-2"
import { Chart, registerables } from "chart.js"

Chart.register(...registerables)

const BarChart = ({ incomeData, expenseData }) => {
  const chartData = {
    labels: incomeData.map((_, i) => `Month ${i + 1}`),
    datasets: [
      {
        label: "Income",
        data: incomeData,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
      {
        label: "Expense",
        data: expenseData,
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true },
    },
  }

  return <Bar data={chartData} options={options} />
}

export default BarChart
