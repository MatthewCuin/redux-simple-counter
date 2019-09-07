const { createStore } = Redux;

// Initialize the Redux store by passing it our reducer (defined globally in reducer.js)
const { subscribe, dispatch, getState } = createStore(reducer);

// Re-render the application every time the state changes
// Here we pass the Redux state to our render method (defined globally in render.js)
subscribe(() => render(getState()))

// Dispatch the "INCREMENT" action every time the +1 button is pressed
const incrementButton = document.getElementById('increment');
incrementButton.addEventListener('click', e => dispatch({ type: "INCREMENT" }));

const decrementButton = document.getElementById('decrement');
decrementButton.addEventListener('click', e => dispatch({ type: "DECREMENT" }));

const colorSelect = document.getElementById('color');
colorSelect.addEventListener('change', e => dispatch({type: "CHANGE_COLOR", color: e.target.value}));

const numberButton = document.getElementById('numberSubmit');
const numberField = document.getElementById('number');
numberButton.addEventListener('click', e => {
    const { value } = numberField;
    dispatch({type: 'CHANGE_NUMBER', number: value});
})