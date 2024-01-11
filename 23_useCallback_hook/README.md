# More Hooks


## `useCallback` Hook
1. **Memoization:** Preserves function across renders to prevent unnecessary re-renders.
2. **Optimization:** Enhances performance in components with frequent updates.
3. **Dependency Array:** Recreates the function only when specific dependencies change.
4. **Event Handlers:** Used to keep consistent function references for child components.
5. **With useEffect:** Prevents infinite loops by maintaining function references.


## `useMemo` Hook
1. **Memoization:** useMemo caches the result of expensive calculations to enhance performance.
2. **Re-computation:** Only re-computes the memoized value when specific dependencies change.
3. **Optimization:** Helps prevent unnecessary recalculations, improving component rendering efficiency.
4. **Dependency Array:** Uses an array of dependencies to determine when to recompute the cached value.
5. **Comparison with useCallback:** While useCallback memoizes functions, useMemo memoizes values or results of functions.
6. **Best Use:** Ideal for intensive computations or operations that shouldn't run on every render.


## Custom Hooks
1. **Reusable Logic:** Custom hooks allow you to extract and reuse component logic across multiple components.
2. **Naming Convention**: Typically start with "use" (e.g., useWindowSize, useFetch).
3. **Combining Hooks:** Custom hooks can combine multiple built-in hooks like useState, useEffect, and others.
4. **Sharing State:** Enables sharing of stateful logic without changing component hierarchy.
5. **Isolation:** Helps in isolating complex logic, making components cleaner and easier to maintain.
6. **Custom Return Values:** Can return any value (arrays, objects, or any other data type) based on requirements,