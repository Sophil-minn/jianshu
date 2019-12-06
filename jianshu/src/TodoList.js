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
          <button>提交</button>
        </div>
        <ul>
          <li>Minn</li>
        </ul>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue: (e) => {
      console.log(e.target.value);
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
