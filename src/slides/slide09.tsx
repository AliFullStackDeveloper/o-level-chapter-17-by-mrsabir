import { LessonSlide } from '@/components/LessonSlide'
import type { Lesson } from '@/components/LessonSlide'

const lesson: Lesson = {
  "section": "Supporting concept",
  "title": "Headers footers and fields",
  "kind": "fields",
  "part": 1,
  "points": [
    "A header appears in the top area of a page; a footer appears in the bottom area.",
    "They can contain names, dates, times, filenames and automatic page numbers.",
    "Fields display information automatically; some fields must be updated after saving or editing.",
    "Changing page width may require adjusting centre and right tab stops in these areas.",
    "Use suitable edge distances and check long filenames or paths for unwanted wrapping."
  ],
  "practice": {
    "task": "Insert an automatic filename field in the header. Save as School_Report.docx and make sure the field shows the saved filename.",
    "steps": [
      "Save the document as School_Report.docx. Double-click the top of the page to edit the header.",
      "Choose Insert > Quick Parts > Field. Select FileName in the field list.",
      "Click OK to insert the filename field. Close the header.",
      "If you rename or save another copy, right-click the filename field and choose Update Field. Check that the displayed name matches the saved file."
    ]
  },
  "check": {
    "question": "Why use a page-number field?",
    "choices": [
      "It updates page numbers automatically",
      "It makes all pages number 1",
      "It removes the footer "
    ],
    "answer": 0,
    "explanation": "Automatic page-number fields show the current page number"
  }
}

export function Slide09() { return <LessonSlide lesson={lesson} /> }
