import { LessonSlide } from '@/components/LessonSlide'
import type { Lesson } from '@/components/LessonSlide'

const lesson: Lesson = {
  "section": "17.2.7",
  "title": "Bookmarks",
  "kind": "bookmarks",
  "part": 1,
  "points": [
    "A bookmark gives a name to a selected location or passage in a document.",
    "It helps users return to that place, especially in a long document.",
    "Use short meaningful names, such as Motherboard; use underscores instead of spaces.",
    "The Bookmark dialog allows you to add, locate, navigate to and delete bookmarks.",
    "Deleting a bookmark removes its marker, not the text; links to that marker may then fail."
  ],
  "practice": {
    "task": "Bookmark the document title as Guide_Title. Delete the bookmark and check that the title text remains.",
    "steps": [
      "Select the document title. Choose Insert > Bookmark and enter Guide_Title. Click Add.",
      "Reopen the Bookmark dialog. Select Guide_Title and click Delete.",
      "Close the dialog. Check that the title text is still present.",
      "Reopen Bookmark and check that Guide_Title is no longer listed."
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

export function Slide35() { return <LessonSlide lesson={lesson} /> }
