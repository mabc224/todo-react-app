const initialState = {
    items: [],
    success: true
};

const apiTodo = (state = initialState, action) => {
    switch (action.type) {
        case 'TOOGLE_API_TODO':
            var items = [...state.items];
            items[action.id - 1].completed = !items[action.id - 1].completed;
            return Object.assign({}, state, {items: items});
        case 'LOAD_API_SUCCESS':
            return Object.assign({}, state, {items: action.payload, success: true});
        case 'LOAD_API_ERROR':
            return Object.assign({}, state, {items: [], success: false});
        default:
            return state;
    }
};

export default apiTodo;