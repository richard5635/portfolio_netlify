import React, { Fragment } from 'react'
import RelatedPosts from './RelatedPosts'
import { Text } from './Commons'
import Spacer from './Spacer/Spacer'

class PrevNextPost extends React.Component {
  render() {
    const { previous, next } = this.props
    const articles = [previous, next]
      .filter(i => i)
      .map(item => ({ node: item }))

    return (
      <Fragment>
        <Spacer />
        <Text>Continue to next project</Text>
        <RelatedPosts posts={articles} />
      </Fragment>
    )
  }
}

export default PrevNextPost
