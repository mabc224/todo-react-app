import React, { Component } from 'react';

class Item extends Component {
    
    // state = { index: 0 };

    clickOnListItem(i){
        this.props.clickOnListItem(i);
        // this.setState({ 
        //     index: i }, 
        //     function(){
        //         this.props.clickOnListItem(this.state.index);
        // })
    }

    //this.props.completed
    render(){
        let button = null;
        if (this.props.completed) {
            button = <button onClick={this.clickOnListItem.bind(this, this.props.uuid)} type="button" className="list-group-item list-group-item-action"><del>{this.props.content}</del></button>;
        } else {
            button = <button onClick={this.clickOnListItem.bind(this, this.props.uuid)} type="button" className="list-group-item list-group-item-action">{this.props.content}</button>;
        }

        return (
            <div>
            {button}
            </div>
        )
    }
}

export default Item;