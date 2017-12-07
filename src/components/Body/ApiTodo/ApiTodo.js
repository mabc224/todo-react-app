import React, {Component} from 'react';
import { connect } from 'react-redux';
import Item from './ApiItem/ApiItem';
import { apiCall, toggleApiTodo } from '../../../actions/apiTodo';

class ApiTodo extends Component {

    componentDidMount() {
        this.props.apiCall();
      }

    render() {

            let textToDispay;
            if(!this.props.success){
                textToDispay = (
                <div class="alert alert-danger">
                    <strong>Alert!</strong> Call to API fail!
                </div>
                )
            } else {
                textToDispay = (
                    
                <div className="list-group ">
                    {this
                        .props
                        .items
                        .map((item) => {
                            return <Item
                                key={item.id}
                                uuid={item.id}
                                content={item.title}
                                onClick={() => this.props.toggleApiTodo(item.id)}
                                completed={item.completed}/>
                        })
                    }
                </div>
                )
            }

        

        return (
            <div>
                <br/>
                <h3>API Todo</h3>
                {textToDispay}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        items: state.apiTodo.items,
        success: state.apiTodo.success
    };
}

const mapDispatchToProps = dispatch => {
    return {
        apiCall: () => dispatch(apiCall()),
        toggleApiTodo: (id) => dispatch(toggleApiTodo(id))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ApiTodo);