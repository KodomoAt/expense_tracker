import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm.jsx";
import AddNewExpense from "./AddNewExpense.jsx";
import ('./NewExpense.css')
const NewExpense = (props) => {
    const [displayForm, setDisplayForm] = useState(false)
    const clickAddNewExpenseHandler = () => {
        setDisplayForm(true)
    }
    const submitNewExpense = () =>{
        setDisplayForm(false)
    }
    const saveExpenseDataHandler = (enteredExpenseData) => {
            const expenseData = {
                ...enteredExpenseData,
                id: Math.random().toString()
            };
            props.onAddExpense(expenseData)
    }

    if (!displayForm) {
        return <div className="new-expense">
            <button onClick={clickAddNewExpenseHandler}>Add New Expense</button>
        </div>
    }
return <div className="new-expense">
    <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onHideNewExpenseForm={submitNewExpense}/>
</div>
};

export default NewExpense;