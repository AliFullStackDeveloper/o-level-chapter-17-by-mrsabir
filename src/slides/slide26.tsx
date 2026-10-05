import { LessonSlide } from '@/components/LessonSlide'
import type { Lesson } from '@/components/LessonSlide'

const lesson: Lesson = {
  "section": "17.2.3",
  "title": "Tab stops",
  "kind": "tabs",
  "part": 0,
  "points": [
    "A tab stop sets a position where text lands when the Tab key is pressed.",
    "A left tab aligns the start of text; a centre tab centres text on the position.",
    "A right tab aligns the end of text; a decimal tab aligns values on the decimal separator.",
    "Tabs can organise tabular data without making a table, such as names and prices.",
    "Set the required positions and clear conflicting stops; default tabs may give untidy results."
  ],
  "practice": {
    "task": "Type Keyboard → 120.50 and Mouse → 45.75, using Tab in place of each arrow. Align the decimal points at 12 cm.",
    "steps": [
      "Type Keyboard, press Tab, type 120.50 and press Enter. Type Mouse, press Tab and type 45.75.",
      "Select both lines. Open Home > Paragraph dialog > Tabs.",
      "Click Clear All to remove custom stops. Enter 12 cm in Tab stop position, select Decimal and click Set.",
      "Click OK. Confirm that both decimal points align at the same horizontal position."
    ]
  },
  "check": {
    "question": "Which tab aligns decimal points?",
    "choices": [
      "Left",
      "Centre",
      "Decimal"
    ],
    "answer": 2,
    "explanation": "Decimal tabs line up values at their decimal separator."
  }
}

export function Slide26() { return <LessonSlide lesson={lesson} /> }
