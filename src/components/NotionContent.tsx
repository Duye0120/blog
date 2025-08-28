"use client"

import dynamic from 'next/dynamic'
import React from 'react'
import type { ExtendedRecordMap } from 'notion-types'

// 动态导入避免 RSC/SSR 问题
const NotionRenderer = dynamic(
  () => import('react-notion-x').then(m => m.NotionRenderer),
  { ssr: false }
)

// 第三方组件（代码高亮、集合、公式、PDF、图片预览等）
const Code = dynamic(() => import('react-notion-x/build/third-party/code').then(m => m.Code), { ssr: false })
const Collection = dynamic(() => import('react-notion-x/build/third-party/collection').then(m => m.Collection), { ssr: false })
const Equation = dynamic(() => import('react-notion-x/build/third-party/equation').then(m => m.Equation), { ssr: false })
const Pdf = dynamic(() => import('react-notion-x/build/third-party/pdf').then(m => m.Pdf), { ssr: false })
const Modal = dynamic(() => import('react-notion-x/build/third-party/modal').then(m => m.Modal), { ssr: false })

interface NotionContentProps {
  recordMap: ExtendedRecordMap
}

export function NotionContent({ recordMap }: NotionContentProps) {
  return (
    <NotionRenderer
      recordMap={recordMap}
      fullPage={false}
      disableHeader
      className="notion-custom"
      components={{
        Code,
        // Collection,
        Equation,
        Modal,
        Pdf,
      }}
    />
  )
}
