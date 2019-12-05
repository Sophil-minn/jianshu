import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    console.log(store.getState());
  }
  render() {
    console.log('render');
    return (
      <div style={{ 'margin': '10px 0 0 10px' }}>
        <Input value={this.state.inputValue} placeholder="Minn  " style={{ 'width': '300px', 'marginRight': '10px' }} />
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
}
export default TodoList;