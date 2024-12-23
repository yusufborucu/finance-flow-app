import { useState } from "react"
import BarChart from "./components/BarChart"
import LineChart from "./components/LineChart"
import PieChart from "./components/PieChart"

function App() {
  const [incomeData, setIncomeData] = useState([])
  const [expenseData, setExpenseData] = useState([])
  const [savingsData, setSavingsData] = useState([])

  const [formData, setFormData] = useState({
    income: "",
    expense: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleGenerateCharts = () => {
    const incomeArray = formData.income.split(",").map(Number)
    const expenseArray = formData.expense.split(",").map(Number)
    const savingsArray = incomeArray.map((income, index) => 
      income - (expenseArray[index] || 0)
    )

    setIncomeData(incomeArray)
    setExpenseData(expenseArray)
    setSavingsData(savingsArray)
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Income-Expense and Savings Graphs</h1>

      <div style={{ marginBottom: "20px" }}>
        <div>
          <label>Monthly incomes (separate with commas): </label>
          <input
            type="text"
            name="income"
            value={formData.income}
            onChange={handleInputChange}
            placeholder="e.g. 5000,6000,7000"
          />
        </div>
        <div>
          <label>Monthly expenses (separate with commas): </label>
          <input
            type="text"
            name="expense"
            value={formData.expense}
            onChange={handleInputChange}
            placeholder="e.g. 3000,4000,5000"
          />
        </div>
        <button onClick={handleGenerateCharts} style={{ marginTop: "10px" }}>
          Create Graphs
        </button>
      </div>

      <div style={{ maxWidth: "800px", margin: "auto" }}>
        {incomeData.length > 0 && (
            <>
                <h2>Income-Expense Comparison</h2>
                <BarChart incomeData={incomeData} expenseData={expenseData} />
            </>
        )}

        {savingsData.length > 0 && (
            <>
                <h2>Savings Tendency</h2>
                <LineChart data={savingsData} />
            </>
        )}

        {incomeData.length > 0 && expenseData.length > 0 && (
            <>
                <h2>Income-Expense-Savings Distribution</h2>
                <PieChart
                    data={[
                        incomeData.reduce((a, b) => a + b, 0),
                        expenseData.reduce((a, b) => a + b, 0),
                        savingsData.reduce((a, b) => a + b, 0),
                    ]}
                />
            </>
        )}
      </div>
    </div>
  )
}

export default App
