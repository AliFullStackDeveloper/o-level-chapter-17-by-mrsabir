import { LessonSlide } from '@/components/LessonSlide'
import type { Lesson } from '@/components/LessonSlide'

const lesson: Lesson = {
  "section": "17.1.4",
  "title": "Purpose of document breaks",
  "kind": "breaks",
  "part": 1,
  "points": [
    "Breaks control where text continues and where a different layout begins.",
    "A page break starts a new page; a column break starts the next available column.",
    "A section break separates areas that can have different page or column settings.",
    "Breaks help keep content organised and can help resolve awkward pagination.",
    "Use Show Hide to see breaks, instead of pressing Enter repeatedly to move text."
  ],
  "practice": {
    "task": "Make a portrait cover followed by a landscape body. Which kind of break allows the layout to change?",
    "steps": [
      "Create a cover with a title and your name. Place the cursor after the cover text.",
      "Choose Layout > Breaks > Section Breaks > Next Page.",
      "Click in the following section and choose Layout > Orientation > Landscape.",
      "Check that the cover remains portrait. Use Page Setup > Apply to > This section if needed.",
      "Explain: the section break permits a different orientation; an ordinary page break does not."
    ]
  },
  "check": {
    "question": "Which break permits a change of orientation?",
    "choices": [
      "Page break",
      "Column break",
      "Section break"
    ],
    "answer": 2,
    "explanation": "Sections can have different page layouts."
  }
}

export function Slide11() { return <LessonSlide lesson={lesson} /> }
