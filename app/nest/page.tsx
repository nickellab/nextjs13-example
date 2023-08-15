import { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'
import Button from '~/components/Button'
import PostList from '~/features/post/PostList'
import UserList from '~/features/user/UserList'

export const metadata: Metadata = {
  title: 'Nest page',
  description: 'Nest depth page',
}

const NestPage = () => {
  return (
    <main>
      <Link href={`/`}>
        <Button>Back to Home</Button>
      </Link>
      <h1>Nest page</h1>
      <UserList />
      <PostList />
    </main>
  )
}

export default NestPage
