import React, {Component} from 'react';
import { connect } from 'react-redux';
import Item from './ApiItem/ApiItem';
import { apiCall, toggleApiTodo } from '../../../actions/apiTodo';

class ApiTodo extends Component {

    componentDidMount() {
        this.props.apiCall();
      }

    render() {
        return (
            <div>
                <br/>
                <h3>API Todo</h3>

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
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        items: state.apiTodo.items
    };
}

const mapDispatchToProps = dispatch => {
    return {
        apiCall: () => apiCall(dispatch),
        toggleApiTodo: (id) => dispatch(toggleApiTodo(id))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ApiTodo);