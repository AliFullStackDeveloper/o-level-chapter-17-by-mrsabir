import { LessonSlide } from '@/components/LessonSlide'
import type { Lesson } from '@/components/LessonSlide'

const lesson: Lesson = {
  "section": "17.2.3",
  "title": "Tab stops",
  "kind": "tabs",
  "part": 1,
  "points": [
    "A tab stop sets a position where text lands when the Tab key is pressed.",
    "A left tab aligns the start of text; a centre tab centres text on the position.",
    "A right tab aligns the end of text; a decimal tab aligns values on the decimal separator.",
    "Tabs can organise tabular data without making a table, such as names and prices.",
    "Set the required positions and clear conflicting stops; default tabs may give untidy results."
  ],
  "practice": {
    "task": "Place Technology centred on an 8 cm tab and Room 4 ending at a 16 cm tab. On another line, make Keyboard start at a 4 cm left tab.",
    "steps": [
      "Type Club, press Tab, type Technology, press Tab and type Room 4. Select this line.",
      "Open Paragraph > Tabs. Clear custom stops. Set an 8 cm Centre tab and a 16 cm Right tab, clicking Set after each. Click OK.",
      "Confirm Technology is centred on 8 cm and Room 4 ends at 16 cm.",
      "On a separate line type Item, Tab, Keyboard. Select that line and set a 4 cm Left tab.",
      "Check that Keyboard starts at 4 cm. Use a page with enough usable width, such as A4 portrait with 2 cm margins."
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

export function Slide27() { return <LessonSlide lesson={lesson} /> }
