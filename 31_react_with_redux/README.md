# React with Redux

We will create a counter app with redux.

1. `npm install redux`
2. `npm install react-redux`
3. Create store folder with `index.js` file.
4. Creating the store using: `import {createStore} from redux.`
5. Providing the store with react:
    1. Provider from react-redux
    2. `<Provider store={store}><App /></Provider>`
6. Using the store:
    1. useSelector hook gets a slice of the store. <br/>
    `const counter = useSelector(state => state.counter);`
    2. Subscription is already setup and only will re-execute when only your slice is changed. Subscription is automatically cleared also.
7. Dispatch Actions using the useDispatch hook.