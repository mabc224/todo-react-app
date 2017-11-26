import React, { Component } from 'react';

class AddItem extends Component {

    state = { 
        addItem : { }
    }
    
    addItemText(e){
        e.preventDefault();
        this.setState({ 
            addItem: {content:  this.refs.taskTitle.value, completed: false} }, 
            function(){
                this.props.addItemsList(this.state.addItem);
        })
    }



    render(){
        return (
            <form className="form-inline my-4 justify-content-center" onSubmit={this.addItemText.bind(this)} > 
                <input type="text" className="form-control mr-3 col-5" placeholder="Add Item" ref='taskTitle'/>
                <button type="submit" className="btn btn-outline-success col-2">Submit</button>
            </form>
        )
    }
}

export default AddItem;