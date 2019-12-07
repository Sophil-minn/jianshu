import React, { Component } from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import { GlobalStyled } from './style';
import { GlobalIconFont } from './statics/iconfont/iconfont';
import { Provider } from 'react-redux';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Write from './pages/write';

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
            <Route path='/' exact component={Home}></Route>
            <Route path='/login' exact component={Login}></Route>
            <Route path='/write' component={Write}></Route>
            <Route path='/detail/:id' exact component={Detail}></Route>
          </BrowserRouter>
        </div >
      </Provider >
    )
  }
}
export default App;