import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store'

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
        <Button type="primary">提交</Button>
        <List
          style={{ 'margin': '10px 0 0 0', 'width': '300px', }}
          bordered
          dataSource={this.state.list}
          renderItem={item => (
            <List.Item>
              {item}
            </List.Item>
          )}
        />
      </div>
    )
  }
  handleInputChange(e) {
    const action = {
      type: 'change_input_value',
      value: e.target.value
    }
    store.dispatch(action);
  }
  handleStoreChange = () => {
    this.setState(store.getState());
  }
}
export default TodoList;
