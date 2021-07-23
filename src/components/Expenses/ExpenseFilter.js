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
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
