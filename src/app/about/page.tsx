import { Layout } from '@/components/Layout'

export default function AboutPage() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              关于我
            </h1>
            <p className="text-xl text-gray-600">
              欢迎了解我和这个博客的故事
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                👋 你好，我是...
              </h2>
              <p className="text-gray-700 leading-relaxed">
                一名热爱技术的前端开发者，专注于 React 生态系统和现代 Web 开发技术。
                我喜欢学习新技术、分享经验，并通过代码创造有价值的产品。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                💻 技术栈
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="font-medium text-blue-900 mb-2">前端框架</h3>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>React / Next.js</li>
                    <li>TypeScript</li>
                    <li>Vue.js</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="font-medium text-green-900 mb-2">样式工具</h3>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>Tailwind CSS</li>
                    <li>Ant Design</li>
                    <li>CSS-in-JS</li>
                  </ul>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h3 className="font-medium text-purple-900 mb-2">开发工具</h3>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>Git / GitHub</li>
                    <li>VS Code</li>
                    <li>Webpack / Vite</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                📝 关于这个博客
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                这个博客使用 Next.js 14 + TypeScript + MDX 构建，旨在分享我的：
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>技术学习笔记和最佳实践</li>
                <li>项目开发经验和踩坑记录</li>
                <li>对前端技术发展的思考</li>
                <li>有趣的编程技巧和工具推荐</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                🎯 我的目标
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed italic">
                  &quot;通过技术创造价值，用分享推动成长。希望我的文章能帮助到更多的开发者，
                  也期待与大家交流学习，共同进步。&quot;
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                📬 联系方式
              </h2>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="mailto:your-email@example.com"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Email
                </a>
                <a
                  href="https://twitter.com"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  )
}
