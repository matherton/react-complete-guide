import React from "react";

import "./ExpensesFilter.css";

const ExpenseFilter = (props) => {
  const yearHandler = (event) => {
    props.onFilterYear(event.target.value);
  };

  console.log(props.selected);

  return (
    <div className="expenses-filter expenses-filter__control">
      <label>Filter by year:</label>
      <select value={props.selected} onChange={yearHandler}>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
