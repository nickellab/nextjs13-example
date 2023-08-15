'use client'

import { useEffect, useState } from 'react'

type Post = {
  userId: number
  id: number
  title: string
  body: string
}

const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts: Post[] = await res.json()

  return posts
}

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    const fn = async () => {
      setPosts(await fetchPosts())
    }
    fn()
  }, [])

  return (
    <div>
      <h2 className='mt-4 text-lg font-bold'>Post list</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default PostList
