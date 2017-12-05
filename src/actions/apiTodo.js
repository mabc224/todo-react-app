import axios from 'axios';

export const toggleApiTodo = (id) => ({
    type: 'TOOGLE_API_TODO',
    id
});

export const apiLoad = (data) => ({
      type: 'LOAD_API_TODO',
      payload: data
});

export const apiCall = (dispatch) => {
    axios({
        method:'get',
        url:'https://jsonplaceholder.typicode.com/todos',
        responseType:'json'
      }).then(json => dispatch(apiLoad(json.data)));

};