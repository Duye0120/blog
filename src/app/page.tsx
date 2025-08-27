import { Layout } from '@/components/Layout'
import { getAllPosts } from '@/lib/blog'
import { HomeContent } from '@/components/HomeContent'

export default function Home() {
  const posts = getAllPosts()

  return (
    <Layout>
      <HomeContent posts={posts} />
    </Layout>
  )
}
