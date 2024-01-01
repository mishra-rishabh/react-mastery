# Create First React Component

## What is a react component?
* A Component is considered as the core building blocks of a React application.
* Components are independent and reusable bits of code. 
* They serve the same purpose as JavaScript functions, but work in isolation and return HTML.
* Components come in two types, Class components and Function components, in this tutorial we will concentrate on Function components as Class components are not used now a days.

## What is JSX?
1. **Definition:** JSX determines how the Ul will look wherever the component is used.
2. **Not HTML:** Though it resembles HTML, you're actually writing JSX, which stands for JavaScript XML.
3. **Conversion:** JSX gets converted to regular JavaScript.
4. **babeljs.io/repl** is an online tool that allows you to see how JSX is transformed into JavaScript. Copy and paste ```<h1>Vite + React</h1>``` in the above mentioned website to see how this code is converted into JS.

## Exporting Components
1. Enables the use of a components in other parts.
2. **Default Export:** Allows exporting a single component as the default from a module.
3. **Named Export:** Allows exporting multiple items from a module.
4. **Importing:** To use an exported component, you need to import it in the destination file using import syntax.

### Default Export and Import
```
Button.js file

function Button() {
    ...
    ....
    .....
}

export default Button
```

```
App.js file

import Button from "./Button";
```

### Named Export and Import
```
Component.js file

export function Button() {
    ...
    ....
    .....
}

export function Card() {
    ...
    ....
    .....
}
```

```
App.js file

import {Button, Card} from "./Component";
```

### Mixed (Default and Named) Export and Import
```
MixedComponent.js file

export function Button() {
    ...
    ....
    .....
}

export default function Card() {
    ...
    ....
    .....
}
```

```
App.js file

import Card, {Button} from "./MixedComponent";
```

## Other Important Points
1. **Naming:** Must be capitalized; lowercase for default HTML.
2. **HTML:** Unlike vanilla JS where you can't directly write HTML, in React, you can embed HTML-like syntax using JSX.
3. **CSS:** In React, CSS can be directly imported into component files, allowing for modular and component-specific styling.

## Run React + Vite App
```npm run dev```