interface CalloutProps {
  type: 'info' | 'warning' | 'error' | 'success'
  children: React.ReactNode
}

export function Callout({ type, children }: CalloutProps) {
  const styles = {
    info:
      'bg-blue-50/60 dark:bg-blue-900/20 border-blue-200/70 dark:border-blue-800/60 text-blue-800 dark:text-blue-300 border-l-blue-500',
    warning:
      'bg-yellow-50/60 dark:bg-yellow-900/20 border-yellow-200/70 dark:border-yellow-800/60 text-yellow-800 dark:text-yellow-300 border-l-yellow-500',
    error:
      'bg-red-50/60 dark:bg-red-900/20 border-red-200/70 dark:border-red-800/60 text-red-800 dark:text-red-300 border-l-red-500',
    success:
      'bg-green-50/60 dark:bg-green-900/20 border-green-200/70 dark:border-green-800/60 text-green-800 dark:text-green-300 border-l-green-500',
  }

  const icons = {
    info: '💡',
    warning: '⚠️',
    error: '❌',
    success: '✅',
  }

  return (
    <div className={`p-4 border border-transparent rounded-md my-4 ${styles[type]}`}>
      <div className="flex items-center gap-3">
        <span className="text-lg">{icons[type]}</span>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  )
}
