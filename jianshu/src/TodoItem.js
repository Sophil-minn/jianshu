import React from 'react'
import PropTypes from 'prop-types'
class TodoItem extends React.Component {
  handleDelete = () => {
    // console.log(this.props.index);
    // this.props.del(this.props.index);
    const { del, index } = this.props;
    del(index);
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
      return true;
    } else {
      return false;
    }
  }
  // 子组件如果想和父组件，要调用父组件传递过来的方法
  render() {
    console.log('child render');
    const { content } = this.props;
    return (
      <div onClick={this.handleDelete} dangerouslySetInnerHTML={{ __html: content }}>
      </div>
    )
  }
}
TodoItem.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  del: PropTypes.func,
  index: PropTypes.number
}
export default TodoItem;