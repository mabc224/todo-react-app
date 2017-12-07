export const toggleApiTodo = (id) => ({type: 'TOOGLE_API_TODO', id});

export const apiLoadRequest = () => ({type: 'LOAD_API_REQUEST'});

export const apiLoadSuccess = (data) => ({type: 'LOAD_API_SUCCESS', payload: data});

export const apiLoadError = (error) => ({type: 'LOAD_API_ERROR', payload: error});