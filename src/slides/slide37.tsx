import { LessonSlide } from '@/components/LessonSlide'
import type { Lesson } from '@/components/LessonSlide'

const lesson: Lesson = {
  "section": "17.2.8",
  "title": "Hyperlinks",
  "kind": "hyperlinks",
  "part": 1,
  "points": [
    "A hyperlink connects selected text to a destination that the reader can open.",
    "The destination can be a webpage, another file, an email address or a place in the document.",
    "An internal contents link can point to a bookmark at a particular heading.",
    "Edit a link to change its display text or destination, then test that it still works.",
    "Remove Hyperlink keeps the visible text but removes the clickable connection."
  ],
  "practice": {
    "task": "Link Cambridge website to the Cambridge site, change the display text to Cambridge International, then remove the link while keeping the text.",
    "steps": [
      "Type Cambridge website and select it. Press Ctrl+K.",
      "Choose Existing File or Web Page, enter https://www.cambridgeinternational.org/ in Address and click OK.",
      "Right-click the linked text and choose Edit Hyperlink. Change Text to display to Cambridge International, retain the address and click OK.",
      "Right-click the link and choose Remove Hyperlink.",
      "Check that Cambridge International remains visible but is no longer clickable."
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

export function Slide37() { return <LessonSlide lesson={lesson} /> }
