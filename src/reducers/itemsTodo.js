const initialState =  { 
    items:  [
        { item: "content1", completed: true },
        { item: "content2", completed: false },
        { item: "content3", completed: false }
    ]
};


const itemsTodo = (state = initialState, action) => {
    switch (action.type) {
        case 'TOOGLE_TODO':
            var items = [...state.items];
            items[action.id].completed = !items[action.id].completed;
            return Object.assign({}, state, {items: items});
        case 'ADD_TODO':
            return Object.assign({}, state, {items: state.items.concat( { item: action.text, completed: false } )} );
        default:
            return state;
    }
};

export default itemsTodo;