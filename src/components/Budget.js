import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext'; 

const Budget = () => {
    const [budget, setBudget] = useState(5000);
    const { currency } = useContext(AppContext);
    const ExpenseTotal = () => {
        var { expenses, totalExpenses } = useContext(AppContext);
        totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);
        return (totalExpenses);
    };
    var total = ExpenseTotal();
    if (budget > 20000) {
        alert("Budget must not exceed 20000. ");
    }  
    if (budget< total){
        alert("You cant reduce the budget lower thant the spending")
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency} </span>
            <input 
                required='required'
                type='number'
                id='budget'
                value={budget}
                style={{ marginLeft: '0.5rem' , size: 10}}
                onChange={(event) => setBudget(event.target.value)}>
            </input>
            
        </div>
    );
};
export default Budget;


