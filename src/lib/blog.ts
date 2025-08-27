import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { BlogPost } from '@/types/blog'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getAllPosts(): BlogPost[] {
  // 如果 posts 目录不存在，返回空数组
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      // 计算阅读时间（假设每分钟阅读 200 字）
      const readTime = Math.ceil(content.length / 1000)

      return {
        slug,
        title: data.title || '',
        date: data.date || '',
        excerpt: data.excerpt || '',
        content,
        tags: data.tags || [],
        author: data.author || '博主',
        readTime,
        published: data.published !== false,
      } as BlogPost
    })
    .filter((post) => post.published)
    .sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1))

  return allPostsData
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    const readTime = Math.ceil(content.length / 1000)

    return {
      slug,
      title: data.title || '',
      date: data.date || '',
      excerpt: data.excerpt || '',
      content,
      tags: data.tags || [],
      author: data.author || '博主',
      readTime,
      published: data.published !== false,
    }
  } catch {
    return null
  }
}

export function getAllTags(): string[] {
  const posts = getAllPosts()
  const tags = new Set<string>()

  posts.forEach((post) => {
    post.tags.forEach((tag) => tags.add(tag))
  })

  return Array.from(tags).sort()
}
