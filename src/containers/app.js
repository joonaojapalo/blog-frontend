import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import _ from 'lodash'

import './app.css'
import * as postActions from '../actions/post-actions'
import Layout from '../components/layout'
import PostsList from '../components/posts-list'
import PostEditor from '../components/post-editor'


const editorPropTypes = {
  id: PropTypes.number,
  post: PropTypes.object
}

const AppState = ({appState}) => (
  <span>Init state: <b>{appState.initState}</b></span>
)

class App extends Component {

  static propTypes = {
    user: PropTypes.object.isRequired,
    posts: PropTypes.array.isRequired,
    editor: PropTypes.shape(editorPropTypes).isRequired,
    actions: PropTypes.object.isRequired
  }

  savePost = values => {
    let {actions, user, editor} = this.props

    // values from redux-form
    let {title, body} = values
    actions.requestCreteOrUpdatePost(user.username, editor.id, title, body)
  }

  render () {
    let {user, posts, editor, actions} = this.props
    let formInit = {
      id: editor.post.id,
      title: editor.post.title || '',
      body: editor.post.body || ''
    }

    return (
      <Layout title='Blog Author'>
        <div className='container'>
          <div className='col-2'>
            <PostsList class='panel' posts={posts} onEditPost={actions.editPost} />
          </div>
          <div className='col-4'>
            <PostEditor
              onSubmit={this.savePost}
              class='panel'
              username={user.username}
              initialValues={formInit} />
            <AppState {...this.props}/>
          </div>
        </div>
      </Layout>
    )
  }
}


const mapStateToProps = state => {
  let editId = state.postEditor.postId

  return {
    posts: _.values(state.posts),
    user: state.user,
    editor: {
      id: editId,
      post: _.get(state.posts, editId, {})
    },
    appState: state.appState
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(postActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
