import urllib.request, json, os

# 1. Raw GitHub
url1 = 'https://raw.githubusercontent.com/zsx2447009175-png/cet4-study/main/index.html'
try:
    r = urllib.request.urlopen(url1, timeout=10)
    raw = r.read().decode()
    print(f'1. Raw GitHub: {len(raw)} bytes')
    print(f'   Has V3: dayIndex={"dayIndex" in raw}, getDailyVocab={"getDailyVocab" in raw}')
    print(f'   Has V4 remnant: EXAM_TYPES={"EXAM_TYPES" in raw}')
except Exception as e:
    print(f'1. Raw GitHub ERROR: {e}')

# 2. Pages URL
url2 = 'https://zsx2447009175-png.github.io/cet4-study/'
try:
    r = urllib.request.urlopen(url2, timeout=15)
    pages = r.read().decode()
    print(f'\n2. Pages: Status={r.status}, Size={len(pages)} bytes')
    print(f'   Has title: {"树新的四级小站" in pages}')
    print(f'   Has EXAM_TYPES: {"EXAM_TYPES" in pages}')
    print(f'   Has getDailyVocab: {"getDailyVocab" in pages}')
except Exception as e:
    print(f'\n2. Pages ERROR: {e}')

# 3. Local
with open(r'index.html', 'r', encoding='utf-8') as f:
    local = f.read()
print(f'\n3. Local: {len(local)} bytes')
print(f'   V3 features: dayIndex={"dayIndex" in local}')
print(f'   V4 remnant: EXAM_TYPES={"EXAM_TYPES" in local}')
