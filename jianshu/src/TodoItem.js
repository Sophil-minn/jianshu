import React from 'react'
import PropTypes from 'prop-types'
class TodoItem extends React.Component {
  handleDelete = () => {
    // console.log(this.props.index);
    // this.props.del(this.props.index);
    const { del, index } = this.props;
    del(index);
  }
  // 子组件如果想和父组件，要调用父组件传递过来的方法
  render() {
    const { content, test } = this.props;
    return (
      <div onClick={this.handleDelete} dangerouslySetInnerHTML={{ __html: content + test }}>
      </div>
    )
  }
}
TodoItem.propTypes = {
  test: PropTypes.string.isRequired, //必须传递
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  del: PropTypes.func,
  index: PropTypes.number
}
TodoItem.defaultProps = {
  test: 'minn'
}
export default TodoItem;