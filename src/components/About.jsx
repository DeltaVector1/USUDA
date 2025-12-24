import React from 'react'
import { Link } from 'react-router-dom'
import { siteConfig } from '../data/content'

const About = () => {
  return (
    <article className="content-page">
      <Link to="/" className="back-link">← Back to Terminal</Link>
      <header className="page-header">
        <h1>{siteConfig.about.title}</h1>
      </header>
      <div className="page-content">
        {siteConfig.about.content.map((paragraph, index) => (
          <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
        ))}
      </div>
    </article>
  )
}

export default About