import { useState } from "react";
import "./App.css";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/new-expenses/NewExpense";

const items = [
  {
    id: 1,
    title: 'Fruits',
    price: 300,
    date: new Date(2021, 2, 28)
  },
  {
    id: 2,
    title: 'Food',
    price: 400,
    date: new Date(2021, 5, 12)
  },
  {
    id: 3,
    title: 'Tea',
    price: 300,
    date: new Date(2022, 7, 12)
  },{
    id: 4,
    title: 'New Desk',
    price: 300,
    date: new Date(2022, 2, 28)
  },
  {
    id: 5,
    title: 'Milk',
    price: 450,
    date: new Date(2019, 4, 17)
  },
  {
    id: 6,
    title: 'Air Pods',
    price: 50,
    date: new Date(2022, 2, 28)
  },
  {
    id: 7,
    title: 'Water',
    price: 300,
    date: new Date(2019, 4, 28)
  },
  {
    id: 8,
    title: 'Books',
    price: 300,
    date: new Date(2020, 4, 28)
  },
  {
    id: 9,
    title: 'Laptop',
    price: 300,
    date: new Date(2019, 8, 28)
  },
   {
    id: 10,
    title: 'Apple',
    price: 70,
    date: new Date(2020, 4, 18)
  },
  {
    id:11,
    title: 'Car',
    price: 5000,
    date: new Date(2023, 4, 18)
  },
]

function App() {
  const [expenses , setExpenses] = useState(items)
   const addNewExpenseHandler = (data) => {
   const upExpenses = [...expenses];
   upExpenses.push(data)
   setExpenses(upExpenses)
   }

  return <div className="apps"> 
    <div className="items">
    <NewExpense onNewExpenseAdd={addNewExpenseHandler}/>
    <Expenses expenses={expenses}/>
    </div>
  </div>
}

export default App;
