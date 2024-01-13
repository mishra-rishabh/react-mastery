# React Toolkit

* The best way to use Redux.
* Action types are difficult to maintain.
* Store becoming too big.
* Mistakenly editing store.
* Reducer becoming too big.

## Working with Redux Toolkit

1. `npm install @reduxjs/toolkit`
2. Remove redux from `package.json`
3. `import {createSlice} from "@reduxjs/toolkit`
4. Slices of the store can be created using the following syntax:
    ```javascript
        const slice = createSlice({
            name:"",
            initialState: {},
            reducers: {
                small ReducerMethods: (state, action) => {},
            }
        });
    ```

5. ConfigureStore combines multiple reducers and can be used as:
    ```javascript
        configureStore({
            reducer: {name: slice.reducer}
        });
    ```

6. `export actions = slice.actions;`
7. Actions can be dispatched like: `actions.reducerMethod(payload);`