import React, { Component } from "react";
import { GlobalStyled } from './style';
import { GlobalIconFont } from './statics/iconfont/iconfont';
import Header from './common/header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyled />
        <GlobalIconFont />
        <Header />
      </div>
    )
  }
}
export default App;