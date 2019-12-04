import React, { Component, Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';
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
        <CSSTransition
          in={this.state.show}
          timeout={1000}
          classNames='fade'
          unmountOnExit
          onEntered={(el) => { el.style.color = 'blue' }}
          appear={true}
        >
          <div> Hello Minn </div>
        </CSSTransition>
        <button onClick={this.handleToggole}>toggle</button>
      </Fragment>
    )
  }
}
export default App;
