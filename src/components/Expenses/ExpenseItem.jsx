import React, {useState} from "react";
import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate.jsx";
import Card from "../UI/Card.jsx";

export default function ExpenseItem(props){
    const [title, setTitle] = useState(props.title)
    function clickHandler() {
        setTitle('Update')
    }
    return(
        <li>
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.amount}€</div>
            </div>
            <button
                className="mx-3 px-5 py-3 text-white duration-150 bg-indigo-600 rounded-lg hover:bg-indigo-700 active:shadow-lg"
            onClick={clickHandler}>
                Change Title
            </button>
        </Card>
        </li>
    )
}