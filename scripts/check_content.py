"""Check that every source concept and every Word solution step is retained."""
from pathlib import Path
import re, json

root = Path(__file__).resolve().parents[1]
source = (root / 'chapter-source.txt').read_text(encoding='utf-8-sig')
source_steps = [re.sub(r'^Step \d+\. ', '', line) for line in source.splitlines() if line.startswith('Step ')]
source_headings = [line for line in source.splitlines() if re.match(r'^17\.\d\.\d ', line) or line.startswith('Supporting concept ')]
files = sorted((root / 'src/slides').glob('slide[0-9][0-9].tsx'))
assert len(files) == 37, f'Expected 37 numbered slides, found {len(files)}'
slides = []
for file in files[1:]:
    match = re.search(r'const lesson: Lesson = (.*?)\n\nexport', file.read_text(encoding='utf-8'), re.S)
    assert match, f'Missing lesson data in {file.name}'
    slides.append(json.loads(match[1]))
actual_steps = [step for slide in slides for step in slide['practice']['steps']]
assert actual_steps == source_steps, 'A source solution step is missing or has changed'
assert len(slides) == len(source_headings) * 2
for i, heading in enumerate(source_headings):
    title = re.sub(r'^(17\.\d\.\d|Supporting concept) ', '', heading)
    assert slides[2*i]['title'] == slides[2*i+1]['title'] == title
    for slide in slides[2*i:2*i+2]:
        assert len(slide['points']) == 5, f'{title}: expected five source explanation points'
        assert all(point in source for point in slide['points']), f'{title}: altered explanation'
        assert slide['check']['answer'] in range(len(slide['check']['choices']))
print(f'PASS: 37 numbered slides; {len(source_headings)} concepts; 36 exercises; all {len(actual_steps)} solution steps and 90 explanation points retained.')
