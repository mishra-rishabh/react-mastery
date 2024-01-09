/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemsContext = createContext({
    items: [],  // [] is an initial value
    addTodo: () => {},
    deleteTodo: () => {}
});

const todoItemsReducerFunction = (currentTodoItems, action) => {
    let newTodoItems = currentTodoItems;
  
    if(action.type === "NEW_ITEM") {
      newTodoItems = [
        ...currentTodoItems,
        {
          name: action.payload.itemName,
          date: action.payload.itemDueDate
        }
      ];
    } else if(action.type === "DELETE_ITEM") {
      newTodoItems = currentTodoItems.filter((item) => item.name !== action.payload.itemName);
    }
    
    return newTodoItems;
};

const TodoItemsContextProvider = ({children}) => {
    const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducerFunction, []); // takes reducer function and initial value

    const addNewItem = (itemName, itemDueDate) => {

        const newItemAction = {
        type: "NEW_ITEM",
        payload: {
            itemName,
            itemDueDate
        }
        };

        dispatchTodoItems(newItemAction);
    }

    const deleteTodoItem = (todoItemName) => {
        const deleteItemAction = {
        type: "DELETE_ITEM",
        payload: {
            itemName: todoItemName
        }
        };

        dispatchTodoItems(deleteItemAction);
    }

    return <TodoItemsContext.Provider value={{items: todoItems, addTodo: addNewItem, deleteTodo: deleteTodoItem}}>
        {children}
    </TodoItemsContext.Provider>
}

export default TodoItemsContextProvider;
