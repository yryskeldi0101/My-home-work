import React, { useState } from "react";
import ExpenseItem from "../../UI/expenseItem/ExpenseItem";
import ExpensesFilter from "../expensesfilter/ExpensesFilter";
import "./Expenses.css";
import Chart from "../Chart/Chart";
const Expenses = ({ expenses }) => {
  const [selectedYear, setSelectedYear] = useState("2023");
  const yearChangeHandler = (event) => {
    setSelectedYear(event.target.value);
  };
  const filteredItems = expenses.filter((elem) => {
    const stringifiedYear = new Date(elem.date).getFullYear().toString();
    return stringifiedYear === selectedYear;
  });
  return (
    <div className="expenses">
      <Chart items={filteredItems}/>
      <ExpensesFilter value={selectedYear} onChange={yearChangeHandler} />

      <ul className="ul-list">
        {filteredItems.map((elem) => {
          return (
            <ExpenseItem
              title={elem.title}
              date={elem.date}
              price={elem.price}
              key={elem.id + new Date().getTime}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Expenses;
