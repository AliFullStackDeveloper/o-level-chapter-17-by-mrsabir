import { useId, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { BookOpen, Check, ChevronDown, Lightbulb, MousePointer2, RotateCcw, Sparkles } from 'lucide-react'
import { ConceptDemo } from './ConceptDemo'

export type DemoKind = 'orientation' | 'margins' | 'gutter' | 'fields' | 'breaks' | 'pagebreak' | 'sections' | 'pagination' | 'columns' | 'alignment' | 'spacing' | 'indents' | 'tabs' | 'enhancement' | 'lists' | 'replace' | 'bookmarks' | 'hyperlinks'
export interface Lesson {
  section: string
  title: string
  kind: DemoKind
  part: number
  points: string[]
  practice: { task: string; steps: string[] }
  check: { question: string; choices: string[]; answer: number; explanation: string }
}

function Practice({ task, steps, number }: Lesson['practice'] & { number: number }) {
  const [open, setOpen] = useState(false)
  const id = useId()
  return (
    <section className={`practice-panel ${open ? 'is-open' : ''}`}>
      <div className="practice-heading"><span className="eyebrow"><MousePointer2 size={14} /> YOUR TURN · EXAMPLE {number}</span><span className="practice-note">Desktop Microsoft Word</span></div>
      <p className="practice-task">{task}</p>
      <motion.button whileTap={{ scale: 0.98 }} className="practice-trigger" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls={id}>
        <Lightbulb size={17} /> {open ? 'Hide solution' : 'Practice example · Show solution'}
        <ChevronDown size={17} style={{ transform: open ? 'rotate(180deg)' : undefined }} />
      </motion.button>
      <AnimatePresence initial={false}>
        {open && <motion.div id={id} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="solution-panel">
          <p className="solution-label"><Check size={16} /> Step-by-step solution</p>
          <ol className="solution-steps">
            {steps.map((step, i) => <motion.li key={step} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.07 }}><span className="step-number">{i + 1}</span><p>{step}</p></motion.li>)}
          </ol>
          <p className="solution-footnote">Menu names may differ slightly between Word versions. Inspect the result before saving.</p>
        </motion.div>}
      </AnimatePresence>
    </section>
  )
}

function KnowledgeCheck({ check }: { check: Lesson['check'] }) {
  const [selected, setSelected] = useState<number | null>(null)
  return <div className="knowledge-check">
    <span className="eyebrow"><Sparkles size={14} /> QUICK CHECK</span>
    <h3>{check.question}</h3>
    <div className="check-choices">{check.choices.map((choice, i) => <button key={choice} onClick={() => setSelected(i)} aria-pressed={selected === i} className={`check-choice ${selected === i ? i === check.answer ? 'correct' : 'incorrect' : ''}`}><span>{String.fromCharCode(65 + i)}</span>{choice}{selected === i && i === check.answer && <Check size={16} />}</button>)}</div>
    <AnimatePresence mode="wait">{selected !== null && <motion.p key={selected} className={`check-feedback ${selected === check.answer ? 'correct-text' : ''}`} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} role="status">{selected === check.answer ? `Correct. ${check.explanation}` : 'Try again. Think about what each setting changes.'}</motion.p>}</AnimatePresence>
    {selected !== null && <button className="text-button" onClick={() => setSelected(null)}><RotateCcw size={13} /> Reset check</button>}
  </div>
}

export function LessonSlide({ lesson }: { lesson: Lesson }) {
  const reduced = useReducedMotion()
  return <div className="lesson-scroll">
    <motion.article className="lesson" data-topic={`${lesson.kind}-${lesson.part}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <header className="lesson-header">
        <div className="eyebrow"><BookOpen size={15} /> {lesson.section} <span className="eyebrow-divider">/</span> {lesson.part === 0 ? 'UNDERSTAND & EXPLORE' : 'APPLY & PRACTISE'}</div>
        <h1>{lesson.title}</h1>
        <p>{lesson.part === 0 ? 'Understand the concept. Explore the preview. Then try the practice example.' : 'Apply what you learned, check your understanding and work through a second example.'}</p>
      </header>
      <div className="lesson-grid">
        <motion.section className="lesson-card theory-card" initial={{ opacity: 0, y: reduced ? 0 : 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>
          {lesson.part === 0 ? <>
            <div className="card-heading"><BookOpen size={18} /><h2>The concept</h2><span>01 / LEARN</span></div>
            <ol className="concept-points">{lesson.points.map((point, i) => <motion.li key={point} initial={{ opacity: 0, x: reduced ? 0 : -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: reduced ? 0 : 0.12 + i * 0.06 }}><span>{String(i + 1).padStart(2, '0')}</span><p>{point}</p></motion.li>)}</ol>
          </> : <>
            <KnowledgeCheck check={lesson.check} />
            <div className="remember"><Lightbulb size={17} /><div><strong>Remember</strong><p>{lesson.points[lesson.points.length - 1]}</p></div></div>
          </>}
        </motion.section>
        <motion.section className="lesson-card demo-card" initial={{ opacity: 0, y: reduced ? 0 : 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }}>
          <div className="card-heading"><MousePointer2 size={18} /><h2>See it in action</h2><span>02 / EXPLORE</span></div>
          <ConceptDemo kind={lesson.kind} part={lesson.part} />
        </motion.section>
      </div>
      <motion.div initial={{ opacity: 0, y: reduced ? 0 : 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
        <Practice key={`${lesson.kind}-${lesson.part}`} {...lesson.practice} number={lesson.part + 1} />
      </motion.div>
    </motion.article>
  </div>
}
