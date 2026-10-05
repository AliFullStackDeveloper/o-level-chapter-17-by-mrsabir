from pathlib import Path
import re, json

root = Path(__file__).resolve().parents[1]
lines = [line.strip() for line in (root / 'chapter-source.txt').read_text(encoding='utf-8-sig').splitlines() if line.strip()]
topics = []
for line in lines:
    if re.match(r'^17\.\d\.\d ', line) or line.startswith('Supporting concept '):
        match = re.match(r'^(17\.\d\.\d) (.*)', line)
        topics.append({'section': match[1] if match else 'Supporting concept', 'title': match[2] if match else line.removeprefix('Supporting concept '), 'points': [], 'examples': []})
    elif line.startswith('Related prior learning'):
        break
    elif topics and line.startswith('Practical example '):
        # The source's short examples include menu instructions. Keep the task,
        # move those instructions to the already supplied revealable steps.
        topics[-1]['examples'].append({'original': line, 'steps': []})
    elif topics and line.startswith('Step '):
        topics[-1]['examples'][-1]['steps'].append(re.sub(r'^Step \d+\. ', '', line))
    elif topics and not topics[-1]['examples']:
        topics[-1]['points'].extend(re.split(r'(?<=[.!?])(?=[A-Z])', line))

kinds = ['orientation','margins','gutter','fields','breaks','pagebreak','sections','pagination','columns','alignment','spacing','indents','tabs','enhancement','lists','replace','bookmarks','hyperlinks']
tasks = [
 ['Create a school report on A4 portrait. What page size and orientation should you choose?', 'Create an A4 timetable with enough width for several timetable columns. Choose an appropriate orientation.'],
 ['Set all four margins to 2 cm. Check that the main text stays within the margin boundaries.', 'Set top and bottom margins to 3 cm, and left and right to 2.5 cm. How does this change the usable text area?'],
 ['Reserve 1.5 cm for a left-bound booklet. Where should the extra binding space go?', 'Reserve a 2 cm gutter for a top-bound booklet. Check that the header does not enter the binding area.'],
 ['Put your name at the left of a footer and an automatic page number at the right. Add a second page and check the number.', 'Insert an automatic filename field in the header. Save as School_Report.docx and make sure the field shows the saved filename.'],
 ['Move Chapter Two onto a new page using a break. Show the formatting marks and compare the break with blank paragraphs.', 'Make a portrait cover followed by a landscape body. Which kind of break allows the layout to change?'],
 ['Make the heading Science Notes begin on a new page without inserting repeated blank paragraphs.', 'Make an equipment table begin on a new page. Then remove the break and observe how the table flows back.'],
 ['Keep a cover portrait and make the following section landscape. Apply the orientation only to that section.', 'Keep a title and closing paragraph full width, but put the two body paragraphs between them into two columns.'],
 ['Move School News to the top of the next column in a two-column newsletter.', 'A heading is stranded at the bottom of a page. Keep it with the following paragraph and check widow/orphan control.'],
 ['Make the body section two equal columns, with a 1 cm gap and a dividing line. Keep the title full width.', 'On A4 portrait with 2 cm margins, use three columns of 4 cm, 4 cm and 7 cm, with two 1 cm gaps. Check that they fit.'],
 ['Centre the title School Technology Club and left align the introductory paragraph.', 'Justify a report paragraph and right align the author name beneath it. Compare the straight edges.'],
 ['Compare single and double spacing on the same paragraph without adding blank paragraphs.', 'Give a heading 12 pt before and 6 pt after. Set the body to 1.5 line spacing and 6 pt after. Which gaps does each setting control?'],
 ['Apply a 1 cm first-line indent to a report paragraph. Only the opening line should move.', 'Indent a quotation 2 cm from the left, then apply a 1 cm hanging indent to another paragraph. Compare the layouts.'],
 ['Type Keyboard → 120.50 and Mouse → 45.75, using Tab in place of each arrow. Align the decimal points at 12 cm.', 'Place Technology centred on an 8 cm tab and Room 4 ending at a 16 cm tab. On another line, make Keyboard start at a 4 cm left tab.'],
 ['Make a title bold and dark blue, a quotation italic, an important phrase underlined and a reminder highlighted.', 'Type H2O and x2. Format only the digits so the chemical formula and the power have the correct positions.'],
 ['Create square bullets for Laptop, Keyboard and Mouse. Nest Charger below Laptop at level 2.', 'Number Open Word, Enter text and Save file. Insert Check spelling before Save file and check that numbering updates.'],
 ['In “ABC supplies equipment. ABC supports school. ABCD is a code.” replace only the whole-word uppercase ABC with XYZ.', 'Replace school club with technology club one match at a time. Inspect each match and explain when Replace All would be appropriate.'],
 ['Bookmark the Motherboard heading, move elsewhere, then return to that heading using the bookmark.', 'Bookmark the document title as Guide_Title. Delete the bookmark and check that the title text remains.'],
 ['Create an internal contents link from Motherboard to the bookmark on its explanation heading. Test the destination.', 'Link Cambridge website to the Cambridge site, change the display text to Cambridge International, then remove the link while keeping the text.'],
]
checks = [
 ['Which orientation gives a wide timetable more room?', ['Portrait', 'Landscape', 'A smaller font only'], 1, 'Landscape makes the page wider than it is tall.'],
 ['How many centimetres are 20 mm?', ['0.2 cm','2 cm','20 cm'],1,'10 mm = 1 cm, so 20 mm = 2 cm.'],
 ['What is a gutter for?', ['Binding space','Line spacing','A page number'],0,'A gutter adds space so binding does not hide the text.'],
 ['Why use a page-number field?', ['It updates page numbers automatically','It makes all pages number 1','It removes the footer'],0,'Automatic page-number fields show the current page number.'],
 ['Which break permits a change of orientation?', ['Page break','Column break','Section break'],2,'Sections can have different page layouts.'],
 ['What does Ctrl+Enter insert in Word?', ['A page break','A line of spaces','A bookmark'],0,'Ctrl+Enter starts the following content on a new page.'],
 ['Which section break can start on the same page?', ['Next Page','Continuous','Page Break'],1,'Continuous starts a new section without forcing a new page.'],
 ['What keeps a heading with its following paragraph?', ['Keep with next','Replace All','A decimal tab'],0,'Keep with next prevents a heading from being stranded.'],
 ['What is A4 usable width with 2 cm left/right margins?', ['17 cm','19 cm','21 cm'],0,'A4 is 21 cm wide: 21 − 2 − 2 = 17 cm.'],
 ['Which alignment straightens both text edges?', ['Centre','Right','Justified'],2,'Justification adjusts word spacing to align both margins, except the last line.'],
 ['What does 6 pt After control?', ['The gap after the paragraph','The paper width','The distance between every line'],0,'Paragraph spacing after controls the gap below a paragraph.'],
 ['Which indent moves lines after the first?', ['First-line','Hanging','Right alignment'],1,'A hanging indent leaves the first line further left.'],
 ['Which tab aligns decimal points?', ['Left','Centre','Decimal'],2,'Decimal tabs line up values at their decimal separator.'],
 ['Which formatting is used for the 2 in H₂O?', ['Superscript','Subscript','Bold'],1,'Subscript lowers a small character below the baseline.'],
 ['Which list best represents ordered instructions?', ['Numbered','Bulleted','Plain spaces'],0,'Numbers communicate a sequence and update as items change.'],
 ['What prevents ABC inside ABCD being replaced?', ['Find whole words only','Larger font','Centre alignment'],0,'Whole-word matching excludes text inside longer words.'],
 ['What happens when you delete a bookmark?', ['Its text is deleted','Only its marker is removed','The whole document is removed'],1,'The text remains, but links to the deleted marker may fail.'],
 ['What happens when you remove a hyperlink?', ['Display text remains','The paragraph disappears','The bookmark is always removed'],0,'Removing the link keeps the visible text.'],
]
assert len(topics) == len(kinds) == len(tasks) == len(checks) == 18
slides = root / 'src/slides'
imports = ["import { Slide01 } from './slide01'"]
registry = ["  { id: 'title', component: Slide01, label: 'Chapter 17 · Document Production' },"]
coverage = ['# Chapter 17 slide coverage', '', 'Source: Chapter17_Theoretical_Concepts (2).docx', '', '| Slides | Source concept |', '|---|---|', '| 01 | Title |']
(slides / 'slide01.tsx').write_text("import { Slide01Title } from './Slide01Title'\n\nexport function Slide01() { return <Slide01Title /> }\n", encoding='utf-8')
for i, topic in enumerate(topics):
    assert len(topic['examples']) == 2 and all(e['steps'] for e in topic['examples'])
    a = i * 2 + 2
    coverage.append(f"| {a:02d}–{a+1:02d} | {topic['section']} {topic['title']} |")
    for part in range(2):
        num = a + part
        q, choices, answer, explanation = checks[i]
        data = {'section': topic['section'], 'title': topic['title'], 'kind': kinds[i], 'part': part, 'points': topic['points'], 'practice': {'task': tasks[i][part], 'steps': topic['examples'][part]['steps']}, 'check': {'question': q, 'choices': choices, 'answer': answer, 'explanation': explanation}}
        content = "import { LessonSlide } from '@/components/LessonSlide'\nimport type { Lesson } from '@/components/LessonSlide'\n\nconst lesson: Lesson = " + json.dumps(data, ensure_ascii=False, indent=2) + f"\n\nexport function Slide{num:02d}() {{ return <LessonSlide lesson={{lesson}} /> }}\n"
        (slides / f'slide{num:02d}.tsx').write_text(content, encoding='utf-8')
        imports.append(f"import {{ Slide{num:02d} }} from './slide{num:02d}'")
        label = topic['title'] + (' · Explore' if part == 0 else ' · Practise')
        registry.append(f"  {{ id: 'slide-{num:02d}', component: Slide{num:02d}, label: {json.dumps(label)} }},")
(slides / 'index.ts').write_text('\n'.join(imports) + '\n\nexport const SLIDES = [\n' + '\n'.join(registry) + '\n]\n', encoding='utf-8')
(root / 'CHAPTER_COVERAGE.md').write_text('\n'.join(coverage) + '\n\nEvery concept has its five explanation points, two source exercises and all solution steps. Solutions are only mounted after the practice button is activated. Prior-learning topics remain revision context, not additional chapter sections.\n', encoding='utf-8')
print(f'Created {1+len(topics)*2} numbered slides covering {len(topics)} concepts and {len(topics)*2} source exercises.')
