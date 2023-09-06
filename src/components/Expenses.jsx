import ExpenseItem from "./ExpenseItem.jsx";
import Card from "./Card.jsx";
import './Expenses.css'

export default function Expenses(props){
    return (
        <Card className="expenses">
            {props.items.map((expense)=>(<ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/>))}
        </Card>
    )
}