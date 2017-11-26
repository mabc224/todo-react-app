import React from 'react';

const ApiItem = (props) => {
    let button = null;
    if (props.completed) {
        button = <button type="button" className="list-group-item list-group-item-action"><del>{props.content}</del></button>;
    } else {
        button = <button type="button" className="list-group-item list-group-item-action">{props.content}</button>;
    }
    return (
        <div>
        {button}
        </div>
    )
}

export default ApiItem;