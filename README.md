# 我的个人博客

这是一个使用 Next.js 14 + TypeScript + MDX 构建的现代化个人博客。

## 🚀 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS + @tailwindcss/typography
- **内容管理**: MDX (Markdown + JSX)
- **包管理**: npm
- **代码质量**: ESLint

## 📁 项目结构

```
blog/
├── components/           # React 组件
│   ├── Callout.tsx      # 提示框组件
│   ├── Layout.tsx       # 页面布局
│   └── PostCard.tsx     # 文章卡片
├── lib/                 # 工具库
│   └── blog.ts          # 博客文章处理
├── posts/               # MDX 博客文章
│   ├── welcome-to-my-blog.mdx
│   └── react-best-practices.mdx
├── src/
│   └── app/             # Next.js App Router 页面
│       ├── page.tsx     # 首页
│       ├── about/       # 关于页面
│       └── posts/[slug] # 动态文章页面
├── types/               # TypeScript 类型定义
│   └── blog.ts
└── mdx-components.tsx   # MDX 组件配置
```

## 🎯 功能特性

- ✅ 响应式设计，适配各种设备
- ✅ 支持 MDX 格式博客文章
- ✅ 自动生成文章列表和详情页
- ✅ 标签系统和文章分类
- ✅ SEO 友好的静态生成
- ✅ 代码语法高亮
- ✅ 自定义 MDX 组件支持
- ✅ 阅读时间估算
- ✅ 优雅的排版和样式

## 🛠 开发指南

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看结果。

### 写作新文章

1. 在 `posts/` 目录下创建新的 `.mdx` 文件
2. 添加 frontmatter 元数据：

```mdx
---
title: "文章标题"
date: "2025-01-27"
excerpt: "文章摘要"
tags: ["标签1", "标签2"]
author: "作者"
published: true
---

# 文章内容

这里是文章正文...
```

3. 保存文件，文章会自动出现在首页

### 使用自定义组件

在 MDX 文件中可以使用自定义组件：

```mdx
import { Callout } from '@/components/Callout'

<Callout type="info">
这是一个信息提示框
</Callout>
```

## 📦 构建部署

### 构建生产版本

```bash
npm run build
```

### 启动生产服务器

```bash
npm start
```

### 部署到 Vercel

1. 将代码推送到 GitHub
2. 在 [Vercel](https://vercel.com) 导入项目
3. 自动部署完成

## 🎨 自定义配置

### 修改主题颜色

编辑 `tailwind.config.js` 中的颜色配置。

### 添加新组件

1. 在 `components/` 目录创建组件
2. 在 `mdx-components.tsx` 中注册组件
3. 在 MDX 文件中导入使用

### 修改布局

编辑 `components/Layout.tsx` 文件自定义页面布局。

## 📝 写作技巧

- 使用 frontmatter 设置文章元信息
- 利用 MDX 的 JSX 能力嵌入交互组件
- 合理使用标签进行文章分类
- 编写有意义的摘要提升用户体验
- 使用 `published: false` 隐藏草稿文章

## 🤝 贡献

欢迎提交 Issues 和 Pull Requests！

## 📄 许可证

MIT License

---

**Happy Blogging!** 🎉
