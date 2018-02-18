import _ from 'lodash'
import React from 'react'
import Layout from './components/layout'
import PostViewer from '../components/post-viewer'

const Blog = ({user, post}) => (
  <Layout title={post.title} subtitle={user.username}>
    <PostViewer post={post} />
  </Layout>
)

const mapStateToProps = state => {
  let editId = state.postEditor.postId

  return {
    post: _.find(state.posts, post => post.id === state.postViewer.postId),
    user: state.user
  }
}

export default connect(
  mapStateToProps
)(App)
