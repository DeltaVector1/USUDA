import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { getPostBySlug } from '../data/content'

const BlogPost = ({ posts }) => {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) {
    return (
      <div className="post-not-found">
        <h2>404 // POST_NOT_FOUND</h2>
        <p>The requested transmission could not be located in the system.</p>
        <Link to="/" className="back-link">← Return to Terminal</Link>
      </div>
    )
  }

  return (
    <article className="blog-post">
      <Link to="/" className="back-link">← Back to Terminal</Link>
      <header className="post-header">
        <h1>{post.title}</h1>
        <div className="post-meta">
          <time>{new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}</time>
          {post.tags && (
            <div className="post-tags">
              {post.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          )}
        </div>
      </header>
      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  )
}

export default BlogPost