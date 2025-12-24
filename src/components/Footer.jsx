import React from 'react'
import { siteConfig } from '../data/content'

const Footer = () => {
  return (
    <footer>
      <p>{siteConfig.footer.text} <span className="glow">{siteConfig.footer.engine}</span></p>
      <p>{siteConfig.footer.copyright}</p>
    </footer>
  )
}

export default Footer