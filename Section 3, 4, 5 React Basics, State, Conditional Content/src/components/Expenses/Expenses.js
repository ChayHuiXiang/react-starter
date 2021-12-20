import "./Expenses.css";
import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const expenses = props.expenses;
  const [expensesFilter, setExpensesFilter] = useState("2020");

  const saveExpensesFilterHandler = (enteredExpensesFilter) => {
    setExpensesFilter(enteredExpensesFilter);
  };

  const filteredExpenses = expenses.filter(
    (item) => item.date.getFullYear().toString() === expensesFilter
  );


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onSaveExpensesFilter={saveExpensesFilterHandler}
          expensesFilter={expensesFilter}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList filteredExpenses={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
