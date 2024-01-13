# Managing State

## `useState` Hook to Manage Component State
1. State represents data that changes over time.
2. State is local and private to the component.
3. State changes cause the component to re-render.
4. For functional components, use the `useState` hook.
5. React Functions that start with word **use** are called hooks.
6. Hooks should only be used inside components.
7. Parent components can pass state down to children via props.
8. **Lifting state up:** share state between components by moving it to their closest common ancestor.


## State v/s Props
### State:
* Local and mutable data within a component.
* Initialized within the component
* Can change over time.
* Causes re-render when updated.
* Managed using useState in functional components.

### Props:
* Passed into a component from its parent.
* Read-only (immutable) within the receiving component.
* Allow parent-to-child component communication.
* Changes in props can also cause a re-render.

## Good Resource for React Hooks
https://react.dev/reference/react/hooks
