# React Mastery

This space is dedicated to learning and exploring React, the JavaScript library for building user interfaces. Whether you're a beginner taking your first steps or an experienced developer looking to deepen your React skills, this repository is designed to be your companion on your React journey.

## Create Vite Project
```npm create vite@latest```


## React Icons Library
1. You can use a lot of items without managing them.
2. **Install Package:** `npm install react-icons --save`
3. **Use icons:** `import {IconName} from "react-icons/fc"`
4. **Website:** https://react-icons.github.io/react-icons/

## How React Works?
### Root Component:
* The App is the main or root component of a React application.
* It's the starting point of your React component tree.

### Virtual DOM:
* React creates an in-memory structure called the virtual DOM.
* Different from the actual browser DOM.
* It's a lightweight representation where each node stands for a component and its attributes.

### Reconciliation Process:
* When component data changes, React updates the virtual DOM's state to mirror these changes.
* React then compares the current and previous versions of the virtual DOM.
* It identifies the specific nodes that need updating.
* Only these nodes are updated in the real browser DOM, making it efficient.

### React and ReactDOM:
* The actual updating of the browser's DOM isn't done by React itself.
* It's handled by a companion library called react-dom.

### Root Element:
* The root div acts as a container for the React app.
* The script tag is where the React app starts executing.
* If you check main.tsx, the component tree is rendered inside this root element.

### Strict Mode Component:
* It's a special component in React.
* Doesn't have a visual representation.
* Its purpose is to spot potential issues in your React app.

### Platform Independence:
* React's design allows it to be platform-agnostic.
* While react-dom helps build web Uls using React, ReactNative can be used to craft mobile app Uls.

## React Vs Angular Vs Vue
### React, Angular, and Vue:
* React is a library while Angular and Vue.js are frameworks.
* React focuses on Ul Angular and Vue.js offer comprehensive tools for full app development.

### Library vs. Framework:
* A library offers specific functionality.
* A framework provides a set of tools and guidelines.
* In simpler terms: React is a tool; Angular and Vue.js are toolsets.

### React's Specialty:
* React's main role is crafting dynamic, interactive Uls.
* It doesn't handle routing, HTTP calls, state management, and more.

### React's Flexibility:
* React doesn't dictate tool choices for other app aspects.
* Developers pick what fits their project best.

### About Angular and Vue.js:
* Angular, developed by Google, provides a robust framework with a steep learning curve.
* Vue.js is known for its simplicity and ease of integration, making it beginner-friendly.