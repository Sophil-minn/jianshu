import React, { Component } from 'react'
import { TopicWrapper, TopicItem } from '../style'
class Topic extends Component {
  render() {
    return (
      <TopicWrapper>
        <TopicItem>
          <img className="topic-pic" src="https://upload.jianshu.io/users/upload_avatars/7663825/7c28763e-002b-4e89-8dea-5b8da210ef2c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt="" />
          社会热点
        </TopicItem>

      </TopicWrapper>
    )
  }
}
export default Topic;