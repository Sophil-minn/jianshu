import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store'
import { CHAGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './store/actionTypes'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    console.log(store.getState());
    // 订阅store
    store.subscribe(this.handleStoreChange);
  }
  render() {
    console.log('render');
    return (
      <div style={{ 'margin': '10px 0 0 10px' }}>
        <Input
          value={this.state.inputValue}
          placeholder="Minn  "
          style={{ 'width': '300px', 'marginRight': '10px' }}
          onChange={this.handleInputChange}
        />
        <Button onClick={this.handleBtnClick} type="primary">提交</Button>
        <List
          style={{ 'margin': '10px 0 0 0', 'width': '300px', }}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item onClick={this.handleItemDelete.bind(this, index)}>
              {item}
            </List.Item>
          )}
        />
      </div>
    )
  }
  handleInputChange(e) {
    const action = {
      type: CHAGE_INPUT_VALUE,
      value: e.target.value
    }
    store.dispatch(action);
  }
  handleStoreChange = () => {
    this.setState(store.getState());
  }
  handleBtnClick = () => {
    const action = {
      type: ADD_TODO_ITEM
    }
    store.dispatch(action);
  }
  handleItemDelete(index) {
    const action = {
      type: DELETE_TODO_ITEM,
      index
    }
    store.dispatch(action);
  }
}
export default TodoList;
