import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import './style.css';
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
    super(props); // 
    this.state = {
      list: [],
      inputValue: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleBtnClick() {
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ''
    // })
    // this.setState(() => ({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ''
    // }))
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }), () => {
      console.log(this.ul.querySelectorAll('div').length);
    })
    // this.state.list.push('hello world');
    // console.log(this.ul);
  }
  handleInputChange(e) {
    // console.log(e.target.value);
    // this.setState({
    //   inputValue: e.target.value
    // });
    // this.setState(() => {
    //   return {
    //     inputValue: e.target.value
    //   }
    // })
    const value = this.input.value
    this.setState(() => (
      {
        inputValue: value
      }
    ))
  }
  // handleItemClick(index) {
  //   console.log(index);
  //   // 拷贝一个副本 
  //   const list = [...this.state.list];
  //   list.splice(index, 1);
  //   this.setState({
  //     list
  //   });
  // }
  handleDelete(index) {
    // const list = [...this.state.list];
    // list.splice(index, 1);
    // this.setState({
    //   list
    // });
    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return { list }
    })
  }
  getTodoItem() {
    return (
      this.state.list.map((item, index) => {
        //return <li key={index} onClick={this.handleItemClick.bind(this, index)}>{item}</li>
        return (
          <TodoItem
            del={this.handleDelete}
            key={index}
            content={item}
            index={index}
          />
        )
      })
    )
  }
  render() {
    // console.log('TodoList render');
    return (
      <Fragment>
        {/* 多行注释 */}
        {
          // 单行注释
        }
        <label htmlFor="insertArea">输入内容</label>
        <input id="insertArea" ref={(input) => {
          this.input = input
        }} className='input' value={this.state.inputValue} onChange={this.handleInputChange} />
        <button style={{ background: 'red', color: 'white' }} onClick={this.handleBtnClick}>add</button>
        <ul ref={(ul) => { this.ul = ul }}>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    )
  }
}

export default TodoList;
