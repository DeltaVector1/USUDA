import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/DynamicHeader'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Blog from './components/Blog'
import BlogPost from './components/BlogPost'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { blogPosts } from './data/content'

function App() {
  return (
    <div className="app">
      <Navigation />
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/post/:slug" element={<BlogPost posts={blogPosts} />} />
        </Routes>
        <Footer />
      </main>
    </div>
  )
}

export default App