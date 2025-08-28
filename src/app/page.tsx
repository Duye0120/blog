import { Layout } from '@/components/Layout'
import { HomeContent } from '@/components/HomeContent'
import { getNotionPosts } from '@/lib/notion'

export default async function Home() {
  const posts = await getNotionPosts()

  return (
    <Layout>
      <HomeContent posts={posts} />
    </Layout>
  )
}
