# Context API

1. **Prop Drilling:** Context API addresses prop drilling; component composition is an alternative.
2. **Folder Setup:** Use a store folder for context files.
3. **Initialization:** Use React.createContext with initial state and export it.
4. **Provider:** Implement with contextName.Provider in components.
5. **Access Value:** Use the useContext hook.
6. **Dynamic Data:** Combine context value with state.
7. **Export Functions:** Context can also export functions for actions
8. **Logic Separation:** This helps keep the Ul and business logic separate from each other, i.e., create a seperate folder `store`.