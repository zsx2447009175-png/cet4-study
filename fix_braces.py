"""Precise brace fix - add exactly 2 missing }"""
path = r'C:\Users\24470\WorkBuddy\2026-05-21-16-18-52\cet4-study\index.html'
with open(path, 'r', encoding='utf-8') as f:
    html = f.read()

# Step 1: Add 1 } before selOpt (closes renderExamQuestions else block)
html = html.replace('function selOpt(el)', '}\nfunction selOpt(el)', 1)
print("Added 1 } before selOpt")

# Step 2: Add 1 } before saveExamScore (closes submitExam else block)
html = html.replace('function saveExamScore', '}\nfunction saveExamScore', 1)
print("Added 1 } before saveExamScore")

# Verify
s = html.find('<script>')
e = html.find('</script>')
js = html[s:e]
op = js.count('{')
cl = js.count('}')
print(f"JS braces: open={op} close={cl} balanced={op==cl}")

with open(path, 'w', encoding='utf-8') as f:
    f.write(html)
print(f"Saved: {len(html)} bytes")
