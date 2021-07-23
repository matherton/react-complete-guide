import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    //console.log("From expenses.js: ", selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onFilterYear={filterYearHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </>
  );
};

export default Expenses;
