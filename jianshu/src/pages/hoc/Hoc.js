import React, { PureComponent } from 'react';

const ComponentClass = ComponentClass => {
  return class HOC extends PureComponent {
    state = {
      loading: true,
      memberSetting: 'memberSetting'
    }
    componentDidMount() {
      console.log("hoc");
      console.log(this.props);
    }
    render() {
      const newProps = {
        user: "individual"
      }
      return (
        <div>
          {this.state.memberSetting}
          <ComponentClass {...this.props} {...newProps} />
        </div>
      )
    }
  }
}

export default ComponentClass;