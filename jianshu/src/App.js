import React, { Component } from "react";
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyled } from './style';
import { GlobalIconFont } from './statics/iconfont/iconfont';
import { Provider } from 'react-redux';
import Header from './common/header';
import Routers from './router';
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <GlobalStyled />
          <GlobalIconFont />
          <BrowserRouter>
            <Header />
            <Routers />
          </BrowserRouter>
        </div >
      </Provider >
    )
  }
}
export default App;