import React, { Component } from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import { GlobalStyled } from './style';
import { GlobalIconFont } from './statics/iconfont/iconfont';
import { Provider } from 'react-redux';
import Header from './common/header';
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <GlobalStyled />
          <GlobalIconFont />
          <BrowserRouter>
            <Route path='/' exact render={() => <div>gensdlfsjklfjdsfd</div>}></Route>
            <Route path='/home' render={() => <div> Home</div>}></Route>
            <Route path='/home22' render={() => <div> Home22</div>}></Route>
            <Route path='/detail' render={() => <div>detail</div>}></Route>
          </BrowserRouter>
          <Header />
        </div >
      </Provider >
    )
  }
}
export default App;