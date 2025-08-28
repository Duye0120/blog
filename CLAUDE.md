# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev` (with Turbopack enabled)
- **Build for production**: `npm run build` (with Turbopack enabled)  
- **Start production server**: `npm start`
- **Lint code**: `npm run lint` (uses ESLint)

## Project Architecture

This is a Next.js 15 blog application using the App Router pattern with TypeScript and Notion as the content management system.

### Key Technologies
- **Next.js 15** with App Router and Turbopack
- **TypeScript** for type safety
- **Notion API** for content management via `@notionhq/client` and `react-notion-x`
- **Tailwind CSS v4** with typography plugin for styling
- **react-notion-x** for rendering Notion content with full block support

### Content Architecture

The blog uses Notion as a headless CMS with a dual-API approach:

1. **Official Notion SDK** (`@notionhq/client`) - Used for querying the database to get post lists and metadata
2. **Unofficial Notion API** (`notion-client`) - Used to fetch full page content as ExtendedRecordMap for rendering

### Core Data Flow

```
Notion Database → getNotionPosts() → Home page listing
Notion Page → getPageIdBySlug() → getRecordMapByPageId() → NotionContent rendering
```

Key functions in `src/lib/notion.ts`:
- `getNotionPosts()` - Fetches published posts from Notion database for homepage
- `getPageIdBySlug(slug)` - Maps URL slug to Notion page ID
- `getRecordMapByPageId(pageId)` - Fetches full page content for rendering
- `getPageMetaById(pageId)` - Gets page metadata for SEO

### Notion Database Schema

Expected properties in the Notion database:
- **slug** (Rich Text) - URL slug for the post
- **Name** or **title** (Title) - Post title
- **date** (Date) - Publication date
- **tags** (Multi-select) - Post tags/categories
- **status** (Select) - Must be "Published" to appear on site
- **readTime** (Number, optional) - Reading time in minutes

### Directory Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with metadata and fonts
│   ├── page.tsx           # Home page (fetches posts from Notion)
│   ├── about/             # About page
│   └── posts/[slug]/      # Dynamic blog post pages
├── components/            # React components
│   ├── Layout.tsx         # Main page layout wrapper
│   ├── HomeContent.tsx    # Home page content component
│   ├── NotionContent.tsx  # Notion page renderer wrapper
│   └── ...               # Other UI components
├── lib/
│   └── notion.ts         # Notion API utilities and data fetching
└── types/
    └── blog.ts           # TypeScript interfaces
```

### Environment Variables

Required for Notion integration:
- `NOTION_TOKEN` - Notion integration token with read access
- `NOTION_DATABASE_ID` - ID of the Notion database containing blog posts

### Content Rendering

The `NotionContent` component uses `react-notion-x` with these features:
- Dynamic imports to avoid SSR issues
- Support for code blocks with syntax highlighting
- Math equations via KaTeX
- PDF embedding
- Modal support for image previews
- Disabled full-page mode and header for embedding

### Styling System

Uses Tailwind CSS v4 with:
- Custom color variables (`--background`, `--foreground`)  
- Typography plugin with custom prose styles
- Responsive design patterns
- Chinese language support (`lang="zh-CN"`)

### Performance & Caching

- Static generation for blog posts using Next.js App Router
- ISR with 60-second revalidation on post pages
- Dynamic imports for heavy Notion rendering components
- SEO optimized with Open Graph and Twitter Card metadata

## Development Notes

- Content is managed entirely in Notion - no local files needed for posts
- The unofficial Notion API is required for full content rendering capabilities
- Font family: Geist (Sans and Mono variants)
- All Notion block types are supported through react-notion-x components