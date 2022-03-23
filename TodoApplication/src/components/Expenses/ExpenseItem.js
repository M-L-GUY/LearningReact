import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import {useState} from 'react';
function ExpenseItem({expenses})
{
    const [title,changeTitle]=useState(expenses.title);
    const buttonPressed=()=>{
        changeTitle('Hardik');
        console.log('hardik');
    }
    return <Card className='expense-item'>
    <ExpenseDate date={expenses.date}/>
        <div className='expense-item__description'><h2>{title}</h2></div>
        <div className='expense-item__price'>${expenses.amount}</div>
        <button onClick={buttonPressed}>Click</button>
    </Card>
}
export default ExpenseItem;