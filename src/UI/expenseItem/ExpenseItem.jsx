import React from 'react';
import "../expenseItem/ExpenseItem.css"
const ExpenseItem = ({  date, title, price }) => {
    return (
        <div className='elements'>
            <p className='date'>{new Date(date).toString()}</p>
            <p className='title'>{title}</p>
            <p className='price'>$ {price}</p>
        </div>
    );
};

export default ExpenseItem;