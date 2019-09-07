const initialState = {
    value: 0
}

const reducer = (state = initialState, action) => {
    let { type } = action;
    if (type === "INCREMENT") {
        return {
            value: state.value + 1
        }
    }
    if (type === "DECREMENT")
            return {
                value: state.value - 1,
                color: action.color
            }
    if (type === "INCREMENT5") {
            return {
                value: state.value + 5
            }
        }
    if (type === "DECREMENT5") {
        return {
            value: state.value - 5
            }
        }
    if (type === 'CHANGE_COLOR'){
        return {
            value: state.value,
            color: action.color
        }
    }
    if (type === 'CHANGE_NUMBER'){
        return {
            value: parseInt(action.value),
            color: state.color
        }
    }
    return state
}