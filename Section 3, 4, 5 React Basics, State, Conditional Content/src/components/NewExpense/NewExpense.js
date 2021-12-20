import ExpenseForm from "./ExpenseForm";
import React, { useState } from "react";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    props.onSaveExpenseData(expenseData);
  };

  const toggleShowFormHandler = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  return (
    <div className="new-expense">
      {showForm ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={toggleShowFormHandler}
        />
      ) : (
        <button type="button" onClick={toggleShowFormHandler}>
          Add New Expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;
