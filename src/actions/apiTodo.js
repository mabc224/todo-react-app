import axios from 'axios';

export const toggleApiTodo = (id) => ({
    type: 'TOOGLE_API_TODO',
    id
});

export const apiLoadError = (error) => ({
      type: 'LOAD_API_ERROR',
      payload: error
});

export const apiLoadSuccess = (data) => ({
    type: 'LOAD_API_SUCCESS',
    payload: data
});

export const apiCall = () => {
    return dispatch => {
        return axios({method: 'get', url: 'https://jsonplaceholder.typicode.com/todos', responseType: 'json'})
            .then(json => dispatch(apiLoadSuccess(json.data)))
            .catch(error => dispatch(apiLoadError(error)));
    };
};