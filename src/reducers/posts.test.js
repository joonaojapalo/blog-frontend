import * as types from '../constants/action-types'
import postsReducer from '../reducers/posts'

describe('Reducer (posts)', () => {
  describe('action ADD_POST', () => {
    it('should add one post object into the state', () => {

      const action = {
        type: types.ADD_POST,
        username: 'Bob',
        id: 1,
        title: 'My first title',
        body: 'My body text.'
      }

      expect(postsReducer({}, action)).toEqual({1: {id: 1, title: 'My first title', body: 'My body text.'}})
    })
  })

  describe('action ADD_POSTS', () => {
    it('should add list of post objects into the state', () => {

      const action = {
        type: types.ADD_POSTS,
        username: 'Anna',
        posts: [
          {
            id: 1,
            title: 'My first title',
            body: 'My body text.'
          },
          {
            id: 2,
            title: 'My second  title',
            body: 'Second body text.'
          }
        ]
      }

      expect(postsReducer({}, action)).toEqual({
        1: {id: 1, title: 'My first title', body: 'My body text.'},
        2: {id: 2, title: 'My second  title', body: 'Second body text.'}
      })
    })
  })

  describe('action UPDATE_POST', () => {
    it('should modify existing post attributes', () => {
      const action = {
        type: types.UPDATE_POST,
        username: 'Anna',
        post: {
          id: 101,
          title: 'Second new title',
          body: 'Second new body.'
        }
      }

      const state0 = {
        100: {id: 100, title: 'First title', body: 'First body.'},
        101: {id: 101, title: 'Second title', body: 'Second body.'}
      }

      expect(postsReducer(state0, action)).toEqual({
        100: {id: 100, title: 'First title', body: 'First body.'},
        101: {id: 101, title: 'Second new title', body: 'Second new body.'}
      })
    })
  })
})
