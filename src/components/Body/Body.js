import React, { Component } from 'react';
// import AddItem from './../../containers//AddItemTodo';
// import ItemList from './../../containers/ItemTodoList'
import AddItem from './AddItem/AddItem';
import ItemList from './ItemList/ItemList';
import ApiTodo from './ApiTodo/ApiTodo';
// import $ from "jquery";

class Body extends Component {

  // state = { items : [
  //   {item: "content1", completed: true},
  //   {item: "content2", completed: false},
  //   {item: "content3", completed: false}
  //  ], 
  //  todos: []
  // }

  // addItemsList(newItem) {
  //   const itemsList = [...this.state.items];
  //   itemsList.push({item: newItem.content, completed: newItem.completed});
  //   this.setState({items: itemsList});
  // }

  // clickOnListItem(index){
  //   const itemsList = [...this.state.items];
  //   itemsList[index] = {item: itemsList[index].item, completed: !itemsList[index].completed}
  //   this.setState({items: itemsList});
  // }

  // componentDidMount(){

  //   $.ajax({
  //     url: 'https://jsonplaceholder.typicode.com/todos',
  //     dataType: 'json',
  //     cache: false,
  //     success: function(data){
  //       this.setState({todos: data});
  //     }.bind(this),
  //     error: function(xhr, status, err){
  //       console.log(err);
  //     }
  //   })
  // }

  render () {  
    return (
        <main role="main">
          <div className="container">
                <AddItem />
                <ItemList />
                <ApiTodo />
          </div>
        </main>
      )
  }
}

export default Body;