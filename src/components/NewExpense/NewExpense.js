import React from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";
const saveExpenseDataHandler = (enteredExpenseData) => {
  const expenseData = {
    ...enteredExpenseData,
    id: Math.random().toString(),
  };
  console.log(expenseData);
};

const NewExpense = () => {
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
