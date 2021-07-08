import React, { useState } from "react";

import "./ExpensesFilter.css";

const ExpenseFilter = (props) => {
  const [year, setYear] = useState(props.year);
  const yearHandler = (event) => {
    setYear(year);
    console.log(event.target.value);
  };

  return (
    <div className="expense-item">
      <label htmlFor="year">Filter by year:</label>
      <select name="year" id="year" onChange={yearHandler}>
        <option>2021</option>
        <option>2022</option>
        <option>2023</option>
        <option>2024</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
