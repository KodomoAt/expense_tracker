import React from "react";
import './ExpensesFilter.css'

export default function ExpensesFilter(props) {
    const changeSelectHandler = (event) => {
        const yearSelected = event.target.value
        props.onChangeFilteredYear(yearSelected)
    }
    return (<div className="expenses-filter">
        <div className="expenses-filter__control">
            <label htmlFor="yearSelect">Filter by year</label>
            <select name="yearSelect" id="" onChange={changeSelectHandler} defaultValue={"2023"}>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
            </select>
        </div>
    </div>)
}