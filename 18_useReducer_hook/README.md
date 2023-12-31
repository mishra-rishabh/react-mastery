# `useReducer` Hook

1. use Reducer is a hook in React that offers more control over state operations compared to useState, especially for complex state logic.
2. **Components:** It involves two main components:
    * Reducer: A pure function that takes the current state and an action and returns a new state.
    * Action: An object describing what happened, typically having a type property.
3. **Initialization:** It's invoked as const [state, dispatch] = useReducer(reducer, initialState).
4. **Dispatch:** Actions are dispatched using the dispatch function, which invokes the reducer with the current state and the given action.
5. **Use Cases:** Particularly useful for managing state in large components or when the next state depends on the previous one.
6. **Predictable State Management:** Due to its strict structure, it leads to more predictable and maintainable state management.