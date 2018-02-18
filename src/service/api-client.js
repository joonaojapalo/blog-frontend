const getAuthToken = ({username, token}) => btoa(`${username}:${token}`)
const getAuthHeader = (authToken) => ({'Authorization': `Basic ${authToken}`})

const req = (method, url, body, auth=null) => {

  let headers = {
    'Content-Type': 'application/json'
  }

  // apply auth token
  if (auth !== null) {
    headers = {
      ...headers,
      ...getAuthHeader(getAuthToken(auth))
    }
  }

  return fetch(url, {
    'method': method,
    'headers': new Headers(headers),
    'body': JSON.stringify(body)
  })
}

/* convenience functions */
export const get = req.bind(req, 'GET')
export const post = req.bind(req, 'POST')
export const put = req.bind(req, 'PUT')
export const del = req.bind(req, 'DELETE')

export default class Api {

  constructor (baseUrl) {
    this.baseUrl = baseUrl
  }

  fetchJson (method, endpoint, body) {
    return req(method, `${this.baseUrl}${endpoint}`, body).then(resp => resp.json())
  }

  readUsers () {
    return this.fetchJson('GET', '/users')
  }

  readUser (userId) {
    return this.fetchJson('GET', `/users/${userId}`)
  }

  createUser(username, email) {
    return this.fetchJson('POST', '/users', {})
  }

  readPosts(username) {
    return  this.fetchJson('GET', `/users/${username}/posts`)
  }

  createPost(username, title, body) {
    return this.fetchJson('POST', `/users/${username}/posts`, {title, body})
  }

  updatePost(username, id, title, body) {
    return this.fetchJson('PUT', `/posts/${id}`, {title, body})
  }

  createComment(postId, authorName, body) {
    return this.fetchJson('POST', `/posts/${postId}/comments`, {authorName, body})
  }
}