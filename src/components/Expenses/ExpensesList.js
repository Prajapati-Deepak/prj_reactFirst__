import ExpenseItem from "./ExpenseItem.js";
import './ExpensesList.css';
function ExpensesList(props) {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">found no expenses.</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((elem) => {
        return <ExpenseItem key={elem.id} expense={elem} />;
      })}
    </ul>
  );
}
export default ExpensesList;
