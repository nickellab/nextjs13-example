import { Metadata, NextPage } from 'next'
import Link from 'next/link'
import Button from '~/components/Button'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page on Next.js App Directory',
}

const Home: NextPage = () => {
  return (
    <main>
      <h1>Hello Next.js 13</h1>
      <Link href={`/nest`}>
        <Button>Go nest page</Button>
      </Link>
    </main>
  )
}

export default Home
