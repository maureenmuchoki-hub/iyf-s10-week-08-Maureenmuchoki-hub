import { useState } from 'react'

function PostCard({ title, excerpt, author, date }) {
  const [likes, setLikes] = useState(0)

  return (
    <article>
      <h3>{title}</h3>
      <p>{excerpt}</p>
      <div>
        <span>By {author}</span>
        <span> · {date}</span>
      </div>
      <button onClick={() => setLikes(likes + 1)}>
        ❤️ {likes}
      </button>
    </article>
  )
}

export default PostCard