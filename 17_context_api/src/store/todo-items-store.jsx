import { createContext } from "react";

export const TodoItemsContext = createContext({
    items: [],  // [] is an initial value
    addTodo: () => {},
    deleteTodo: () => {}
});
