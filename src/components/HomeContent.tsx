'use client'

import Link from 'next/link'
import { BlogPost } from '@/types/blog'

interface HomeContentProps {
  posts: BlogPost[]
}

export function HomeContent({ posts }: HomeContentProps) {
  const safePosts = posts ?? [];

  const postsByYear = safePosts.reduce((acc, post) => {
    const year = new Date(post.date).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {} as Record<number, BlogPost[]>);

  const sortedYears = Object.keys(postsByYear).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="py-10 sm:py-12">

      <div className="space-y-14 sm:space-y-16">
        {sortedYears.map(year => (
          <section key={year}>
            <h2 className="font-mono text-5xl md:text-6xl font-bold text-gray-200 dark:text-gray-800 select-none tracking-widest">{year}</h2>
            <ul className="mt-4 space-y-1">
              {postsByYear[Number(year)].map(post => (
                <li key={post.slug}>
                  <Link href={`/posts/${post.slug}`} className="block group">
                    <div className="flex items-center justify-between gap-4 px-2 py-2 rounded-md transition-colors">
                      <div className="flex items-center gap-3 min-w-0">
                        {post.tags?.[0] && (
                          <span className="inline-flex items-center rounded-full border border-gray-300/60 dark:border-gray-700/60 px-2 py-0.5 text-[10px] text-gray-400 dark:text-gray-500">
                            {post.tags?.[0]}
                          </span>
                        )}
                        <span className="truncate text-[16px] text-gray-500 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                          {post?.title ?? ''}
                        </span>
                      </div>
                      <time className="font-mono text-[11px] text-gray-400 dark:text-gray-500 flex-shrink-0 group-hover:text-gray-700 dark:group-hover:text-gray-300 self-center">
                        {post?.date ? new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: '2-digit' }) : ''}
                        {post?.readTime ? ` · ${post.readTime}min` : ''}
                      </time>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
