"""Fix: 80 words today, 100 from tomorrow"""
path = r'C:\Users\24470\WorkBuddy\2026-05-21-16-18-52\cet4-study\index.html'
with open(path, 'r', encoding='utf-8') as f:
    html = f.read()

# Change getDailyVocab to use dynamic count
old = "for (let i = 0; i < 100; i++)"
new = "var cnt = dayIndex(d) === 0 ? 80 : 100;\n  for (var i = 0; i < cnt; i++)"

if old in html:
    html = html.replace(old, new)
    print("1. Dynamic word count: day 0=80, day 1+=100")
else:
    print("1. ERROR: pattern not found")

# Also fix the total daily vocab variable reference
# Update stats to show dynamic count
old_stats = "document.getElementById('statVocab').textContent = 100;"
new_stats = "document.getElementById('statVocab').textContent = dayIndex(currentDate) === 0 ? 80 : 100;"
html = html.replace(old_stats, new_stats)
print("2. Stats dynamic")

# Fix badge to show dynamic count
old_badge = "badge.textContent = all.length+'词';"
new_badge = "badge.textContent = (dayIndex(currentDate)===0?80:100)+'词';"
html = html.replace(old_badge, new_badge)
print("3. Badge dynamic")

# Fix HTML stat badge - leave as 80 for initial load, JS will update
html = html.replace('<div class="stat-num" id="statVocab">100</div>',
                     '<div class="stat-num" id="statVocab">80</div>')
print("4. HTML initial value = 80")

with open(path, 'w', encoding='utf-8') as f:
    f.write(html)

s = html.find('<script>')
e = html.find('</script>')
js = html[s:e]
print(f"\nJS braces: {js.count('{')} vs {js.count('}')} balanced={js.count('{')==js.count('}')}")
print(f"Dynamic count: {'var cnt = dayIndex' in js}")
