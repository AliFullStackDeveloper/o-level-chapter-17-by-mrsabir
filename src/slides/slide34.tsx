import { LessonSlide } from '@/components/LessonSlide'
import type { Lesson } from '@/components/LessonSlide'

const lesson: Lesson = {
  "section": "17.2.7",
  "title": "Bookmarks",
  "kind": "bookmarks",
  "part": 0,
  "points": [
    "A bookmark gives a name to a selected location or passage in a document.",
    "It helps users return to that place, especially in a long document.",
    "Use short meaningful names, such as Motherboard; use underscores instead of spaces.",
    "The Bookmark dialog allows you to add, locate, navigate to and delete bookmarks.",
    "Deleting a bookmark removes its marker, not the text; links to that marker may then fail."
  ],
  "practice": {
    "task": "Bookmark the Motherboard heading, move elsewhere, then return to that heading using the bookmark.",
    "steps": [
      "Type a Motherboard heading followed by an explanation. Select the heading.",
      "Choose Insert > Bookmark. Enter Motherboard and click Add.",
      "Move the cursor elsewhere in the document. Reopen Insert > Bookmark.",
      "Select Motherboard and click Go To. Check that Word returns to the selected heading."
    ]
  },
  "check": {
    "question": "What happens when you delete a bookmark?",
    "choices": [
      "Its text is deleted",
      "Only its marker is removed",
      "The whole document is removed"
    ],
    "answer": 1,
    "explanation": "The text remains, but links to the deleted marker may fail."
  }
}

export function Slide34() { return <LessonSlide lesson={lesson} /> }
