import React, { Component, Fragment } from 'react';
import './style.css'
// function App() {
//   return (
//     <div>
//       Minn
//     </div>
//   );
// }
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    }
  }
  handleToggole = () => {
    this.setState({
      show: this.state.show ? false : true
    })
  }
  render() {
    return (
      <Fragment>
        <div className={this.state.show ? 'show' : 'hide'}> Hello Minn </div>
        <button onClick={this.handleToggole}>toggle</button>
      </Fragment>
    )
  }
}
export default App;
