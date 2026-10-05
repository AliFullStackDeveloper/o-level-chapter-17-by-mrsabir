import { motion } from 'framer-motion'
import { FileText, Pencil, LayoutTemplate, Type, List, Search } from 'lucide-react'

// ─────────────────────────────────────────────────────────────────────────────
// Slide01Title — Chapter 17: Document Production
// ─────────────────────────────────────────────────────────────────────────────
// PURPOSE: This is the single title / intro slide for the new project.
//          When building new chapter slides, duplicate this file, rename it
//          (e.g. Slide02YourChapter.tsx), update the content, then register
//          the new component inside Presentation.tsx.
// ─────────────────────────────────────────────────────────────────────────────

export function Slide01Title() {
  return (
    <div className="document-title-slide relative flex flex-col items-center justify-center h-full w-full px-5 overflow-y-auto overflow-x-hidden">
      {/* Rotating outer ring */}
      <motion.div
        className="absolute"
        style={{
          width: 420,
          height: 420,
          borderRadius: '50%',
          border: '1px solid rgba(0, 212, 255, 0.1)',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      >
        {[0, 60, 120, 180, 240, 300].map((deg, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#00d4ff',
              top: '50%',
              left: '50%',
              transformOrigin: '4px 4px',
              transform: `rotate(${deg}deg) translateX(206px)`,
              boxShadow: '0 0 10px rgba(0,212,255,0.8)',
            }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
      </motion.div>

      {/* Inner counter-rotating ring */}
      <motion.div
        className="absolute"
        style={{
          width: 320,
          height: 320,
          borderRadius: '50%',
          border: '1px solid rgba(139, 92, 246, 0.08)',
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />

      {/* Document icon + floating word-processing tools */}
      <div className="document-title-content relative z-10 flex flex-col items-center w-full max-w-6xl">
        <motion.span
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 rounded-full px-4 py-1.5 text-xs font-mono tracking-[0.2em] uppercase"
          style={{ background: 'var(--label-bg)', border: '1px solid var(--label-border)', color: 'var(--label-text)' }}
        >
          Chapter 17
        </motion.span>
        {/* Main document */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          className="relative mb-4"
        >
          <div
            style={{
              width: 120,
              height: 120,
              background: 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(59,130,246,0.15))',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid rgba(0,212,255,0.3)',
              boxShadow: '0 0 60px rgba(0,212,255,0.3), 0 0 120px rgba(0,212,255,0.1)',
            }}
          >
            <FileText size={64} style={{ color: 'var(--label-text)' }} strokeWidth={1.5} />
          </div>

          {/* Editing badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
            className="absolute -bottom-2 -right-2 w-9 h-9 rounded-full flex items-center justify-center"
            style={{
              background: 'rgba(139,92,246,0.3)',
              border: '1px solid rgba(139,92,246,0.5)',
              boxShadow: '0 0 15px rgba(139,92,246,0.4)',
            }}
          >
            <Pencil size={16} className="text-purple-400" />
          </motion.div>
        </motion.div>

        {/* Floating document tools */}
        {[
          { Icon: LayoutTemplate, angle: -120, delay: 0.8, color: '#00a8cc', dist: 100 },
          { Icon: Type,           angle: -60,  delay: 1.0, color: '#3b82f6', dist: 105 },
          { Icon: List,           angle:  60,  delay: 1.2, color: '#8b5cf6', dist: 100 },
          { Icon: Search,         angle:  120, delay: 1.4, color: '#00a8cc', dist: 105 },
        ].map(({ Icon, angle, delay, color, dist }, i) => {
          const rad = (angle * Math.PI) / 180
          const x = Math.cos(rad) * dist
          const y = Math.sin(rad) * dist
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 1, 1], scale: [0, 1.2, 1], x: [0, x], y: [0, y] }}
              transition={{ delay, duration: 0.6 }}
              style={{
                position: 'absolute',
                top: 130,
                left: '50%',
                marginLeft: -18,
                marginTop: -18,
                width: 36,
                height: 36,
                borderRadius: '50%',
                background: `${color}18`,
                border: `1px solid ${color}40`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: `0 0 12px ${color}30`,
              }}
            >
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
              >
                <Icon size={16} style={{ color }} />
              </motion.div>
            </motion.div>
          )
        })}

        {/* Title text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-center mt-5 w-full"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="document-heading font-space font-bold tracking-tight mb-4"
            style={{
              background: 'linear-gradient(135deg, #00b4d8 0%, #00d4ff 40%, #3b82f6 70%, #8b5cf6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: 'none',
            }}
          >
            Document Production
          </motion.h1>

          {/* Subject badge */}
          <div className="w-full max-w-2xl mx-auto my-4 flex items-center justify-center">
            <span
              className="inline-block text-xs md:text-sm font-mono font-medium tracking-[0.12em] uppercase rounded-full px-5 py-2.5 shadow-sm"
              style={{
                color: 'var(--label-text)',
                border: '1px solid var(--label-border)',
                background: 'var(--label-bg)',
                boxShadow: '0 2px 10px rgba(0, 212, 255, 0.12)',
              }}
            >
              Cambridge IGCSE · ICT 0417
            </span>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="text-lg md:text-2xl font-light tracking-wide"
            style={{ color: 'var(--text-muted)' }}
          >
            Create, format and refine professional documents
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.6 }}
            className="mt-6 flex flex-wrap justify-center gap-2"
          >
            {['Page layout', 'Text formatting', 'Find & replace', 'Document navigation'].map(topic => (
              <span key={topic} className="rounded-lg px-3 py-2 text-xs md:text-sm"
                style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--text-muted)' }}>
                {topic}
              </span>
            ))}
          </motion.div>

          {/* Author line */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15, duration: 0.6 }}
            className="mt-4 flex items-center justify-center gap-2"
          >
            <div style={{ height: 1, width: 36, background: 'rgba(0,212,255,0.35)' }} />
            <span
              className="text-sm font-mono font-semibold tracking-wider"
              style={{ color: 'var(--label-text)' }}
            >
              by Sabir Ali
            </span>
            <div style={{ height: 1, width: 36, background: 'rgba(0,212,255,0.35)' }} />
          </motion.div>
        </motion.div>

        {/* Chapter introduction */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-5 text-xs font-mono tracking-wide text-center"
          style={{ color: 'var(--text-faint)' }}
        >
          Word processing · Practical skills
        </motion.div>
      </div>
    </div>
  )
}
