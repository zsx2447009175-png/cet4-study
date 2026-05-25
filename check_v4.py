"""Find the exact brace mismatch location"""
path = r'C:\Users\24470\WorkBuddy\2026-05-21-16-18-52\cet4-study\index.html'
with open(path, 'r', encoding='utf-8') as f:
    html = f.read()

s = html.find('<script>')
e = html.find('</script>')
js = html[s:e]

# Track brace balance line by line
lines = js.split('\n')
balance = 0
issue_start = -1
for i, line in enumerate(lines):
    for ch in line:
        if ch == '{': balance += 1
        elif ch == '}': balance -= 1
    if balance < 0:
        print(f"Line {i}: NEGATIVE balance ({balance}): {line.strip()[:80]}")
        break

# Now find where balance is off at the end
print(f"\nFinal balance: {balance}")
if balance != 0:
    # Find the area where imbalance starts
    bal = 0
    for i, line in enumerate(lines):
        for ch in line:
            if ch == '{': bal += 1
            elif ch == '}': bal -= 1
    print(f"Re-verified balance: {bal}")

# Find submitExam function
sidx = js.find('function submitExam')
if sidx > 0:
    # Find matching closing brace
    bal = 0
    in_func = False
    for i in range(sidx, len(js)):
        if js[i:i+8] == 'function':
            in_func = True
        if in_func:
            if js[i] == '{': bal += 1
            elif js[i] == '}': bal -= 1
            if bal == 0 and i > sidx + 20:
                end_idx = i
                sfunc = js[sidx:end_idx+1]
                opens = sfunc.count('{')
                closes = sfunc.count('}')
                print(f"\nsubmitExam: opens={opens} closes={closes}")
                
                # Show the last 500 chars
                print(f"Last 500 chars of submitExam:")
                print(sfunc[-500:])
                break

# Also find renderExamQuestions
ridx = js.find('function renderExamQuestions')
if ridx > 0:
    bal = 0
    for i in range(ridx, len(js)):
        if js[i:i+8] == 'function': bal = 0
        if js[i] == '{': bal += 1
        elif js[i] == '}': bal -= 1
        if bal < 0:
            print(f"\nrenderExamQuestions: negative balance at char {i-ridx}")
            print(js[max(0,i-100):i+50])
            break

# Check for the specific issue: "} else {" pattern
import re
matches = list(re.finditer(r'\}\s*else', js))
print(f"\n'}} else' patterns found: {len(matches)}")
for m in matches[-3:]:
    start = max(0, m.start()-30)
    end = min(len(js), m.end()+30)
    print(f"  ...{js[start:end]}...")
