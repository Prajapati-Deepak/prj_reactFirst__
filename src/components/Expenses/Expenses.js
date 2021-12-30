
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter.js";
import { useState } from "react";
import ExpensesList from "./ExpensesList.js";

function Expenses(props) {
  const [filteredValue, setFilteredValue] = useState("2020");
  const OnFilteredHandler = (value) => {
    setFilteredValue(value);
  };
  const filteredElement = props.element.filter((elem) => {
    const date = elem.date.getFullYear().toString();
    return date === filteredValue;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          OnFilteredValue={OnFilteredHandler}
          selected={filteredValue}
        ></ExpenseFilter>
        <ExpensesList items={filteredElement}/>
      </Card>
    </div>
  );
}
export default Expenses; 
