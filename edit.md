# 📝 How to Edit Your Cyber Blog

## 🎯 Quick Edit Guide

Your blog content is now centrally managed in **one file**:

```
src/data/content.js
```

Open this file to customize everything about your blog!

---

## 🏠 Homepage Content

Edit these sections in `content.js`:

### Header & Terminal
```javascript
header: {
  title: "CYBER_BLOG",              // Main title
  terminalCommand: "welcome_to_the_matrix",  // Terminal command
  prompt: "user@cyber:~$"           // Terminal prompt
}
```

### Introduction Section
```javascript
intro: {
  title: "// SIGNAL_INJECTED...",    // Intro heading
  content: [
    "Your first paragraph here...",
    "Your second paragraph here...",
    "Add as many paragraphs as you want!"
  ]
}
```

### Navigation Menu
```javascript
navigation: [
  { name: "HOME", path: "/", type: "link" },
  { name: "ABOUT", action: "about", type: "action" },
  { name: "ARCHIVE", action: "archive", type: "action" },
  { name: "CONTACT", action: "contact", type: "action" }
]
```

---

## 📝 Blog Posts

### Adding a New Post
Add to the `blogPosts` array:

```javascript
{
  slug: 'your-post-url',
  title: 'Your Post Title',
  excerpt: 'Brief description for homepage',
  content: `
    <p>Your HTML content here!</p>
    <h2>Use HTML headings</h2>
    <p>You can use <strong>bold</strong>, <em>italics</em>, etc.</p>
    <ul>
      <li>List items work too</li>
    </ul>
  `,
  date: '2024-12-08',
  tags: ['tag1', 'tag2'],
  featured: true  // Show on homepage? true/false
}
```

### Post Fields Explained
- **slug**: URL-friendly post identifier (no spaces, use hyphens)
- **title**: Post title (displays on blog and post page)
- **excerpt**: Short description shown on homepage
- **content**: Full HTML content of your post
- **date**: Publication date (YYYY-MM-DD format)
- **tags**: Array of tags for categorization
- **featured**: Whether to highlight on homepage

### Managing Posts
- **To hide a post**: Set `featured: false`
- **To delete a post**: Remove the entire object from the array
- **To reorder posts**: Change the date (newer dates appear first)

---

## 🎨 Styling Tips

### Writing Content
- Use proper HTML tags (`<p>`, `<h2>`, `<h3>`, `<ul>`, `<li>`, etc.)
- Use `<strong>` for bold text
- Use `<blockquote>` for quotes
- Use `<em>` for italics

### Example Post Content
```javascript
content: `
  <p><strong>// POST_TITLE_HERE...</strong></p>
  <p>Your introduction paragraph here.</p>

  <h2>Main Section</h2>
  <p>Your main content here.</p>

  <blockquote>
    An inspiring quote here.
  </blockquote>

  <ul>
    <li>Point one</li>
    <li>Point two</li>
  </ul>

  <p><strong>// END_TRANSMISSION</strong></p>
`
```

---

## 🔄 How Changes Appear

1. **Save the file** after making changes
2. **Refresh your browser** - changes appear instantly!
3. **No need to restart** the development server

---

## 🚨 Important Notes

- **Use valid HTML** in content fields
- **Escape quotes** properly in JavaScript strings
- **Keep slug unique** - don't duplicate slugs
- **Date format** must be YYYY-MM-DD
- **Backup your file** before major changes

---

## 🎯 Quick Start

1. Open `src/data/content.js`
2. Edit the `intro.content` array to change homepage text
3. Add/edit posts in the `blogPosts` array
4. Save and refresh your browser

That's it! Your cyber blog is now fully customizable through one simple file.