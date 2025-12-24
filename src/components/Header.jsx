import React from 'react'
import { siteConfig } from '../data/content'

const Header = () => {
  return (
    <header className="blog-header">
      <h1>{siteConfig.header.title}</h1>
      <div className="terminal-line">
        <span className="prompt">{siteConfig.header.prompt}</span>
        <span className="command">{siteConfig.header.terminalCommand}</span>
      </div>
    </header>
  )
}

export default Header