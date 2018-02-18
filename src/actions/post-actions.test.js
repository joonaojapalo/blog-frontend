import * as actions from './post-actions'
import * as types from '../constants/action-types'

describe('Post action creator', () => {
  describe('addPost()', () => {
    it('should create an ADD_POST action', () => {
      expect(actions.addPost('Bob', {id: 1, title: 'Foo title', body: 'Bar body', created: '2018-01-01 01:01:01'})).toEqual({
        type: types.ADD_POST,
        username: 'Bob',
        post: {id: 1, title: 'Foo title', body: 'Bar body', created: '2018-01-01 01:01:01'}
      })
    })
  })

  describe('addPosts()', () => {
    it('should create an ADD_POSTS action', () => {
      expect(actions.addPosts('Bob', [{id: 1, title: 'Foo title', body: 'Bar body', created: '2018-01-01 01:01:01'}])).toEqual({
        type: types.ADD_POSTS,
        username: 'Bob',
        posts: [{id: 1, title: 'Foo title', body: 'Bar body', created: '2018-01-01 01:01:01'}]
      })
    })
  })
})
