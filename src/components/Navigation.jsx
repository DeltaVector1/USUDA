import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { siteConfig } from '../data/content'

const Navigation = () => {
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path ? 'active' : ''
  }

  const handleNavClick = (action) => {
    if (action === 'archive') {
      alert('Archive section coming soon!')
    }
  }

  return (
    <nav>
      <div className="nav-header">{siteConfig.navigation[0] ? "_NAVIGATION_" : "_NAVIGATION_"}</div>
      <p>
        {siteConfig.navigation.map((item, index) => {
          if (item.type === 'link') {
            return (
              <Link
                key={index}
                to={item.path}
                className={`nav-link ${isActive(item.path)}`}
              >
                {item.name}
              </Link>
            )
          } else if (item.type === 'action') {
            return (
              <span
                key={index}
                onClick={() => handleNavClick(item.action)}
                className="nav-link"
                style={{cursor: 'pointer'}}
              >
                {item.name}
              </span>
            )
          }
          return null
        })}
      </p>
    </nav>
  )
}

export default Navigation