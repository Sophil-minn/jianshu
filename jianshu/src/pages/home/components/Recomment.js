import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { RecommendWrapper, RecommendItem } from '../style';
class Recomment extends PureComponent {
  render() {
    return (
      <RecommendWrapper>
        {
          this.props.list.map((item, index) => {
            return (
              <Link key={index} to={'/a/' + item.get('id')}>
                <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')} />
              </Link>
            )
          })
        }
      </RecommendWrapper>
    )
  }
}
const mapState = (state) => ({
  list: state.getIn(['homeReducer', 'recommendList'])
})

export default connect(mapState, null)(Recomment);