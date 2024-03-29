import React from 'react'
import Card from '../UI/Card';
import {useState} from 'react';
import './Expenses.css';
import ExpensesFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';
function Expenses({expenses}) {
    const [filteredYear,setFilteredYear]=useState('2020');
    const filterChangeHandler=selectedYear=>{
        setFilteredYear(selectedYear);
    }
    const filteredExpenses=expenses.filter(expense=>{
        return expense.date.getFullYear().toString()===filteredYear;
    })
    
    return (
    <div>
    
    <Card className='expenses'>
    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
    <ExpensesChart expenses={filteredExpenses}/>
    <ExpenseList items={filteredExpenses}/>
    
    </Card>
    </div>)
}

export default Expenses;