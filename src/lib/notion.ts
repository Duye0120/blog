import { Client } from '@notionhq/client'
import { NotionAPI } from 'notion-client'
import type { ExtendedRecordMap } from 'notion-types'

// Read env with safe fallbacks
const NOTION_TOKEN = process?.env?.NOTION_TOKEN
const NOTION_DATABASE_ID = process?.env?.NOTION_DATABASE_ID

// Official Notion SDK: query database by slug
const notion = new Client({ auth: NOTION_TOKEN })

// Unofficial APIs for recordMap fetching
const notionApi = new NotionAPI({ authToken: NOTION_TOKEN })

export interface NotionPageMeta {
  id: string
  slug?: string
  title?: string
  date?: string
  tags?: string[]
}

// Lightweight list item for homepage rendering
export interface NotionListItem {
  slug: string
  title: string
  date?: string
  tags?: string[]
  readTime?: number
}

// List posts from a Notion database, mapping fields used by HomeContent
export async function getNotionPosts(): Promise<NotionListItem[]> {
  if (!NOTION_DATABASE_ID) return []

  const resp = await notion.databases.query({
    database_id: NOTION_DATABASE_ID,
    sorts: [
      { property: 'date', direction: 'descending' },
    ],
    // Only include published posts
    filter: { property: 'status', select: { equals: 'Published' } },
    page_size: 100,
  })

  const items: NotionListItem[] = (resp?.results ?? []).map((page: any) => {
    const props = page?.properties ?? {}
    // Some databases use default 'Name' title, others rename to 'title'. Support both.
    const title = props?.Name?.title?.[0]?.plain_text ?? props?.title?.title?.[0]?.plain_text
    const slug = props?.slug?.rich_text?.[0]?.plain_text
    const date = props?.date?.date?.start
    const tags: string[] = (props?.tags?.multi_select ?? []).map((t: any) => t?.name).filter(Boolean)
    const readTimeProp = props?.readTime?.number

    return {
      slug: slug ?? page?.id,
      title: title ?? 'Untitled',
      date: date ?? undefined,
      tags,
      readTime: typeof readTimeProp === 'number' ? readTimeProp : undefined,
    }
  })

  return items
}

// Get pageId by slug from a database. Expects a text property `slug`.
export async function getPageIdBySlug(slug: string): Promise<string | null> {
  if (!NOTION_DATABASE_ID) return null

  const resp = await notion.databases.query({
    database_id: NOTION_DATABASE_ID,
    filter: {
      property: 'slug',
      rich_text: { equals: slug },
    },
    page_size: 1,
  })

  const page = resp?.results?.[0] as any
  return page?.id ?? null
}

export async function getRecordMapByPageId(pageId: string): Promise<ExtendedRecordMap | null> {
  try {
    const recordMap = await notionApi.getPage(pageId)
    return (recordMap as ExtendedRecordMap) ?? null
  } catch (e) {
    console.error('Failed to fetch Notion recordMap', e)
    return null
  }
}

// Optional: format meta fields from a page (if needed later)
export async function getPageMetaById(pageId: string): Promise<NotionPageMeta | null> {
  try {
    const page = await notion.pages.retrieve({ page_id: pageId as string }) as any
    const props = page?.properties
    const title = props?.Name?.title?.[0]?.plain_text ?? props?.title?.title?.[0]?.plain_text
    const slug = props?.slug?.rich_text?.[0]?.plain_text
    const date = props?.date?.date?.start

    // tags could be multi_select or relation; handle common multi_select
    const tags: string[] = (props?.tags?.multi_select ?? []).map((t: any) => t?.name).filter(Boolean)

    return {
      id: pageId,
      slug: slug ?? undefined,
      title: title ?? undefined,
      date: date ?? undefined,
      tags,
    }
  } catch (e) {
    console.warn('getPageMetaById failed', e)
    return null
  }
}
