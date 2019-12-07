import React, { PureComponent } from 'react'
import Topic from './components/Topic'
import Recomment from './components/Recomment'
import List from './components/List'
import Writer from './components/Writer'
import { actionCreators } from './store';
import { connect } from 'react-redux';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style'
class Home extends PureComponent {
  handleScrollTop() {
    window.scrollTo(0, 0);
  }
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
        {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null}
      </HomeWrapper>
    )
  }
  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow);
  }
  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow);
  }
}
const mapState = (state) => ({
  showScroll: state.getIn(['homeReducer', 'showScroll'])
})
const mapDispatch = (dispatch) => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeInfo());
  },
  changeScrollTopShow() {
    if (document.documentElement.scrollTop > 100) {
      dispatch(actionCreators.toggleTopShow(true))
    } else {
      dispatch(actionCreators.toggleTopShow(false))
    }
  }
});
export default connect(mapState, mapDispatch)(Home);