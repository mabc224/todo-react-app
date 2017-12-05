import React from 'react'

const Item = ({ item, completed, onClick }) => {
        
        let button = null;
        if (completed) {
            button = <button onClick={onClick} type="button" className="list-group-item list-group-item-action"><del>{item}</del></button>;
        } else {
            button = <button onClick={onClick} type="button" className="list-group-item list-group-item-action">{item}</button>;
        }
        return (
                <div>
                        {button}
                </div>

        )
}


export default Item;