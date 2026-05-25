import re

path = r'C:\Users\24470\WorkBuddy\2026-05-21-16-18-52\cet4-study\index.html'
with open(path, 'r', encoding='utf-8') as f:
    html = f.read()

s = html.find('<script>')
e = html.find('</script>')
js = html[s+8:e]

lines = js.split('\n')
print(f"JS lines: {len(lines)}")

# Check template literal balance
for i, line in enumerate(lines):
    stripped = line.strip()
    bt = stripped.count('`')
    if bt % 2 != 0 and bt > 0:
        print(f'ODD backticks ({bt}) line {i}: {stripped[:120]}')

# Check data-w
for i, line in enumerate(lines):
    if 'data-w=' in line:
        print(f'data-w line {i}: {line.strip()[:150]}')

# Check arrow functions
for i, line in enumerate(lines):
    if '=>' in line and line.strip():
        print(f'Arrow fn line {i}: {line.strip()[:100]}')

# WORD_POOL check
wp = js.find('const WORD_POOL')
if wp > 0:
    wp_end = js.find('];', wp)
    wp_count = js[wp:wp_end].count('{w:')
    print(f'\nWORD_POOL words: ~{wp_count}')
    # Check last few words for format issues
    last_words = js[wp_end-500:wp_end]
    print(f'Last word entries: ...{last_words[-200:]}')
else:
    print('\nWORD_POOL not found!')

# Check DOMContentLoaded
dcl = js.find('DOMContentLoaded')
if dcl > 0:
    ctx = js[dcl:dcl+300]
    print(f'\nInit code: ...{ctx}...')

# Check renderVocab call chain
for fn in ['function renderVocab', 'function getCurrentVocab', 'function getDailyVocab', 'function filterVocab']:
    idx = js.find(fn)
    if idx > 0:
        print(f'\n{fn}: found at byte {idx}')

# Most important: check the exact structure around the broken function
# Look at the renderVocab function beginning
rv = js.find('function renderVocab')
if rv > 0:
    # Check the first 500 chars
    header = js[rv:rv+800]
    print(f'\nrenderVocab header:')
    for i, ln in enumerate(header.split('\n')[:15]):
        print(f'  {i}: {ln.rstrip()[:120]}')
