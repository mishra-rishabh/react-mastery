# React Fragments

## What?
Allows grouping of multiple elements without extra DOM nodes.

## Why?
* Return multiple elements without a wrapping parent.
* Cleaner DOM and consistent styling.

## How?
Two syntaxes:
1. `<React.Fragment>...</React.Fragment>`
2. **Short:** `<>...</>`

## Example with Parent Element (div)
```javascript
function App() {
    return (
        <div>
            <h1>Example</h1>
                <ul class="list-group">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">A second item</li>
                </ul>
        </div>
    )
}
```

## Example with React Fragment
1.  ```javascript
    import React from "react";

    function App() {
        return (
            <React.Fragment>
                <h1>Example</h1>
                <ul class="list-group">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">A second item</li>
                </ul>
            </React.Fragment>
        )
    }
    ```
2.  ```javascript
    function App() {
        return (
            <>
                <h1>Example</h1>
                <ul class="list-group">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">A second item</li>
                </ul>
            </>
        )
    }
    ```
