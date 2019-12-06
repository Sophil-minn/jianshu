import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
  height: 58px;
  border-bottom: 1px solid #ccc;
`
export const Logo = styled.a.attrs({
  href: '/'
})`
  position: absolute;
  top:0;
  left: 0;
  display:block;
  width:100px;
  height: 58px;
  background:url(${logoPic});
  background-size:contain;
`
export const Nav = styled.div`
  width:960px;
  height:100%;
  margin:0 auto;
`
export const NavItem = styled.div`
  line-height:58px;
  padding:0 15px;
  font-size: 17px;
  color:#333;
  &.left {
    float:left;
  }
  &.right {
    float:right;
    color: #969696;
  }
  &.active {
    color:#ea6f5a;
  }
`
export const SearchWrapper = styled.div`
  position:relative;
  float:left;
  .iconfont{
    position:absolute;
    right:5px;
    bottom:5px;
    width:30px;
    height:30px;
    border-radius:15px;
    line-height:30px;
    text-align:center;
    &.focused{
      background:#777;
      color:white;
    }
  }
`
export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height:38px;
  margin-top:9px;
  padding:0 30px 0 20px;
  margin-left:20px;
  border:none;
  outline:none;
  border-radius: 19px;
  font-size: 15px;
  color:#777;
  background:#eee;
  &::placeholder{
    color:#999;
  }
  &.focused{
    width:200px;
    .iconfont{
      background:#ccc;
    }
  }
`
export const Addition = styled.div`
  position:absolute;
  top:0;
  right:0;
  height:58px;
`
export const Button = styled.div`
  float: right;
  margin-top:9px;
  margin-right:20px;
  padding:0 20px;
  line-height:38px;
  border-radius:19px;
  border:1px solid #ec6149;
  font-size:14px;
  &.reg{
    color: #ec4169;
  }
  &.writting{
    color:#fff;
    background:#ec4169;
  }
`

