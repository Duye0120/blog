import { notFound } from 'next/navigation'
import { Layout } from '@/components/Layout'
import { NotionContent } from '@/components/NotionContent'
import type { Metadata } from 'next'
import { getPageIdBySlug, getRecordMapByPageId, getPageMetaById } from '@/lib/notion'

export const revalidate = 60

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const pageId = await getPageIdBySlug(params.slug)
  if (!pageId) return { title: '未找到页面' }
  const meta = await getPageMetaById(pageId)
  return {
    title: meta?.title ?? params.slug,
    description: meta?.title ?? undefined,
  }
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const slug = params?.slug
  const pageId = await getPageIdBySlug(slug)

  if (!pageId) {
    notFound()
  }

  const recordMap = await getRecordMapByPageId(pageId!)
  if (!recordMap) {
    notFound()
  }

  return (
    <Layout>
      <article className="mx-auto">
        <div className="space-y-5 text-gray-700 dark:text-gray-300">
          <NotionContent recordMap={recordMap} />
        </div>
      </article>
    </Layout>
  )
}