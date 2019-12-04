import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
// function TodoList() {
//   return (
//     <div>
//       <input></input>
//       <button onClick={this.handleBtnClick}>add</button>
//       <ul>
//         <li>learn react</li>
//         <li>learn english</li>
//       </ul>
//     </div>
//   );
// }
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputValue: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
    this.state.list.push('hello world');
    console.log('handleBtnClick');
  }
  handleInputChange(e) {
    // console.log(e.target.value);
    this.setState({
      inputValue: e.target.value
    });
  }
  handleItemClick(index) {
    console.log(index);
    // 拷贝一个副本 
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list
    });
  }
  handleDelete(index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list
    });
  }
  getTodoItem() {
    return (
      this.state.list.map((item, index) => {
        //return <li key={index} onClick={this.handleItemClick.bind(this, index)}>{item}</li>
        return (
          <TodoItem
            del={this.handleDelete.bind(this)}
            key={index}
            content={item}
            index={index}
          />
        )
      })
    )
  }
  render() {
    return (
      <Fragment>
        <input value={this.state.inputValue} onChange={this.handleInputChange} />
        <button style={{ background: 'red', color: 'white' }} onClick={this.handleBtnClick.bind(this)}>add</button>
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    )
  }
}

export default TodoList;
