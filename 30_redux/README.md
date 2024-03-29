# Redux

## Overview
1. State management for cross component or app-wide state.
2. Redux is a predictable state management library for JavaScript apps.
3. Local State vs Cross-component state vs App-Wide state.
4. useState or useReducer vs useState with prop drilling vs useState or useContext or Redux.

## React Context Vs Redux
1. You can use both.
2. Setup and Coding is tough especially if you have multiple context providers.
3. Performance is slow. Context should only be used for things that rarely change. On the other hand Redux has great performance.
4. If these things don't matter to you then you can choose not to use redux and stay with React-Context.

## How Redux Works

1. **Single Source:** Uses a single central store to maintain the entire application's state.
2. **Actions:** Components never directly change the store. Changes to state are made through dispatched actions, which describe events.
3. **Reducers:** Actions are processed by reducers, pure functions that return the new state.
4. **Immutable:** State is immutable; every change results in a new state object.
5. This is different from useReducer hook.

## Working with Redux

1. `npm init -y`
2. `npm install redux`
3. `import` in node `const redux = require('redux');`
4. We need to setup all 4 basic things:
    1. Reducer
    2. Store
    3. Subscriber
    4. Actions
5. `node redux-demo.js` command to run node server.