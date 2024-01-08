import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import Items from "./components/Items";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  
  const handleNewItem = (itemName, itemDueDate) => {
    /* const newItemArr = [
      ...todoItems,
      {name: itemName, date: itemDueDate}
    ]; */

    // setTodoItems(newItemArr);
    setTodoItems((currentValue) => {
      const newItemArr = [
        ...currentValue,
        {name: itemName, date: itemDueDate}
      ];

      return newItemArr;
    });
  }

  const handleDeleteTodoItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);

    // alert("Item Deleted " + todoItemName);
  }

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <Items items={todoItems} onDeleteClick={handleDeleteTodoItem}></Items>
    </center>
  );
}

export default App;