import React, { PureComponent } from 'react';
import Hoc from './Hoc';

//使用高阶组件
class EnhancedComponent extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      time: new Date(),
      hello: 'Hi'
    }
  }
  render() {
    return <div hello={this.state.hello}>{this.props.user}</div>
  }
}

export default Hoc(EnhancedComponent);