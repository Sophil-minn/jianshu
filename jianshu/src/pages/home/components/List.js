import React, { PureComponent } from 'react'
import { ListItem, ListInfo, LoadMore } from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
class List extends PureComponent {
  render() {
    const { list, page, getMoreList } = this.props;
    return (
      <div>
        {list.map((item, index) => {
          return (
            <ListItem key={index}>
              <img alt='' className='pic' src={item.get('imgUrl')} />
              <ListInfo>
                <h3 className='title'>{item.get('title')}</h3>
                <p className='desc'>{item.get('desc')}</p>
              </ListInfo>
            </ListItem>
          )
        })}
        <LoadMore onClick={() => getMoreList(page)}>更多文字</LoadMore>
      </div>
    )
  }
}
const mapState = (state) => ({
  list: state.getIn(['homeReducer', 'articleList']),
  page: state.getIn(['homeReducer', 'articlePage'])
});

const mapDispatch = (dispatch) => ({
  getMoreList(page) {
    dispatch(actionCreators.getMoreList(page))
  }
})

export default connect(mapState, mapDispatch)(List);