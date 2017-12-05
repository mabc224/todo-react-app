import React from 'react';

const ApiItem = ({completed, content, onClick}) => {

    return (
        <div>
            {(completed)
                ? (
                    <button onClick={onClick} type="button" className="list-group-item list-group-item-action">
                        <del>{content}</del>
                    </button>
                )
                : (
                    <button onClick={onClick} type="button" className="list-group-item list-group-item-action">{content}</button>
                )
}
        </div>
    )
}

export default ApiItem;