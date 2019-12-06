import React, { Component } from "react";
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, SearchInfoTitle, SearchInfoSwitch, Button, SearchInfo, SearchWrapper, SearchInfoList, SearchInfoItem } from './style'
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store'

class Header extends Component {
  getListArea = () => {
    if (this.props.focused) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
          <SearchInfoSwitch>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {this.props.list.map((item) => {
              return <SearchInfoItem key={item}>{item}</SearchInfoItem>
            })}
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }
  render() {
    return (
      <div>
        <HeaderWrapper>
          <Logo />
          <Nav>
            <NavItem className='left active'>首页</NavItem>
            <NavItem className='left'>下载App</NavItem>
            <NavItem className='right'>登陆</NavItem>
            <NavItem className='right'>
              <span className="iconfont">&#xe636;</span>
            </NavItem>
            <SearchWrapper>
              <CSSTransition
                in={this.props.focused}
                timeout={200}
                classNames="slide"
              >
                <NavSearch
                  className={this.props.focused ? 'focused' : ''}
                  onFocus={this.props.handleInputFocus}
                  onBlur={this.props.handleInputBlur}
                ></NavSearch>
              </CSSTransition>
              <span className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe60b;</span>
              {this.getListArea()}
            </SearchWrapper>
          </Nav>
          <Addition>
            <Button className='writting'><span className="iconfont">&#xe615;</span>写文章</Button>
            <Button className='res'>注册</Button>
          </Addition>
        </HeaderWrapper>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['headerReducer', 'focused']),
    list: state.getIn(['headerReducer', 'list'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);