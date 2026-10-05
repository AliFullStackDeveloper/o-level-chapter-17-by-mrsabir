import { useState, useEffect, useCallback, useRef, type PointerEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Sun, Moon, List, Maximize, X, Search } from 'lucide-react'
import { BackgroundEffects } from '@/components/BackgroundEffects'
import { SlideNavigation } from '@/components/SlideNavigation'
import { SLIDES } from '@/slides'
import { useTheme } from '@/lib/ThemeContext'

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '60%' : '-60%',
    opacity: 0,
    scale: 0.94,
  }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? '-60%' : '60%',
    opacity: 0,
    scale: 0.94,
  }),
}

export function Presentation() {
  const [current, setCurrent] = useState(() => {
    const requested = Number(window.location.hash.replace('#slide=', ''))
    return Number.isInteger(requested) && requested >= 1 && requested <= SLIDES.length ? requested - 1 : 0
  })
  const [direction, setDirection] = useState(1)
  const { isDark, toggleTheme } = useTheme()
  const contentsRef = useRef<HTMLDialogElement>(null)
  const [search, setSearch] = useState('')
  const [notice, setNotice] = useState('')
  const swipeStart = useRef<{ id: number; x: number; y: number; axis: 'pending' | 'horizontal' } | null>(null)

  useEffect(() => { window.history.replaceState(null, '', `#slide=${current + 1}`) }, [current])

  const goTo = useCallback((idx: number) => {
    if (idx < 0 || idx >= SLIDES.length) return
    setDirection(idx > current ? 1 : -1)
    setCurrent(idx)
  }, [current])

  const goNext = useCallback(() => goTo(current + 1), [current, goTo])
  const goPrev = useCallback(() => goTo(current - 1), [current, goTo])

  const startSwipe = (event: PointerEvent<HTMLDivElement>) => {
    swipeStart.current = null
    if (event.pointerType !== 'touch' || !event.isPrimary || contentsRef.current?.open) return
    // Controls keep their own touch behaviour, including sliders and solution buttons.
    if ((event.target as HTMLElement).closest('button, a, input, select, textarea, [contenteditable="true"], [role="slider"]')) return
    swipeStart.current = { id: event.pointerId, x: event.clientX, y: event.clientY, axis: 'pending' }
  }

  const moveSwipe = (event: PointerEvent<HTMLDivElement>) => {
    const start = swipeStart.current
    if (!start || start.id !== event.pointerId) return
    const dx = Math.abs(event.clientX - start.x)
    const dy = Math.abs(event.clientY - start.y)
    if (start.axis === 'pending' && Math.max(dx, dy) > 12) {
      if (dy >= dx) swipeStart.current = null // A vertical gesture belongs to scrolling.
      else start.axis = 'horizontal'
    }
  }

  const endSwipe = (event: PointerEvent<HTMLDivElement>) => {
    const start = swipeStart.current
    swipeStart.current = null
    if (!start || start.id !== event.pointerId) return
    const dx = event.clientX - start.x
    const dy = event.clientY - start.y
    if (Math.abs(dx) < 64 || Math.abs(dx) < Math.abs(dy) * 1.5) return
    if (dx < 0) goNext()
    else goPrev()
  }

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement
      if (contentsRef.current?.open || target.closest('input, textarea, select, [contenteditable="true"]')) return
      if (e.key === ' ' && target.closest('button, a')) return
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); goNext() }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); goPrev() }
      else if (e.key === 'Home') { e.preventDefault(); goTo(0) }
      else if (e.key === 'End') { e.preventDefault(); goTo(SLIDES.length - 1) }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [goNext, goPrev, goTo])

  const CurrentSlide = SLIDES[current].component

  return (
    <div className="relative w-full h-full flex flex-col" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Background */}
      <BackgroundEffects />

      {/* Top bar: slide label + day/night toggle */}
      <div className="presentation-topbar relative z-10 flex items-center justify-between px-6 pt-4 pb-0 flex-shrink-0">
        <motion.div key={current} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
          <span
            className="current-slide-label text-xs font-mono font-medium px-3 py-1 rounded-full"
            style={{
              background: 'var(--label-bg)',
              border: '1px solid var(--label-border)',
              color: 'var(--label-text)',
            }}
          >
            {SLIDES[current].label}
          </span>
        </motion.div>

        <div className="presentation-tools">
        <button className="theme-toggle" onClick={() => { setSearch(''); contentsRef.current?.showModal() }}><List size={15} /><span>Contents</span></button>
        <button className="theme-toggle fullscreen-button" aria-label="Toggle fullscreen" onClick={async () => {
          try { if (document.fullscreenElement) await document.exitFullscreen(); else await document.documentElement.requestFullscreen() }
          catch { setNotice('Fullscreen is unavailable in this preview. Open the page in a browser to use it.') }
        }}><Maximize size={15} /></button>
        {/* Day / Night toggle */}
        <motion.button
          id="theme-toggle-btn"
          className="theme-toggle"
          onClick={toggleTheme}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title={isDark ? 'Switch to Day mode' : 'Switch to Night mode'}
          aria-label={isDark ? 'Switch to Day mode' : 'Switch to Night mode'}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={isDark ? 'moon' : 'sun'}
              initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.25 }}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              {isDark
                ? <Sun size={14} style={{ color: '#f59e0b' }} />
                : <Moon size={14} style={{ color: '#6366f1' }} />
              }
            </motion.div>
          </AnimatePresence>
          <span>{isDark ? 'Day' : 'Night'}</span>
        </motion.button>
        </div>
      </div>

      {notice && <button className="fullscreen-notice" onClick={() => setNotice('')} role="status">{notice} ×</button>}
      <dialog className="contents-dialog" ref={contentsRef} aria-labelledby="contents-title">
        <div className="contents-heading"><div><span className="eyebrow">CHAPTER 17 · ICT 0417</span><h2 id="contents-title">Explore the chapter</h2></div><button className="icon-button" aria-label="Close contents" onClick={() => contentsRef.current?.close()}><X size={22} /></button></div>
        <label className="contents-search"><Search size={18} /><input autoFocus placeholder="Search a topic…" aria-label="Search slide topics" value={search} onChange={e => setSearch(e.target.value)} /></label>
        <div className="contents-list">{SLIDES.map((slide, i) => slide.label.toLowerCase().includes(search.toLowerCase()) && <button key={slide.id} className={current === i ? 'selected' : ''} onClick={() => { goTo(i); contentsRef.current?.close() }}><span>{String(i + 1).padStart(2, '0')}</span><strong>{slide.label}</strong>{current === i && <span className="current-indicator">Current</span>}</button>)}</div>
        {!SLIDES.some(slide => slide.label.toLowerCase().includes(search.toLowerCase())) && <p className="empty-search">No matching topics. Try a different search.</p>}
      </dialog>

      {/* Main slide area */}
      <div className="slide-touch-area relative flex-1 overflow-hidden z-10 min-h-0"
        onPointerDown={startSwipe}
        onPointerMove={moveSwipe}
        onPointerUp={endSwipe}
        onPointerCancel={() => { swipeStart.current = null }}>
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0"
          >
            <CurrentSlide />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="relative z-20 flex-shrink-0">
        <SlideNavigation
          current={current}
          total={SLIDES.length}
          onPrev={goPrev}
          onNext={goNext}
          onGoTo={goTo}
          labels={SLIDES.map(slide => slide.label)}
        />
      </div>
    </div>
  )
}
