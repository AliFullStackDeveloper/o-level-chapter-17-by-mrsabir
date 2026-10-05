import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useTheme } from '@/lib/ThemeContext'

interface SlideNavigationProps {
  current: number
  total: number
  onPrev: () => void
  onNext: () => void
  onGoTo: (index: number) => void
  labels: string[]
}

export function SlideNavigation({ current, total, onPrev, onNext, onGoTo, labels }: SlideNavigationProps) {
  const isFirst = current === 0
  const isLast = current === total - 1
  const progress = ((current + 1) / total) * 100
  const { isDark } = useTheme()

  return (
    <nav className="slide-navigation relative z-50" aria-label="Slide navigation">
      {/* Progress bar */}
      <div className="h-0.5 w-full" style={{ background: 'var(--progress-track)' }}>
        <motion.div
          className="h-full"
          style={{
            background: 'linear-gradient(90deg, #00d4ff, #3b82f6, #8b5cf6)',
          }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
      </div>

      {/* Navigation bar */}
      <div
        className="flex items-center justify-between px-6 py-3"
        style={{
          background: 'var(--nav-bg)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderTop: '1px solid var(--nav-border)',
          transition: 'background 0.4s ease, border-color 0.4s ease',
        }}
      >
        {/* Left: Prev button */}
        <motion.button
          onClick={onPrev}
          disabled={isFirst}
          whileHover={!isFirst ? { scale: 1.05 } : {}}
          whileTap={!isFirst ? { scale: 0.95 } : {}}
          className={cn(
            'flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200',
            isFirst ? 'opacity-20 cursor-not-allowed' : 'cursor-pointer'
          )}
          style={
            isFirst
              ? { color: 'var(--text-faint)' }
              : {
                  color: isDark ? '#00d4ff' : '#0070a8',
                  border: `1px solid ${isDark ? 'rgba(0,212,255,0.3)' : 'rgba(0,100,160,0.25)'}`,
                }
          }
          aria-label="Previous slide"
        >
          <ChevronLeft size={16} />
          Previous
        </motion.button>

        {/* Center: Slide dots + counter */}
        <div className="flex items-center gap-4">
          <label className="slide-select-label"><span className="sr-only">Go to slide</span><select aria-label="Go to slide" value={current} onChange={e => onGoTo(Number(e.target.value))}>{labels.map((label, i) => <option key={i} value={i}>{String(i + 1).padStart(2, '0')} · {label}</option>)}</select></label>
          <span className="slide-counter text-xs font-mono tabular-nums" aria-live="polite">{current + 1} / {total}</span>
        </div>

        {/* Right: Next button */}
        <motion.button
          onClick={onNext}
          disabled={isLast}
          whileHover={!isLast ? { scale: 1.05 } : {}}
          whileTap={!isLast ? { scale: 0.95 } : {}}
          className={cn(
            'flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200',
            isLast ? 'opacity-20 cursor-not-allowed' : 'cursor-pointer'
          )}
          style={
            isLast
              ? { color: 'var(--text-faint)' }
              : {
                  color: isDark ? '#00d4ff' : '#0070a8',
                  border: `1px solid ${isDark ? 'rgba(0,212,255,0.3)' : 'rgba(0,100,160,0.25)'}`,
                }
          }
          aria-label="Next slide"
        >
          Next
          <ChevronRight size={16} />
        </motion.button>
      </div>
    </nav>
  )
}
