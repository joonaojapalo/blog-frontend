import React from 'react'

export default ({children, title, subtitle}) => (
  <div className='App'>
    <header className='App-header'>
      <h1 className='App-title'>{title}</h1>
      {subtitle?<h2 className="App-subtitle">{subtitle}</h2>:null}
    </header>
    {children}
  </div>
)