import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { Layout } from '@/components/Layout'
import { getPostBySlug, getAllPosts } from '@/lib/blog'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { useMDXComponents } from '../../../../mdx-components'

interface PostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  
  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const components = useMDXComponents({})

  return (
    <Layout>
      <article className="max-w-4xl mx-auto">
        <header className="mb-8 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-gray-900">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('zh-CN', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span>by {post.author}</span>
              <span>阅读时间 {post.readTime} 分钟</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        <div className="prose prose-lg prose-slate dark:prose-invert max-w-none
                        prose-a:text-blue-600 dark:prose-a:text-blue-400 hover:prose-a:underline
                        prose-pre:shadow-sm prose-pre:border prose-pre:border-gray-800/50
                        prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded">
          <MDXRemote source={post.content} components={components} />
        </div>
      </article>
    </Layout>
  )
}
