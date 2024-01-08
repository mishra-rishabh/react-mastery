import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import Items from "./components/Items";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (itemName, itemDueDate) => {

    setTodoItems((currentValue) => {
      const newItemArr = [
        ...currentValue,
        { name: itemName, date: itemDueDate }
      ];

      return newItemArr;
    });
  }

  const deleteTodoItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  }

  return (
    <TodoItemsContext.Provider value={{items: todoItems, addTodo: addNewItem, deleteTodo: deleteTodoItem}}>
      <center className="todo-container">
        <AppName />
        <AddTodo /* onNewItem={addNewItem} */ />
        <WelcomeMessage /* items={todoItems} */></WelcomeMessage>
        <Items /* items={todoItems} onDeleteClick={deleteTodoItem} */></Items>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;