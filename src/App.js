import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { id: "1",  date: new Date(2023, 7, 15),title: "Insurance", price: 100 },
    { id: "2",  date: new Date(2023, 8, 25), title: "Book",price: 10 },
    { id: "3",  date: new Date(2023, 2, 10), title: "Pen",price: 1 },
    { id: "4",  date: new Date(2023, 9, 17),title: "Laptop", price: 200 },
  ];

  return (
    <div>
      <h2>Let's get Started</h2>
      {expenses.map((expense,index) => {
        return (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            price={expense.price}
          ></ExpenseItem>
        );
      })}
    </div>
  );
}

export default App;
