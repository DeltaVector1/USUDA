import React from 'react'
import { Link } from 'react-router-dom'
import { siteConfig, getAllPosts } from '../data/content'

const Blog = () => {
  const sortedPosts = getAllPosts()

  return (
    <article className="content-page">
      <Link to="/" className="back-link">← Back to Home</Link>
      <header className="page-header">
        <h1>All Blog Posts</h1>
      </header>
      <div className="page-content">
        <div className="blog-grid">
          {sortedPosts.map(post => (
            <div key={post.slug} className="blog-card">
              <div className="blog-card-image">
                <img
                  src={post.image || 'https://files.catbox.moe/dktwao.jpg'}
                  alt={post.title}
                  className="blog-thumbnail"
                />
              </div>
              <div className="blog-card-content">
                <Link to={`/post/${post.slug}`} className="blog-card-title">
                  {post.title}
                </Link>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                <time className="blog-card-date">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </time>
                {post.tags && (
                  <div className="blog-card-tags">
                    {post.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}

export default Blog