# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev` (with Turbopack enabled)
- **Build for production**: `npm run build` (with Turbopack enabled)  
- **Start production server**: `npm start`
- **Lint code**: `npm run lint` (uses ESLint)

## Project Architecture

This is a Next.js 15 blog application using the App Router pattern with TypeScript and MDX for content management.

### Key Technologies
- **Next.js 15** with App Router and Turbopack
- **TypeScript** for type safety
- **MDX** for blog content (markdown with JSX components)
- **Tailwind CSS v4** with typography plugin for styling
- **Gray Matter** for frontmatter parsing

### Directory Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with metadata and fonts
│   ├── page.tsx           # Home page (lists all posts)
│   ├── about/             # About page
│   └── posts/[slug]/      # Dynamic blog post pages
├── components/            # React components
│   ├── Layout.tsx         # Main page layout wrapper
│   ├── HomeContent.tsx    # Home page content component
│   ├── PostCard.tsx       # Blog post preview cards
│   ├── Callout.tsx        # MDX callout component
│   └── ...               # Other UI components
├── lib/
│   └── blog.ts           # Blog utilities (getAllPosts, getPostBySlug)
└── types/
    └── blog.ts           # TypeScript interfaces

posts/                    # MDX blog posts directory
mdx-components.tsx       # Global MDX component configuration
```

### Blog Post System

Blog posts are `.mdx` files in the `posts/` directory with frontmatter:

```yaml
---
title: "Post Title"
date: "2025-01-27"
excerpt: "Post summary"
tags: ["tag1", "tag2"]
author: "Author Name"
published: true
---
```

Key functions in `src/lib/blog.ts`:
- `getAllPosts()` - Returns all published posts sorted by date
- `getPostBySlug(slug)` - Gets single post by filename slug
- `getAllTags()` - Returns unique tags across all posts

### MDX Configuration

Custom MDX components are registered in `mdx-components.tsx` and include:
- Custom styling for headings, paragraphs, code blocks
- `Callout` component for info boxes
- Typography optimized for readability

### Styling System

Uses Tailwind CSS v4 with:
- Custom color variables (`--background`, `--foreground`)  
- Typography plugin with custom prose styles
- Responsive design patterns
- Content paths configured for all component directories and MDX files

### Content Management

- Posts automatically appear on home page when added to `posts/` directory
- Reading time calculated automatically (1000 chars ≈ 1 minute)
- Draft posts can be hidden with `published: false`
- Tags system for categorization

## Development Notes

- Uses Geist font family (Sans and Mono variants)
- Chinese language support (`lang="zh-CN"`)
- SEO optimized with Open Graph and Twitter Card metadata
- Static generation for blog posts using Next.js App Router