// Site content configuration
// Edit this file to customize your blog

export const siteConfig = {
  // Header configuration
  header: {
    title: "MANGO'S BLOG",
    terminalCommand: "echo \"Welcome!\"",
    prompt: "Mango@Austral:~$"
  },

  // Homepage introduction section
  intro: {
    title: "// Who are you?",
    content: [
      "I'm Mango — I post-train models at dphn.ai, coooonsume alarming quantities of yuri content, and maintain 6AM-12PM uptime like a based chinese male working in the sweatshops. Am Quebec-based, human (allegedly).",
      "I train assistant models for chat, steerability, and writing. The goal is to capture Claude's magic (that pretrain creative writing sauce) while keeping the models de-aligned and neutral. Read my thoughts on \"uncensored\" models [here](link).",
      "Currently, I am getting competent at RL, rekindling my 12-year-old writer self, and watching Watatabe. For code I use GLM4.6 because generous limits and Opus 4.5 becuz it's cracked.",
      "Most of my work is published under Dphn, Read my latest and greatest bangers here: <a href=\"https://blog.dphn.ai\" target=\"_blank\" rel=\"noopener noreferrer\">https://blog.dphn.ai</a>",
      "This blog is more for personal/small projects that aren't worthy of being posted under Dphn, but I still feel like writing."
    ]
  },

  // About section content
  about: {
    title: "// ABOUT_MANGO",
    content: [
      "About section coming soon!"
    ]
  },

  // Contact section content
  contact: {
    title: "// CONTACT_TERMINAL",
    content: [
      "WandB for my active runs: <a href=\"https://wandb.ai/deltavector\" target=\"_blank\" rel=\"noopener noreferrer\">deltavector</a>.",
      "Discord if you have something to yell at me about: <strong>violentpinkflamingo</strong>.",
      "HF hosts my models: <a href=\"https://huggingface.co/Delta-Vector\" target=\"_blank\" rel=\"noopener noreferrer\">Delta-Vector</a>.",
      "Chub keeps old character cards: <a href=\"https://chub.ai/users/MangyMango\" target=\"_blank\" rel=\"noopener noreferrer\">MangyMango</a>."
    ]
  },

  // Blog posts section
  posts: {
    title: "Recent blogs"
  },

  // Footer configuration
  footer: {
    text: "",
    engine: "",
    copyright: ""
  },

  // Navigation items
  navigation: [
    { name: "HOME", path: "/", type: "link" },
    { name: "ABOUT", path: "/about", type: "link" },
    { name: "BLOG", path: "/blog", type: "link" },
    { name: "CONTACT", path: "/contact", type: "link" }
  ]
}

// Blog posts configuration
// Edit this array to add/remove/modify posts
export const blogPosts = [
  {
    slug: 'hello-cyberspace',
    title: 'Hello, Cyberspace',
    excerpt: 'First transmission from the digital frontier. Exploring the boundaries between human thought and machine consciousness.',
    image: 'https://files.catbox.moe/dktwao.jpg',
    content: `
      <p><strong>// INITIALIZING_NEURAL_INTERFACE...</strong></p>
      <p>Welcome to the first transmission from this corner of the digital frontier. The connection is stable, the signal is clear, and the matrix is ready to receive.</p>
      <p>In this space, we explore the liminal boundaries between human thought and machine consciousness, between organic creativity and silicon logic. Here, code becomes poetry, and poetry becomes protocol.</p>
      <h2>What to Expect</h2>
      <p>This blog will serve as a repository for thoughts on:</p>
      <ul>
        <li>Cyberpunk aesthetics and retro computing</li>
        <li>Minimalist design philosophies</li>
        <li>The intersection of art and technology</li>
        <li>Digital archaeology and forgotten systems</li>
        <li>The beauty in obsolete technology</li>
      </ul>
      <blockquote>
        The future is already here — it's just not evenly distributed.
      </blockquote>
      <p>Join me as we navigate the data streams, decode the hidden messages in the noise, and find meaning in the machine's dreams.</p>
      <p><strong>// TRANSMISSION_COMPLETE</strong></p>
    `,
    date: '2024-12-01',
    tags: ['intro', 'cyberpunk', 'meta'],
    featured: true
  },
  {
    slug: 'the-echo-of-dialup',
    title: 'The Echo of Dial-Up',
    excerpt: 'Remembering the symphony of connectivity that defined a generation of early internet explorers.',
    image: 'https://files.catbox.moe/dktwao.jpg',
    content: `
      <p><strong>// CONNECTING_TO_ARCHIVE...</strong></p>
      <p>There was a time when connecting to the internet was a ritual. A sacred ceremony performed with patience and anticipation, accompanied by a symphony of screeches, buzzes, and static that somehow promised digital salvation.</p>
      <p>Today, we click and we're there. Instantaneous. Invisible. But we lost something in that transition — the poetry of the process, the anticipation of the arrival, the tactile sense of journeying into a new realm.</p>
      <h2>The Digital Handshake</h2>
      <p>The dial-up modem handshake was more than just technical negotiation; it was a <em>digital handshake</em>, a conversation between machines that spoke in tones and frequencies. Each stage of that handshake had meaning:</p>
      <ul>
        <li>The initial dial tone — the void before connection</li>
        <li>The first negotiation — establishing common ground</li>
        <li>The escalating chorus — reaching for understanding</li>
        <li>The final silence — union achieved</li>
      </ul>
      <p>We replaced this beautiful, human-paced ritual with cold efficiency. We traded anticipation for instant gratification. We exchanged the journey for the destination.</p>
      <blockquote>
        In our rush for speed, we forgot that sometimes the beauty is in the wait.
      </blockquote>
      <h2>Finding the Poetry Again</h2>
      <p>Perhaps there's a way to reclaim that sense of digital ritual. Not through artificially slowing our connections, but through being more mindful of the magic that still happens every time we reach across the digital void.</p>
      <p>Every packet of data that travels through fiber optic cables is a small miracle. Every server response is a conversation across impossible distances. We're still performing digital handshakes — they've just become invisible.</p>
      <p><strong>// ARCHIVE_ACCESS_COMPLETE</strong></p>
    `,
    date: '2024-11-28',
    tags: ['retro', 'internet', 'nostalgia'],
    featured: true
  },
  {
    slug: 'minimalism-in-maximal-world',
    title: 'Minimalism in a Maximal World',
    excerpt: 'Finding clarity through reduction when everything screams for attention.',
    image: 'https://files.catbox.moe/dktwao.jpg',
    content: `
      <p><strong>// SIMPLIFYING_INTERFACE...</strong></p>
      <p>We live in an age of digital maximalism. Infinite scroll. Endless feeds. Constant notifications. The world screams for our attention, and we, in turn, scream back with more content, more graphics, more features.</p>
      <p>But there's power in reduction. Clarity in constraint. Beauty in simplicity.</p>
      <h2>The Philosophy of Less</h2>
      <p>Minimalism isn't about emptiness — it's about <em>intention</em>. Every pixel, every word, every interaction exists because it must, not because it can.</p>
      <p>In digital design, this means:</p>
      <ul>
        <li>Every element serves a purpose</li>
        <li>White space is a feature, not empty space</li>
        <li>Typography carries emotion without decoration</li>
        <li>Color is used deliberately, not abundantly</li>
      </ul>
      <h2>The Terminal Aesthetic</h2>
      <p>The command line interface remains the purest form of digital minimalism. Black background. Monospace text. No gradients, no animations, no chrome. Just raw information, unfiltered and direct.</p>
      <p>There's honesty in this simplicity. The terminal doesn't pretend to be anything other than what it is — a direct channel between human intent and machine execution.</p>
      <blockquote>
        Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.
      </blockquote>
      <h2>Applying Minimalism Beyond Code</h2>
      <p>This philosophy extends beyond digital design. In writing, it means every word earns its place. In architecture, it means every structural element is visible and necessary. In life, it means owning things that add value and removing everything that creates noise.</p>
      <p>The minimal path isn't always the easiest, but it's always the most honest.</p>
      <p><strong>// SIMPLIFICATION_COMPLETE</strong></p>
    `,
    date: '2024-11-25',
    tags: ['minimalism', 'design', 'philosophy'],
    featured: false
  }
]

// Helper function to get featured posts
export const getFeaturedPosts = () => {
  return blogPosts.filter(post => post.featured)
}

// Helper function to get all posts sorted by date
export const getAllPosts = () => {
  return [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date))
}

// Helper function to get post by slug
export const getPostBySlug = (slug) => {
  return blogPosts.find(post => post.slug === slug)
}