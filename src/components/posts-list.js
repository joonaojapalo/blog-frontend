import React, { Component } from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'


class Post extends Component {

    static propTypes = {
        onEditPost: PropTypes.func
    }

    onClick = e => {
        let {post, onEditPost} = this.props
        onEditPost(post.id)
    }

    render() {
        let {post} = this.props

        return (
        <div className='list-item'>
            <div className='container'>
            <div className='col-5'>
                <b>{post.title}</b>
                <br/>
                <small className='text-gray'>{moment(post.created).fromNow()}</small>
            </div>
            <div className='col-1'>
                <button className='btn btn-sm' onClick={this.onClick}>
                Edit
                </button>
            </div>
            </div>
        </div>
        )
    }
}

const PostsList = (props) => (
  <div className={props.class||''}>
    {props.posts.map(post => <Post key={`post-${post.id}`} post={post} onEditPost={props.onEditPost} />)}
  </div>
)

export default PostsList
