import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoList extends Component {
  render() {
    return (
      <div>
        <div>
          <input
            value={this.props.inputValue}
            type="text"
            onChange={this.props.changeInputValue}
          />
          <button onClick={this.props.handleBtnClick}>提交</button>
        </div>
        <ul>
          {
            this.props.list.map((item, index) => {
              return <li key={index}>{item}</li>
            })
          }
        </ul>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue: (e) => {
      const action = {
        type: 'change_input_value',
        value: e.target.value
      };
      dispatch(action);
    },
    handleBtnClick() {
      const action = {
        type: 'add_item'
      };
      dispatch(action);
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
