import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.filteredExpenses.length === 0) {
    return <p>No expenses found.</p>;
  } else {
    return (
      <ul className="expenses-list">
        {props.filteredExpenses.map((item) => {
          return (
            <ExpenseItem
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          );
        })}
      </ul>
    );
  }
};

export default ExpensesList;
