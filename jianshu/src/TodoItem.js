import React from 'react'
class TodoItem extends React.Component {
  handleDelete = () => {
    // console.log(this.props.index);
    // this.props.del(this.props.index);
    const { del, index } = this.props;
    del(index);
  }
  // 子组件如果想和父组件，要调用父组件传递过来的方法
  render() {
    const { content } = this.props;
    return (
      <div onClick={this.handleDelete} dangerouslySetInnerHTML={{ __html: content }}></div>
    )
  }
}

export default TodoItem;