import Card from "../UI/Card.jsx";
import ExpensesFilter from "./ExpensesFilter.jsx";
import ExpensesList from "./ExpensesList.jsx";
import ExpensesChart from "./ExpensesChart.jsx";
import './Expenses.css'
import {useState} from "react";

export default function Expenses(props){
    const actualYear = new Date().getFullYear().toString()
    const [filteredYear, setFilteredYear] = useState(actualYear);
    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear
    })
    const filterChangeHandler = selectedYear => {
        console.log(selectedYear)
        setFilteredYear(selectedYear)
    }
    return (
        <Card className="expenses">
            <ExpensesFilter year={filteredYear} onChangeFilteredYear={filterChangeHandler}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>

        </Card>
    )
}