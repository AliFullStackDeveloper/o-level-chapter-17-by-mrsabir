import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Bookmark, Check, FileText, Link2, Pilcrow, Search } from 'lucide-react'
import type { DemoKind } from './LessonSlide'

const sample = 'Technology helps students create clear documents. A thoughtful layout makes information easier to read. Choose settings that suit your audience and check every page before saving.'

function Choice({ options, value, onChange }: { options: string[]; value: string; onChange: (s: string) => void }) {
  return <div className="demo-options">{options.map(option => <button key={option} className={value === option ? 'active' : ''} aria-pressed={value === option} onClick={() => onChange(option)}>{option}</button>)}</div>
}
function Lines({ count = 6 }: { count?: number }) { return <div className="paper-lines">{Array.from({ length: count }, (_, i) => <span key={i} style={{ width: i === count - 1 ? '63%' : '100%' }} />)}</div> }

function PageLayout({ kind }: { kind: DemoKind }) {
  const [orientation, setOrientation] = useState('Portrait')
  const [size, setSize] = useState('A4')
  const [margin, setMargin] = useState(2)
  const [gutter, setGutter] = useState('Left')
  return <>
    {kind === 'orientation' && <div className="orientation-controls"><Choice options={['Portrait','Landscape']} value={orientation} onChange={setOrientation} /><Choice options={['A4','A5']} value={size} onChange={setSize} /></div>}
    {kind === 'margins' && <label className="range-label">All margins <strong>{margin} cm</strong><input aria-label="All margins in centimetres" type="range" min="1" max="4" step="0.5" value={margin} onChange={e => setMargin(Number(e.target.value))} /></label>}
    {kind === 'gutter' && <Choice options={['Left','Top']} value={gutter} onChange={setGutter} />}
    <div className="paper-stage">
      <motion.div layout className={`paper ${orientation.toLowerCase()}-paper ${size.toLowerCase()}-paper`} style={{ width: orientation === 'Landscape' ? size === 'A5' ? 205 : 280 : size === 'A5' ? 155 : 190, height: orientation === 'Landscape' ? size === 'A5' ? 145 : 198 : size === 'A5' ? 219 : 269, padding: kind === 'margins' ? margin * 8 : 20 }}>
        {kind === 'gutter' && <motion.div layout className={`binding-zone ${gutter.toLowerCase()}`}><span>BINDING</span></motion.div>}
        <motion.div layout className="paper-body" style={{ marginLeft: kind === 'gutter' && gutter === 'Left' ? 28 : 0, marginTop: kind === 'gutter' && gutter === 'Top' ? 28 : 0 }}><h4>{kind === 'orientation' && orientation === 'Landscape' ? 'School timetable' : 'School report'}</h4><Lines /></motion.div>
        {kind === 'margins' && <span className="paper-caption">{margin} cm margin</span>}
      </motion.div>
    </div>
    <p className="demo-caption">{kind === 'orientation' ? `${size}: ${size === 'A4' ? '210 × 297' : '148 × 210'} mm. Orientation swaps the width and height.` : kind === 'margins' ? `A4 text width: 21 − ${margin} − ${margin} = ${21 - 2 * margin} cm.` : `Extra space at the ${gutter.toLowerCase()} protects text from the binding.`}</p>
  </>
}

function FieldsDemo() {
  const [page, setPage] = useState(1)
  const [name, setName] = useState('School_Report.docx')
  const [field, setField] = useState(name)
  return <><label className="demo-input-label">Saved filename<input aria-label="Saved filename" value={name} onChange={e => setName(e.target.value)} /></label>
    <div className="demo-options"><button onClick={() => setField(name)}>Update filename field</button><button onClick={() => setPage(p => p + 1)}>Add a page</button><button onClick={() => { setPage(1); setName('School_Report.docx'); setField('School_Report.docx') }}>Reset</button></div>
    <div className="paper-stage"><div className="paper field-paper"><div className="field-header">{field}</div><h4>School report</h4><Lines /><footer><span>Sabir Ali</span><motion.span key={page} initial={{ scale: 1.4 }} animate={{ scale: 1 }}>Page {page}</motion.span></footer></div></div>
    <p className="demo-caption">The page-number field changes automatically. Update the filename field after renaming.</p></>
}

function BreaksDemo({ kind }: { kind: DemoKind }) {
  const [choice, setChoice] = useState(kind === 'sections' ? 'Next Page' : 'No break')
  const [marks, setMarks] = useState(false)
  const options = kind === 'sections' ? ['Next Page','Continuous'] : kind === 'pagebreak' ? ['No break','Page break'] : ['No break','Page break','Section break','Column break']
  return <><Choice options={options} value={choice} onChange={setChoice} /><button className={`marks-toggle ${marks ? 'active' : ''}`} aria-pressed={marks} onClick={() => setMarks(!marks)}><Pilcrow size={16} /> Show / Hide marks</button>
    <div className="break-preview">
      <motion.div layout className="mini-page"><h4>{kind === 'sections' ? 'Cover' : 'Chapter One'}</h4><Lines count={3} />{choice === 'No break' && <><h4>Chapter Two</h4><Lines count={2} /></>}{choice === 'Continuous' && <div className="mini-columns"><Lines count={3} /><Lines count={3} /></div>}</motion.div>
      {choice !== 'No break' && choice !== 'Continuous' && <motion.div key={choice} initial={{ opacity: 0, x: 25 }} animate={{ opacity: 1, x: 0 }} className={`mini-page ${choice === 'Section break' || choice === 'Next Page' ? 'landscape-page' : ''} ${choice === 'Column break' ? 'column-page' : ''}`}><h4>{kind === 'sections' ? 'Landscape body' : 'Chapter Two'}</h4><Lines count={4} /></motion.div>}
    </div>
    {marks && <motion.div className="break-marker" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{choice === 'No break' ? '¶ Paragraph mark — no forced break' : `${choice === 'Next Page' || choice === 'Continuous' ? 'Section break · ' : ''}${choice}`}</motion.div>}
    <p className="demo-caption">{choice === 'Page break' ? 'New page, same layout settings.' : choice === 'Section break' || choice === 'Next Page' ? 'New section: the body can use a different orientation.' : choice === 'Continuous' ? 'New section on the same page: only the body uses columns.' : choice === 'Column break' ? 'Text moves to the next available column.' : 'Text flows naturally until the page fills.'}</p>
  </>
}

function PaginationDemo() {
  const [keep, setKeep] = useState(false)
  const [column, setColumn] = useState(false)
  return <><Choice options={['Heading & paragraph','Next column']} value={column ? 'Next column' : 'Heading & paragraph'} onChange={s => { setColumn(s === 'Next column'); setKeep(false) }} />
    <button className="demo-action" aria-pressed={keep} onClick={() => setKeep(!keep)}>{column ? keep ? 'Remove column break' : 'Insert column break' : keep ? 'Turn Keep with next off' : 'Apply Keep with next'}</button>
    <div className="break-preview"><div className="mini-page"><Lines count={6} />{!keep && <h4 className="stranded-heading">School News</h4>}</div><div className="mini-page"><AnimatePresence>{keep && <motion.h4 initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}>School News</motion.h4>}</AnimatePresence><Lines count={5} /></div></div>
    <p className="demo-caption">{column ? 'The second panel represents the next column; it may be on the same page.' : keep ? 'The heading stays with the opening of its paragraph.' : 'A stranded heading should move with the text that follows it.'}</p>
    <div className="demo-note">Widow: last line alone at the top. Orphan: first line alone at the bottom. Use Widow/Orphan control.</div></>
}

function ColumnsDemo() {
  const [mode, setMode] = useState('Two equal')
  const [line, setLine] = useState(true)
  return <><Choice options={['One','Two equal','Three unequal']} value={mode} onChange={setMode} /><label className="demo-checkbox"><input type="checkbox" checked={line} onChange={e => setLine(e.target.checked)} /> Line between columns</label>
    <div className="wide-paper"><h4>School newsletter</h4><p className="paper-subheading">Full-width title outside the column section</p><motion.div layout className="column-layout" style={{ gridTemplateColumns: mode === 'One' ? '1fr' : mode === 'Two equal' ? '1fr 1fr' : '4fr 4fr 7fr' }}>{Array.from({ length: mode === 'One' ? 1 : mode === 'Two equal' ? 2 : 3 }, (_, i) => <motion.div layout key={i} className={line && i > 0 ? 'with-column-rule' : ''}><Lines count={7} /><span>{mode === 'Three unequal' ? [4,4,7][i] : mode === 'Two equal' ? 8 : 17} cm</span></motion.div>)}</motion.div></div>
    <p className="demo-caption">{mode === 'Three unequal' ? '4 + 4 + 7 cm of columns + two 1 cm gaps = 17 cm.' : mode === 'Two equal' ? '8 + 8 cm of columns + one 1 cm gap = 17 cm.' : 'A4 width 21 cm − two 2 cm margins = 17 cm of usable space.'}</p></>
}

function TextDemo({ kind }: { kind: DemoKind }) {
  const [alignment, setAlignment] = useState('Left')
  const [spacing, setSpacing] = useState('Single')
  const [indent, setIndent] = useState('None')
  const [after, setAfter] = useState(6)
  return <>
    {kind === 'alignment' && <Choice options={['Left','Centre','Right','Justified']} value={alignment} onChange={setAlignment} />}
    {kind === 'spacing' && <><Choice options={['Single','1.5 lines','Double']} value={spacing} onChange={setSpacing} /><label className="range-label">After paragraph <strong>{after} pt</strong><input type="range" min="0" max="18" step="6" aria-label="Space after paragraph in points" value={after} onChange={e => setAfter(Number(e.target.value))} /></label></>}
    {kind === 'indents' && <Choice options={['None','First line','Whole paragraph','Hanging']} value={indent} onChange={setIndent} />}
    <div className="wide-paper text-paper"><div className="demo-ruler"><span>0</span><span>4</span><span>8</span><span>12</span><span>16 cm</span></div><h4>School Technology Club</h4><motion.p layout style={{ textAlign: alignment === 'Centre' ? 'center' : alignment === 'Justified' ? 'justify' : alignment.toLowerCase() as 'left' | 'right', lineHeight: spacing === 'Double' ? 2.6 : spacing === '1.5 lines' ? 2 : 1.45, paddingLeft: indent === 'Whole paragraph' ? 32 : indent === 'Hanging' ? 20 : 0, textIndent: indent === 'First line' ? 20 : indent === 'Hanging' ? -20 : 0, marginBottom: kind === 'spacing' ? after * 1.33 : 12 }}>{sample}</motion.p><p className="second-paragraph">Check the layout before printing.</p></div>
    <p className="demo-caption">{kind === 'alignment' ? `${alignment} alignment changes the edges of this paragraph.` : kind === 'spacing' ? 'Line spacing changes gaps inside a paragraph. After spacing changes the gap below it.' : indent === 'First line' ? 'Only the opening line moves inward.' : indent === 'Hanging' ? 'Lines after the first move inward.' : indent === 'Whole paragraph' ? 'Every line moves inward from the margin.' : 'Use the Paragraph dialog for precise indent values.'}</p></>
}

function TabsDemo() {
  const [tab, setTab] = useState('Decimal')
  const values = tab === 'Decimal' ? ['120.50','45.75','9.00'] : ['Technology','Room 4','ICT']
  return <><Choice options={['Left','Centre','Right','Decimal']} value={tab} onChange={setTab} /><div className="wide-paper tabs-paper"><div className="demo-ruler"><span>0</span><span>4</span><span>8</span><span>12</span><span>16 cm</span></div><div className="tab-guide" />{values.map((v, i) => <div key={i} className="tab-row"><span>{['Keyboard','Mouse','Cable'][i]}</span><motion.span layout className="tab-value" style={{ transform: tab === 'Centre' ? 'translateX(-50%)' : tab === 'Right' ? 'translateX(-100%)' : tab === 'Decimal' ? 'translateX(-3ch)' : 'none' }}>{tab === 'Decimal' ? <><span className="decimal-integer">{v.split('.')[0]}</span>.{v.split('.')[1]}</> : v}</motion.span></div>)}</div><p className="demo-caption">{tab === 'Decimal' ? 'The decimal separator stays on the guide, even when the integer lengths differ.' : `${tab} tabs align the ${tab === 'Left' ? 'start' : tab === 'Right' ? 'end' : 'centre'} of the text to the guide.`}</p><div className="demo-note">Use Tab between values; repeated spaces do not provide reliable alignment.</div></>
}

function EnhancementDemo() {
  const [styles, setStyles] = useState<string[]>([])
  const [position, setPosition] = useState('Normal')
  const toggle = (s: string) => setStyles(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s])
  return <><div className="demo-options">{['Bold','Italic','Underline','Highlight','Blue','UPPERCASE'].map(s => <button key={s} aria-pressed={styles.includes(s)} className={styles.includes(s) ? 'active' : ''} onClick={() => toggle(s)}>{s}</button>)}</div><div className="wide-paper enhancement-paper"><motion.p layout style={{ fontWeight: styles.includes('Bold') ? 800 : 400, fontStyle: styles.includes('Italic') ? 'italic' : 'normal', textDecoration: styles.includes('Underline') ? 'underline' : 'none', color: styles.includes('Blue') ? '#1e40af' : '#1e293b' }}><span style={{ background: styles.includes('Highlight') ? '#fef08a' : 'transparent' }}>{styles.includes('UPPERCASE') ? 'DOCUMENT PRODUCTION' : 'Document Production'}</span></motion.p><Choice options={['Normal','Subscript','Superscript']} value={position} onChange={setPosition} /><div className="formula-preview">{position === 'Subscript' ? <>H<sub>2</sub>O</> : position === 'Superscript' ? <>x<sup>2</sup></> : 'H2O  ·  x2'}</div></div><p className="demo-caption">Apply enhancements only to the selected text. Use subscript for H₂O and superscript for x².</p></>
}

function ListsDemo() {
  const [mode, setMode] = useState('Bullets')
  const [added, setAdded] = useState(false)
  return <><Choice options={['Bullets','Numbered']} value={mode} onChange={s => { setMode(s); setAdded(false) }} /><button className="demo-action" onClick={() => setAdded(!added)}>{added ? 'Remove added item' : mode === 'Bullets' ? 'Add nested Charger' : 'Insert Check spelling'}</button><div className="wide-paper list-paper"><h4>{mode === 'Bullets' ? 'Equipment' : 'Document workflow'}</h4>{mode === 'Bullets' ? <ul><li>Laptop<AnimatePresence>{added && <motion.ul initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}><li>Charger</li></motion.ul>}</AnimatePresence></li><li>Keyboard</li><li>Mouse</li></ul> : <ol>{['Open Word','Enter text',...(added ? ['Check spelling'] : []),'Save file'].map(text => <motion.li layout key={text}>{text}</motion.li>)}</ol>}</div><p className="demo-caption">{mode === 'Bullets' ? 'Square bullets group equipment; a nested item has a deeper indent.' : 'Adding an item updates subsequent numbers automatically.'}</p></>
}

function ReplaceDemo({ part }: { part: number }) {
  const original = part === 0 ? 'ABC supplies equipment. ABC supports school. ABCD is a code. abc is lowercase.' : 'The school club meets today. Join the school club after lessons.'
  const [text, setText] = useState(original)
  const [whole, setWhole] = useState(true)
  const [matchCase, setMatchCase] = useState(true)
  const [feedback, setFeedback] = useState('')
  const [find, setFind] = useState(part === 0 ? 'ABC' : 'school club')
  const [replacement, setReplacement] = useState(part === 0 ? 'XYZ' : 'technology club')
  const replace = (all: boolean) => {
    if (!find) { setFeedback('Enter text to find.'); return }
    const escaped = find.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    const pattern = whole ? `\\b${escaped}\\b` : escaped
    const regex = new RegExp(pattern, `${all ? 'g' : ''}${matchCase ? '' : 'i'}`)
    let count = 0
    setText(text.replace(regex, () => { count++; return replacement }))
    setFeedback(`${count} replacement${count === 1 ? '' : 's'} made.`)
  }
  return <><div className="replace-inputs"><label className="demo-input-label">Find<input value={find} onChange={e => setFind(e.target.value)} /></label><label className="demo-input-label">Replace with<input value={replacement} onChange={e => setReplacement(e.target.value)} /></label></div><div className="checkbox-row"><label className="demo-checkbox"><input type="checkbox" checked={whole} onChange={e => setWhole(e.target.checked)} /> Whole words</label><label className="demo-checkbox"><input type="checkbox" checked={matchCase} onChange={e => setMatchCase(e.target.checked)} /> Match case</label></div><div className="wide-paper replace-paper"><Search size={18} /><motion.p key={text} initial={{ opacity: 0.6 }} animate={{ opacity: 1 }}>{text}</motion.p></div><div className="demo-options"><button onClick={() => replace(false)}>Replace next</button><button onClick={() => replace(true)}>Replace all</button><button onClick={() => { setText(original); setFeedback('') }}>Reset text</button></div><p className="demo-caption" role="status">{feedback || 'Try different search options and observe which text changes.'}</p></>
}

function NavigationDemo({ kind }: { kind: DemoKind }) {
  const [bookmark, setBookmark] = useState(false)
  const [linked, setLinked] = useState(false)
  const [atTarget, setAtTarget] = useState(false)
  const [display, setDisplay] = useState('Motherboard')
  return <><div className="demo-options"><button onClick={() => setBookmark(!bookmark)}>{bookmark ? 'Delete bookmark' : 'Add bookmark'}</button>{kind === 'hyperlinks' && <button onClick={() => { setLinked(!linked); setAtTarget(false) }}>{linked ? 'Remove hyperlink' : 'Link to bookmark'}</button>}<button onClick={() => setAtTarget(false)}>Back to contents</button></div>
    {kind === 'hyperlinks' && <label className="demo-input-label">Link display text<input value={display} onChange={e => setDisplay(e.target.value)} /></label>}
    <div className="wide-paper navigation-paper"><div className="paper-location">{atTarget ? 'EXPLANATION' : 'CONTENTS'}</div>{!atTarget ? <><h4>Hardware guide</h4>{kind === 'hyperlinks' && linked ? <button className="mock-link" onClick={() => setAtTarget(bookmark)}>{display}<Link2 size={14} /></button> : <p>{kind === 'hyperlinks' ? display : 'Motherboard'}</p>}{kind === 'bookmarks' && <button className="demo-action" disabled={!bookmark} onClick={() => setAtTarget(true)}>Go to Motherboard bookmark</button>}{linked && !bookmark && <p className="missing-target">Add the target bookmark first. This link has no destination yet.</p>}</> : <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}><h4>Motherboard {bookmark && <Bookmark size={17} />}</h4><p>The motherboard is the main circuit board connecting computer components.</p></motion.div>}<div className="bookmark-status">{bookmark ? <><Check size={14} /> Bookmark: Motherboard</> : 'No bookmark marker'}</div></div><p className="demo-caption">{kind === 'bookmarks' ? 'Deleting the marker keeps the text. Bookmark names use underscores instead of spaces.' : 'An internal link needs an existing destination. Removing the link keeps its display text.'}</p></>
}

export function ConceptDemo({ kind, part }: { kind: DemoKind; part: number }) {
  return <div className="concept-demo">
    <p className="demo-intro">Interactive preview <span>Click a control to explore</span></p>
    {['orientation','margins','gutter'].includes(kind) ? <PageLayout kind={kind} /> : kind === 'fields' ? <FieldsDemo /> : ['breaks','pagebreak','sections'].includes(kind) ? <BreaksDemo kind={kind} /> : kind === 'pagination' ? <PaginationDemo /> : kind === 'columns' ? <ColumnsDemo /> : ['alignment','spacing','indents'].includes(kind) ? <TextDemo kind={kind} /> : kind === 'tabs' ? <TabsDemo /> : kind === 'enhancement' ? <EnhancementDemo /> : kind === 'lists' ? <ListsDemo /> : kind === 'replace' ? <ReplaceDemo part={part} /> : <NavigationDemo kind={kind} />}
    <span className="preview-disclaimer"><FileText size={12} /> Learning preview · practise the exact settings in Word</span>
  </div>
}
