import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
function NewExpense(props) {
  const [AddMoreExpense, setAddMoreExpense] = useState(false);
  const onSubmitHandler = (newExpense) => {
    const expense = { ...newExpense, id: Math.random().toString() };
    props.onAddExpense(expense);
    setAddMoreExpense(false);
  };
  const ClickAddHandler = () => {
    setAddMoreExpense(true);
  };
  const ClickCancelHandler = () => {
    setAddMoreExpense(false);
  };

  return (
    <div className="new-expense">
      {!AddMoreExpense && (
        <button onClick={ClickAddHandler}>Add New Expenses</button>
      )}
      {AddMoreExpense && (
        <ExpenseForm
          onClickCancel={ClickCancelHandler}
          onSubmitNewData={onSubmitHandler}
        />
      )}
    </div>
  );
}
export default NewExpense;
