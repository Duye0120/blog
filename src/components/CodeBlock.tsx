import React from 'react'
import { codeToHtml } from 'shiki'

interface CodeBlockProps {
  code: string
  lang?: string
}

// Server Component: render highlighted HTML using Shiki
export default async function CodeBlock({ code, lang }: CodeBlockProps) {
  const html = await codeToHtml(code, {
    lang: (lang || 'plaintext') as any,
    theme: 'github-dark',
  })

  return (
    <div className="not-prose overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm my-4">
      <div
        className="[&_pre]:m-0 [&_pre]:p-4 [&_code]:text-sm"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
}
