import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import Items from "./components/Items";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "gym",
      date: "04-01-2024"
    },
    {
      name: "study react",
      date: "04-01-2024"
    }
  ]
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />

      <Items items={todoItems}></Items>
    </center>
  );
}

export default App;