import type { MDXComponents } from 'mdx/types'
import { Callout } from './src/components/Callout'
import CodeBlock from './src/components/CodeBlock'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // 自定义 MDX 组件
    Callout,
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold mb-6 text-gray-900">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold mb-4 mt-8 text-gray-800">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-medium mb-3 mt-6 text-gray-800">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="mb-4 leading-7 text-gray-700">{children}</p>
    ),
    code: ({ children }) => (
      <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800 dark:text-gray-200">
        {children}
      </code>
    ),
    // 将三引号代码块映射到 Shiki 渲染
    pre: ({ children }: any) => {
      const child = Array.isArray(children) ? children?.[0] : children
      const props = child?.props ?? {}
      const className: string = props?.className ?? ''
      const langMatch = className.match(/language-([\w-]+)/)
      const lang = (langMatch?.[1] ?? 'plaintext') as string
      const code = typeof props?.children === 'string' ? props.children : ''

      if (code) {
        return <CodeBlock code={code} lang={lang} />
      }
      // 回退：保留原样式
      return (
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">{children}</pre>
      )
    },
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 my-4 italic text-gray-600">
        {children}
      </blockquote>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="leading-7">{children}</li>,
    ...components,
  }
}
