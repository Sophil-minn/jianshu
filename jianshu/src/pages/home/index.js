import React, { Component } from 'react'
import Topic from './components/Topic'
import Recomment from './components/Recomment'
import List from './components/List'
import Writer from './components/Writer'
import { actionCreators } from './store';
import { connect } from 'react-redux';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style'
class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" src="https://upload.jianshu.io/admin_banners/web_images/4816/c4a3e25c0e339848d4f04a264623666f16fd3602.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="" />
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recomment></Recomment>
          <Writer></Writer>
        </HomeRight>
      </HomeWrapper>
    )
  }
  componentDidMount() {
    this.props.changeHomeData();
  }
}
const mapDispatch = (dispatch) => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeInfo());
  }
});
export default connect(null, mapDispatch)(Home);