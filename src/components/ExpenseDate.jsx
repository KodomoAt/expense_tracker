import './ExpenseDate.css'
export default function ExpenseDate(props){
    const month = props.date.toLocaleDateString('fr-FR', {month: 'long'})
    const year = props.date.toLocaleDateString('fr-FR', {year: 'numeric'})
    const day = props.date.toLocaleDateString('fr-FR', {day: '2-digit'})
    return (
            <div className="expense-date">
                <div className="expense-date__month">{month}</div>
                <div className="expense-date__year">{year}</div>
                <div className="expense-date__day">{day}</div>
            </div>

    )
}