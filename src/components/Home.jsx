import React from 'react'
import { Link } from 'react-router-dom'
import { siteConfig, getAllPosts } from '../data/content'
import HomeImage from './HomeImage'

const Home = () => {
  const sortedPosts = getAllPosts()

  return (
    <>
      <HomeImage />

      <section className="blog-intro">
        <p><strong>{siteConfig.intro.title}</strong></p>
        {siteConfig.intro.content.map((paragraph, index) => (
          <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
        ))}
      </section>

      <hr />

      <section id="posts">
        <h2>{siteConfig.posts.title}</h2>
        <ul className="blog-posts" id="post-list">
          {sortedPosts.map(post => (
            <li key={post.slug}>
              <Link to={`/post/${post.slug}`}>
                {post.title}
              </Link>
              <div className="post-excerpt">{post.excerpt}</div>
              <time>{new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}</time>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default Home