import React from "react";
import ExpenseItem from "../../UI/expenseItem/ExpenseItem";
import "./Expenses.css";
const Expenses = ({ expenses }) => {
  return (
    <ul className="ul-list">
      {expenses.map((elem) => {
        return (
          <ExpenseItem
            title={elem.title}
            date={elem.date}
            price={elem.price}
            key={elem.title + new Date().getTime}
          />
        );
      })}
    </ul>
  );
};

export default Expenses;
