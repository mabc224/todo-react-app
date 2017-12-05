import React, {Component} from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../../../actions/itemsTodo';
import Item from './Item/Item';


class listItems extends Component {

//const listItems = ({ items, onTodoClick }) =>{ 
render (){    
return (
        <div>
            <h3>Custom Todo (click to make it completed)</h3>
            <div className="list-group "> 
            {
                this.props.items.map((item, index) => {

                    return <Item key={index} {...item} onClick={() => this.props.onTodoClick(index) } />
                })
            }
            </div>
        </div>
        )
    }
  
        }

const mapStateToProps = (state) => {
    return {
        items: state.itemsTodo.items
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: (id) => dispatch(toggleTodo(id))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(listItems);