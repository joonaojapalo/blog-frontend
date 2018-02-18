import React from 'react'
import markdown from 'markdown'

export default PostViewer = ({post}) => (
  <div className='container'>
    <div className='col-6'>
      {markdown.toHTML(post.body)}
    </div>
  </div>
)
