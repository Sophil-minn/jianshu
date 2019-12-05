import React, { Component } from 'react';
import store from './store'
import TodoListUI from './TodoListUI'
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, getTodoList } from './store/actionCreators'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    console.log(store.getState());
    // 订阅store
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    store.subscribe(this.handleStoreChange);
  }
  render() {
    console.log('render');
    return <TodoListUI
      inputValue={this.state.inputValue}
      list={this.state.list}
      handleInputChange={this.handleInputChange}
      handleBtnClick={this.handleBtnClick}
      handleItemDelete={this.handleItemDelete}
    />
  }
  componentDidMount() {
    const action = getTodoList();
    console.log(action);
    store.dispatch(action);
  }
  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action);
  }
  handleStoreChange() {
    this.setState(store.getState());
  }
  handleBtnClick() {
    const action = getAddItemAction()
    store.dispatch(action);
  }
  handleItemDelete(index) {
    const action = getDeleteItemAction(index)
    store.dispatch(action);
  }
}
export default TodoList;
