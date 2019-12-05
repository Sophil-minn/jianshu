import React from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';

const TodoListUI = (props) => {
  return (
    <div style={{ 'margin': '10px 0 0 10px' }}>
      <Input
        value={props.inputValue}
        placeholder="Minn  "
        style={{ 'width': '300px', 'marginRight': '10px' }}
        onChange={props.handleInputChange}
      />
      <Button onClick={props.handleBtnClick} type="primary">提交</Button>
      <List
        style={{ 'margin': '10px 0 0 0', 'width': '300px', }}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item onClick={() => { props.handleItemDelete(index) }}>
            {item}
          </List.Item>
        )}
      />
    </div>
  )
}

// class TodoListUI extends Component {
//   render() {
//     return (
//       <div style={{ 'margin': '10px 0 0 10px' }}>
//         <Input
//           value={this.props.inputValue}
//           placeholder="Minn  "
//           style={{ 'width': '300px', 'marginRight': '10px' }}
//           onChange={this.props.handleInputChange}
//         />
//         <Button onClick={this.props.handleBtnClick} type="primary">提交</Button>
//         <List
//           style={{ 'margin': '10px 0 0 0', 'width': '300px', }}
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item, index) => (
//             <List.Item onClick={(item, index) => { this.props.handleItemDelete(index) }}>
//               {item}
//             </List.Item>
//           )}
//         />
//       </div>
//     )
//   }
// }
export default TodoListUI;