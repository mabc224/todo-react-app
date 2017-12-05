import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../../actions/itemsTodo';


  class AddItem extends Component {

        render(){
        return (
            <form className="form-inline my-4 justify-content-center" onSubmit={evt => {
                evt.preventDefault();
                this.props.onAddTodoClick(evt.target.querySelector('input').value);
                
              }} > 
                <input type="text" className="form-control mr-3 col-5" placeholder="Add Item" ref='textTodo'/>
                <button type="submit" className="btn btn-outline-success col-2">Submit</button>
            </form>
        )
      }
    
}
  
const mapDispatchToProps = dispatch => {
    return {
      onAddTodoClick: (text) => dispatch(addTodo(text))
    };
};
  
export default connect(
  null,
  mapDispatchToProps
)(AddItem);

