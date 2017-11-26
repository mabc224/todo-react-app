import React from 'react';
import Item from './ApiItem/ApiItem';

const ApiTodo = (props) => {
    return (
        <div>
            <br />
            <h3>API Todo</h3>

            <div className="list-group "> 
            {
                props.items.map((item) => {
                    return <Item key={item.uuid} uuid={item.uuid} content={item.title} completed={item.completed} />
                })
                
            }
            </div>
        </div>
    )
}

export default ApiTodo;