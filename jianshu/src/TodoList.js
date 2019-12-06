import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoList extends Component {
  render() {
    const { inputValue, list, changeInputValue, handleBtnClick } = this.props;
    return (
      <div>
        <div>
          <input
            value={inputValue}
            type="text"
            onChange={changeInputValue}
          />
          <button onClick={handleBtnClick}>提交</button>
        </div>
        <ul>
          {
            list.map((item, index) => {
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
