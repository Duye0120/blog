# 我的个人博客

这是一个使用 Next.js 15 + TypeScript + Notion 构建的现代化个人博客。

## 🚀 技术栈

- **框架**: Next.js 15 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS + @tailwindcss/typography
- **内容管理**: Notion API
- **渲染**: react-notion-x
- **包管理**: npm
- **代码质量**: ESLint

## 📁 项目结构

```
blog/
├── src/
│   ├── components/      # React 组件
│   │   ├── Layout.tsx   # 页面布局
│   │   ├── NotionContent.tsx # Notion内容渲染
│   │   └── ...          # 其他UI组件
│   ├── lib/            # 工具库
│   │   └── notion.ts   # Notion API处理
│   ├── types/          # TypeScript 类型定义
│   │   └── blog.ts     # 博客类型
│   └── app/            # Next.js App Router 页面
│       ├── page.tsx    # 首页
│       ├── about/      # 关于页面
│       └── posts/[slug] # 动态文章页面
└── ...
```

## 🎯 功能特性

- ✅ 响应式设计，适配各种设备
- ✅ 基于 Notion 的内容管理
- ✅ 自动从 Notion 获取文章列表和内容
- ✅ 支持 Notion 的所有块类型
- ✅ SEO 友好的静态生成
- ✅ 代码语法高亮
- ✅ 丰富的内容渲染支持
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

1. 在 Notion 中创建新的页面
2. 添加文章内容，支持所有 Notion 块类型：
   - 文本、标题、引用
   - 代码块、表格
   - 图片、视频
   - 列表、待办事项
   - 等等...
3. 文章会自动同步到博客网站

### 配置 Notion 集成

1. 创建 Notion 集成应用
2. 获取 Integration Token
3. 配置环境变量
4. 设置数据库权限

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

### 自定义渲染

1. 在 `components/` 目录创建组件
2. 在 `NotionContent.tsx` 中注册自定义渲染
3. 支持自定义 Notion 块的渲染方式

### 修改布局

编辑 `components/Layout.tsx` 文件自定义页面布局。

## 📝 写作技巧

- 在 Notion 中直接编写，所见即所得
- 利用 Notion 的丰富块类型创建内容
- 使用数据库属性管理文章元信息
- 合理使用页面结构提升阅读体验
- 利用 Notion 的发布状态控制文章可见性

## 🤝 贡献

欢迎提交 Issues 和 Pull Requests！

## 📄 许可证

MIT License

---

**Happy Blogging!** 🎉
