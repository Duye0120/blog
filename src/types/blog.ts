export interface BlogPost {
  slug: string
  title: string
  date: string
  author: string
  excerpt: string
  content: string
  tags: string[]
  readTime: number
  coverImage?: string
  featured?: boolean
}

export interface BlogMeta {
  title: string
  date: string
  excerpt: string
  tags: string[]
  author: string
  published: boolean
}
