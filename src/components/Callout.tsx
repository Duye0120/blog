interface CalloutProps {
  type: 'info' | 'warning' | 'error' | 'success'
  children: React.ReactNode
}

export function Callout({ type, children }: CalloutProps) {
  const styles = {
    info: 'bg-blue-50 border-blue-200 text-blue-800 border-l-blue-500',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800 border-l-yellow-500',
    error: 'bg-red-50 border-red-200 text-red-800 border-l-red-500',
    success: 'bg-green-50 border-green-200 text-green-800 border-l-green-500',
  }

  const icons = {
    info: '💡',
    warning: '⚠️',
    error: '❌',
    success: '✅',
  }

  return (
    <div className={`p-4 border-l-4 rounded-r-lg my-6 ${styles[type]}`}>
      <div className="flex items-center gap-3">
        <span className="text-lg">{icons[type]}</span>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  )
}
