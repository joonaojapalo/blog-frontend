import React from 'react';
import ReactDOM from 'react-dom';
import PostEditor from './post-editor';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PostEditor username="Bob" title="Test title" body="Body text." addPost={(username, id, title, body) => {}}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
