import React from 'react'
import { Link } from 'react-router-dom'
import { siteConfig } from '../data/content'

const Contact = () => {
  return (
    <article className="content-page">
      <Link to="/" className="back-link">← Back to Terminal</Link>
      <header className="page-header">
        <h1>{siteConfig.contact.title}</h1>
      </header>
      <div className="page-content">
        {siteConfig.contact.content.map((paragraph, index) => (
          <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
        ))}
      </div>
    </article>
  )
}

export default Contact