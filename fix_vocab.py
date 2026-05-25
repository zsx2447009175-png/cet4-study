"""Fix the data-w attribute: remove broken escaping"""
path = r'C:\Users\24470\WorkBuddy\2026-05-21-16-18-52\cet4-study\index.html'
with open(path, 'r', encoding='utf-8') as f:
    html = f.read()

# Find the exact broken line and fix it
# Current (broken): data-w="\'' + v.w + '\'" 
# Fixed:           data-w="' + v.w + '"

old = 'data-w="\\\'\' + v.w + \'\\\'"'
new = 'data-w="\' + v.w + \'"'

# Also fix the onclick to use this.dataset.w
old2 = "speakWord(this.getAttribute(\\'data-w\\'))"
new2 = "speakWord(this.dataset.w)"

if old in html:
    html = html.replace(old, new)
    print("Fixed data-w attribute escaping")
else:
    print("data-w pattern not found, trying wider search...")
    # Let's find the line
    idx = html.find('data-w=')
    if idx > 0:
        ctx = html[idx:idx+100]
        print(f"data-w context: {ctx}")
    else:
        print("data-w not found at all!")

if old2 in html:
    html = html.replace(old2, new2)
    print("Fixed speakWord call to use dataset")
else:
    print("speakWord(this.getAttribute not found")

# Alternative: if the above didn't work, do a broader search
if 'data-w=' not in html:
    print("\nSearching for speaker span...")
    idx = html.find('speakWord(')
    while idx > 0:
        ctx = html[max(0,idx-40):idx+80]
        print(f"speakWord context: ...{ctx}...")
        idx = html.find('speakWord(', idx+1)
        if idx > 100000:  # limit
            break

# Save
with open(path, 'w', encoding='utf-8') as f:
    f.write(html)

# Verify JS balance
s = html.find('<script>')
e = html.find('</script>')
js = html[s:e]
op = js.count('{')
cl = js.count('}')
print(f"\nJS braces: {op} vs {cl} balanced={op==cl}")
