import React from 'react'
import { useLocation } from 'react-router-dom'
import { siteConfig } from '../data/content'

const DynamicHeader = () => {
  const location = useLocation()

  const getTerminalCommand = () => {
    switch(location.pathname) {
      case '/':
        return siteConfig.header.terminalCommand
      case '/about':
        return 'cd "About Me"'
      case '/contact':
        return 'cd "Contact"'
      case '/blog':
        return 'ls -la posts/'
      default:
        return siteConfig.header.terminalCommand
    }
  }

  return (
    <header className="blog-header">
      <h1>{siteConfig.header.title}</h1>
      <div className="terminal-line">
        <span className="prompt">{siteConfig.header.prompt}</span>
        <span className="command">{getTerminalCommand()}</span>
      </div>
    </header>
  )
}

export default DynamicHeader