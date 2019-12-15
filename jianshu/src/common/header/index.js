import React, { PureComponent } from "react";
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, SearchInfoTitle, SearchInfoSwitch, Button, SearchInfo, SearchWrapper, SearchInfoList, SearchInfoItem } from './style'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store'
import { actionCreators as loginActionCreators } from '../../pages/login/store'

class Header extends PureComponent {
  getListArea = () => {
    const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
    const newList = list.toJS();
    const pageList = [];
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
          <SearchInfoSwitch
              onClick={() => { handleChangePage(page, totalPage, this.spinIcon) }}
            >
              <span ref={(icon) => { this.spinIcon = icon }} className="iconfont spin">&#xe851;</span>
              换一批
          </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }
  render() {
    const { focused, handleInputFocus, list, login, logout, handleInputBlur } = this.props;
    return (
      <div>
        <HeaderWrapper>
          <Link to='/'>
            <Logo />
          </Link>
          <Nav>
            <NavItem className='left active'>首页</NavItem>
            <Link to='/hoc'><NavItem className='left'>下载App</NavItem></Link>
            {
              login ?
                <NavItem onClick={logout} className='right'>退出</NavItem> :
                <Link to='/login'><NavItem className='right'>登陆</NavItem></Link>
            }
            <NavItem className='right'>
              <span className="iconfont">&#xe636;</span>
            </NavItem>
            <SearchWrapper>
              <CSSTransition
                in={focused}
                timeout={200}
                classNames="slide"
              >
                <NavSearch
                  className={focused ? 'focused' : ''}
                  onFocus={() => { handleInputFocus(list) }}
                  onBlur={handleInputBlur}
                ></NavSearch>
              </CSSTransition>
              <span className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe60b;</span>
              {this.getListArea()}
            </SearchWrapper>
          </Nav>
          <Addition>
            <Link to='/write'>
              <Button className='writting'><span className="iconfont">&#xe615;</span>写文章</Button>
            </Link>
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
    list: state.getIn(['headerReducer', 'list']),
    page: state.getIn(['headerReducer', 'page']),
    totalPage: state.getIn(['headerReducer', 'totalPage']),
    mouseIn: state.getIn(['headerReducer', 'mouseIn']),
    login: state.getIn(['loginReducer', 'login'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      (list.size === 0) && dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(page, totalPage, spin) {
      let originAngle = 0
      if (spin.style.transform) {
        originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
      }
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      }
      spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
    },
    logout() {
      dispatch(loginActionCreators.logout())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);