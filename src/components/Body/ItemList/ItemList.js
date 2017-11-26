import React from 'react';
import Item from './Item/Item';

const listItems = (props) => {
    return (
        <div>
        <h3>Custom Todo (click to make it completed)</h3>
        <div className="list-group "> 
        {
            props.items.map((item, index) => {
                return <Item key={index} uuid={index} content={item.item} completed={item.completed} clickOnListItem={props.clickOnListItem} />
            })
        }
        </div>
        </div>
    )
}

export default listItems;