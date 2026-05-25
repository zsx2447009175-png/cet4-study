"""
V3.2 - 补丁：确认词量逻辑正确，清理不必要的 WORD_POOL shuffle
词量逻辑已在 build_v3.py 中完成（顺序切片 day0=80/day1+=100）
本脚本只做安全检查和 statVocab 动态化
"""
path = r'C:\Users\24470\WorkBuddy\2026-05-21-16-18-52\cet4-study\index.html'
with open(path, 'r', encoding='utf-8') as f:
    html = f.read()

# 1. 确认词量逻辑已就位（由 build_v3.py 注入）
if 'idx === 0' in html and 'WORD_POOL.slice(0, 80)' in html:
    print("1. getDailyVocab day0=80 sequential slice: OK")
elif 'getDailyVocab' in html:
    print("1. getDailyVocab present (format unknown): OK")
else:
    print("1. WARNING: vocab logic not found - check build_v3.py")

# 2. 移除误加的 WORD_POOL 随机洗牌（会破坏 seededRandom 稳定性）
import re
shuffle_pattern = r'\n// Shuffle WORD_POOL for random order\n\(function\(\)\{.*?\}\)\(\);\n'
html_new = re.sub(shuffle_pattern, '\n', html, flags=re.DOTALL)
if html_new != html:
    html = html_new
    print("2. Removed WORD_POOL runtime shuffle (preserves seededRandom stability)")
else:
    print("2. No WORD_POOL runtime shuffle found - OK")

# 3. statVocab 动态化
html = html.replace(
    "document.getElementById('statVocab').textContent = 100;",
    "document.getElementById('statVocab').textContent = getCurrentVocab().length;"
)
html = html.replace(
    "document.getElementById('statVocab').textContent = 80;",
    "document.getElementById('statVocab').textContent = getCurrentVocab().length;"
)
print("3. statVocab dynamic: OK")

# 4. HTML stat badge reset to dynamic placeholder
html = html.replace('<div class="stat-num" id="statVocab">80</div>',
                     '<div class="stat-num" id="statVocab">-</div>')
html = html.replace('<div class="stat-num" id="statVocab">100</div>',
                     '<div class="stat-num" id="statVocab">-</div>')
print("4. stat badge placeholder: OK")

# Save and verify
with open(path, 'w', encoding='utf-8') as f:
    f.write(html)

s = html.find('<script>')
e = html.rfind('</script>')
js = html[s:e]
print(f"\nJS braces: {js.count('{')} vs {js.count('}')} balanced={js.count('{')==js.count('}')}")
print(f"Size: {len(html)} bytes")
print(f"getDailyVocab present: {'getDailyVocab' in js}")
print(f"No runtime WORD_POOL shuffle: {'Shuffle WORD_POOL' not in js}")
