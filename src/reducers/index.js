import { combineReducers } from 'redux';
import apiTodo from './apiTodo';
import itemsTodo from "./itemsTodo";

const TodoAppReducer = combineReducers({
    apiTodo: apiTodo,
    itemsTodo: itemsTodo
});

export default TodoAppReducer;