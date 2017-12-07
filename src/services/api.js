import axios from 'axios';

export const apiToDoCall = () => {
    return axios({method: 'get', url: 'https://jsonplaceholder.typicode.com/todos', responseType: 'json'}).then(json => json.data);
};