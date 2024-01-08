# `useRef` Hook in React and Updating State from Previous State

## `useRef` Hook
1. `useRef` allows access to DOM elements and retains mutable values without re-renders.
2. Used with the ref attribute for direct DOM interactions.
3. Can hold previous state or prop values.
4. Not limited to DOM references; can hold any value.
5. Refs can be passed as props also.

## Updating State from Previous State
* **Spread Operator:** Use to maintain immutability when updating arrays or objects.
* **Functional Updates:** Use `(existingPosts) => [postData, ...existingPosts]` to avoid stale values during asynchronous updates.
* For implementation look for `handleNewItem` function in `App.jsx` file. 