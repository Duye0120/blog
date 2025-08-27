import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/" className="group">
      <div className="flex items-center font-semibold text-xl text-gray-900 dark:text-gray-100 transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
        <span className="w-8 h-8 mr-2 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
          B
        </span>
        MyBlog
      </div>
    </Link>
  )
}
