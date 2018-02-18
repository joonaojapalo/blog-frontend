import React, { Component } from 'react'
import PropTypes from "prop-types"

import { Field, reduxForm } from 'redux-form'


class PostEditor extends Component {

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired
  }

  render () {
    let {handleSubmit, initialValues} = this.props

    return (
    <form onSubmit={handleSubmit}>
      <div className={this.props.class}>
        <Field name="id" component="input" type="hidden"/>
        <Field name="title" component="input" type="text" placeholder="Post title..."/>
        <br/>
        <Field name="body" component="textarea" type="text" placeholder="Write (Markdown enabled)..."/>
        <br/>
        <button className="btn" type="submit">Save {(initialValues.id?'update':'save')}</button>
      </div>
    </form>
    )
  }
}

export default reduxForm({
  form: 'postEditor',
  enableReinitialize: true
})(PostEditor)
