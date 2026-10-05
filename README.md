# Chapter 17 Document Production

Interactive React presentation for Cambridge IGCSE ICT 0417, based on the supplied Chapter17_Theoretical_Concepts (2).docx.

## Run locally

```sh
npm install
npm run dev
```

Use npm run build to check TypeScript and build for production, and npm run preview to preview the production build.

## Slides and content

There are 37 slides: the title page and two slides for each of the 18 source concepts. Every slide has its own numbered file, src/slides/slide01.tsx through slide37.tsx. Each lesson file contains its own editable explanation points, practice task, solution steps and quick-check question.

- The first slide for each concept explains the theory and includes practical example 1.
- The second slide adds a knowledge check, a reminder and practical example 2.
- Solutions are hidden until the learner activates Practice example · Show solution, and can be hidden again.
- Solutions reset to hidden when navigating away and returning.
- Interactive previews demonstrate the concepts; the supplied solution steps are for practice in desktop Microsoft Word.

See CHAPTER_COVERAGE.md for the complete concept-to-slide mapping. chapter-source.txt is the extracted source text, and scripts/create_chapter.py is the original generation helper. Do not rerun the generator after editing slide content unless you intend to restore the source-based content.

## Controls

- Previous/Next buttons, Left/Right arrows and Space navigate slides.
- On a touch screen, swipe left for the next slide or right for the previous slide. Vertical scrolling and interactive controls keep their own touch behaviour.
- Space activates a focused button rather than navigating away.
- Home/End jump to the first/last slide when focus is outside text inputs and menus.
- The slide dropdown or searchable Contents dialog jumps to any lesson.
- The Day/Night toggle saves the selected theme locally.
- Fullscreen is available in browsers that support it.
- Scroll within a lesson to read expanded solutions or content on smaller screens. Navigation stays visible.
- A URL such as /#slide=32 opens directly on that slide when loaded.

## Implementation

src/slides/index.ts registers all slides. LessonSlide.tsx provides the shared animated layout, hidden solutions and quick checks. ConceptDemo.tsx provides 18 topic-specific previews. chapter.css contains responsive lesson styling alongside the existing theme in index.css.

React 18, TypeScript, Vite, Tailwind CSS, Framer Motion and Lucide icons are used. No backend is required.
