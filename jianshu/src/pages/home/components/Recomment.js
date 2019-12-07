import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import { RecommendWrapper, RecommendItem } from '../style';
class Recomment extends PureComponent {
  render() {
    return (
      <RecommendWrapper>
        {
          this.props.list.map((item) => {
            return <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')} />
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