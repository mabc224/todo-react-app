const initialState = {
    items: []
};

const apiTodo = (state = initialState, action) => {
    switch (action.type) {
        case 'TOOGLE_API_TODO':
        console.log('TOOGLE_API_TODO');
            var items = [...state.items];
            items[action.id-1].completed = !items[action.id-1].completed;
            return Object.assign({}, state, {items: items});
        case 'LOAD_API_TODO':
            return Object.assign({}, state, {items: action.payload});
        default:
            return state;
    }
};

export default apiTodo;