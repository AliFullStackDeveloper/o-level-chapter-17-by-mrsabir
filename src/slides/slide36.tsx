import { LessonSlide } from '@/components/LessonSlide'
import type { Lesson } from '@/components/LessonSlide'

const lesson: Lesson = {
  "section": "17.2.8",
  "title": "Hyperlinks",
  "kind": "hyperlinks",
  "part": 0,
  "points": [
    "A hyperlink connects selected text to a destination that the reader can open.",
    "The destination can be a webpage, another file, an email address or a place in the document.",
    "An internal contents link can point to a bookmark at a particular heading.",
    "Edit a link to change its display text or destination, then test that it still works.",
    "Remove Hyperlink keeps the visible text but removes the clickable connection."
  ],
  "practice": {
    "task": "Create an internal contents link from Motherboard to the bookmark on its explanation heading. Test the destination.",
    "steps": [
      "First create a Motherboard bookmark on the explanation heading. Add Motherboard to a contents list elsewhere.",
      "Select Motherboard in the contents list and press Ctrl+K or choose Insert > Link.",
      "Choose Place in This Document and select the Motherboard bookmark. Click OK.",
      "Use the follow-link action, usually Ctrl+click in desktop Word. Check that it jumps to the explanation."
    ]
  },
  "check": {
    "question": "What happens when you remove a hyperlink?",
    "choices": [
      "Display text remains",
      "The paragraph disappears",
      "The bookmark is always removed"
    ],
    "answer": 0,
    "explanation": "Removing the link keeps the visible text."
  }
}

export function Slide36() { return <LessonSlide lesson={lesson} /> }
